import json

# Data definition for companies and 12 roles
companies = [
  { "id": 'google', "name": 'Google', "color": '#4285f4', "logo": '🔍' },
  { "id": 'meta', "name": 'Meta', "color": '#0668E1', "logo": '🌐' },
  { "id": 'amazon', "name": 'Amazon', "color": '#ff9900', "logo": '📦' },
  { "id": 'apple', "name": 'Apple', "color": '#a3aaae', "logo": '🍎' },
  { "id": 'microsoft', "name": 'Microsoft', "color": '#00a4ef', "logo": 'Ⓜ️' },
  { "id": 'netflix', "name": 'Netflix', "color": '#e50914', "logo": '🎬' },
]

roles = [
  { "id": 'swe', "name": 'Software Engineer', "icon": '💻', "shortName": 'SWE' },
  { "id": 'pm', "name": 'Product Manager', "icon": '📊', "shortName": 'PM' },
  { "id": 'aiml', "name": 'AI/ML Engineer', "icon": '🤖', "shortName": 'AI/ML' },
  { "id": 'sre', "name": 'Site Reliability Engineer', "icon": '🔧', "shortName": 'SRE' },
  { "id": 'design', "name": 'System Design Architect', "icon": '🏗️', "shortName": 'Architect' },
  { "id": 'data', "name": 'Data Scientist', "icon": '📈', "shortName": 'Data' },
  { "id": 'frontend', "name": 'Frontend & UI Engineer', "icon": '🎨', "shortName": 'Frontend' },
  { "id": 'mobile', "name": 'Mobile Engineer (iOS/Android)', "icon": '📱', "shortName": 'Mobile' },
  { "id": 'security', "name": 'Security & AppSec Engineer', "icon": '🛡️', "shortName": 'Security' },
  { "id": 'devops', "name": 'Cloud & DevOps Engineer', "icon": '☁️', "shortName": 'DevOps' },
  { "id": 'sdet', "name": 'SDET & Automation Engineer', "icon": '🧪', "shortName": 'SDET' },
  { "id": 'tpm', "name": 'Technical Program Manager', "icon": '📋', "shortName": 'TPM' },
]

