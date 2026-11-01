import json
from pathlib import Path

from build_stages_data import companies, roles, build_stages
from build_problems_data import problems

systemDesignTopics = [
  {
    "id": 'url-shortener',
    "title": 'Design a URL Shortener',
    "difficulty": 'Medium',
    "company": ['google', 'meta', 'amazon'],
    "description": 'Design a high-scale URL shortening service like Bitly with high read-to-write ratio (100:1) and analytics.',
    "keyComponents": ['API Gateway', 'Hash Generator (Base62)', 'KV Store / Redis', 'Relational DB', 'Analytics Counter / Kafka'],
    "considerations": ['Hash collision handling', 'Read-heavy caching (80/20 rule)', 'Custom short aliases', 'URL expiration TTL', '301 vs 302 redirect analytics']
  },
  {
    "id": 'news-feed',
    "title": 'Design a Real-Time News Feed',
    "difficulty": 'Hard',
    "company": ['meta', 'google', 'twitter'],
    "description": 'Design a social media news feed like Facebook Feed or Instagram with dynamic ranking for billions of users.',
    "keyComponents": ['Feed Service', 'Fan-out Service', 'Post Storage', 'Social Graph DB', 'ML Ranking Model', 'Timeline Cache'],
    "considerations": ['Push vs Pull hybrid fan-out model', 'Celebrity hot partition handling', 'Real-time timeline ranking', 'Cross-region replication', 'Deduplication']
  },
  {
    "id": 'chat-system',
    "title": 'Design a Real-Time Messaging App',
    "difficulty": 'Hard',
    "company": ['meta', 'microsoft', 'google'],
    "description": 'Design an ultra-low latency real-time messaging system like WhatsApp or Slack supporting 1-on-1 and group chats.',
    "keyComponents": ['WebSocket Gateway', 'Message Queue (Kafka)', 'Presence Service', 'Cassandra/ScyllaDB Message Store', 'Push Notifications (APNs/FCM)'],
    "considerations": ['WebSocket connection state management', 'At-least-once vs exactly-once delivery', 'Offline message buffering', 'End-to-end encryption (Signal protocol)', 'Group chat message fan-out']
  },
  {
    "id": 'video-streaming',
    "title": 'Design Video Streaming Platform',
    "difficulty": 'Hard',
    "company": ['netflix', 'google', 'amazon'],
    "description": 'Design a distributed global video streaming platform like Netflix or YouTube supporting adaptive bitrate streaming.',
    "keyComponents": ['Edge CDN (Open Connect)', 'Video Transcoding Pipeline', 'Blob Storage (S3)', 'Metadata Service', 'Recommendation Engine', 'DRM Licensing'],
    "considerations": ['Adaptive bitrate (HLS / DASH)', 'Chunk-based upload and parallel transcoding', 'Edge caching hit ratio optimization', 'Multi-tenant bandwidth control', 'Video DRM licensing']
  },
  {
    "id": 'distributed-crawler',
    "title": 'Design Distributed Web Crawler',
    "difficulty": 'Hard',
    "company": ['google', 'microsoft', 'amazon'],
    "description": 'Design a scalable web crawler capable of parsing billions of web pages per month with deduplication and politeness.',
    "keyComponents": ['URL Frontier', 'DNS Resolver Cache', 'HTML Fetcher & Parser', 'Robots.txt Evaluator', 'Content Deduplicator (SimHash)', 'Document Store'],
    "considerations": ['Politeness policies & domain rate limiting', 'Spider traps and circular link detection', 'SimHash fuzzy deduplication', 'Distributed URL priority queuing', 'Dynamic IP rotation']
  },
  {
    "id": 'distributed-cache',
    "title": 'Design Distributed In-Memory Cache',
    "difficulty": 'Hard',
    "company": ['google', 'amazon', 'meta'],
    "description": 'Design a distributed in-memory cache system like Memcached or Redis Cluster supporting consistent hashing and replication.',
    "keyComponents": ['Client Library', 'Consistent Hashing Ring', 'Virtual Nodes', 'Eviction Engine (LRU/LFU)', 'Gossip Protocol', 'WAL Persistence'],
    "considerations": ['Consistent hashing node add/remove rebalancing', 'Cache stampede and thundering herd mitigation', 'Write-through vs write-back policies', 'Eviction algorithms under memory limits', 'Replication and failover election']
  }
]

