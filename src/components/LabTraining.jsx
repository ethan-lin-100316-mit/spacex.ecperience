import { Link } from 'react-router-dom'
import { ArrowDown, ArrowRight, BookOpen, Check, CheckCircle2, ClipboardList, ExternalLink, PencilLine } from 'lucide-react'
import { labs, references } from '../data/trainingData'
import { useTraining } from './TrainingContext'

export function LabBriefing({ id }) {
  const lab = labs[id]
  if (!lab) return null
  return <section className={`lab-briefing scene-${lab.image}`} aria-labelledby="briefing-title">
    <div className="briefing-copy">
      <p className="eyebrow">YOUR ASSIGNMENT / {lab.discipline}</p>
      <h2 id="briefing-title">{lab.title}</h2>
      <p>{lab.brief}</p>
      <div className="briefing-meta"><span>{lab.level}</span><span>≈ {lab.minutes} min</span><Link to={{ pathname: `/${id}`, hash: '#lab-notebook' }}><ArrowDown size={14} /> Assignment & notebook</Link></div>
    </div>
    <div className="briefing-tag">ILLUSTRATIVE TRAINING ENVIRONMENT</div>
  </section>
}

export default function LabTraining({ id }) {
  const lab = labs[id]
  const { progress, updateLab, storageAvailable } = useTraining()
  if (!lab) return null
  const entry = progress.labs[id] || {}
  const checked = Array.isArray(entry.tasks) ? entry.tasks : []
  const answer = entry.answer
  const correct = answer === lab.answer
  const ready = lab.tasks.every((_, index) => checked.includes(index)) && correct
  const source = references[lab.source]
  const toggleTask = index => updateLab(id, { tasks: checked.includes(index) ? checked.filter(item => item !== index) : [...checked, index], complete: false })
  return <section className="lab-notebook" id="lab-notebook" aria-labelledby="notebook-title">
    <div className="section-heading">
      <div><p className="eyebrow"><BookOpen size={15} /> THE ENGINEER’S NOTEBOOK</p><h2 id="notebook-title">Turn the simulation into an experiment.</h2></div>
      <span className={`status-pill ${entry.complete ? 'is-complete' : ''}`}>{entry.complete ? <><CheckCircle2 size={14} /> Lab completed</> : `${checked.length} / ${lab.tasks.length} tasks checked`}</span>
    </div>
    <div className="notebook-grid">
      <div className="notebook-main">
        <article className="training-card"><p className="eyebrow">01 / UNDERSTAND THE MODEL</p><h3>The idea to take with you</h3><p>{lab.concept}</p><div className="observation"><strong>What to observe</strong><p>{lab.observe}</p></div></article>
        <article className="training-card"><p className="eyebrow"><ClipboardList size={14} /> 02 / RUN THE ASSIGNMENT</p><h3>A small test campaign</h3><p className="muted-copy">Check each task after you have tried it in the workstation above.</p><div className="assignment-list">{lab.tasks.map((task, index) => <label key={task}><input type="checkbox" checked={checked.includes(index)} onChange={() => toggleTask(index)} /><span><b>0{index + 1}</b>{task}</span></label>)}</div></article>
        <article className="training-card"><p className="eyebrow">03 / CHECK YOUR REASONING</p><h3>{lab.question}</h3><div className="quiz-options" role="group" aria-label="Knowledge check answers">{lab.choices.map((choice, index) => <button key={choice} aria-pressed={answer === index} className={`${answer === index ? 'is-selected' : ''} ${answer === index && correct ? 'is-correct' : ''}`} onClick={() => updateLab(id, { answer: index, complete: false })}><span>{String.fromCharCode(65 + index)}</span>{choice}{answer === index && correct && <Check size={18} />}</button>)}</div>{Number.isInteger(answer) && <div className={`quiz-feedback ${correct ? 'correct' : ''}`} role="status"><strong>{correct ? 'Correct. Here’s why.' : 'Reconsider your assumptions.'}</strong><p>{correct ? lab.explanation : 'Review the model and the observation prompt, then try another answer. A useful test is one that changes your understanding.'}</p></div>}</article>
        {Number.isInteger(answer) && <button className="text-link retry-check" onClick={() => updateLab(id, { answer: null, complete: false })}>Retry knowledge check</button>}
      </div>
      <aside className="notebook-aside">
        <div className="training-card"><p className="eyebrow"><PencilLine size={14} /> FIELD NOTES</p><h3>Leave a clear handover.</h3><label htmlFor="engineering-notes">Your observation, evidence, and next test</label><textarea id="engineering-notes" rows={8} maxLength={4000} value={typeof entry.notes === 'string' ? entry.notes : ''} onChange={event => updateLab(id, { notes: event.target.value })} placeholder="Configuration: …&#10;Prediction: …&#10;Observed result: …&#10;Next test: …" /><p className="save-status" role="status">{storageAvailable ? 'Saved in this browser · stays on this device' : 'Browser storage unavailable · notes last for this session'}</p><button className="action-primary complete-lab" disabled={!ready || entry.complete} onClick={() => updateLab(id, { complete: true })}>{entry.complete ? <CheckCircle2 size={17} /> : <Check size={17} />}{entry.complete ? 'Lab recorded' : 'Complete this lab'}</button>{!ready && <p className="muted-copy">Try all three tasks and answer the knowledge check correctly to complete the lab.</p>}</div>
        <div className="model-note"><p className="eyebrow">MODEL BOUNDARIES</p><p>{lab.limit}</p></div>
        <a className="reference-link" href={source.url} target="_blank" rel="noreferrer"><span><small>CONTINUE READING</small><strong>{source.title}</strong></span><ExternalLink size={17} /></a>
        <Link className="next-lab" to={`/${lab.next}`}><small>NEXT WORKSTATION</small><strong>{labs[lab.next].short}<ArrowRight size={18} /></strong></Link>
      </aside>
    </div>
  </section>
}