# We will define real, specific stages for each role in each company.
def build_stages():
    stages = {}
    for comp in companies:
        cid = comp['id']
        cname = comp['name']
        stages[cid] = {}
        
        # 1. SWE
        if cid == 'google':
            stages[cid]['swe'] = [
                {"id": 1, "title": "Online Application & Referral", "description": "Submit resume via Google Careers or employee referral. Highlight scalable systems and algorithmic achievements.", "duration": "1-2 weeks", "tips": ["Use Google's XYZ formula", "Reference open source work", "Ensure clean GitHub profile"]},
                {"id": 2, "title": "Recruiter Screen", "description": "30-min call covering background, timeline, level (L3-L6), and technical tracks.", "duration": "30 min", "tips": ["Clear elevator pitch", "Know your timeline", "Ask about specific orgs (Cloud, Search, YouTube)"]},
                {"id": 3, "title": "Online Assessment (OA)", "description": "90-minute timed coding assessment on Google's internal platform with 2 algorithmic challenges.", "duration": "90 min", "tips": ["Prioritize optimal time complexity", "Handle edge cases", "Write clean variable names"]},
                {"id": 4, "title": "Technical Phone Screen", "description": "45-minute live coding in Google Docs or CoderPad with a Google senior software engineer.", "duration": "45 min", "tips": ["Think out loud continuously", "Clarify assumptions first", "State brute force before optimizing"]},
                {"id": 5, "title": "Virtual Onsite Loop", "description": "4-5 rounds: 2 Data Structures & Algorithms, 1 System Design (L5+), 1 Googleyness & Leadership.", "duration": "5 hours", "tips": ["Googleyness values collaboration and intellectual humility", "Use RESHADED for system design", "Write production-ready code"]},
                {"id": 6, "title": "Hiring Committee (HC) Review", "description": "Independent committee of engineers evaluates consolidated interview packet.", "duration": "2-3 weeks", "tips": ["Strong hire signals in coding can offset borderline design", "HC ensures company-wide calibration", "Prepare for possible follow-up round"]},
                {"id": 7, "title": "Team Matching & Fit Calls", "description": "Host manager calls to find project and team alignment across Google product areas.", "duration": "1-4 weeks", "tips": ["Ask about on-call burden", "Inquire about team tech stack and roadmaps", "Meet multiple teams if possible"]},
                {"id": 8, "title": "Offer & Executive Compensation", "description": "Formal written offer covering base, annual target bonus, and 4-year front-loaded GSUs.", "duration": "1-2 weeks", "tips": ["Use levels.fyi data", "Leverage competing offers", "Negotiate sign-on bonus"]}
            ]
        elif cid == 'meta':
            stages[cid]['swe'] = [
                {"id": 1, "title": "Application & Sourcing", "description": "Apply directly or via referral. Meta prioritizes rapid hiring cycles and product engineering impact.", "duration": "1-2 weeks", "tips": ["Highlight high-throughput apps", "Emphasize hacker mentality and move fast", "Include live links"]},
                {"id": 2, "title": "Recruiter Diagnostic Call", "description": "30-min sync discussing level (E3-E6), team preferences, and Meta interview structure.", "duration": "30 min", "tips": ["Prepare 2-min self intro", "Confirm optimal programming language", "Understand Meta's 45-min round pace"]},
                {"id": 3, "title": "Technical Phone Screen", "description": "45-min live coding with 2 medium/hard algorithmic problems on CoderPad.", "duration": "45 min", "tips": ["Must solve 2 problems in 40 mins", "Focus on graphs, trees, and dynamic programming", "Fast and bug-free syntax"]},
                {"id": 4, "title": "The Virtual Loop (Onsite)", "description": "4 rounds: 2 Coding rounds, 1 System Design (or Product Architecture for E4/E5), 1 Behavioral.", "duration": "4 hours", "tips": ["Design for 3 billion daily active users", "Emphasize Meta core values: Move Fast, Be Bold", "Strong signal required on both code rounds"]},
                {"id": 5, "title": "Debrief & Offer Generation", "description": "Interviewers calibrate in debrief. Meta offers general pool hiring with Bootcamp assignment.", "duration": "1 week", "tips": ["You pick your team during Bootcamp after joining", "Sign-on bonuses are generous", "Negotiate with other Big Tech offers"]}
            ]
        elif cid == 'amazon':
            stages[cid]['swe'] = [
                {"id": 1, "title": "Application & Portal Submission", "description": "Apply for SDE I, SDE II, or Senior SDE via Amazon Jobs.", "duration": "1 week", "tips": ["Emphasize scalable backend work", "Align resume bullets with Leadership Principles", "Mention AWS services"]},
                {"id": 2, "title": "Online Assessment (OA 1 & 2)", "description": "2-part OA: Part 1 is 2 coding challenges (90m), Part 2 is Amazon Work Style Simulation (2 hours).", "duration": "3 hours", "tips": ["Work Style tests Amazon 16 LPs strictly", "Check constraints for O(N log N) vs O(N)", "Take simulation in a quiet room"]},
                {"id": 3, "title": "Technical Phone Screen", "description": "60-min round: 20 min LP deep dive (STAR method) + 40 min live algorithmic coding.", "duration": "60 min", "tips": ["Have 2 STAR stories per LP ready", "Customer Obsession and Bias for Action are key", "Don't jump into code without clarifying"]},
                {"id": 4, "title": "The Onsite Loop & Bar Raiser", "description": "4-5 rounds: 2 Coding, 1 System Design (OOD for SDE I, Distributed for SDE II+), 1 Bar Raiser.", "duration": "5 hours", "tips": ["Bar Raiser is from an outside org and holds veto power", "Every interviewer evaluates 2 specific LPs", "Explain architectural trade-offs proactively"]},
                {"id": 5, "title": "Debrief & 2+2 Vesting Offer", "description": "Debrief within 5 business days. Offer features 5/15/40/40 RSUs with high year 1-2 sign-on cash.", "duration": "5-7 days", "tips": ["Amazon year 1 and 2 cash bonuses bridge low early vesting", "Total compensation is competitive at SDE II", "Negotiate year 1 sign-on"]}
            ]
        elif cid == 'apple':
            stages[cid]['swe'] = [
                {"id": 1, "title": "Team-Specific Application", "description": "Apple hires for direct teams (iOS, CoreOS, iCloud, Siri, Maps) rather than general pools.", "duration": "1-3 weeks", "tips": ["Tailor directly to team's tech stack", "Showcase craft and attention to detail", "Demonstrate hardware/software awareness"]},
                {"id": 2, "title": "Recruiter & Hiring Manager Screen", "description": "45-min conversation assessing domain mastery and passion for Apple ecosystem.", "duration": "45 min", "tips": ["Know the specific Apple product deeply", "Highlight deep engineering craft", "Show pride in software polish"]},
                {"id": 3, "title": "Technical Phone Screens (1-2 Rounds)", "description": "Live coding focused on practical data structures, memory management, and concurrency.", "duration": "2x 60 min", "tips": ["Questions emphasize real-world systems", "Discuss memory leaks and cache locality", "Show mastery of C++, Swift, Go, or Java"]},
                {"id": 4, "title": "Virtual Onsite Loop (5-6 Rounds)", "description": "Deep technical loop: 2 coding rounds, 1 systems design, 1 domain deep-dive, 1 manager interview.", "duration": "6 hours", "tips": ["Hiring manager holds decisive weight", "Respect confidentiality/secrecy culture", "Focus on privacy-by-design"]},
                {"id": 5, "title": "VP Review & Offer", "description": "Offers require executive sign-off. Highly competitive base and 4-year equal vesting RSUs.", "duration": "2-3 weeks", "tips": ["Apple benefits and hardware discounts", "Ask about team product roadmap", "Negotiate base and RSU mix"]}
            ]
        elif cid == 'microsoft':
            stages[cid]['swe'] = [
                {"id": 1, "title": "Application & LinkedIn Screening", "description": "Apply on Microsoft Careers. Microsoft recruiters actively scout through LinkedIn and GitHub.", "duration": "1-2 weeks", "tips": ["Highlight cloud or enterprise software", "Clean GitHub contributions", "Emphasize Growth Mindset"]},
                {"id": 2, "title": "Initial Recruiter Screen", "description": "30-min chat reviewing technical preferences (Azure, Office 365, Windows, Developer Tools).", "duration": "30 min", "tips": ["Demonstrate collaborative spirit", "Discuss interest in Microsoft cloud platforms", "Clarify target level (59-65)"]},
                {"id": 3, "title": "Codility Assessment or Phone Screen", "description": "60-min coding round focused on clean code, edge testing, and practical algorithmics.", "duration": "60 min", "tips": ["Write modular and readable code", "Test edge cases before running", "Discuss Big-O proactively"]},
                {"id": 4, "title": "Virtual Onsite Loop & 'As Appropriate'", "description": "4 rounds: 2-3 technical coding, 1 system design, 1 crucial 'As Appropriate' (AA) hiring manager round.", "duration": "4-5 hours", "tips": ["AA round makes the final hiring call", "Emphasize Growth Mindset and learning from failures", "Design for enterprise scale & reliability"]},
                {"id": 5, "title": "Offer Letter & Benefits Package", "description": "Competitive offer with industry-leading 401(k) match, annual stock grants, and work-life balance.", "duration": "1-2 weeks", "tips": ["Stock vests quarterly after 1 year", "Great work-life balance reputation", "Negotiate base and stock grants"]}
            ]
        else: # netflix
            stages[cid]['swe'] = [
                {"id": 1, "title": "Senior-Only Application", "description": "Netflix hires primarily Senior (L5+) engineers with battle-tested distributed systems experience.", "duration": "1-2 weeks", "tips": ["Read the Netflix Culture Memo", "Demonstrate high autonomy and ownership", "Highlight cloud-native microservices"]},
                {"id": 2, "title": "Recruiter In-Depth Culture Screen", "description": "45-min screen testing cultural fit: 'Freedom and Responsibility' and 'Context, Not Control'.", "duration": "45 min", "tips": ["Expect probing questions on giving candid feedback", "Show self-direction", "Align with high-performance culture"]},
                {"id": 3, "title": "Technical Screen with Senior Engineer", "description": "60-min practical coding or architecture challenge based on real streaming/infra issues.", "duration": "60 min", "tips": ["No esoteric trivia; practical architectures", "Discuss concurrency and failover", "Show production debugging instincts"]},
                {"id": 4, "title": "The Onsite Panel (Part 1 & 2)", "description": "Split over 2 sessions: Part 1 technical deep-dive (coding + systems); Part 2 Director & HR culture screen.", "duration": "5 hours", "tips": ["Culture fit is as weighted as technical chops", "Directors probe for strategic thinking", "Demonstrate how you handle ambiguity"]},
                {"id": 5, "title": "Top-of-Market All-Cash Offer", "description": "Netflix pays top of personal market: choose your own exact split between all-cash salary and stock options.", "duration": "3-5 days", "tips": ["Highest base salaries in tech", "Options vest monthly with immediate liquidity", "No tiered vesting cliffs"]}
            ]

        # 2. PM
        stages[cid]['pm'] = [
            {"id": 1, "title": "PM Portfolio & Application", "description": f"Submit PM resume emphasizing shipped products, user metrics, and business ROI at {cname}.", "duration": "1-2 weeks", "tips": ["Quantify DAU/MAU and revenue growth", "Show technical cross-functional fluency", "Include product teardowns"]},
            {"id": 2, "title": "Recruiter Diagnostic Screen", "description": "Assess product passion, track record, communication cadence, and organizational alignment.", "duration": "30 min", "tips": ["Prepare 90-second product journey", f"Know {cname}'s core competitive threats", "Highlight customer empathy"]},
            {"id": 3, "title": "Product Sense & Design Phone Screen", "description": "45-min interview: 'Design product X for demographic Y' or 'How would you improve feature Z?'.", "duration": "45 min", "tips": ["Use CIRCLES or similar framework", "Identify target user personas and pain points", "Prioritize features using trade-offs"]},
            {"id": 4, "title": "Virtual Onsite Loop", "description": "4-5 rounds: 2 Product Sense & Execution, 1 Analytical & Metrics, 1 Technical Fluency, 1 Leadership.", "duration": "5 hours", "tips": ["Define North Star and guardrail metrics", "Demonstrate how you collaborate with SWE leads", "Prepare STAR stories of product failures"]},
            {"id": 5, "title": "Debrief & Team Allocation", "description": f"Calibration review by senior product directors at {cname} followed by leveled compensation offer.", "duration": "1-3 weeks", "tips": ["Clarify product ownership scope", "Negotiate equity and signing bonus", "Evaluate team engineering velocity"]}
        ]

        # 3. AI/ML
        stages[cid]['aiml'] = [
            {"id": 1, "title": "Research / Applied ML Application", "description": f"Submit profile highlighting model training, ML pipelines, and production inference scale at {cname}.", "duration": "1-2 weeks", "tips": ["Cite publications (NeurIPS, ICML, CVPR)", "Highlight PyTorch/JAX contributions", "Show throughput/latency optimization"]},
            {"id": 2, "title": "ML Recruiter Screen", "description": "Clarify specialization: LLMs, Generative AI, Computer Vision, Recommendation Systems, or RL.", "duration": "30 min", "tips": ["Differentiate research vs applied interests", f"Reference recent {cname} AI breakthroughs", "Outline GPU cluster experience"]},
            {"id": 3, "title": "ML Coding & Mathematics Screen", "description": "Implement core ML algorithms from scratch (e.g., attention mechanism, backpropagation, k-means).", "duration": "60 min", "tips": ["Vectorize with NumPy/PyTorch", "Know loss formulations and gradients", "Explain variance-bias tradeoffs"]},
            {"id": 4, "title": "Virtual Onsite ML Loop", "description": "5 rounds: 1 ML Coding, 2 ML System Design (RAG, Recommendation, or Training Infra), 1 Research Depth, 1 Leadership.", "duration": "6 hours", "tips": ["Design scalable data pipelines and feature stores", "Discuss quantization, LoRA, and distributed training", "Address model hallucination & safety"]},
            {"id": 5, "title": "Executive Review & Compute Allocation", "description": f"Hiring debrief and offer package including high compute cluster access and top-tier equity.", "duration": "2-3 weeks", "tips": ["Ask about H100/TPU cluster quotas", "Negotiate research publishing freedom", "Evaluate team foundation model roadmap"]}
        ]

        # 4. SRE
        stages[cid]['sre'] = [
            {"id": 1, "title": "Systems Experience Application", "description": f"Submit profile emphasizing Linux internals, distributed systems reliability, and incident handling for {cname}.", "duration": "1-2 weeks", "tips": ["Show on-call incident response leadership", "Highlight automation reducing toil", "Demonstrate multi-region infra"]},
            {"id": 2, "title": "Systems Technical Screen", "description": "Live Linux kernel, networking (TCP/IP, DNS, BGP), and troubleshooting simulation.", "duration": "60 min", "tips": ["Explain strace, top, netstat debugging", "Know packet lifecycle end-to-end", "Practice systems coding in Go/Python"]},
            {"id": 3, "title": "Non-Abstract Large System Design (NALSD)", "description": f"Design high-availability systems with 99.999% reliability SLAs and disaster recovery for {cname}.", "duration": "60 min", "tips": ["Calculate bandwidth, storage, and IOPS", "Design graceful degradation and circuit breakers", "Incorporate SLI/SLO and error budgets"]},
            {"id": 4, "title": "Onsite Reliability & Chaos Loop", "description": "4-5 rounds: Live troubleshooting sandbox, systems coding, NALSD architecture, culture & incident post-mortems.", "duration": "5 hours", "tips": ["Demonstrate blameless post-mortem culture", "Show how you automate operational tasks", "Address cascading failure modes"]},
            {"id": 5, "title": "Committee Review & Offer", "description": f"Compensation and team matching across core infrastructure organizations at {cname}.", "duration": "1-2 weeks", "tips": ["SRE compensation matches top SWE tier", "Ask about rotation schedules and on-call paging rates", "Negotiate equity grants"]}
        ]

        # 5. Architect (System Design)
        stages[cid]['design'] = [
            {"id": 1, "title": "Staff/Principal Architecture Profile", "description": f"Application showcasing multi-year technical vision, cross-org impact, and massive distributed architectures.", "duration": "1-3 weeks", "tips": ["Highlight systems serving millions of QPS", "Include whitepapers and tech patents", "Quantify infrastructure cost reductions"]},
            {"id": 2, "title": "Director & Tech Fellow Screening", "description": "Strategic conversation on multi-year architecture evolutions and organizational technical standards.", "duration": "60 min", "tips": ["Focus on executive communication", "Discuss legacy migration strategies", "Demonstrate business-aligned tech bets"]},
            {"id": 3, "title": "Architecture Deep-Dive Loop", "description": f"5-6 rounds: End-to-end distributed systems design, data mesh architecture, cross-team influence, and incident resilience.", "duration": "6 hours", "tips": ["Apply CAP, consensus (Raft/Paxos), and sharding", "Demonstrate consensus building across org boundaries", "Show technical leadership in ambiguity"]},
            {"id": 4, "title": "Executive Calibration & Vice President Review", "description": f"Senior Leadership Review committee calibrates Staff/Principal/Distinguished tier at {cname}.", "duration": "3-4 weeks", "tips": ["Leveling determines substantial equity multiplier", "Demonstrate organization-wide mentorship", "Negotiate discretionary grants and governance roles"]}
        ]

        # 6. Data Scientist
        stages[cid]['data'] = [
            {"id": 1, "title": "Data Science & Experimentation Application", "description": f"Submit profile emphasizing causal inference, A/B testing at scale, and applied statistical modeling at {cname}.", "duration": "1-2 weeks", "tips": ["Highlight product metrics moved", "Show experimentation case studies", "Mastery in SQL and Python/R"]},
            {"id": 2, "title": "Quantitative & SQL Phone Screen", "description": "Complex SQL queries (window functions, self-joins) + probability & statistics fundamentals.", "duration": "45 min", "tips": ["Practice multi-stage CTEs", "Know p-values, power analysis, and sample size formulas", "Explain variance reduction (CUPED)"]},
            {"id": 3, "title": "Virtual Onsite Data Loop", "description": "4-5 rounds: 1 SQL & Data Wrangling, 1 Experimentation & Metrics Design, 1 Applied ML/Stats Modeling, 1 Product Case Study.", "duration": "5 hours", "tips": ["Deconstruct business problems into statistical tests", "Address network interference in A/B testing", "Communicate data findings to non-technical leaders"]},
            {"id": 4, "title": "Hiring Committee & Product Team Fit", "description": f"Cross-functional review and team allocation across monetization, product growth, or integrity at {cname}.", "duration": "2 weeks", "tips": ["Clarify whether team is research or analytics-focused", "Inquire about data platform tooling", "Negotiate sign-on package"]}
        ]

        # 7. Frontend
        stages[cid]['frontend'] = [
            {"id": 1, "title": "Frontend Portfolio & Application", "description": f"Showcase web performance, design systems, accessible UI/UX, and complex web apps for {cname}.", "duration": "1-2 weeks", "tips": ["Highlight Core Web Vitals optimization", "Showcase state management at scale", "Include interactive demo links"]},
            {"id": 2, "title": "JavaScript/TypeScript & DOM Screen", "description": "Live coding interview evaluating vanilla JavaScript/TS, DOM manipulation, asynchronous event loop, and closures.", "duration": "45-60 min", "tips": ["Deep understanding of Event Loop, Promises, and Microtasks", "Implement debounce, throttle, or deep clone from scratch", "Know CSS layout engines (Flexbox, Grid)"]},
            {"id": 3, "title": "Frontend System Architecture & Design", "description": f"Design client-side architecture for a complex feature (e.g., Infinite Scroll, Collaborative Doc Editor, or Video Feed) at {cname}.", "duration": "60 min", "tips": ["Design network caching, optimistic UI, and offline states", "Address bundle splitting and tree-shaking", "Incorporate accessibility (WCAG) and internationalization (i18n)"]},
            {"id": 4, "title": "Virtual Onsite Frontend Loop", "description": "4-5 rounds: 2 UI Component Coding, 1 Web App Architecture, 1 Algorithms/DS, 1 Cross-functional Collaboration (PM & Design).", "duration": "5 hours", "tips": ["Build modular, accessible UI components", "Discuss cross-browser rendering and memory leaks", "Show strong design empathy and UX intuition"]},
            {"id": 5, "title": "Debrief & Offer Package", "description": f"Final team allocation to product UI groups across {cname} with competitive equity and compensation.", "duration": "1-2 weeks", "tips": ["Frontend engineers have high product visibility", "Leverage offers from competing tech firms", "Negotiate base and stock grants"]}
        ]

        # 8. Mobile
        stages[cid]['mobile'] = [
            {"id": 1, "title": "Mobile App Application", "description": f"Submit profile emphasizing iOS (Swift/SwiftUI) or Android (Kotlin/Jetpack Compose) applications with millions of downloads at {cname}.", "duration": "1-2 weeks", "tips": ["Link to live App Store or Google Play apps", "Highlight app startup time and battery optimizations", "Show architecture (MVVM, VIPER, MVI)"]},
            {"id": 2, "title": "Mobile Technical Phone Screen", "description": "Live coding testing language fundamentals (Swift memory ARC / Kotlin coroutines) and data structures.", "duration": "60 min", "tips": ["Know multithreading (GCD, Coroutines, Dispatchers)", "Understand memory retain cycles and leaks", "Write concise and idiomatic code"]},
            {"id": 3, "title": "Mobile System Design (Client Architecture)", "description": f"Architect a mobile feature at {cname} scale (e.g., Instagram Stories, Uber Live Map, or Offline Messaging).", "duration": "60 min", "tips": ["Address local SQLite/CoreData caching", "Handle spotty network and sync queues", "Optimize image/video caching and memory footprints"]},
            {"id": 4, "title": "Virtual Mobile Onsite Loop", "description": "4-5 rounds: 2 Mobile UI/Feature Coding, 1 Mobile System Design, 1 Computer Science DS/Algorithms, 1 Culture & Leadership.", "duration": "5 hours", "tips": ["Implement custom views and gesture animations", "Discuss battery efficiency and background tasks", "Demonstrate collaborative skills with backend teams"]},
            {"id": 5, "title": "Team Matching & Compensation Offer", "description": f"Placement within core mobile application teams at {cname} with full Big Tech benefits.", "duration": "1-2 weeks", "tips": ["Mobile expertise is in high industry demand", "Ask about CI/CD release trains and test automation", "Negotiate stock and bonuses"]}
        ]

        # 9. Security
        stages[cid]['security'] = [
            {"id": 1, "title": "Security Engineering Application", "description": f"Submit profile highlighting AppSec, Cloud Infrastructure Security, Cryptography, or Threat Modeling for {cname}.", "duration": "1-2 weeks", "tips": ["Highlight CVEs discovered, bug bounties, or CTF achievements", "Show experience with zero-trust architecture", "Demonstrate automated vulnerability scanning"]},
            {"id": 2, "title": "Security Fundamentals & Coding Screen", "description": "Assess secure coding practices, cryptography primitives, and identifying vulnerabilities (OWASP Top 10).", "duration": "60 min", "tips": ["Identify SQLi, XSS, SSRF, and CSRF patterns", "Understand public key infrastructure (PKI) and TLS", "Code security tooling in Python, Go, or C++"]},
            {"id": 3, "title": "Security Architecture & Threat Modeling", "description": f"Perform comprehensive threat modeling for a new service at {cname} (using STRIDE or PASTA frameworks).", "duration": "60 min", "tips": ["Identify trust boundaries and attack surfaces", "Design defense-in-depth security controls", "Address authentication, authorization (OAuth/OIDC), and IAM"]},
            {"id": 4, "title": "Onsite Security Engineering Loop", "description": "4-5 rounds: 1 Secure Code Review/Exploitation, 1 Security Architecture, 1 Incident Response/Forensics, 1 Infrastructure Security, 1 Behavioral.", "duration": "5 hours", "tips": ["Demonstrate pragmatic security without blocking business velocity", "Know container/K8s security and secrets management", "Show calm and structured incident response instincts"]},
            {"id": 5, "title": "Debrief & Security Org Placement", "description": f"Placement in Red Team, Blue Team, Product Security, or Cloud Security groups at {cname}.", "duration": "2 weeks", "tips": ["Security engineers receive top-tier engineering pay", "Ask about security tooling budget and organizational leverage", "Negotiate sign-on bonuses"]}
        ]

        # 10. DevOps
        stages[cid]['devops'] = [
            {"id": 1, "title": "Cloud & Infrastructure Profile", "description": f"Submit profile highlighting Infrastructure-as-Code (Terraform), Kubernetes orchestration, and automated CI/CD pipelines at {cname}.", "duration": "1-2 weeks", "tips": ["Highlight multi-cluster Kubernetes deployments", "Show GitOps and zero-downtime deployment pipelines", "Quantify infrastructure cost savings"]},
            {"id": 2, "title": "Automation & Scripting Screen", "description": "Hands-on scripting (Python/Go/Bash), Linux systems diagnosis, and Docker container internals.", "duration": "60 min", "tips": ["Demonstrate clean API scripting and error handling", "Understand cgroups, namespaces, and overlay networks", "Automate real infrastructure configuration tasks"]},
            {"id": 3, "title": "Cloud Architecture & Pipeline Design", "description": f"Design scalable, multi-region CI/CD pipelines and deployment infrastructure for {cname}.", "duration": "60 min", "tips": ["Design canary and blue-green deployment strategies", "Incorporate policy-as-code and automated security scans", "Design centralized observability (Prometheus/Grafana/OpenTelemetry)"]},
            {"id": 4, "title": "Onsite Infrastructure Loop", "description": "4-5 rounds: 1 Cloud Architecture, 1 Systems Scripting, 1 Troubleshooting & Debugging, 1 Configuration Management, 1 Culture.", "duration": "5 hours", "tips": ["Show how you enable developer self-service", "Address disaster recovery and cross-region failovers", "Demonstrate collaborative support mindset"]},
            {"id": 5, "title": "Offer & Platform Team Allocation", "description": f"Placement on central Developer Experience, Cloud Foundation, or Core Platform teams at {cname}.", "duration": "1-2 weeks", "tips": ["Platform engineering is a key company investment", "Inquire about tech stack modernization roadmaps", "Negotiate competitive total compensation"]}
        ]

        # 11. SDET
        stages[cid]['sdet'] = [
            {"id": 1, "title": "SDET / QA Automation Application", "description": f"Submit profile highlighting automated test framework design, end-to-end testing, and performance testing at {cname}.", "duration": "1-2 weeks", "tips": ["Highlight custom test harness development", "Quantify bug detection rates and release velocity improvements", "Show experience with Playwright, Selenium, or Cypress"]},
            {"id": 2, "title": "Coding & Test Strategy Phone Screen", "description": "Algorithmic coding round + deep dive into test design, edge case derivation, and unit test mocking.", "duration": "60 min", "tips": ["Solve the algorithmic problem with production code", "Proactively write comprehensive unit test cases", "Discuss boundary value analysis and equivalence partitioning"]},
            {"id": 3, "title": "Test Framework & System Architecture", "description": f"Design distributed automated test infrastructure capable of executing millions of test runs daily for {cname}.", "duration": "60 min", "tips": ["Design test parallelization and shard execution", "Handle test flakiness and retry heuristics", "Integrate automated regression testing into CI/CD"]},
            {"id": 4, "title": "Onsite Quality Engineering Loop", "description": "4-5 rounds: 2 Coding & Data Structures, 1 Test Framework Architecture, 1 Bug Finding & Quality Strategy, 1 Culture & Leadership.", "duration": "5 hours", "tips": ["Demonstrate engineering rigor equal to SWE candidates", "Show customer advocacy for quality and performance", "Explain how you coach engineering teams on testability"]},
            {"id": 5, "title": "Hiring Committee & Offer", "description": f"Placement within core quality engineering and release automation teams across {cname}.", "duration": "1-2 weeks", "tips": ["SDETs with strong coding earn SWE-equivalent packages", "Ask about release gating authority", "Negotiate equity compensation"]}
        ]

        # 12. TPM
        stages[cid]['tpm'] = [
            {"id": 1, "title": "TPM Resume & Track Record", "description": f"Submit profile emphasizing technical program execution, cross-organizational delivery, and dependency management for {cname}.", "duration": "1-2 weeks", "tips": ["Highlight multi-team programs shipped on time", "Quantify technical scope (datacenter builds, cloud migrations)", "Demonstrate technical background (CS or Engineering degree)"]},
            {"id": 2, "title": "Technical Program Diagnostic Screen", "description": "Evaluate program lifecycle management, handling ambiguity, and risk mitigation strategies.", "duration": "45 min", "tips": ["Prepare 2-minute elevator story on your biggest technical program", "Show proactive risk identification before crises happen", "Demonstrate executive reporting clarity"]},
            {"id": 3, "title": "Technical Depth & Architecture Review", "description": f"TPMs at {cname} must speak peer-to-peer with senior architects. Walk through a complex distributed architecture.", "duration": "60 min", "tips": ["Explain API contracts, data flows, and bottleneck trade-offs", "Show how you arbitrate technical disagreements between teams", "Understand latency, throughput, and hardware constraints"]},
            {"id": 4, "title": "Virtual Onsite TPM Loop", "description": "5 rounds: 1 Program Execution & Delivery, 1 Technical Architecture, 1 Cross-functional Leadership & Influence, 1 Risk & Crisis Management, 1 Culture.", "duration": "5 hours", "tips": ["Show how you align conflicting VP and director priorities", "Demonstrate structured milestone tracking without bureaucratic overhead", "Prepare STAR stories highlighting resilience in setbacks"]},
            {"id": 5, "title": "Executive Debrief & Offer", "description": f"Senior management review and placement within high-priority strategic initiatives at {cname}.", "duration": "2 weeks", "tips": ["TPMs enjoy broad cross-company visibility", "Inquire about executive sponsorship and program budgets", "Negotiate sign-on bonuses and RSUs"]}
        ]

    return stages

print("Stages generator logic built successfully.")