behavioralQuestions = [
  {
    "id": 'conflict',
    "question": 'Tell me about a time you had a technical disagreement with a senior engineer or product manager. How did you resolve it?',
    "framework": 'STAR',
    "category": 'Collaboration',
    "tips": ['Focus on data and objective trade-offs rather than egos', 'Show active listening and empathy', 'Demonstrate disagree and commit principle'],
    "companies": ['google', 'meta', 'amazon', 'apple', 'microsoft', 'netflix']
  },
  {
    "id": 'failure',
    "question": 'Describe a critical production outage or major project failure you were responsible for. How did you react and what was learned?',
    "framework": 'STAR',
    "category": 'Growth Mindset',
    "tips": ['Take genuine ownership without deflecting blame', 'Describe step-by-step containment during the crisis', 'Highlight blameless post-mortem and guardrails implemented'],
    "companies": ['google', 'meta', 'amazon', 'microsoft', 'netflix']
  },
  {
    "id": 'leadership',
    "question": 'Tell me about a time you had to lead a cross-functional initiative with conflicting priorities and tight deadlines.',
    "framework": 'STAR',
    "category": 'Leadership',
    "tips": ['Explain how you aligned stakeholder incentives', 'Quantify milestones achieved and risks preempted', 'Show mentorship and delegation'],
    "companies": ['amazon', 'google', 'meta', 'apple', 'microsoft']
  },
  {
    "id": 'innovation',
    "question": 'Describe a time you proposed a novel architectural improvement that challenged the established status quo.',
    "framework": 'STAR',
    "category": 'Innovation',
    "tips": ['Explain the latent bottleneck or developer friction', 'Describe prototype testing and metric validation', 'Quantify developer velocity or cloud cost reduction'],
    "companies": ['google', 'apple', 'meta', 'netflix']
  },
  {
    "id": 'customer',
    "question": 'Tell me about a time you went above and beyond to solve a customer problem or prevent user frustration.',
    "framework": 'STAR',
    "category": 'Customer Obsession',
    "tips": ['Crucial for Amazon LP #1 (Customer Obsession)', 'Show user empathy and diving deep into telemetry logs', 'Demonstrate lasting systemic solution rather than temporary patch'],
    "companies": ['amazon', 'google', 'apple', 'microsoft']
  },
  {
    "id": 'ambiguity',
    "question": 'How do you navigate projects with ambiguous requirements and uncertain technical feasibility?',
    "framework": 'STAR',
    "category": 'Decision Making',
    "tips": ['Outline structured decomposition of ambiguous goals', 'Describe rapid proof-of-concept prototyping', 'Demonstrate comfort with fast decision-making under uncertainty'],
    "companies": ['google', 'meta', 'netflix', 'amazon']
  }
]

skillCategories = [
  { "key": 'algorithms', "label": 'Algorithms & DS' },
  { "key": 'systemDesign', "label": 'System Design' },
  { "key": 'coding', "label": 'Coding Proficiency' },
  { "key": 'behavioral', "label": 'Behavioral/Leadership' },
  { "key": 'domainKnowledge', "label": 'Domain Knowledge' },
  { "key": 'communication', "label": 'Communication' }
]

