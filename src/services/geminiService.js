import { GoogleGenAI } from '@google/genai'

// Gemini AI service for TechPath
// Users provide their own API key via the settings panel

let aiClient = null

export function initGemini(apiKey) {
  if (!apiKey) return false
  try {
    aiClient = new GoogleGenAI({ apiKey })
    return true
  } catch (e) {
    console.error('Failed to initialize Gemini:', e)
    return false
  }
}

export function isGeminiReady() {
  return aiClient !== null
}

// Evaluate code solution
export async function evaluateCode(problem, code, language) {
  if (!aiClient) return getFallbackCodeEvaluation()
  try {
    const response = await aiClient.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `You are a senior software engineering interviewer at a top tech company.

Evaluate this candidate's solution to the following coding problem:

**Problem:** ${problem.title}
${problem.description}

**Candidate's Code (${language}):**
\`\`\`${language}
${code}
\`\`\`

Provide your evaluation in the following JSON format:
{
  "score": <number 0-100>,
  "correctness": "<brief assessment>",
  "timeComplexity": "<analyzed time complexity>",
  "spaceComplexity": "<analyzed space complexity>",
  "codeQuality": "<assessment of style, naming, readability>",
  "strengths": ["<strength1>", "<strength2>"],
  "improvements": ["<improvement1>", "<improvement2>"],
  "overallFeedback": "<2-3 sentence summary>",
  "wouldPass": <boolean>
}

Be specific and constructive. Return ONLY the JSON.`,
    })
    return JSON.parse(response.text.replace(/```json\n?|\n?```/g, '').trim())
  } catch (e) {
    console.error('Gemini evaluation error:', e)
    return getFallbackCodeEvaluation()
  }
}

// Simulate behavioral interview
export async function conductBehavioralInterview(question, answer, company) {
  if (!aiClient) return getFallbackBehavioralFeedback()
  try {
    const response = await aiClient.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `You are a senior interviewer at ${company} conducting a behavioral interview.

**Question asked:** ${question}

**Candidate's response:** ${answer}

Evaluate this response using the STAR framework and provide feedback in JSON:
{
  "score": <number 0-100>,
  "starAnalysis": {
    "situation": { "present": <boolean>, "quality": "<brief assessment>" },
    "task": { "present": <boolean>, "quality": "<brief assessment>" },
    "action": { "present": <boolean>, "quality": "<brief assessment>" },
    "result": { "present": <boolean>, "quality": "<brief assessment>" }
  },
  "strengths": ["<strength1>", "<strength2>"],
  "improvements": ["<improvement1>", "<improvement2>"],
  "followUpQuestions": ["<q1>", "<q2>"],
  "overallFeedback": "<2-3 sentence summary>",
  "companySpecificNotes": "<notes specific to ${company} culture>"
}

Return ONLY the JSON.`,
    })
    return JSON.parse(response.text.replace(/```json\n?|\n?```/g, '').trim())
  } catch (e) {
    console.error('Gemini behavioral error:', e)
    return getFallbackBehavioralFeedback()
  }
}

// System design feedback
export async function evaluateSystemDesign(topic, userDesign) {
  if (!aiClient) return getFallbackDesignFeedback()
  try {
    const response = await aiClient.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `You are a principal engineer interviewing a candidate on system design.

**Topic:** ${topic.title} - ${topic.description}

**Candidate's design notes:** ${userDesign}

Evaluate the system design and provide feedback in JSON:
{
  "score": <number 0-100>,
  "componentsCovered": ["<component1>", "<component2>"],
  "missingComponents": ["<component1>", "<component2>"],
  "scalabilityScore": <number 0-100>,
  "strengths": ["<strength1>", "<strength2>"],
  "improvements": ["<improvement1>", "<improvement2>"],
  "deepDiveQuestions": ["<q1>", "<q2>"],
  "overallFeedback": "<2-3 sentence summary>"
}

Return ONLY the JSON.`,
    })
    return JSON.parse(response.text.replace(/```json\n?|\n?```/g, '').trim())
  } catch (e) {
    console.error('Gemini design error:', e)
    return getFallbackDesignFeedback()
  }
}

// Job recommendation
export async function getPersonalizedRecommendation(userProfile, jobs) {
  if (!aiClient) return null
  try {
    const response = await aiClient.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Based on this candidate profile, rank and recommend the best job matches:

**Candidate Profile:**
- Skills: ${JSON.stringify(userProfile.skills)}
- Experience: ${userProfile.experience} years
- Preferred role: ${userProfile.preferredRole}
- Preferred companies: ${userProfile.preferredCompanies?.join(', ')}

**Available Jobs:**
${jobs.map(j => `- ${j.title} at ${j.company} (${j.tags.join(', ')})`).join('\n')}

Return JSON:
{
  "rankedJobs": [{ "jobId": <id>, "matchScore": <0-100>, "reason": "<why>" }],
  "skillGaps": ["<gap1>", "<gap2>"],
  "studyPlan": ["<step1>", "<step2>", "<step3>"],
  "timelineWeeks": <estimated prep weeks>
}

Return ONLY the JSON.`,
    })
    return JSON.parse(response.text.replace(/```json\n?|\n?```/g, '').trim())
  } catch (e) {
    console.error('Gemini recommendation error:', e)
    return null
  }
}

// Fallback responses when Gemini is not configured
function getFallbackCodeEvaluation() {
  return {
    score: 0,
    correctness: 'Connect Gemini API to get AI-powered evaluation',
    timeComplexity: 'N/A',
    spaceComplexity: 'N/A',
    codeQuality: 'N/A',
    strengths: ['Code submitted successfully'],
    improvements: ['Add your Gemini API key in Settings for detailed AI feedback'],
    overallFeedback: 'To receive intelligent code evaluation, please configure your Gemini API key in the settings panel. The AI will analyze correctness, complexity, and code quality.',
    wouldPass: false,
  }
}

function getFallbackBehavioralFeedback() {
  return {
    score: 0,
    starAnalysis: {
      situation: { present: false, quality: 'Connect Gemini for analysis' },
      task: { present: false, quality: 'Connect Gemini for analysis' },
      action: { present: false, quality: 'Connect Gemini for analysis' },
      result: { present: false, quality: 'Connect Gemini for analysis' },
    },
    strengths: ['Response submitted'],
    improvements: ['Add Gemini API key for detailed STAR framework analysis'],
    followUpQuestions: [],
    overallFeedback: 'Configure your Gemini API key in settings to receive AI-powered behavioral interview feedback.',
    companySpecificNotes: '',
  }
}

function getFallbackDesignFeedback() {
  return {
    score: 0,
    componentsCovered: [],
    missingComponents: [],
    scalabilityScore: 0,
    strengths: ['Design submitted'],
    improvements: ['Add Gemini API key for detailed system design feedback'],
    deepDiveQuestions: [],
    overallFeedback: 'Configure your Gemini API key in settings to receive AI-powered system design evaluation.',
  }
}
