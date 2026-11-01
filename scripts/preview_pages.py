"""Serve dist only below /pages-check/ to catch repository-subpath asset bugs."""
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1] / 'dist'
PREFIX = '/pages-check/'


class PagesHandler(SimpleHTTPRequestHandler):
    def do_GET(self):
        if not self.path.startswith(PREFIX):
            self.send_error(404, 'Only the /pages-check/ mount is served')
            return
        self.path = '/' + self.path[len(PREFIX):]
        super().do_GET()

    def do_HEAD(self):
        if not self.path.startswith(PREFIX):
            self.send_error(404)
            return
        self.path = '/' + self.path[len(PREFIX):]
        super().do_HEAD()


if __name__ == '__main__':
    if not (ROOT / 'index.html').is_file():
        raise SystemExit('Run npm run build first.')
    server = ThreadingHTTPServer(('127.0.0.1', 4174), partial(PagesHandler, directory=str(ROOT)))
    print('GitHub Pages path check: http://127.0.0.1:4174/pages-check/', flush=True)
    server.serve_forever()