jobListings = [
  { "id": 1, "title": 'Software Engineer L4', "company": 'google', "location": 'Mountain View, CA', "salary": '$170K - $250K', "type": 'Full-time', "skills": { "algorithms": 85, "systemDesign": 70, "coding": 90, "behavioral": 65, "domainKnowledge": 60, "communication": 70 }, "tags": ['Go', 'C++', 'Distributed Systems', 'Cloud'] },
  { "id": 2, "title": 'Frontend Engineer E5', "company": 'meta', "location": 'Menlo Park, CA', "salary": '$190K - $280K', "type": 'Full-time', "skills": { "algorithms": 75, "systemDesign": 65, "coding": 90, "behavioral": 70, "domainKnowledge": 85, "communication": 75 }, "tags": ['React', 'TypeScript', 'GraphQL', 'Web Performance'] },
  { "id": 3, "title": 'SDE II (AWS Core)', "company": 'amazon', "location": 'Seattle, WA', "salary": '$150K - $220K', "type": 'Full-time', "skills": { "algorithms": 80, "systemDesign": 75, "coding": 85, "behavioral": 80, "domainKnowledge": 70, "communication": 75 }, "tags": ['Java', 'AWS Lambda', 'DynamoDB', 'Microservices'] },
  { "id": 4, "title": 'AI/ML Research Engineer', "company": 'google', "location": 'San Francisco, CA', "salary": '$210K - $330K', "type": 'Full-time', "skills": { "algorithms": 90, "systemDesign": 75, "coding": 85, "behavioral": 60, "domainKnowledge": 95, "communication": 70 }, "tags": ['PyTorch', 'JAX', 'Gemini', 'Transformers'] },
  { "id": 5, "title": 'Senior Site Reliability Engineer', "company": 'google', "location": 'Sunnyvale, CA', "salary": '$185K - $275K', "type": 'Full-time', "skills": { "algorithms": 75, "systemDesign": 85, "coding": 80, "behavioral": 70, "domainKnowledge": 90, "communication": 75 }, "tags": ['Linux', 'Kubernetes', 'Borg', 'Go'] },
  { "id": 6, "title": 'Principal System Architect', "company": 'microsoft', "location": 'Redmond, WA', "salary": '$230K - $360K', "type": 'Full-time', "skills": { "algorithms": 80, "systemDesign": 95, "coding": 80, "behavioral": 85, "domainKnowledge": 90, "communication": 90 }, "tags": ['Azure', 'Distributed Systems', 'High Availability'] },
  { "id": 7, "title": 'Senior SWE (Streaming Core)', "company": 'netflix', "location": 'Los Gatos, CA', "salary": '$300K - $480K', "type": 'Full-time', "skills": { "algorithms": 80, "systemDesign": 90, "coding": 90, "behavioral": 85, "domainKnowledge": 85, "communication": 85 }, "tags": ['Java', 'Spring Cloud', 'Chaos Engineering', 'Microservices'] },
  { "id": 8, "title": 'iOS Software Engineer', "company": 'apple', "location": 'Cupertino, CA', "salary": '$175K - $265K', "type": 'Full-time', "skills": { "algorithms": 75, "systemDesign": 70, "coding": 90, "behavioral": 65, "domainKnowledge": 90, "communication": 70 }, "tags": ['Swift', 'SwiftUI', 'CoreData', 'Metal'] },
  { "id": 9, "title": 'Android System Engineer', "company": 'google', "location": 'Mountain View, CA', "salary": '$180K - $260K', "type": 'Full-time', "skills": { "algorithms": 80, "systemDesign": 75, "coding": 90, "behavioral": 65, "domainKnowledge": 90, "communication": 70 }, "tags": ['Kotlin', 'Android NDK', 'Jetpack Compose', 'IPC'] },
  { "id": 10, "title": 'Product Manager L5', "company": 'google', "location": 'New York, NY', "salary": '$180K - $260K', "type": 'Full-time', "skills": { "algorithms": 50, "systemDesign": 60, "coding": 55, "behavioral": 85, "domainKnowledge": 85, "communication": 95 }, "tags": ['Product Strategy', 'Analytics', 'CIRCLES', 'Ads'] },
  { "id": 11, "title": 'Technical Program Manager (TPM)', "company": 'meta', "location": 'Menlo Park, CA', "salary": '$170K - $250K', "type": 'Full-time', "skills": { "algorithms": 55, "systemDesign": 75, "coding": 60, "behavioral": 90, "domainKnowledge": 80, "communication": 95 }, "tags": ['Datacenter Infra', 'Agile Delivery', 'Risk Management'] },
  { "id": 12, "title": 'Data Scientist (Experimentation)', "company": 'meta', "location": 'Remote, US', "salary": '$165K - $245K', "type": 'Full-time', "skills": { "algorithms": 70, "systemDesign": 55, "coding": 75, "behavioral": 75, "domainKnowledge": 90, "communication": 85 }, "tags": ['SQL', 'Python', 'Causal Inference', 'A/B Testing'] },
  { "id": 13, "title": 'Cloud & DevOps Engineer', "company": 'amazon', "location": 'Austin, TX', "salary": '$155K - $230K', "type": 'Full-time', "skills": { "algorithms": 70, "systemDesign": 80, "coding": 80, "behavioral": 75, "domainKnowledge": 85, "communication": 70 }, "tags": ['Terraform', 'Kubernetes', 'CI/CD', 'AWS CloudFormation'] },
  { "id": 14, "title": 'Security Engineer (Product Security)', "company": 'apple', "location": 'Cupertino, CA', "salary": '$190K - $285K', "type": 'Full-time', "skills": { "algorithms": 80, "systemDesign": 80, "coding": 85, "behavioral": 70, "domainKnowledge": 95, "communication": 75 }, "tags": ['AppSec', 'Threat Modeling', 'Crypto', 'Secure Enclave'] },
  { "id": 15, "title": 'SDET & Automation Lead', "company": 'microsoft', "location": 'Redmond, WA', "salary": '$150K - $225K', "type": 'Full-time', "skills": { "algorithms": 75, "systemDesign": 70, "coding": 85, "behavioral": 75, "domainKnowledge": 85, "communication": 75 }, "tags": ['Playwright', 'C#', 'Test Frameworks', 'Azure DevOps'] },
  { "id": 16, "title": 'Applied Scientist (NLP / LLM)', "company": 'amazon', "location": 'Seattle, WA', "salary": '$185K - $290K', "type": 'Full-time', "skills": { "algorithms": 90, "systemDesign": 70, "coding": 85, "behavioral": 75, "domainKnowledge": 95, "communication": 75 }, "tags": ['SageMaker', 'Bedrock', 'NLP', 'Vector Databases'] },
  { "id": 17, "title": 'Staff Infrastructure Security Engineer', "company": 'meta', "location": 'Sunnyvale, CA', "salary": '$215K - $340K', "type": 'Full-time', "skills": { "algorithms": 80, "systemDesign": 90, "coding": 85, "behavioral": 80, "domainKnowledge": 95, "communication": 80 }, "tags": ['Zero Trust', 'K8s Hardening', 'IAM', 'Incident Response'] },
  { "id": 18, "title": 'Senior Frontend Architect', "company": 'netflix', "location": 'Los Gatos, CA', "salary": '$290K - $450K', "type": 'Full-time', "skills": { "algorithms": 75, "systemDesign": 85, "coding": 95, "behavioral": 85, "domainKnowledge": 90, "communication": 85 }, "tags": ['React', 'TV UI Performance', 'TypeScript', 'Web Workers'] }
]

stages = build_stages()

output_path = Path(__file__).resolve().parents[1] / 'src' / 'data' / 'workflowData.js'

with open(output_path, 'w', encoding='utf-8') as f:
    f.write('// Comprehensive tech career workflow and assessment data\n\n')
    f.write('export const companies = ' + json.dumps(companies, indent=2) + ';\n\n')
    f.write('export const roles = ' + json.dumps(roles, indent=2) + ';\n\n')
    f.write('export const workflowStages = ' + json.dumps(stages, indent=2) + ';\n\n')
    f.write('export const codingProblems = ' + json.dumps(problems, indent=2) + ';\n\n')
    f.write('export const systemDesignTopics = ' + json.dumps(systemDesignTopics, indent=2) + ';\n\n')
    f.write('export const behavioralQuestions = ' + json.dumps(behavioralQuestions, indent=2) + ';\n\n')
    f.write('export const skillCategories = ' + json.dumps(skillCategories, indent=2) + ';\n\n')
    f.write('export const jobListings = ' + json.dumps(jobListings, indent=2) + ';\n')

print(f"Successfully wrote {output_path} with {len(roles)*len(companies)} workflows and {len(problems)} coding problems!")
