"""Build and create clean source + static-site archives without third-party modules."""
from pathlib import Path
import hashlib
import json
import subprocess
import zipfile

ROOT = Path(__file__).resolve().parents[1]
RELEASE = ROOT / 'release'
SOURCE_DIRS = ('.github', 'src', 'public', 'scripts', 'scratch')
SOURCE_FILES = ('package.json', 'package-lock.json', 'vite.config.js', 'index.html',
                '.gitignore', '.oxlintrc.json', 'README.md', 'DEPLOY_GITHUB_PAGES.md')


def allowed(path):
    return (path.is_file() and not path.is_symlink()
            and '__pycache__' not in path.parts
            and not path.name.startswith('.env')
            and not path.name.endswith(('.pyc', '.local', '.log')))


def write_archive(target, paths, base):
    with zipfile.ZipFile(target, 'w', zipfile.ZIP_DEFLATED, compresslevel=9) as archive:
        for path in sorted(paths):
            if allowed(path):
                archive.write(path, path.relative_to(base).as_posix())
    with zipfile.ZipFile(target) as archive:
        assert archive.testzip() is None, f'Archive integrity check failed: {target}'
        return len(archive.namelist())


def main():
    subprocess.run(['node', '--test', 'src/services/missionSequence.test.js', 'src/services/attitudeControl.test.js', 'src/data/flightAcademy.test.js'], cwd=ROOT, check=True)
    subprocess.run(['node', 'node_modules/vite/bin/vite.js', 'build'], cwd=ROOT, check=True)
    RELEASE.mkdir(exist_ok=True)
    paths = [ROOT / name for name in SOURCE_FILES]
    for directory in SOURCE_DIRS:
        paths.extend((ROOT / directory).rglob('*'))
    artifacts = []
    for name, files, base in [
        ('spacex-flight-deck-source.zip', paths, ROOT),
        ('spacex-flight-deck-site.zip', (ROOT / 'dist').rglob('*'), ROOT / 'dist'),
    ]:
        target = RELEASE / name
        count = write_archive(target, files, base)
        artifacts.append({'file': name, 'files': count, 'bytes': target.stat().st_size,
                          'sha256': hashlib.sha256(target.read_bytes()).hexdigest()})
        print(f'{name}: {count} files, {target.stat().st_size:,} bytes')
    (RELEASE / 'manifest.json').write_text(json.dumps(artifacts, indent=2) + '\n', encoding='utf-8')


if __name__ == '__main__':
    main()
