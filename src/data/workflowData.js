// Comprehensive tech career workflow and assessment data

export const companies = [
  {
    "id": "google",
    "name": "Google",
    "color": "#4285f4",
    "logo": "\ud83d\udd0d"
  },
  {
    "id": "meta",
    "name": "Meta",
    "color": "#0668E1",
    "logo": "\ud83c\udf10"
  },
  {
    "id": "amazon",
    "name": "Amazon",
    "color": "#ff9900",
    "logo": "\ud83d\udce6"
  },
  {
    "id": "apple",
    "name": "Apple",
    "color": "#a3aaae",
    "logo": "\ud83c\udf4e"
  },
  {
    "id": "microsoft",
    "name": "Microsoft",
    "color": "#00a4ef",
    "logo": "\u24c2\ufe0f"
  },
  {
    "id": "netflix",
    "name": "Netflix",
    "color": "#e50914",
    "logo": "\ud83c\udfac"
  }
];

export const roles = [
  {
    "id": "swe",
    "name": "Software Engineer",
    "icon": "\ud83d\udcbb",
    "shortName": "SWE"
  },
  {
    "id": "pm",
    "name": "Product Manager",
    "icon": "\ud83d\udcca",
    "shortName": "PM"
  },
  {
    "id": "aiml",
    "name": "AI/ML Engineer",
    "icon": "\ud83e\udd16",
    "shortName": "AI/ML"
  },
  {
    "id": "sre",
    "name": "Site Reliability Engineer",
    "icon": "\ud83d\udd27",
    "shortName": "SRE"
  },
  {
    "id": "design",
    "name": "System Design Architect",
    "icon": "\ud83c\udfd7\ufe0f",
    "shortName": "Architect"
  },
  {
    "id": "data",
    "name": "Data Scientist",
    "icon": "\ud83d\udcc8",
    "shortName": "Data"
  },
  {
    "id": "frontend",
    "name": "Frontend & UI Engineer",
    "icon": "\ud83c\udfa8",
    "shortName": "Frontend"
  },
  {
    "id": "mobile",
    "name": "Mobile Engineer (iOS/Android)",
    "icon": "\ud83d\udcf1",
    "shortName": "Mobile"
  },
  {
    "id": "security",
    "name": "Security & AppSec Engineer",
    "icon": "\ud83d\udee1\ufe0f",
    "shortName": "Security"
  },
  {
    "id": "devops",
    "name": "Cloud & DevOps Engineer",
    "icon": "\u2601\ufe0f",
    "shortName": "DevOps"
  },
  {
    "id": "sdet",
    "name": "SDET & Automation Engineer",
    "icon": "\ud83e\uddea",
    "shortName": "SDET"
  },
  {
    "id": "tpm",
    "name": "Technical Program Manager",
    "icon": "\ud83d\udccb",
    "shortName": "TPM"
  }
];

export const workflowStages = {
  "google": {
    "swe": [
      {
        "id": 1,
        "title": "Online Application & Referral",
        "description": "Submit resume via Google Careers or employee referral. Highlight scalable systems and algorithmic achievements.",
        "duration": "1-2 weeks",
        "tips": [
          "Use Google's XYZ formula",
          "Reference open source work",
          "Ensure clean GitHub profile"
        ]
      },
      {
        "id": 2,
        "title": "Recruiter Screen",
        "description": "30-min call covering background, timeline, level (L3-L6), and technical tracks.",
        "duration": "30 min",
        "tips": [
          "Clear elevator pitch",
          "Know your timeline",
          "Ask about specific orgs (Cloud, Search, YouTube)"
        ]
      },
      {
        "id": 3,
        "title": "Online Assessment (OA)",
        "description": "90-minute timed coding assessment on Google's internal platform with 2 algorithmic challenges.",
        "duration": "90 min",
        "tips": [
          "Prioritize optimal time complexity",
          "Handle edge cases",
          "Write clean variable names"
        ]
      },
      {
        "id": 4,
        "title": "Technical Phone Screen",
        "description": "45-minute live coding in Google Docs or CoderPad with a Google senior software engineer.",
        "duration": "45 min",
        "tips": [
          "Think out loud continuously",
          "Clarify assumptions first",
          "State brute force before optimizing"
        ]
      },
      {
        "id": 5,
        "title": "Virtual Onsite Loop",
        "description": "4-5 rounds: 2 Data Structures & Algorithms, 1 System Design (L5+), 1 Googleyness & Leadership.",
        "duration": "5 hours",
        "tips": [
          "Googleyness values collaboration and intellectual humility",
          "Use RESHADED for system design",
          "Write production-ready code"
        ]
      },
      {
        "id": 6,
        "title": "Hiring Committee (HC) Review",
        "description": "Independent committee of engineers evaluates consolidated interview packet.",
        "duration": "2-3 weeks",
        "tips": [
          "Strong hire signals in coding can offset borderline design",
          "HC ensures company-wide calibration",
          "Prepare for possible follow-up round"
        ]
      },
      {
        "id": 7,
        "title": "Team Matching & Fit Calls",
        "description": "Host manager calls to find project and team alignment across Google product areas.",
        "duration": "1-4 weeks",
        "tips": [
          "Ask about on-call burden",
          "Inquire about team tech stack and roadmaps",
          "Meet multiple teams if possible"
        ]
      },
      {
        "id": 8,
        "title": "Offer & Executive Compensation",
        "description": "Formal written offer covering base, annual target bonus, and 4-year front-loaded GSUs.",
        "duration": "1-2 weeks",
        "tips": [
          "Use levels.fyi data",
          "Leverage competing offers",
          "Negotiate sign-on bonus"
        ]
      }
    ],
    "pm": [
      {
        "id": 1,
        "title": "PM Portfolio & Application",
        "description": "Submit PM resume emphasizing shipped products, user metrics, and business ROI at Google.",
        "duration": "1-2 weeks",
        "tips": [
          "Quantify DAU/MAU and revenue growth",
          "Show technical cross-functional fluency",
          "Include product teardowns"
        ]
      },
      {
        "id": 2,
        "title": "Recruiter Diagnostic Screen",
        "description": "Assess product passion, track record, communication cadence, and organizational alignment.",
        "duration": "30 min",
        "tips": [
          "Prepare 90-second product journey",
          "Know Google's core competitive threats",
          "Highlight customer empathy"
        ]
      },
      {
        "id": 3,
        "title": "Product Sense & Design Phone Screen",
        "description": "45-min interview: 'Design product X for demographic Y' or 'How would you improve feature Z?'.",
        "duration": "45 min",
        "tips": [
          "Use CIRCLES or similar framework",
          "Identify target user personas and pain points",
          "Prioritize features using trade-offs"
        ]
      },
      {
        "id": 4,
        "title": "Virtual Onsite Loop",
        "description": "4-5 rounds: 2 Product Sense & Execution, 1 Analytical & Metrics, 1 Technical Fluency, 1 Leadership.",
        "duration": "5 hours",
        "tips": [
          "Define North Star and guardrail metrics",
          "Demonstrate how you collaborate with SWE leads",
          "Prepare STAR stories of product failures"
        ]
      },
      {
        "id": 5,
        "title": "Debrief & Team Allocation",
        "description": "Calibration review by senior product directors at Google followed by leveled compensation offer.",
        "duration": "1-3 weeks",
        "tips": [
          "Clarify product ownership scope",
          "Negotiate equity and signing bonus",
          "Evaluate team engineering velocity"
        ]
      }
    ],
    "aiml": [
      {
        "id": 1,
        "title": "Research / Applied ML Application",
        "description": "Submit profile highlighting model training, ML pipelines, and production inference scale at Google.",
        "duration": "1-2 weeks",
        "tips": [
          "Cite publications (NeurIPS, ICML, CVPR)",
          "Highlight PyTorch/JAX contributions",
          "Show throughput/latency optimization"
        ]
      },
      {
        "id": 2,
        "title": "ML Recruiter Screen",
        "description": "Clarify specialization: LLMs, Generative AI, Computer Vision, Recommendation Systems, or RL.",
        "duration": "30 min",
        "tips": [
          "Differentiate research vs applied interests",
          "Reference recent Google AI breakthroughs",
          "Outline GPU cluster experience"
        ]
      },
      {
        "id": 3,
        "title": "ML Coding & Mathematics Screen",
        "description": "Implement core ML algorithms from scratch (e.g., attention mechanism, backpropagation, k-means).",
        "duration": "60 min",
        "tips": [
          "Vectorize with NumPy/PyTorch",
          "Know loss formulations and gradients",
          "Explain variance-bias tradeoffs"
        ]
      },
      {
        "id": 4,
        "title": "Virtual Onsite ML Loop",
        "description": "5 rounds: 1 ML Coding, 2 ML System Design (RAG, Recommendation, or Training Infra), 1 Research Depth, 1 Leadership.",
        "duration": "6 hours",
        "tips": [
          "Design scalable data pipelines and feature stores",
          "Discuss quantization, LoRA, and distributed training",
          "Address model hallucination & safety"
        ]
      },
      {
        "id": 5,
        "title": "Executive Review & Compute Allocation",
        "description": "Hiring debrief and offer package including high compute cluster access and top-tier equity.",
        "duration": "2-3 weeks",
        "tips": [
          "Ask about H100/TPU cluster quotas",
          "Negotiate research publishing freedom",
          "Evaluate team foundation model roadmap"
        ]
      }
    ],
    "sre": [
      {
        "id": 1,
        "title": "Systems Experience Application",
        "description": "Submit profile emphasizing Linux internals, distributed systems reliability, and incident handling for Google.",
        "duration": "1-2 weeks",
        "tips": [
          "Show on-call incident response leadership",
          "Highlight automation reducing toil",
          "Demonstrate multi-region infra"
        ]
      },
      {
        "id": 2,
        "title": "Systems Technical Screen",
        "description": "Live Linux kernel, networking (TCP/IP, DNS, BGP), and troubleshooting simulation.",
        "duration": "60 min",
        "tips": [
          "Explain strace, top, netstat debugging",
          "Know packet lifecycle end-to-end",
          "Practice systems coding in Go/Python"
        ]
      },
      {
        "id": 3,
        "title": "Non-Abstract Large System Design (NALSD)",
        "description": "Design high-availability systems with 99.999% reliability SLAs and disaster recovery for Google.",
        "duration": "60 min",
        "tips": [
          "Calculate bandwidth, storage, and IOPS",
          "Design graceful degradation and circuit breakers",
          "Incorporate SLI/SLO and error budgets"
        ]
      },
      {
        "id": 4,
        "title": "Onsite Reliability & Chaos Loop",
        "description": "4-5 rounds: Live troubleshooting sandbox, systems coding, NALSD architecture, culture & incident post-mortems.",
        "duration": "5 hours",
        "tips": [
          "Demonstrate blameless post-mortem culture",
          "Show how you automate operational tasks",
          "Address cascading failure modes"
        ]
      },
      {
        "id": 5,
        "title": "Committee Review & Offer",
        "description": "Compensation and team matching across core infrastructure organizations at Google.",
        "duration": "1-2 weeks",
        "tips": [
          "SRE compensation matches top SWE tier",
          "Ask about rotation schedules and on-call paging rates",
          "Negotiate equity grants"
        ]
      }
    ],
    "design": [
      {
        "id": 1,
        "title": "Staff/Principal Architecture Profile",
        "description": "Application showcasing multi-year technical vision, cross-org impact, and massive distributed architectures.",
        "duration": "1-3 weeks",
        "tips": [
          "Highlight systems serving millions of QPS",
          "Include whitepapers and tech patents",
          "Quantify infrastructure cost reductions"
        ]
      },
      {
        "id": 2,
        "title": "Director & Tech Fellow Screening",
        "description": "Strategic conversation on multi-year architecture evolutions and organizational technical standards.",
        "duration": "60 min",
        "tips": [
          "Focus on executive communication",
          "Discuss legacy migration strategies",
          "Demonstrate business-aligned tech bets"
        ]
      },
      {
        "id": 3,
        "title": "Architecture Deep-Dive Loop",
        "description": "5-6 rounds: End-to-end distributed systems design, data mesh architecture, cross-team influence, and incident resilience.",
        "duration": "6 hours",
        "tips": [
          "Apply CAP, consensus (Raft/Paxos), and sharding",
          "Demonstrate consensus building across org boundaries",
          "Show technical leadership in ambiguity"
        ]
      },
      {
        "id": 4,
        "title": "Executive Calibration & Vice President Review",
        "description": "Senior Leadership Review committee calibrates Staff/Principal/Distinguished tier at Google.",
        "duration": "3-4 weeks",
        "tips": [
          "Leveling determines substantial equity multiplier",
          "Demonstrate organization-wide mentorship",
          "Negotiate discretionary grants and governance roles"
        ]
      }
    ],
    "data": [
      {
        "id": 1,
        "title": "Data Science & Experimentation Application",
        "description": "Submit profile emphasizing causal inference, A/B testing at scale, and applied statistical modeling at Google.",
        "duration": "1-2 weeks",
        "tips": [
          "Highlight product metrics moved",
          "Show experimentation case studies",
          "Mastery in SQL and Python/R"
        ]
      },
      {
        "id": 2,
        "title": "Quantitative & SQL Phone Screen",
        "description": "Complex SQL queries (window functions, self-joins) + probability & statistics fundamentals.",
        "duration": "45 min",
        "tips": [
          "Practice multi-stage CTEs",
          "Know p-values, power analysis, and sample size formulas",
          "Explain variance reduction (CUPED)"
        ]
      },
      {
        "id": 3,
        "title": "Virtual Onsite Data Loop",
        "description": "4-5 rounds: 1 SQL & Data Wrangling, 1 Experimentation & Metrics Design, 1 Applied ML/Stats Modeling, 1 Product Case Study.",
        "duration": "5 hours",
        "tips": [
          "Deconstruct business problems into statistical tests",
          "Address network interference in A/B testing",
          "Communicate data findings to non-technical leaders"
        ]
      },
      {
        "id": 4,
        "title": "Hiring Committee & Product Team Fit",
        "description": "Cross-functional review and team allocation across monetization, product growth, or integrity at Google.",
        "duration": "2 weeks",
        "tips": [
          "Clarify whether team is research or analytics-focused",
          "Inquire about data platform tooling",
          "Negotiate sign-on package"
        ]
      }
    ],
    "frontend": [
      {
        "id": 1,
        "title": "Frontend Portfolio & Application",
        "description": "Showcase web performance, design systems, accessible UI/UX, and complex web apps for Google.",
        "duration": "1-2 weeks",
        "tips": [
          "Highlight Core Web Vitals optimization",
          "Showcase state management at scale",
          "Include interactive demo links"
        ]
      },
      {
        "id": 2,
        "title": "JavaScript/TypeScript & DOM Screen",
        "description": "Live coding interview evaluating vanilla JavaScript/TS, DOM manipulation, asynchronous event loop, and closures.",
        "duration": "45-60 min",
        "tips": [
          "Deep understanding of Event Loop, Promises, and Microtasks",
          "Implement debounce, throttle, or deep clone from scratch",
          "Know CSS layout engines (Flexbox, Grid)"
        ]
      },
      {
        "id": 3,
        "title": "Frontend System Architecture & Design",
        "description": "Design client-side architecture for a complex feature (e.g., Infinite Scroll, Collaborative Doc Editor, or Video Feed) at Google.",
        "duration": "60 min",
        "tips": [
          "Design network caching, optimistic UI, and offline states",
          "Address bundle splitting and tree-shaking",
          "Incorporate accessibility (WCAG) and internationalization (i18n)"
        ]
      },
      {
        "id": 4,
        "title": "Virtual Onsite Frontend Loop",
        "description": "4-5 rounds: 2 UI Component Coding, 1 Web App Architecture, 1 Algorithms/DS, 1 Cross-functional Collaboration (PM & Design).",
        "duration": "5 hours",
        "tips": [
          "Build modular, accessible UI components",
          "Discuss cross-browser rendering and memory leaks",
          "Show strong design empathy and UX intuition"
        ]
      },
      {
        "id": 5,
        "title": "Debrief & Offer Package",
        "description": "Final team allocation to product UI groups across Google with competitive equity and compensation.",
        "duration": "1-2 weeks",
        "tips": [
          "Frontend engineers have high product visibility",
          "Leverage offers from competing tech firms",
          "Negotiate base and stock grants"
        ]
      }
    ],
    "mobile": [
      {
        "id": 1,
        "title": "Mobile App Application",
        "description": "Submit profile emphasizing iOS (Swift/SwiftUI) or Android (Kotlin/Jetpack Compose) applications with millions of downloads at Google.",
        "duration": "1-2 weeks",
        "tips": [
          "Link to live App Store or Google Play apps",
          "Highlight app startup time and battery optimizations",
          "Show architecture (MVVM, VIPER, MVI)"
        ]
      },
      {
        "id": 2,
        "title": "Mobile Technical Phone Screen",
        "description": "Live coding testing language fundamentals (Swift memory ARC / Kotlin coroutines) and data structures.",
        "duration": "60 min",
        "tips": [
          "Know multithreading (GCD, Coroutines, Dispatchers)",
          "Understand memory retain cycles and leaks",
          "Write concise and idiomatic code"
        ]
      },
      {
        "id": 3,
        "title": "Mobile System Design (Client Architecture)",
        "description": "Architect a mobile feature at Google scale (e.g., Instagram Stories, Uber Live Map, or Offline Messaging).",
        "duration": "60 min",
        "tips": [
          "Address local SQLite/CoreData caching",
          "Handle spotty network and sync queues",
          "Optimize image/video caching and memory footprints"
        ]
      },
      {
        "id": 4,
        "title": "Virtual Mobile Onsite Loop",
        "description": "4-5 rounds: 2 Mobile UI/Feature Coding, 1 Mobile System Design, 1 Computer Science DS/Algorithms, 1 Culture & Leadership.",
        "duration": "5 hours",
        "tips": [
          "Implement custom views and gesture animations",
          "Discuss battery efficiency and background tasks",
          "Demonstrate collaborative skills with backend teams"
        ]
      },
      {
        "id": 5,
        "title": "Team Matching & Compensation Offer",
        "description": "Placement within core mobile application teams at Google with full Big Tech benefits.",
        "duration": "1-2 weeks",
        "tips": [
          "Mobile expertise is in high industry demand",
          "Ask about CI/CD release trains and test automation",
          "Negotiate stock and bonuses"
        ]
      }
    ],
    "security": [
      {
        "id": 1,
        "title": "Security Engineering Application",
        "description": "Submit profile highlighting AppSec, Cloud Infrastructure Security, Cryptography, or Threat Modeling for Google.",
        "duration": "1-2 weeks",
        "tips": [
          "Highlight CVEs discovered, bug bounties, or CTF achievements",
          "Show experience with zero-trust architecture",
          "Demonstrate automated vulnerability scanning"
        ]
      },
      {
        "id": 2,
        "title": "Security Fundamentals & Coding Screen",
        "description": "Assess secure coding practices, cryptography primitives, and identifying vulnerabilities (OWASP Top 10).",
        "duration": "60 min",
        "tips": [
          "Identify SQLi, XSS, SSRF, and CSRF patterns",
          "Understand public key infrastructure (PKI) and TLS",
          "Code security tooling in Python, Go, or C++"
        ]
      },
      {
        "id": 3,
        "title": "Security Architecture & Threat Modeling",
        "description": "Perform comprehensive threat modeling for a new service at Google (using STRIDE or PASTA frameworks).",
        "duration": "60 min",
        "tips": [
          "Identify trust boundaries and attack surfaces",
          "Design defense-in-depth security controls",
          "Address authentication, authorization (OAuth/OIDC), and IAM"
        ]
      },
      {
        "id": 4,
        "title": "Onsite Security Engineering Loop",
        "description": "4-5 rounds: 1 Secure Code Review/Exploitation, 1 Security Architecture, 1 Incident Response/Forensics, 1 Infrastructure Security, 1 Behavioral.",
        "duration": "5 hours",
        "tips": [
          "Demonstrate pragmatic security without blocking business velocity",
          "Know container/K8s security and secrets management",
          "Show calm and structured incident response instincts"
        ]
      },
      {
        "id": 5,
        "title": "Debrief & Security Org Placement",
        "description": "Placement in Red Team, Blue Team, Product Security, or Cloud Security groups at Google.",
        "duration": "2 weeks",
        "tips": [
          "Security engineers receive top-tier engineering pay",
          "Ask about security tooling budget and organizational leverage",
          "Negotiate sign-on bonuses"
        ]
      }
    ],
    "devops": [
      {
        "id": 1,
        "title": "Cloud & Infrastructure Profile",
        "description": "Submit profile highlighting Infrastructure-as-Code (Terraform), Kubernetes orchestration, and automated CI/CD pipelines at Google.",
        "duration": "1-2 weeks",
        "tips": [
          "Highlight multi-cluster Kubernetes deployments",
          "Show GitOps and zero-downtime deployment pipelines",
          "Quantify infrastructure cost savings"
        ]
      },
      {
        "id": 2,
        "title": "Automation & Scripting Screen",
        "description": "Hands-on scripting (Python/Go/Bash), Linux systems diagnosis, and Docker container internals.",
        "duration": "60 min",
        "tips": [
          "Demonstrate clean API scripting and error handling",
          "Understand cgroups, namespaces, and overlay networks",
          "Automate real infrastructure configuration tasks"
        ]
      },
      {
        "id": 3,
        "title": "Cloud Architecture & Pipeline Design",
        "description": "Design scalable, multi-region CI/CD pipelines and deployment infrastructure for Google.",
        "duration": "60 min",
        "tips": [
          "Design canary and blue-green deployment strategies",
          "Incorporate policy-as-code and automated security scans",
          "Design centralized observability (Prometheus/Grafana/OpenTelemetry)"
        ]
      },
      {
        "id": 4,
        "title": "Onsite Infrastructure Loop",
        "description": "4-5 rounds: 1 Cloud Architecture, 1 Systems Scripting, 1 Troubleshooting & Debugging, 1 Configuration Management, 1 Culture.",
        "duration": "5 hours",
        "tips": [
          "Show how you enable developer self-service",
          "Address disaster recovery and cross-region failovers",
          "Demonstrate collaborative support mindset"
        ]
      },
      {
        "id": 5,
        "title": "Offer & Platform Team Allocation",
        "description": "Placement on central Developer Experience, Cloud Foundation, or Core Platform teams at Google.",
        "duration": "1-2 weeks",
        "tips": [
          "Platform engineering is a key company investment",
          "Inquire about tech stack modernization roadmaps",
          "Negotiate competitive total compensation"
        ]
      }
    ],
    "sdet": [
      {
        "id": 1,
        "title": "SDET / QA Automation Application",
        "description": "Submit profile highlighting automated test framework design, end-to-end testing, and performance testing at Google.",
        "duration": "1-2 weeks",
        "tips": [
          "Highlight custom test harness development",
          "Quantify bug detection rates and release velocity improvements",
          "Show experience with Playwright, Selenium, or Cypress"
        ]
      },
      {
        "id": 2,
        "title": "Coding & Test Strategy Phone Screen",
        "description": "Algorithmic coding round + deep dive into test design, edge case derivation, and unit test mocking.",
        "duration": "60 min",
        "tips": [
          "Solve the algorithmic problem with production code",
          "Proactively write comprehensive unit test cases",
          "Discuss boundary value analysis and equivalence partitioning"
        ]
      },
      {
        "id": 3,
        "title": "Test Framework & System Architecture",
        "description": "Design distributed automated test infrastructure capable of executing millions of test runs daily for Google.",
        "duration": "60 min",
        "tips": [
          "Design test parallelization and shard execution",
          "Handle test flakiness and retry heuristics",
          "Integrate automated regression testing into CI/CD"
        ]
      },
      {
        "id": 4,
        "title": "Onsite Quality Engineering Loop",
        "description": "4-5 rounds: 2 Coding & Data Structures, 1 Test Framework Architecture, 1 Bug Finding & Quality Strategy, 1 Culture & Leadership.",
        "duration": "5 hours",
        "tips": [
          "Demonstrate engineering rigor equal to SWE candidates",
          "Show customer advocacy for quality and performance",
          "Explain how you coach engineering teams on testability"
        ]
      },
      {
        "id": 5,
        "title": "Hiring Committee & Offer",
        "description": "Placement within core quality engineering and release automation teams across Google.",
        "duration": "1-2 weeks",
        "tips": [
          "SDETs with strong coding earn SWE-equivalent packages",
          "Ask about release gating authority",
          "Negotiate equity compensation"
        ]
      }
    ],
    "tpm": [
      {
        "id": 1,
        "title": "TPM Resume & Track Record",
        "description": "Submit profile emphasizing technical program execution, cross-organizational delivery, and dependency management for Google.",
        "duration": "1-2 weeks",
        "tips": [
          "Highlight multi-team programs shipped on time",
          "Quantify technical scope (datacenter builds, cloud migrations)",
          "Demonstrate technical background (CS or Engineering degree)"
        ]
      },
      {
        "id": 2,
        "title": "Technical Program Diagnostic Screen",
        "description": "Evaluate program lifecycle management, handling ambiguity, and risk mitigation strategies.",
        "duration": "45 min",
        "tips": [
          "Prepare 2-minute elevator story on your biggest technical program",
          "Show proactive risk identification before crises happen",
          "Demonstrate executive reporting clarity"
        ]
      },
      {
        "id": 3,
        "title": "Technical Depth & Architecture Review",
        "description": "TPMs at Google must speak peer-to-peer with senior architects. Walk through a complex distributed architecture.",
        "duration": "60 min",
        "tips": [
          "Explain API contracts, data flows, and bottleneck trade-offs",
          "Show how you arbitrate technical disagreements between teams",
          "Understand latency, throughput, and hardware constraints"
        ]
      },
      {
        "id": 4,
        "title": "Virtual Onsite TPM Loop",
        "description": "5 rounds: 1 Program Execution & Delivery, 1 Technical Architecture, 1 Cross-functional Leadership & Influence, 1 Risk & Crisis Management, 1 Culture.",
        "duration": "5 hours",
        "tips": [
          "Show how you align conflicting VP and director priorities",
          "Demonstrate structured milestone tracking without bureaucratic overhead",
          "Prepare STAR stories highlighting resilience in setbacks"
        ]
      },
      {
        "id": 5,
        "title": "Executive Debrief & Offer",
        "description": "Senior management review and placement within high-priority strategic initiatives at Google.",
        "duration": "2 weeks",
        "tips": [
          "TPMs enjoy broad cross-company visibility",
          "Inquire about executive sponsorship and program budgets",
          "Negotiate sign-on bonuses and RSUs"
        ]
      }
    ]
  },
  "meta": {
    "swe": [
      {
        "id": 1,
        "title": "Application & Sourcing",
        "description": "Apply directly or via referral. Meta prioritizes rapid hiring cycles and product engineering impact.",
        "duration": "1-2 weeks",
        "tips": [
          "Highlight high-throughput apps",
          "Emphasize hacker mentality and move fast",
          "Include live links"
        ]
      },
      {
        "id": 2,
        "title": "Recruiter Diagnostic Call",
        "description": "30-min sync discussing level (E3-E6), team preferences, and Meta interview structure.",
        "duration": "30 min",
        "tips": [
          "Prepare 2-min self intro",
          "Confirm optimal programming language",
          "Understand Meta's 45-min round pace"
        ]
      },
      {
        "id": 3,
        "title": "Technical Phone Screen",
        "description": "45-min live coding with 2 medium/hard algorithmic problems on CoderPad.",
        "duration": "45 min",
        "tips": [
          "Must solve 2 problems in 40 mins",
          "Focus on graphs, trees, and dynamic programming",
          "Fast and bug-free syntax"
        ]
      },
      {
        "id": 4,
        "title": "The Virtual Loop (Onsite)",
        "description": "4 rounds: 2 Coding rounds, 1 System Design (or Product Architecture for E4/E5), 1 Behavioral.",
        "duration": "4 hours",
        "tips": [
          "Design for 3 billion daily active users",
          "Emphasize Meta core values: Move Fast, Be Bold",
          "Strong signal required on both code rounds"
        ]
      },
      {
        "id": 5,
        "title": "Debrief & Offer Generation",
        "description": "Interviewers calibrate in debrief. Meta offers general pool hiring with Bootcamp assignment.",
        "duration": "1 week",
        "tips": [
          "You pick your team during Bootcamp after joining",
          "Sign-on bonuses are generous",
          "Negotiate with other Big Tech offers"
        ]
      }
    ],
    "pm": [
      {
        "id": 1,
        "title": "PM Portfolio & Application",
        "description": "Submit PM resume emphasizing shipped products, user metrics, and business ROI at Meta.",
        "duration": "1-2 weeks",
        "tips": [
          "Quantify DAU/MAU and revenue growth",
          "Show technical cross-functional fluency",
          "Include product teardowns"
        ]
      },
      {
        "id": 2,
        "title": "Recruiter Diagnostic Screen",
        "description": "Assess product passion, track record, communication cadence, and organizational alignment.",
        "duration": "30 min",
        "tips": [
          "Prepare 90-second product journey",
          "Know Meta's core competitive threats",
          "Highlight customer empathy"
        ]
      },
      {
        "id": 3,
        "title": "Product Sense & Design Phone Screen",
        "description": "45-min interview: 'Design product X for demographic Y' or 'How would you improve feature Z?'.",
        "duration": "45 min",
        "tips": [
          "Use CIRCLES or similar framework",
          "Identify target user personas and pain points",
          "Prioritize features using trade-offs"
        ]
      },
      {
        "id": 4,
        "title": "Virtual Onsite Loop",
        "description": "4-5 rounds: 2 Product Sense & Execution, 1 Analytical & Metrics, 1 Technical Fluency, 1 Leadership.",
        "duration": "5 hours",
        "tips": [
          "Define North Star and guardrail metrics",
          "Demonstrate how you collaborate with SWE leads",
          "Prepare STAR stories of product failures"
        ]
      },
      {
        "id": 5,
        "title": "Debrief & Team Allocation",
        "description": "Calibration review by senior product directors at Meta followed by leveled compensation offer.",
        "duration": "1-3 weeks",
        "tips": [
          "Clarify product ownership scope",
          "Negotiate equity and signing bonus",
          "Evaluate team engineering velocity"
        ]
      }
    ],
    "aiml": [
      {
        "id": 1,
        "title": "Research / Applied ML Application",
        "description": "Submit profile highlighting model training, ML pipelines, and production inference scale at Meta.",
        "duration": "1-2 weeks",
        "tips": [
          "Cite publications (NeurIPS, ICML, CVPR)",
          "Highlight PyTorch/JAX contributions",
          "Show throughput/latency optimization"
        ]
      },
      {
        "id": 2,
        "title": "ML Recruiter Screen",
        "description": "Clarify specialization: LLMs, Generative AI, Computer Vision, Recommendation Systems, or RL.",
        "duration": "30 min",
        "tips": [
          "Differentiate research vs applied interests",
          "Reference recent Meta AI breakthroughs",
          "Outline GPU cluster experience"
        ]
      },
      {
        "id": 3,
        "title": "ML Coding & Mathematics Screen",
        "description": "Implement core ML algorithms from scratch (e.g., attention mechanism, backpropagation, k-means).",
        "duration": "60 min",
        "tips": [
          "Vectorize with NumPy/PyTorch",
          "Know loss formulations and gradients",
          "Explain variance-bias tradeoffs"
        ]
      },
      {
        "id": 4,
        "title": "Virtual Onsite ML Loop",
        "description": "5 rounds: 1 ML Coding, 2 ML System Design (RAG, Recommendation, or Training Infra), 1 Research Depth, 1 Leadership.",
        "duration": "6 hours",
        "tips": [
          "Design scalable data pipelines and feature stores",
          "Discuss quantization, LoRA, and distributed training",
          "Address model hallucination & safety"
        ]
      },
      {
        "id": 5,
        "title": "Executive Review & Compute Allocation",
        "description": "Hiring debrief and offer package including high compute cluster access and top-tier equity.",
        "duration": "2-3 weeks",
        "tips": [
          "Ask about H100/TPU cluster quotas",
          "Negotiate research publishing freedom",
          "Evaluate team foundation model roadmap"
        ]
      }
    ],
    "sre": [
      {
        "id": 1,
        "title": "Systems Experience Application",
        "description": "Submit profile emphasizing Linux internals, distributed systems reliability, and incident handling for Meta.",
        "duration": "1-2 weeks",
        "tips": [
          "Show on-call incident response leadership",
          "Highlight automation reducing toil",
          "Demonstrate multi-region infra"
        ]
      },
      {
        "id": 2,
        "title": "Systems Technical Screen",
        "description": "Live Linux kernel, networking (TCP/IP, DNS, BGP), and troubleshooting simulation.",
        "duration": "60 min",
        "tips": [
          "Explain strace, top, netstat debugging",
          "Know packet lifecycle end-to-end",
          "Practice systems coding in Go/Python"
        ]
      },
      {
        "id": 3,
        "title": "Non-Abstract Large System Design (NALSD)",
        "description": "Design high-availability systems with 99.999% reliability SLAs and disaster recovery for Meta.",
        "duration": "60 min",
        "tips": [
          "Calculate bandwidth, storage, and IOPS",
          "Design graceful degradation and circuit breakers",
          "Incorporate SLI/SLO and error budgets"
        ]
      },
      {
        "id": 4,
        "title": "Onsite Reliability & Chaos Loop",
        "description": "4-5 rounds: Live troubleshooting sandbox, systems coding, NALSD architecture, culture & incident post-mortems.",
        "duration": "5 hours",
        "tips": [
          "Demonstrate blameless post-mortem culture",
          "Show how you automate operational tasks",
          "Address cascading failure modes"
        ]
      },
      {
        "id": 5,
        "title": "Committee Review & Offer",
        "description": "Compensation and team matching across core infrastructure organizations at Meta.",
        "duration": "1-2 weeks",
        "tips": [
          "SRE compensation matches top SWE tier",
          "Ask about rotation schedules and on-call paging rates",
          "Negotiate equity grants"
        ]
      }
    ],
    "design": [
      {
        "id": 1,
        "title": "Staff/Principal Architecture Profile",
        "description": "Application showcasing multi-year technical vision, cross-org impact, and massive distributed architectures.",
        "duration": "1-3 weeks",
        "tips": [
          "Highlight systems serving millions of QPS",
          "Include whitepapers and tech patents",
          "Quantify infrastructure cost reductions"
        ]
      },
      {
        "id": 2,
        "title": "Director & Tech Fellow Screening",
        "description": "Strategic conversation on multi-year architecture evolutions and organizational technical standards.",
        "duration": "60 min",
        "tips": [
          "Focus on executive communication",
          "Discuss legacy migration strategies",
          "Demonstrate business-aligned tech bets"
        ]
      },
      {
        "id": 3,
        "title": "Architecture Deep-Dive Loop",
        "description": "5-6 rounds: End-to-end distributed systems design, data mesh architecture, cross-team influence, and incident resilience.",
        "duration": "6 hours",
        "tips": [
          "Apply CAP, consensus (Raft/Paxos), and sharding",
          "Demonstrate consensus building across org boundaries",
          "Show technical leadership in ambiguity"
        ]
      },
      {
        "id": 4,
        "title": "Executive Calibration & Vice President Review",
        "description": "Senior Leadership Review committee calibrates Staff/Principal/Distinguished tier at Meta.",
        "duration": "3-4 weeks",
        "tips": [
          "Leveling determines substantial equity multiplier",
          "Demonstrate organization-wide mentorship",
          "Negotiate discretionary grants and governance roles"
        ]
      }
    ],
    "data": [
      {
        "id": 1,
        "title": "Data Science & Experimentation Application",
        "description": "Submit profile emphasizing causal inference, A/B testing at scale, and applied statistical modeling at Meta.",
        "duration": "1-2 weeks",
        "tips": [
          "Highlight product metrics moved",
          "Show experimentation case studies",
          "Mastery in SQL and Python/R"
        ]
      },
      {
        "id": 2,
        "title": "Quantitative & SQL Phone Screen",
        "description": "Complex SQL queries (window functions, self-joins) + probability & statistics fundamentals.",
        "duration": "45 min",
        "tips": [
          "Practice multi-stage CTEs",
          "Know p-values, power analysis, and sample size formulas",
          "Explain variance reduction (CUPED)"
        ]
      },
      {
        "id": 3,
        "title": "Virtual Onsite Data Loop",
        "description": "4-5 rounds: 1 SQL & Data Wrangling, 1 Experimentation & Metrics Design, 1 Applied ML/Stats Modeling, 1 Product Case Study.",
        "duration": "5 hours",
        "tips": [
          "Deconstruct business problems into statistical tests",
          "Address network interference in A/B testing",
          "Communicate data findings to non-technical leaders"
        ]
      },
      {
        "id": 4,
        "title": "Hiring Committee & Product Team Fit",
        "description": "Cross-functional review and team allocation across monetization, product growth, or integrity at Meta.",
        "duration": "2 weeks",
        "tips": [
          "Clarify whether team is research or analytics-focused",
          "Inquire about data platform tooling",
          "Negotiate sign-on package"
        ]
      }
    ],
    "frontend": [
      {
        "id": 1,
        "title": "Frontend Portfolio & Application",
        "description": "Showcase web performance, design systems, accessible UI/UX, and complex web apps for Meta.",
        "duration": "1-2 weeks",
        "tips": [
          "Highlight Core Web Vitals optimization",
          "Showcase state management at scale",
          "Include interactive demo links"
        ]
      },
      {
        "id": 2,
        "title": "JavaScript/TypeScript & DOM Screen",
        "description": "Live coding interview evaluating vanilla JavaScript/TS, DOM manipulation, asynchronous event loop, and closures.",
        "duration": "45-60 min",
        "tips": [
          "Deep understanding of Event Loop, Promises, and Microtasks",
          "Implement debounce, throttle, or deep clone from scratch",
          "Know CSS layout engines (Flexbox, Grid)"
        ]
      },
      {
        "id": 3,
        "title": "Frontend System Architecture & Design",
        "description": "Design client-side architecture for a complex feature (e.g., Infinite Scroll, Collaborative Doc Editor, or Video Feed) at Meta.",
        "duration": "60 min",
        "tips": [
          "Design network caching, optimistic UI, and offline states",
          "Address bundle splitting and tree-shaking",
          "Incorporate accessibility (WCAG) and internationalization (i18n)"
        ]
      },
      {
        "id": 4,
        "title": "Virtual Onsite Frontend Loop",
        "description": "4-5 rounds: 2 UI Component Coding, 1 Web App Architecture, 1 Algorithms/DS, 1 Cross-functional Collaboration (PM & Design).",
        "duration": "5 hours",
        "tips": [
          "Build modular, accessible UI components",
          "Discuss cross-browser rendering and memory leaks",
          "Show strong design empathy and UX intuition"
        ]
      },
      {
        "id": 5,
        "title": "Debrief & Offer Package",
        "description": "Final team allocation to product UI groups across Meta with competitive equity and compensation.",
        "duration": "1-2 weeks",
        "tips": [
          "Frontend engineers have high product visibility",
          "Leverage offers from competing tech firms",
          "Negotiate base and stock grants"
        ]
      }
    ],
    "mobile": [
      {
        "id": 1,
        "title": "Mobile App Application",
        "description": "Submit profile emphasizing iOS (Swift/SwiftUI) or Android (Kotlin/Jetpack Compose) applications with millions of downloads at Meta.",
        "duration": "1-2 weeks",
        "tips": [
          "Link to live App Store or Google Play apps",
          "Highlight app startup time and battery optimizations",
          "Show architecture (MVVM, VIPER, MVI)"
        ]
      },
      {
        "id": 2,
        "title": "Mobile Technical Phone Screen",
        "description": "Live coding testing language fundamentals (Swift memory ARC / Kotlin coroutines) and data structures.",
        "duration": "60 min",
        "tips": [
          "Know multithreading (GCD, Coroutines, Dispatchers)",
          "Understand memory retain cycles and leaks",
          "Write concise and idiomatic code"
        ]
      },
      {
        "id": 3,
        "title": "Mobile System Design (Client Architecture)",
        "description": "Architect a mobile feature at Meta scale (e.g., Instagram Stories, Uber Live Map, or Offline Messaging).",
        "duration": "60 min",
        "tips": [
          "Address local SQLite/CoreData caching",
          "Handle spotty network and sync queues",
          "Optimize image/video caching and memory footprints"
        ]
      },
      {
        "id": 4,
        "title": "Virtual Mobile Onsite Loop",
        "description": "4-5 rounds: 2 Mobile UI/Feature Coding, 1 Mobile System Design, 1 Computer Science DS/Algorithms, 1 Culture & Leadership.",
        "duration": "5 hours",
        "tips": [
          "Implement custom views and gesture animations",
          "Discuss battery efficiency and background tasks",
          "Demonstrate collaborative skills with backend teams"
        ]
      },
      {
        "id": 5,
        "title": "Team Matching & Compensation Offer",
        "description": "Placement within core mobile application teams at Meta with full Big Tech benefits.",
        "duration": "1-2 weeks",
        "tips": [
          "Mobile expertise is in high industry demand",
          "Ask about CI/CD release trains and test automation",
          "Negotiate stock and bonuses"
        ]
      }
    ],
    "security": [
      {
        "id": 1,
        "title": "Security Engineering Application",
        "description": "Submit profile highlighting AppSec, Cloud Infrastructure Security, Cryptography, or Threat Modeling for Meta.",
        "duration": "1-2 weeks",
        "tips": [
          "Highlight CVEs discovered, bug bounties, or CTF achievements",
          "Show experience with zero-trust architecture",
          "Demonstrate automated vulnerability scanning"
        ]
      },
      {
        "id": 2,
        "title": "Security Fundamentals & Coding Screen",
        "description": "Assess secure coding practices, cryptography primitives, and identifying vulnerabilities (OWASP Top 10).",
        "duration": "60 min",
        "tips": [
          "Identify SQLi, XSS, SSRF, and CSRF patterns",
          "Understand public key infrastructure (PKI) and TLS",
          "Code security tooling in Python, Go, or C++"
        ]
      },
      {
        "id": 3,
        "title": "Security Architecture & Threat Modeling",
        "description": "Perform comprehensive threat modeling for a new service at Meta (using STRIDE or PASTA frameworks).",
        "duration": "60 min",
        "tips": [
          "Identify trust boundaries and attack surfaces",
          "Design defense-in-depth security controls",
          "Address authentication, authorization (OAuth/OIDC), and IAM"
        ]
      },
      {
        "id": 4,
        "title": "Onsite Security Engineering Loop",
        "description": "4-5 rounds: 1 Secure Code Review/Exploitation, 1 Security Architecture, 1 Incident Response/Forensics, 1 Infrastructure Security, 1 Behavioral.",
        "duration": "5 hours",
        "tips": [
          "Demonstrate pragmatic security without blocking business velocity",
          "Know container/K8s security and secrets management",
          "Show calm and structured incident response instincts"
        ]
      },
      {
        "id": 5,
        "title": "Debrief & Security Org Placement",
        "description": "Placement in Red Team, Blue Team, Product Security, or Cloud Security groups at Meta.",
        "duration": "2 weeks",
        "tips": [
          "Security engineers receive top-tier engineering pay",
          "Ask about security tooling budget and organizational leverage",
          "Negotiate sign-on bonuses"
        ]
      }
    ],
    "devops": [
      {
        "id": 1,
        "title": "Cloud & Infrastructure Profile",
        "description": "Submit profile highlighting Infrastructure-as-Code (Terraform), Kubernetes orchestration, and automated CI/CD pipelines at Meta.",
        "duration": "1-2 weeks",
        "tips": [
          "Highlight multi-cluster Kubernetes deployments",
          "Show GitOps and zero-downtime deployment pipelines",
          "Quantify infrastructure cost savings"
        ]
      },
      {
        "id": 2,
        "title": "Automation & Scripting Screen",
        "description": "Hands-on scripting (Python/Go/Bash), Linux systems diagnosis, and Docker container internals.",
        "duration": "60 min",
        "tips": [
          "Demonstrate clean API scripting and error handling",
          "Understand cgroups, namespaces, and overlay networks",
          "Automate real infrastructure configuration tasks"
        ]
      },
      {
        "id": 3,
        "title": "Cloud Architecture & Pipeline Design",
        "description": "Design scalable, multi-region CI/CD pipelines and deployment infrastructure for Meta.",
        "duration": "60 min",
        "tips": [
          "Design canary and blue-green deployment strategies",
          "Incorporate policy-as-code and automated security scans",
          "Design centralized observability (Prometheus/Grafana/OpenTelemetry)"
        ]
      },
      {
        "id": 4,
        "title": "Onsite Infrastructure Loop",
        "description": "4-5 rounds: 1 Cloud Architecture, 1 Systems Scripting, 1 Troubleshooting & Debugging, 1 Configuration Management, 1 Culture.",
        "duration": "5 hours",
        "tips": [
          "Show how you enable developer self-service",
          "Address disaster recovery and cross-region failovers",
          "Demonstrate collaborative support mindset"
        ]
      },
      {
        "id": 5,
        "title": "Offer & Platform Team Allocation",
        "description": "Placement on central Developer Experience, Cloud Foundation, or Core Platform teams at Meta.",
        "duration": "1-2 weeks",
        "tips": [
          "Platform engineering is a key company investment",
          "Inquire about tech stack modernization roadmaps",
          "Negotiate competitive total compensation"
        ]
      }
    ],
    "sdet": [
      {
        "id": 1,
        "title": "SDET / QA Automation Application",
        "description": "Submit profile highlighting automated test framework design, end-to-end testing, and performance testing at Meta.",
        "duration": "1-2 weeks",
        "tips": [
          "Highlight custom test harness development",
          "Quantify bug detection rates and release velocity improvements",
          "Show experience with Playwright, Selenium, or Cypress"
        ]
      },
      {
        "id": 2,
        "title": "Coding & Test Strategy Phone Screen",
        "description": "Algorithmic coding round + deep dive into test design, edge case derivation, and unit test mocking.",
        "duration": "60 min",
        "tips": [
          "Solve the algorithmic problem with production code",
          "Proactively write comprehensive unit test cases",
          "Discuss boundary value analysis and equivalence partitioning"
        ]
      },
      {
        "id": 3,
        "title": "Test Framework & System Architecture",
        "description": "Design distributed automated test infrastructure capable of executing millions of test runs daily for Meta.",
        "duration": "60 min",
        "tips": [
          "Design test parallelization and shard execution",
          "Handle test flakiness and retry heuristics",
          "Integrate automated regression testing into CI/CD"
        ]
      },
      {
        "id": 4,
        "title": "Onsite Quality Engineering Loop",
        "description": "4-5 rounds: 2 Coding & Data Structures, 1 Test Framework Architecture, 1 Bug Finding & Quality Strategy, 1 Culture & Leadership.",
        "duration": "5 hours",
        "tips": [
          "Demonstrate engineering rigor equal to SWE candidates",
          "Show customer advocacy for quality and performance",
          "Explain how you coach engineering teams on testability"
        ]
      },
      {
        "id": 5,
        "title": "Hiring Committee & Offer",
        "description": "Placement within core quality engineering and release automation teams across Meta.",
        "duration": "1-2 weeks",
        "tips": [
          "SDETs with strong coding earn SWE-equivalent packages",
          "Ask about release gating authority",
          "Negotiate equity compensation"
        ]
      }
    ],
    "tpm": [
      {
        "id": 1,
        "title": "TPM Resume & Track Record",
        "description": "Submit profile emphasizing technical program execution, cross-organizational delivery, and dependency management for Meta.",
        "duration": "1-2 weeks",
        "tips": [
          "Highlight multi-team programs shipped on time",
          "Quantify technical scope (datacenter builds, cloud migrations)",
          "Demonstrate technical background (CS or Engineering degree)"
        ]
      },
      {
        "id": 2,
        "title": "Technical Program Diagnostic Screen",
        "description": "Evaluate program lifecycle management, handling ambiguity, and risk mitigation strategies.",
        "duration": "45 min",
        "tips": [
          "Prepare 2-minute elevator story on your biggest technical program",
          "Show proactive risk identification before crises happen",
          "Demonstrate executive reporting clarity"
        ]
      },
      {
        "id": 3,
        "title": "Technical Depth & Architecture Review",
        "description": "TPMs at Meta must speak peer-to-peer with senior architects. Walk through a complex distributed architecture.",
        "duration": "60 min",
        "tips": [
          "Explain API contracts, data flows, and bottleneck trade-offs",
          "Show how you arbitrate technical disagreements between teams",
          "Understand latency, throughput, and hardware constraints"
        ]
      },
      {
        "id": 4,
        "title": "Virtual Onsite TPM Loop",
        "description": "5 rounds: 1 Program Execution & Delivery, 1 Technical Architecture, 1 Cross-functional Leadership & Influence, 1 Risk & Crisis Management, 1 Culture.",
        "duration": "5 hours",
        "tips": [
          "Show how you align conflicting VP and director priorities",
          "Demonstrate structured milestone tracking without bureaucratic overhead",
          "Prepare STAR stories highlighting resilience in setbacks"
        ]
      },
      {
        "id": 5,
        "title": "Executive Debrief & Offer",
        "description": "Senior management review and placement within high-priority strategic initiatives at Meta.",
        "duration": "2 weeks",
        "tips": [
          "TPMs enjoy broad cross-company visibility",
          "Inquire about executive sponsorship and program budgets",
          "Negotiate sign-on bonuses and RSUs"
        ]
      }
    ]
  },
  "amazon": {
    "swe": [
      {
        "id": 1,
        "title": "Application & Portal Submission",
        "description": "Apply for SDE I, SDE II, or Senior SDE via Amazon Jobs.",
        "duration": "1 week",
        "tips": [
          "Emphasize scalable backend work",
          "Align resume bullets with Leadership Principles",
          "Mention AWS services"
        ]
      },
      {
        "id": 2,
        "title": "Online Assessment (OA 1 & 2)",
        "description": "2-part OA: Part 1 is 2 coding challenges (90m), Part 2 is Amazon Work Style Simulation (2 hours).",
        "duration": "3 hours",
        "tips": [
          "Work Style tests Amazon 16 LPs strictly",
          "Check constraints for O(N log N) vs O(N)",
          "Take simulation in a quiet room"
        ]
      },
      {
        "id": 3,
        "title": "Technical Phone Screen",
        "description": "60-min round: 20 min LP deep dive (STAR method) + 40 min live algorithmic coding.",
        "duration": "60 min",
        "tips": [
          "Have 2 STAR stories per LP ready",
          "Customer Obsession and Bias for Action are key",
          "Don't jump into code without clarifying"
        ]
      },
      {
        "id": 4,
        "title": "The Onsite Loop & Bar Raiser",
        "description": "4-5 rounds: 2 Coding, 1 System Design (OOD for SDE I, Distributed for SDE II+), 1 Bar Raiser.",
        "duration": "5 hours",
        "tips": [
          "Bar Raiser is from an outside org and holds veto power",
          "Every interviewer evaluates 2 specific LPs",
          "Explain architectural trade-offs proactively"
        ]
      },
      {
        "id": 5,
        "title": "Debrief & 2+2 Vesting Offer",
        "description": "Debrief within 5 business days. Offer features 5/15/40/40 RSUs with high year 1-2 sign-on cash.",
        "duration": "5-7 days",
        "tips": [
          "Amazon year 1 and 2 cash bonuses bridge low early vesting",
          "Total compensation is competitive at SDE II",
          "Negotiate year 1 sign-on"
        ]
      }
    ],
    "pm": [
      {
        "id": 1,
        "title": "PM Portfolio & Application",
        "description": "Submit PM resume emphasizing shipped products, user metrics, and business ROI at Amazon.",
        "duration": "1-2 weeks",
        "tips": [
          "Quantify DAU/MAU and revenue growth",
          "Show technical cross-functional fluency",
          "Include product teardowns"
        ]
      },
      {
        "id": 2,
        "title": "Recruiter Diagnostic Screen",
        "description": "Assess product passion, track record, communication cadence, and organizational alignment.",
        "duration": "30 min",
        "tips": [
          "Prepare 90-second product journey",
          "Know Amazon's core competitive threats",
          "Highlight customer empathy"
        ]
      },
      {
        "id": 3,
        "title": "Product Sense & Design Phone Screen",
        "description": "45-min interview: 'Design product X for demographic Y' or 'How would you improve feature Z?'.",
        "duration": "45 min",
        "tips": [
          "Use CIRCLES or similar framework",
          "Identify target user personas and pain points",
          "Prioritize features using trade-offs"
        ]
      },
      {
        "id": 4,
        "title": "Virtual Onsite Loop",
        "description": "4-5 rounds: 2 Product Sense & Execution, 1 Analytical & Metrics, 1 Technical Fluency, 1 Leadership.",
        "duration": "5 hours",
        "tips": [
          "Define North Star and guardrail metrics",
          "Demonstrate how you collaborate with SWE leads",
          "Prepare STAR stories of product failures"
        ]
      },
      {
        "id": 5,
        "title": "Debrief & Team Allocation",
        "description": "Calibration review by senior product directors at Amazon followed by leveled compensation offer.",
        "duration": "1-3 weeks",
        "tips": [
          "Clarify product ownership scope",
          "Negotiate equity and signing bonus",
          "Evaluate team engineering velocity"
        ]
      }
    ],
    "aiml": [
      {
        "id": 1,
        "title": "Research / Applied ML Application",
        "description": "Submit profile highlighting model training, ML pipelines, and production inference scale at Amazon.",
        "duration": "1-2 weeks",
        "tips": [
          "Cite publications (NeurIPS, ICML, CVPR)",
          "Highlight PyTorch/JAX contributions",
          "Show throughput/latency optimization"
        ]
      },
      {
        "id": 2,
        "title": "ML Recruiter Screen",
        "description": "Clarify specialization: LLMs, Generative AI, Computer Vision, Recommendation Systems, or RL.",
        "duration": "30 min",
        "tips": [
          "Differentiate research vs applied interests",
          "Reference recent Amazon AI breakthroughs",
          "Outline GPU cluster experience"
        ]
      },
      {
        "id": 3,
        "title": "ML Coding & Mathematics Screen",
        "description": "Implement core ML algorithms from scratch (e.g., attention mechanism, backpropagation, k-means).",
        "duration": "60 min",
        "tips": [
          "Vectorize with NumPy/PyTorch",
          "Know loss formulations and gradients",
          "Explain variance-bias tradeoffs"
        ]
      },
      {
        "id": 4,
        "title": "Virtual Onsite ML Loop",
        "description": "5 rounds: 1 ML Coding, 2 ML System Design (RAG, Recommendation, or Training Infra), 1 Research Depth, 1 Leadership.",
        "duration": "6 hours",
        "tips": [
          "Design scalable data pipelines and feature stores",
          "Discuss quantization, LoRA, and distributed training",
          "Address model hallucination & safety"
        ]
      },
      {
        "id": 5,
        "title": "Executive Review & Compute Allocation",
        "description": "Hiring debrief and offer package including high compute cluster access and top-tier equity.",
        "duration": "2-3 weeks",
        "tips": [
          "Ask about H100/TPU cluster quotas",
          "Negotiate research publishing freedom",
          "Evaluate team foundation model roadmap"
        ]
      }
    ],
    "sre": [
      {
        "id": 1,
        "title": "Systems Experience Application",
        "description": "Submit profile emphasizing Linux internals, distributed systems reliability, and incident handling for Amazon.",
        "duration": "1-2 weeks",
        "tips": [
          "Show on-call incident response leadership",
          "Highlight automation reducing toil",
          "Demonstrate multi-region infra"
        ]
      },
      {
        "id": 2,
        "title": "Systems Technical Screen",
        "description": "Live Linux kernel, networking (TCP/IP, DNS, BGP), and troubleshooting simulation.",
        "duration": "60 min",
        "tips": [
          "Explain strace, top, netstat debugging",
          "Know packet lifecycle end-to-end",
          "Practice systems coding in Go/Python"
        ]
      },
      {
        "id": 3,
        "title": "Non-Abstract Large System Design (NALSD)",
        "description": "Design high-availability systems with 99.999% reliability SLAs and disaster recovery for Amazon.",
        "duration": "60 min",
        "tips": [
          "Calculate bandwidth, storage, and IOPS",
          "Design graceful degradation and circuit breakers",
          "Incorporate SLI/SLO and error budgets"
        ]
      },
      {
        "id": 4,
        "title": "Onsite Reliability & Chaos Loop",
        "description": "4-5 rounds: Live troubleshooting sandbox, systems coding, NALSD architecture, culture & incident post-mortems.",
        "duration": "5 hours",
        "tips": [
          "Demonstrate blameless post-mortem culture",
          "Show how you automate operational tasks",
          "Address cascading failure modes"
        ]
      },
      {
        "id": 5,
        "title": "Committee Review & Offer",
        "description": "Compensation and team matching across core infrastructure organizations at Amazon.",
        "duration": "1-2 weeks",
        "tips": [
          "SRE compensation matches top SWE tier",
          "Ask about rotation schedules and on-call paging rates",
          "Negotiate equity grants"
        ]
      }
    ],
    "design": [
      {
        "id": 1,
        "title": "Staff/Principal Architecture Profile",
        "description": "Application showcasing multi-year technical vision, cross-org impact, and massive distributed architectures.",
        "duration": "1-3 weeks",
        "tips": [
          "Highlight systems serving millions of QPS",
          "Include whitepapers and tech patents",
          "Quantify infrastructure cost reductions"
        ]
      },
      {
        "id": 2,
        "title": "Director & Tech Fellow Screening",
        "description": "Strategic conversation on multi-year architecture evolutions and organizational technical standards.",
        "duration": "60 min",
        "tips": [
          "Focus on executive communication",
          "Discuss legacy migration strategies",
          "Demonstrate business-aligned tech bets"
        ]
      },
      {
        "id": 3,
        "title": "Architecture Deep-Dive Loop",
        "description": "5-6 rounds: End-to-end distributed systems design, data mesh architecture, cross-team influence, and incident resilience.",
        "duration": "6 hours",
        "tips": [
          "Apply CAP, consensus (Raft/Paxos), and sharding",
          "Demonstrate consensus building across org boundaries",
          "Show technical leadership in ambiguity"
        ]
      },
      {
        "id": 4,
        "title": "Executive Calibration & Vice President Review",
        "description": "Senior Leadership Review committee calibrates Staff/Principal/Distinguished tier at Amazon.",
        "duration": "3-4 weeks",
        "tips": [
          "Leveling determines substantial equity multiplier",
          "Demonstrate organization-wide mentorship",
          "Negotiate discretionary grants and governance roles"
        ]
      }
    ],
    "data": [
      {
        "id": 1,
        "title": "Data Science & Experimentation Application",
        "description": "Submit profile emphasizing causal inference, A/B testing at scale, and applied statistical modeling at Amazon.",
        "duration": "1-2 weeks",
        "tips": [
          "Highlight product metrics moved",
          "Show experimentation case studies",
          "Mastery in SQL and Python/R"
        ]
      },
      {
        "id": 2,
        "title": "Quantitative & SQL Phone Screen",
        "description": "Complex SQL queries (window functions, self-joins) + probability & statistics fundamentals.",
        "duration": "45 min",
        "tips": [
          "Practice multi-stage CTEs",
          "Know p-values, power analysis, and sample size formulas",
          "Explain variance reduction (CUPED)"
        ]
      },
      {
        "id": 3,
        "title": "Virtual Onsite Data Loop",
        "description": "4-5 rounds: 1 SQL & Data Wrangling, 1 Experimentation & Metrics Design, 1 Applied ML/Stats Modeling, 1 Product Case Study.",
        "duration": "5 hours",
        "tips": [
          "Deconstruct business problems into statistical tests",
          "Address network interference in A/B testing",
          "Communicate data findings to non-technical leaders"
        ]
      },
      {
        "id": 4,
        "title": "Hiring Committee & Product Team Fit",
        "description": "Cross-functional review and team allocation across monetization, product growth, or integrity at Amazon.",
        "duration": "2 weeks",
        "tips": [
          "Clarify whether team is research or analytics-focused",
          "Inquire about data platform tooling",
          "Negotiate sign-on package"
        ]
      }
    ],
    "frontend": [
      {
        "id": 1,
        "title": "Frontend Portfolio & Application",
        "description": "Showcase web performance, design systems, accessible UI/UX, and complex web apps for Amazon.",
        "duration": "1-2 weeks",
        "tips": [
          "Highlight Core Web Vitals optimization",
          "Showcase state management at scale",
          "Include interactive demo links"
        ]
      },
      {
        "id": 2,
        "title": "JavaScript/TypeScript & DOM Screen",
        "description": "Live coding interview evaluating vanilla JavaScript/TS, DOM manipulation, asynchronous event loop, and closures.",
        "duration": "45-60 min",
        "tips": [
          "Deep understanding of Event Loop, Promises, and Microtasks",
          "Implement debounce, throttle, or deep clone from scratch",
          "Know CSS layout engines (Flexbox, Grid)"
        ]
      },
      {
        "id": 3,
        "title": "Frontend System Architecture & Design",
        "description": "Design client-side architecture for a complex feature (e.g., Infinite Scroll, Collaborative Doc Editor, or Video Feed) at Amazon.",
        "duration": "60 min",
        "tips": [
          "Design network caching, optimistic UI, and offline states",
          "Address bundle splitting and tree-shaking",
          "Incorporate accessibility (WCAG) and internationalization (i18n)"
        ]
      },
      {
        "id": 4,
        "title": "Virtual Onsite Frontend Loop",
        "description": "4-5 rounds: 2 UI Component Coding, 1 Web App Architecture, 1 Algorithms/DS, 1 Cross-functional Collaboration (PM & Design).",
        "duration": "5 hours",
        "tips": [
          "Build modular, accessible UI components",
          "Discuss cross-browser rendering and memory leaks",
          "Show strong design empathy and UX intuition"
        ]
      },
      {
        "id": 5,
        "title": "Debrief & Offer Package",
        "description": "Final team allocation to product UI groups across Amazon with competitive equity and compensation.",
        "duration": "1-2 weeks",
        "tips": [
          "Frontend engineers have high product visibility",
          "Leverage offers from competing tech firms",
          "Negotiate base and stock grants"
        ]
      }
    ],
    "mobile": [
      {
        "id": 1,
        "title": "Mobile App Application",
        "description": "Submit profile emphasizing iOS (Swift/SwiftUI) or Android (Kotlin/Jetpack Compose) applications with millions of downloads at Amazon.",
        "duration": "1-2 weeks",
        "tips": [
          "Link to live App Store or Google Play apps",
          "Highlight app startup time and battery optimizations",
          "Show architecture (MVVM, VIPER, MVI)"
        ]
      },
      {
        "id": 2,
        "title": "Mobile Technical Phone Screen",
        "description": "Live coding testing language fundamentals (Swift memory ARC / Kotlin coroutines) and data structures.",
        "duration": "60 min",
        "tips": [
          "Know multithreading (GCD, Coroutines, Dispatchers)",
          "Understand memory retain cycles and leaks",
          "Write concise and idiomatic code"
        ]
      },
      {
        "id": 3,
        "title": "Mobile System Design (Client Architecture)",
        "description": "Architect a mobile feature at Amazon scale (e.g., Instagram Stories, Uber Live Map, or Offline Messaging).",
        "duration": "60 min",
        "tips": [
          "Address local SQLite/CoreData caching",
          "Handle spotty network and sync queues",
          "Optimize image/video caching and memory footprints"
        ]
      },
      {
        "id": 4,
        "title": "Virtual Mobile Onsite Loop",
        "description": "4-5 rounds: 2 Mobile UI/Feature Coding, 1 Mobile System Design, 1 Computer Science DS/Algorithms, 1 Culture & Leadership.",
        "duration": "5 hours",
        "tips": [
          "Implement custom views and gesture animations",
          "Discuss battery efficiency and background tasks",
          "Demonstrate collaborative skills with backend teams"
        ]
      },
      {
        "id": 5,
        "title": "Team Matching & Compensation Offer",
        "description": "Placement within core mobile application teams at Amazon with full Big Tech benefits.",
        "duration": "1-2 weeks",
        "tips": [
          "Mobile expertise is in high industry demand",
          "Ask about CI/CD release trains and test automation",
          "Negotiate stock and bonuses"
        ]
      }
    ],
    "security": [
      {
        "id": 1,
        "title": "Security Engineering Application",
        "description": "Submit profile highlighting AppSec, Cloud Infrastructure Security, Cryptography, or Threat Modeling for Amazon.",
        "duration": "1-2 weeks",
        "tips": [
          "Highlight CVEs discovered, bug bounties, or CTF achievements",
          "Show experience with zero-trust architecture",
          "Demonstrate automated vulnerability scanning"
        ]
      },
      {
        "id": 2,
        "title": "Security Fundamentals & Coding Screen",
        "description": "Assess secure coding practices, cryptography primitives, and identifying vulnerabilities (OWASP Top 10).",
        "duration": "60 min",
        "tips": [
          "Identify SQLi, XSS, SSRF, and CSRF patterns",
          "Understand public key infrastructure (PKI) and TLS",
          "Code security tooling in Python, Go, or C++"
        ]
      },
      {
        "id": 3,
        "title": "Security Architecture & Threat Modeling",
        "description": "Perform comprehensive threat modeling for a new service at Amazon (using STRIDE or PASTA frameworks).",
        "duration": "60 min",
        "tips": [
          "Identify trust boundaries and attack surfaces",
          "Design defense-in-depth security controls",
          "Address authentication, authorization (OAuth/OIDC), and IAM"
        ]
      },
      {
        "id": 4,
        "title": "Onsite Security Engineering Loop",
        "description": "4-5 rounds: 1 Secure Code Review/Exploitation, 1 Security Architecture, 1 Incident Response/Forensics, 1 Infrastructure Security, 1 Behavioral.",
        "duration": "5 hours",
        "tips": [
          "Demonstrate pragmatic security without blocking business velocity",
          "Know container/K8s security and secrets management",
          "Show calm and structured incident response instincts"
        ]
      },
      {
        "id": 5,
        "title": "Debrief & Security Org Placement",
        "description": "Placement in Red Team, Blue Team, Product Security, or Cloud Security groups at Amazon.",
        "duration": "2 weeks",
        "tips": [
          "Security engineers receive top-tier engineering pay",
          "Ask about security tooling budget and organizational leverage",
          "Negotiate sign-on bonuses"
        ]
      }
    ],
    "devops": [
      {
        "id": 1,
        "title": "Cloud & Infrastructure Profile",
        "description": "Submit profile highlighting Infrastructure-as-Code (Terraform), Kubernetes orchestration, and automated CI/CD pipelines at Amazon.",
        "duration": "1-2 weeks",
        "tips": [
          "Highlight multi-cluster Kubernetes deployments",
          "Show GitOps and zero-downtime deployment pipelines",
          "Quantify infrastructure cost savings"
        ]
      },
      {
        "id": 2,
        "title": "Automation & Scripting Screen",
        "description": "Hands-on scripting (Python/Go/Bash), Linux systems diagnosis, and Docker container internals.",
        "duration": "60 min",
        "tips": [
          "Demonstrate clean API scripting and error handling",
          "Understand cgroups, namespaces, and overlay networks",
          "Automate real infrastructure configuration tasks"
        ]
      },
      {
        "id": 3,
        "title": "Cloud Architecture & Pipeline Design",
        "description": "Design scalable, multi-region CI/CD pipelines and deployment infrastructure for Amazon.",
        "duration": "60 min",
        "tips": [
          "Design canary and blue-green deployment strategies",
          "Incorporate policy-as-code and automated security scans",
          "Design centralized observability (Prometheus/Grafana/OpenTelemetry)"
        ]
      },
      {
        "id": 4,
        "title": "Onsite Infrastructure Loop",
        "description": "4-5 rounds: 1 Cloud Architecture, 1 Systems Scripting, 1 Troubleshooting & Debugging, 1 Configuration Management, 1 Culture.",
        "duration": "5 hours",
        "tips": [
          "Show how you enable developer self-service",
          "Address disaster recovery and cross-region failovers",
          "Demonstrate collaborative support mindset"
        ]
      },
      {
        "id": 5,
        "title": "Offer & Platform Team Allocation",
        "description": "Placement on central Developer Experience, Cloud Foundation, or Core Platform teams at Amazon.",
        "duration": "1-2 weeks",
        "tips": [
          "Platform engineering is a key company investment",
          "Inquire about tech stack modernization roadmaps",
          "Negotiate competitive total compensation"
        ]
      }
    ],
    "sdet": [
      {
        "id": 1,
        "title": "SDET / QA Automation Application",
        "description": "Submit profile highlighting automated test framework design, end-to-end testing, and performance testing at Amazon.",
        "duration": "1-2 weeks",
        "tips": [
          "Highlight custom test harness development",
          "Quantify bug detection rates and release velocity improvements",
          "Show experience with Playwright, Selenium, or Cypress"
        ]
      },
      {
        "id": 2,
        "title": "Coding & Test Strategy Phone Screen",
        "description": "Algorithmic coding round + deep dive into test design, edge case derivation, and unit test mocking.",
        "duration": "60 min",
        "tips": [
          "Solve the algorithmic problem with production code",
          "Proactively write comprehensive unit test cases",
          "Discuss boundary value analysis and equivalence partitioning"
        ]
      },
      {
        "id": 3,
        "title": "Test Framework & System Architecture",
        "description": "Design distributed automated test infrastructure capable of executing millions of test runs daily for Amazon.",
        "duration": "60 min",
        "tips": [
          "Design test parallelization and shard execution",
          "Handle test flakiness and retry heuristics",
          "Integrate automated regression testing into CI/CD"
        ]
      },
      {
        "id": 4,
        "title": "Onsite Quality Engineering Loop",
        "description": "4-5 rounds: 2 Coding & Data Structures, 1 Test Framework Architecture, 1 Bug Finding & Quality Strategy, 1 Culture & Leadership.",
        "duration": "5 hours",
        "tips": [
          "Demonstrate engineering rigor equal to SWE candidates",
          "Show customer advocacy for quality and performance",
          "Explain how you coach engineering teams on testability"
        ]
      },
      {
        "id": 5,
        "title": "Hiring Committee & Offer",
        "description": "Placement within core quality engineering and release automation teams across Amazon.",
        "duration": "1-2 weeks",
        "tips": [
          "SDETs with strong coding earn SWE-equivalent packages",
          "Ask about release gating authority",
          "Negotiate equity compensation"
        ]
      }
    ],
    "tpm": [
      {
        "id": 1,
        "title": "TPM Resume & Track Record",
        "description": "Submit profile emphasizing technical program execution, cross-organizational delivery, and dependency management for Amazon.",
        "duration": "1-2 weeks",
        "tips": [
          "Highlight multi-team programs shipped on time",
          "Quantify technical scope (datacenter builds, cloud migrations)",
          "Demonstrate technical background (CS or Engineering degree)"
        ]
      },
      {
        "id": 2,
        "title": "Technical Program Diagnostic Screen",
        "description": "Evaluate program lifecycle management, handling ambiguity, and risk mitigation strategies.",
        "duration": "45 min",
        "tips": [
          "Prepare 2-minute elevator story on your biggest technical program",
          "Show proactive risk identification before crises happen",
          "Demonstrate executive reporting clarity"
        ]
      },
      {
        "id": 3,
        "title": "Technical Depth & Architecture Review",
        "description": "TPMs at Amazon must speak peer-to-peer with senior architects. Walk through a complex distributed architecture.",
        "duration": "60 min",
        "tips": [
          "Explain API contracts, data flows, and bottleneck trade-offs",
          "Show how you arbitrate technical disagreements between teams",
          "Understand latency, throughput, and hardware constraints"
        ]
      },
      {
        "id": 4,
        "title": "Virtual Onsite TPM Loop",
        "description": "5 rounds: 1 Program Execution & Delivery, 1 Technical Architecture, 1 Cross-functional Leadership & Influence, 1 Risk & Crisis Management, 1 Culture.",
        "duration": "5 hours",
        "tips": [
          "Show how you align conflicting VP and director priorities",
          "Demonstrate structured milestone tracking without bureaucratic overhead",
          "Prepare STAR stories highlighting resilience in setbacks"
        ]
      },
      {
        "id": 5,
        "title": "Executive Debrief & Offer",
        "description": "Senior management review and placement within high-priority strategic initiatives at Amazon.",
        "duration": "2 weeks",
        "tips": [
          "TPMs enjoy broad cross-company visibility",
          "Inquire about executive sponsorship and program budgets",
          "Negotiate sign-on bonuses and RSUs"
        ]
      }
    ]
  },
  "apple": {
    "swe": [
      {
        "id": 1,
        "title": "Team-Specific Application",
        "description": "Apple hires for direct teams (iOS, CoreOS, iCloud, Siri, Maps) rather than general pools.",
        "duration": "1-3 weeks",
        "tips": [
          "Tailor directly to team's tech stack",
          "Showcase craft and attention to detail",
          "Demonstrate hardware/software awareness"
        ]
      },
      {
        "id": 2,
        "title": "Recruiter & Hiring Manager Screen",
        "description": "45-min conversation assessing domain mastery and passion for Apple ecosystem.",
        "duration": "45 min",
        "tips": [
          "Know the specific Apple product deeply",
          "Highlight deep engineering craft",
          "Show pride in software polish"
        ]
      },
      {
        "id": 3,
        "title": "Technical Phone Screens (1-2 Rounds)",
        "description": "Live coding focused on practical data structures, memory management, and concurrency.",
        "duration": "2x 60 min",
        "tips": [
          "Questions emphasize real-world systems",
          "Discuss memory leaks and cache locality",
          "Show mastery of C++, Swift, Go, or Java"
        ]
      },
      {
        "id": 4,
        "title": "Virtual Onsite Loop (5-6 Rounds)",
        "description": "Deep technical loop: 2 coding rounds, 1 systems design, 1 domain deep-dive, 1 manager interview.",
        "duration": "6 hours",
        "tips": [
          "Hiring manager holds decisive weight",
          "Respect confidentiality/secrecy culture",
          "Focus on privacy-by-design"
        ]
      },
      {
        "id": 5,
        "title": "VP Review & Offer",
        "description": "Offers require executive sign-off. Highly competitive base and 4-year equal vesting RSUs.",
        "duration": "2-3 weeks",
        "tips": [
          "Apple benefits and hardware discounts",
          "Ask about team product roadmap",
          "Negotiate base and RSU mix"
        ]
      }
    ],
    "pm": [
      {
        "id": 1,
        "title": "PM Portfolio & Application",
        "description": "Submit PM resume emphasizing shipped products, user metrics, and business ROI at Apple.",
        "duration": "1-2 weeks",
        "tips": [
          "Quantify DAU/MAU and revenue growth",
          "Show technical cross-functional fluency",
          "Include product teardowns"
        ]
      },
      {
        "id": 2,
        "title": "Recruiter Diagnostic Screen",
        "description": "Assess product passion, track record, communication cadence, and organizational alignment.",
        "duration": "30 min",
        "tips": [
          "Prepare 90-second product journey",
          "Know Apple's core competitive threats",
          "Highlight customer empathy"
        ]
      },
      {
        "id": 3,
        "title": "Product Sense & Design Phone Screen",
        "description": "45-min interview: 'Design product X for demographic Y' or 'How would you improve feature Z?'.",
        "duration": "45 min",
        "tips": [
          "Use CIRCLES or similar framework",
          "Identify target user personas and pain points",
          "Prioritize features using trade-offs"
        ]
      },
      {
        "id": 4,
        "title": "Virtual Onsite Loop",
        "description": "4-5 rounds: 2 Product Sense & Execution, 1 Analytical & Metrics, 1 Technical Fluency, 1 Leadership.",
        "duration": "5 hours",
        "tips": [
          "Define North Star and guardrail metrics",
          "Demonstrate how you collaborate with SWE leads",
          "Prepare STAR stories of product failures"
        ]
      },
      {
        "id": 5,
        "title": "Debrief & Team Allocation",
        "description": "Calibration review by senior product directors at Apple followed by leveled compensation offer.",
        "duration": "1-3 weeks",
        "tips": [
          "Clarify product ownership scope",
          "Negotiate equity and signing bonus",
          "Evaluate team engineering velocity"
        ]
      }
    ],
    "aiml": [
      {
        "id": 1,
        "title": "Research / Applied ML Application",
        "description": "Submit profile highlighting model training, ML pipelines, and production inference scale at Apple.",
        "duration": "1-2 weeks",
        "tips": [
          "Cite publications (NeurIPS, ICML, CVPR)",
          "Highlight PyTorch/JAX contributions",
          "Show throughput/latency optimization"
        ]
      },
      {
        "id": 2,
        "title": "ML Recruiter Screen",
        "description": "Clarify specialization: LLMs, Generative AI, Computer Vision, Recommendation Systems, or RL.",
        "duration": "30 min",
        "tips": [
          "Differentiate research vs applied interests",
          "Reference recent Apple AI breakthroughs",
          "Outline GPU cluster experience"
        ]
      },
      {
        "id": 3,
        "title": "ML Coding & Mathematics Screen",
        "description": "Implement core ML algorithms from scratch (e.g., attention mechanism, backpropagation, k-means).",
        "duration": "60 min",
        "tips": [
          "Vectorize with NumPy/PyTorch",
          "Know loss formulations and gradients",
          "Explain variance-bias tradeoffs"
        ]
      },
      {
        "id": 4,
        "title": "Virtual Onsite ML Loop",
        "description": "5 rounds: 1 ML Coding, 2 ML System Design (RAG, Recommendation, or Training Infra), 1 Research Depth, 1 Leadership.",
        "duration": "6 hours",
        "tips": [
          "Design scalable data pipelines and feature stores",
          "Discuss quantization, LoRA, and distributed training",
          "Address model hallucination & safety"
        ]
      },
      {
        "id": 5,
        "title": "Executive Review & Compute Allocation",
        "description": "Hiring debrief and offer package including high compute cluster access and top-tier equity.",
        "duration": "2-3 weeks",
        "tips": [
          "Ask about H100/TPU cluster quotas",
          "Negotiate research publishing freedom",
          "Evaluate team foundation model roadmap"
        ]
      }
    ],
    "sre": [
      {
        "id": 1,
        "title": "Systems Experience Application",
        "description": "Submit profile emphasizing Linux internals, distributed systems reliability, and incident handling for Apple.",
        "duration": "1-2 weeks",
        "tips": [
          "Show on-call incident response leadership",
          "Highlight automation reducing toil",
          "Demonstrate multi-region infra"
        ]
      },
      {
        "id": 2,
        "title": "Systems Technical Screen",
        "description": "Live Linux kernel, networking (TCP/IP, DNS, BGP), and troubleshooting simulation.",
        "duration": "60 min",
        "tips": [
          "Explain strace, top, netstat debugging",
          "Know packet lifecycle end-to-end",
          "Practice systems coding in Go/Python"
        ]
      },
      {
        "id": 3,
        "title": "Non-Abstract Large System Design (NALSD)",
        "description": "Design high-availability systems with 99.999% reliability SLAs and disaster recovery for Apple.",
        "duration": "60 min",
        "tips": [
          "Calculate bandwidth, storage, and IOPS",
          "Design graceful degradation and circuit breakers",
          "Incorporate SLI/SLO and error budgets"
        ]
      },
      {
        "id": 4,
        "title": "Onsite Reliability & Chaos Loop",
        "description": "4-5 rounds: Live troubleshooting sandbox, systems coding, NALSD architecture, culture & incident post-mortems.",
        "duration": "5 hours",
        "tips": [
          "Demonstrate blameless post-mortem culture",
          "Show how you automate operational tasks",
          "Address cascading failure modes"
        ]
      },
      {
        "id": 5,
        "title": "Committee Review & Offer",
        "description": "Compensation and team matching across core infrastructure organizations at Apple.",
        "duration": "1-2 weeks",
        "tips": [
          "SRE compensation matches top SWE tier",
          "Ask about rotation schedules and on-call paging rates",
          "Negotiate equity grants"
        ]
      }
    ],
    "design": [
      {
        "id": 1,
        "title": "Staff/Principal Architecture Profile",
        "description": "Application showcasing multi-year technical vision, cross-org impact, and massive distributed architectures.",
        "duration": "1-3 weeks",
        "tips": [
          "Highlight systems serving millions of QPS",
          "Include whitepapers and tech patents",
          "Quantify infrastructure cost reductions"
        ]
      },
      {
        "id": 2,
        "title": "Director & Tech Fellow Screening",
        "description": "Strategic conversation on multi-year architecture evolutions and organizational technical standards.",
        "duration": "60 min",
        "tips": [
          "Focus on executive communication",
          "Discuss legacy migration strategies",
          "Demonstrate business-aligned tech bets"
        ]
      },
      {
        "id": 3,
        "title": "Architecture Deep-Dive Loop",
        "description": "5-6 rounds: End-to-end distributed systems design, data mesh architecture, cross-team influence, and incident resilience.",
        "duration": "6 hours",
        "tips": [
          "Apply CAP, consensus (Raft/Paxos), and sharding",
          "Demonstrate consensus building across org boundaries",
          "Show technical leadership in ambiguity"
        ]
      },
      {
        "id": 4,
        "title": "Executive Calibration & Vice President Review",
        "description": "Senior Leadership Review committee calibrates Staff/Principal/Distinguished tier at Apple.",
        "duration": "3-4 weeks",
        "tips": [
          "Leveling determines substantial equity multiplier",
          "Demonstrate organization-wide mentorship",
          "Negotiate discretionary grants and governance roles"
        ]
      }
    ],
    "data": [
      {
        "id": 1,
        "title": "Data Science & Experimentation Application",
        "description": "Submit profile emphasizing causal inference, A/B testing at scale, and applied statistical modeling at Apple.",
        "duration": "1-2 weeks",
        "tips": [
          "Highlight product metrics moved",
          "Show experimentation case studies",
          "Mastery in SQL and Python/R"
        ]
      },
      {
        "id": 2,
        "title": "Quantitative & SQL Phone Screen",
        "description": "Complex SQL queries (window functions, self-joins) + probability & statistics fundamentals.",
        "duration": "45 min",
        "tips": [
          "Practice multi-stage CTEs",
          "Know p-values, power analysis, and sample size formulas",
          "Explain variance reduction (CUPED)"
        ]
      },
      {
        "id": 3,
        "title": "Virtual Onsite Data Loop",
        "description": "4-5 rounds: 1 SQL & Data Wrangling, 1 Experimentation & Metrics Design, 1 Applied ML/Stats Modeling, 1 Product Case Study.",
        "duration": "5 hours",
        "tips": [
          "Deconstruct business problems into statistical tests",
          "Address network interference in A/B testing",
          "Communicate data findings to non-technical leaders"
        ]
      },
      {
        "id": 4,
        "title": "Hiring Committee & Product Team Fit",
        "description": "Cross-functional review and team allocation across monetization, product growth, or integrity at Apple.",
        "duration": "2 weeks",
        "tips": [
          "Clarify whether team is research or analytics-focused",
          "Inquire about data platform tooling",
          "Negotiate sign-on package"
        ]
      }
    ],
    "frontend": [
      {
        "id": 1,
        "title": "Frontend Portfolio & Application",
        "description": "Showcase web performance, design systems, accessible UI/UX, and complex web apps for Apple.",
        "duration": "1-2 weeks",
        "tips": [
          "Highlight Core Web Vitals optimization",
          "Showcase state management at scale",
          "Include interactive demo links"
        ]
      },
      {
        "id": 2,
        "title": "JavaScript/TypeScript & DOM Screen",
        "description": "Live coding interview evaluating vanilla JavaScript/TS, DOM manipulation, asynchronous event loop, and closures.",
        "duration": "45-60 min",
        "tips": [
          "Deep understanding of Event Loop, Promises, and Microtasks",
          "Implement debounce, throttle, or deep clone from scratch",
          "Know CSS layout engines (Flexbox, Grid)"
        ]
      },
      {
        "id": 3,
        "title": "Frontend System Architecture & Design",
        "description": "Design client-side architecture for a complex feature (e.g., Infinite Scroll, Collaborative Doc Editor, or Video Feed) at Apple.",
        "duration": "60 min",
        "tips": [
          "Design network caching, optimistic UI, and offline states",
          "Address bundle splitting and tree-shaking",
          "Incorporate accessibility (WCAG) and internationalization (i18n)"
        ]
      },
      {
        "id": 4,
        "title": "Virtual Onsite Frontend Loop",
        "description": "4-5 rounds: 2 UI Component Coding, 1 Web App Architecture, 1 Algorithms/DS, 1 Cross-functional Collaboration (PM & Design).",
        "duration": "5 hours",
        "tips": [
          "Build modular, accessible UI components",
          "Discuss cross-browser rendering and memory leaks",
          "Show strong design empathy and UX intuition"
        ]
      },
      {
        "id": 5,
        "title": "Debrief & Offer Package",
        "description": "Final team allocation to product UI groups across Apple with competitive equity and compensation.",
        "duration": "1-2 weeks",
        "tips": [
          "Frontend engineers have high product visibility",
          "Leverage offers from competing tech firms",
          "Negotiate base and stock grants"
        ]
      }
    ],
    "mobile": [
      {
        "id": 1,
        "title": "Mobile App Application",
        "description": "Submit profile emphasizing iOS (Swift/SwiftUI) or Android (Kotlin/Jetpack Compose) applications with millions of downloads at Apple.",
        "duration": "1-2 weeks",
        "tips": [
          "Link to live App Store or Google Play apps",
          "Highlight app startup time and battery optimizations",
          "Show architecture (MVVM, VIPER, MVI)"
        ]
      },
      {
        "id": 2,
        "title": "Mobile Technical Phone Screen",
        "description": "Live coding testing language fundamentals (Swift memory ARC / Kotlin coroutines) and data structures.",
        "duration": "60 min",
        "tips": [
          "Know multithreading (GCD, Coroutines, Dispatchers)",
          "Understand memory retain cycles and leaks",
          "Write concise and idiomatic code"
        ]
      },
      {
        "id": 3,
        "title": "Mobile System Design (Client Architecture)",
        "description": "Architect a mobile feature at Apple scale (e.g., Instagram Stories, Uber Live Map, or Offline Messaging).",
        "duration": "60 min",
        "tips": [
          "Address local SQLite/CoreData caching",
          "Handle spotty network and sync queues",
          "Optimize image/video caching and memory footprints"
        ]
      },
      {
        "id": 4,
        "title": "Virtual Mobile Onsite Loop",
        "description": "4-5 rounds: 2 Mobile UI/Feature Coding, 1 Mobile System Design, 1 Computer Science DS/Algorithms, 1 Culture & Leadership.",
        "duration": "5 hours",
        "tips": [
          "Implement custom views and gesture animations",
          "Discuss battery efficiency and background tasks",
          "Demonstrate collaborative skills with backend teams"
        ]
      },
      {
        "id": 5,
        "title": "Team Matching & Compensation Offer",
        "description": "Placement within core mobile application teams at Apple with full Big Tech benefits.",
        "duration": "1-2 weeks",
        "tips": [
          "Mobile expertise is in high industry demand",
          "Ask about CI/CD release trains and test automation",
          "Negotiate stock and bonuses"
        ]
      }
    ],
    "security": [
      {
        "id": 1,
        "title": "Security Engineering Application",
        "description": "Submit profile highlighting AppSec, Cloud Infrastructure Security, Cryptography, or Threat Modeling for Apple.",
        "duration": "1-2 weeks",
        "tips": [
          "Highlight CVEs discovered, bug bounties, or CTF achievements",
          "Show experience with zero-trust architecture",
          "Demonstrate automated vulnerability scanning"
        ]
      },
      {
        "id": 2,
        "title": "Security Fundamentals & Coding Screen",
        "description": "Assess secure coding practices, cryptography primitives, and identifying vulnerabilities (OWASP Top 10).",
        "duration": "60 min",
        "tips": [
          "Identify SQLi, XSS, SSRF, and CSRF patterns",
          "Understand public key infrastructure (PKI) and TLS",
          "Code security tooling in Python, Go, or C++"
        ]
      },
      {
        "id": 3,
        "title": "Security Architecture & Threat Modeling",
        "description": "Perform comprehensive threat modeling for a new service at Apple (using STRIDE or PASTA frameworks).",
        "duration": "60 min",
        "tips": [
          "Identify trust boundaries and attack surfaces",
          "Design defense-in-depth security controls",
          "Address authentication, authorization (OAuth/OIDC), and IAM"
        ]
      },
      {
        "id": 4,
        "title": "Onsite Security Engineering Loop",
        "description": "4-5 rounds: 1 Secure Code Review/Exploitation, 1 Security Architecture, 1 Incident Response/Forensics, 1 Infrastructure Security, 1 Behavioral.",
        "duration": "5 hours",
        "tips": [
          "Demonstrate pragmatic security without blocking business velocity",
          "Know container/K8s security and secrets management",
          "Show calm and structured incident response instincts"
        ]
      },
      {
        "id": 5,
        "title": "Debrief & Security Org Placement",
        "description": "Placement in Red Team, Blue Team, Product Security, or Cloud Security groups at Apple.",
        "duration": "2 weeks",
        "tips": [
          "Security engineers receive top-tier engineering pay",
          "Ask about security tooling budget and organizational leverage",
          "Negotiate sign-on bonuses"
        ]
      }
    ],
    "devops": [
      {
        "id": 1,
        "title": "Cloud & Infrastructure Profile",
        "description": "Submit profile highlighting Infrastructure-as-Code (Terraform), Kubernetes orchestration, and automated CI/CD pipelines at Apple.",
        "duration": "1-2 weeks",
        "tips": [
          "Highlight multi-cluster Kubernetes deployments",
          "Show GitOps and zero-downtime deployment pipelines",
          "Quantify infrastructure cost savings"
        ]
      },
      {
        "id": 2,
        "title": "Automation & Scripting Screen",
        "description": "Hands-on scripting (Python/Go/Bash), Linux systems diagnosis, and Docker container internals.",
        "duration": "60 min",
        "tips": [
          "Demonstrate clean API scripting and error handling",
          "Understand cgroups, namespaces, and overlay networks",
          "Automate real infrastructure configuration tasks"
        ]
      },
      {
        "id": 3,
        "title": "Cloud Architecture & Pipeline Design",
        "description": "Design scalable, multi-region CI/CD pipelines and deployment infrastructure for Apple.",
        "duration": "60 min",
        "tips": [
          "Design canary and blue-green deployment strategies",
          "Incorporate policy-as-code and automated security scans",
          "Design centralized observability (Prometheus/Grafana/OpenTelemetry)"
        ]
      },
      {
        "id": 4,
        "title": "Onsite Infrastructure Loop",
        "description": "4-5 rounds: 1 Cloud Architecture, 1 Systems Scripting, 1 Troubleshooting & Debugging, 1 Configuration Management, 1 Culture.",
        "duration": "5 hours",
        "tips": [
          "Show how you enable developer self-service",
          "Address disaster recovery and cross-region failovers",
          "Demonstrate collaborative support mindset"
        ]
      },
      {
        "id": 5,
        "title": "Offer & Platform Team Allocation",
        "description": "Placement on central Developer Experience, Cloud Foundation, or Core Platform teams at Apple.",
        "duration": "1-2 weeks",
        "tips": [
          "Platform engineering is a key company investment",
          "Inquire about tech stack modernization roadmaps",
          "Negotiate competitive total compensation"
        ]
      }
    ],
    "sdet": [
      {
        "id": 1,
        "title": "SDET / QA Automation Application",
        "description": "Submit profile highlighting automated test framework design, end-to-end testing, and performance testing at Apple.",
        "duration": "1-2 weeks",
        "tips": [
          "Highlight custom test harness development",
          "Quantify bug detection rates and release velocity improvements",
          "Show experience with Playwright, Selenium, or Cypress"
        ]
      },
      {
        "id": 2,
        "title": "Coding & Test Strategy Phone Screen",
        "description": "Algorithmic coding round + deep dive into test design, edge case derivation, and unit test mocking.",
        "duration": "60 min",
        "tips": [
          "Solve the algorithmic problem with production code",
          "Proactively write comprehensive unit test cases",
          "Discuss boundary value analysis and equivalence partitioning"
        ]
      },
      {
        "id": 3,
        "title": "Test Framework & System Architecture",
        "description": "Design distributed automated test infrastructure capable of executing millions of test runs daily for Apple.",
        "duration": "60 min",
        "tips": [
          "Design test parallelization and shard execution",
          "Handle test flakiness and retry heuristics",
          "Integrate automated regression testing into CI/CD"
        ]
      },
      {
        "id": 4,
        "title": "Onsite Quality Engineering Loop",
        "description": "4-5 rounds: 2 Coding & Data Structures, 1 Test Framework Architecture, 1 Bug Finding & Quality Strategy, 1 Culture & Leadership.",
        "duration": "5 hours",
        "tips": [
          "Demonstrate engineering rigor equal to SWE candidates",
          "Show customer advocacy for quality and performance",
          "Explain how you coach engineering teams on testability"
        ]
      },
      {
        "id": 5,
        "title": "Hiring Committee & Offer",
        "description": "Placement within core quality engineering and release automation teams across Apple.",
        "duration": "1-2 weeks",
        "tips": [
          "SDETs with strong coding earn SWE-equivalent packages",
          "Ask about release gating authority",
          "Negotiate equity compensation"
        ]
      }
    ],
    "tpm": [
      {
        "id": 1,
        "title": "TPM Resume & Track Record",
        "description": "Submit profile emphasizing technical program execution, cross-organizational delivery, and dependency management for Apple.",
        "duration": "1-2 weeks",
        "tips": [
          "Highlight multi-team programs shipped on time",
          "Quantify technical scope (datacenter builds, cloud migrations)",
          "Demonstrate technical background (CS or Engineering degree)"
        ]
      },
      {
        "id": 2,
        "title": "Technical Program Diagnostic Screen",
        "description": "Evaluate program lifecycle management, handling ambiguity, and risk mitigation strategies.",
        "duration": "45 min",
        "tips": [
          "Prepare 2-minute elevator story on your biggest technical program",
          "Show proactive risk identification before crises happen",
          "Demonstrate executive reporting clarity"
        ]
      },
      {
        "id": 3,
        "title": "Technical Depth & Architecture Review",
        "description": "TPMs at Apple must speak peer-to-peer with senior architects. Walk through a complex distributed architecture.",
        "duration": "60 min",
        "tips": [
          "Explain API contracts, data flows, and bottleneck trade-offs",
          "Show how you arbitrate technical disagreements between teams",
          "Understand latency, throughput, and hardware constraints"
        ]
      },
      {
        "id": 4,
        "title": "Virtual Onsite TPM Loop",
        "description": "5 rounds: 1 Program Execution & Delivery, 1 Technical Architecture, 1 Cross-functional Leadership & Influence, 1 Risk & Crisis Management, 1 Culture.",
        "duration": "5 hours",
        "tips": [
          "Show how you align conflicting VP and director priorities",
          "Demonstrate structured milestone tracking without bureaucratic overhead",
          "Prepare STAR stories highlighting resilience in setbacks"
        ]
      },
      {
        "id": 5,
        "title": "Executive Debrief & Offer",
        "description": "Senior management review and placement within high-priority strategic initiatives at Apple.",
        "duration": "2 weeks",
        "tips": [
          "TPMs enjoy broad cross-company visibility",
          "Inquire about executive sponsorship and program budgets",
          "Negotiate sign-on bonuses and RSUs"
        ]
      }
    ]
  },
  "microsoft": {
    "swe": [
      {
        "id": 1,
        "title": "Application & LinkedIn Screening",
        "description": "Apply on Microsoft Careers. Microsoft recruiters actively scout through LinkedIn and GitHub.",
        "duration": "1-2 weeks",
        "tips": [
          "Highlight cloud or enterprise software",
          "Clean GitHub contributions",
          "Emphasize Growth Mindset"
        ]
      },
      {
        "id": 2,
        "title": "Initial Recruiter Screen",
        "description": "30-min chat reviewing technical preferences (Azure, Office 365, Windows, Developer Tools).",
        "duration": "30 min",
        "tips": [
          "Demonstrate collaborative spirit",
          "Discuss interest in Microsoft cloud platforms",
          "Clarify target level (59-65)"
        ]
      },
      {
        "id": 3,
        "title": "Codility Assessment or Phone Screen",
        "description": "60-min coding round focused on clean code, edge testing, and practical algorithmics.",
        "duration": "60 min",
        "tips": [
          "Write modular and readable code",
          "Test edge cases before running",
          "Discuss Big-O proactively"
        ]
      },
      {
        "id": 4,
        "title": "Virtual Onsite Loop & 'As Appropriate'",
        "description": "4 rounds: 2-3 technical coding, 1 system design, 1 crucial 'As Appropriate' (AA) hiring manager round.",
        "duration": "4-5 hours",
        "tips": [
          "AA round makes the final hiring call",
          "Emphasize Growth Mindset and learning from failures",
          "Design for enterprise scale & reliability"
        ]
      },
      {
        "id": 5,
        "title": "Offer Letter & Benefits Package",
        "description": "Competitive offer with industry-leading 401(k) match, annual stock grants, and work-life balance.",
        "duration": "1-2 weeks",
        "tips": [
          "Stock vests quarterly after 1 year",
          "Great work-life balance reputation",
          "Negotiate base and stock grants"
        ]
      }
    ],
    "pm": [
      {
        "id": 1,
        "title": "PM Portfolio & Application",
        "description": "Submit PM resume emphasizing shipped products, user metrics, and business ROI at Microsoft.",
        "duration": "1-2 weeks",
        "tips": [
          "Quantify DAU/MAU and revenue growth",
          "Show technical cross-functional fluency",
          "Include product teardowns"
        ]
      },
      {
        "id": 2,
        "title": "Recruiter Diagnostic Screen",
        "description": "Assess product passion, track record, communication cadence, and organizational alignment.",
        "duration": "30 min",
        "tips": [
          "Prepare 90-second product journey",
          "Know Microsoft's core competitive threats",
          "Highlight customer empathy"
        ]
      },
      {
        "id": 3,
        "title": "Product Sense & Design Phone Screen",
        "description": "45-min interview: 'Design product X for demographic Y' or 'How would you improve feature Z?'.",
        "duration": "45 min",
        "tips": [
          "Use CIRCLES or similar framework",
          "Identify target user personas and pain points",
          "Prioritize features using trade-offs"
        ]
      },
      {
        "id": 4,
        "title": "Virtual Onsite Loop",
        "description": "4-5 rounds: 2 Product Sense & Execution, 1 Analytical & Metrics, 1 Technical Fluency, 1 Leadership.",
        "duration": "5 hours",
        "tips": [
          "Define North Star and guardrail metrics",
          "Demonstrate how you collaborate with SWE leads",
          "Prepare STAR stories of product failures"
        ]
      },
      {
        "id": 5,
        "title": "Debrief & Team Allocation",
        "description": "Calibration review by senior product directors at Microsoft followed by leveled compensation offer.",
        "duration": "1-3 weeks",
        "tips": [
          "Clarify product ownership scope",
          "Negotiate equity and signing bonus",
          "Evaluate team engineering velocity"
        ]
      }
    ],
    "aiml": [
      {
        "id": 1,
        "title": "Research / Applied ML Application",
        "description": "Submit profile highlighting model training, ML pipelines, and production inference scale at Microsoft.",
        "duration": "1-2 weeks",
        "tips": [
          "Cite publications (NeurIPS, ICML, CVPR)",
          "Highlight PyTorch/JAX contributions",
          "Show throughput/latency optimization"
        ]
      },
      {
        "id": 2,
        "title": "ML Recruiter Screen",
        "description": "Clarify specialization: LLMs, Generative AI, Computer Vision, Recommendation Systems, or RL.",
        "duration": "30 min",
        "tips": [
          "Differentiate research vs applied interests",
          "Reference recent Microsoft AI breakthroughs",
          "Outline GPU cluster experience"
        ]
      },
      {
        "id": 3,
        "title": "ML Coding & Mathematics Screen",
        "description": "Implement core ML algorithms from scratch (e.g., attention mechanism, backpropagation, k-means).",
        "duration": "60 min",
        "tips": [
          "Vectorize with NumPy/PyTorch",
          "Know loss formulations and gradients",
          "Explain variance-bias tradeoffs"
        ]
      },
      {
        "id": 4,
        "title": "Virtual Onsite ML Loop",
        "description": "5 rounds: 1 ML Coding, 2 ML System Design (RAG, Recommendation, or Training Infra), 1 Research Depth, 1 Leadership.",
        "duration": "6 hours",
        "tips": [
          "Design scalable data pipelines and feature stores",
          "Discuss quantization, LoRA, and distributed training",
          "Address model hallucination & safety"
        ]
      },
      {
        "id": 5,
        "title": "Executive Review & Compute Allocation",
        "description": "Hiring debrief and offer package including high compute cluster access and top-tier equity.",
        "duration": "2-3 weeks",
        "tips": [
          "Ask about H100/TPU cluster quotas",
          "Negotiate research publishing freedom",
          "Evaluate team foundation model roadmap"
        ]
      }
    ],
    "sre": [
      {
        "id": 1,
        "title": "Systems Experience Application",
        "description": "Submit profile emphasizing Linux internals, distributed systems reliability, and incident handling for Microsoft.",
        "duration": "1-2 weeks",
        "tips": [
          "Show on-call incident response leadership",
          "Highlight automation reducing toil",
          "Demonstrate multi-region infra"
        ]
      },
      {
        "id": 2,
        "title": "Systems Technical Screen",
        "description": "Live Linux kernel, networking (TCP/IP, DNS, BGP), and troubleshooting simulation.",
        "duration": "60 min",
        "tips": [
          "Explain strace, top, netstat debugging",
          "Know packet lifecycle end-to-end",
          "Practice systems coding in Go/Python"
        ]
      },
      {
        "id": 3,
        "title": "Non-Abstract Large System Design (NALSD)",
        "description": "Design high-availability systems with 99.999% reliability SLAs and disaster recovery for Microsoft.",
        "duration": "60 min",
        "tips": [
          "Calculate bandwidth, storage, and IOPS",
          "Design graceful degradation and circuit breakers",
          "Incorporate SLI/SLO and error budgets"
        ]
      },
      {
        "id": 4,
        "title": "Onsite Reliability & Chaos Loop",
        "description": "4-5 rounds: Live troubleshooting sandbox, systems coding, NALSD architecture, culture & incident post-mortems.",
        "duration": "5 hours",
        "tips": [
          "Demonstrate blameless post-mortem culture",
          "Show how you automate operational tasks",
          "Address cascading failure modes"
        ]
      },
      {
        "id": 5,
        "title": "Committee Review & Offer",
        "description": "Compensation and team matching across core infrastructure organizations at Microsoft.",
        "duration": "1-2 weeks",
        "tips": [
          "SRE compensation matches top SWE tier",
          "Ask about rotation schedules and on-call paging rates",
          "Negotiate equity grants"
        ]
      }
    ],
    "design": [
      {
        "id": 1,
        "title": "Staff/Principal Architecture Profile",
        "description": "Application showcasing multi-year technical vision, cross-org impact, and massive distributed architectures.",
        "duration": "1-3 weeks",
        "tips": [
          "Highlight systems serving millions of QPS",
          "Include whitepapers and tech patents",
          "Quantify infrastructure cost reductions"
        ]
      },
      {
        "id": 2,
        "title": "Director & Tech Fellow Screening",
        "description": "Strategic conversation on multi-year architecture evolutions and organizational technical standards.",
        "duration": "60 min",
        "tips": [
          "Focus on executive communication",
          "Discuss legacy migration strategies",
          "Demonstrate business-aligned tech bets"
        ]
      },
      {
        "id": 3,
        "title": "Architecture Deep-Dive Loop",
        "description": "5-6 rounds: End-to-end distributed systems design, data mesh architecture, cross-team influence, and incident resilience.",
        "duration": "6 hours",
        "tips": [
          "Apply CAP, consensus (Raft/Paxos), and sharding",
          "Demonstrate consensus building across org boundaries",
          "Show technical leadership in ambiguity"
        ]
      },
      {
        "id": 4,
        "title": "Executive Calibration & Vice President Review",
        "description": "Senior Leadership Review committee calibrates Staff/Principal/Distinguished tier at Microsoft.",
        "duration": "3-4 weeks",
        "tips": [
          "Leveling determines substantial equity multiplier",
          "Demonstrate organization-wide mentorship",
          "Negotiate discretionary grants and governance roles"
        ]
      }
    ],
    "data": [
      {
        "id": 1,
        "title": "Data Science & Experimentation Application",
        "description": "Submit profile emphasizing causal inference, A/B testing at scale, and applied statistical modeling at Microsoft.",
        "duration": "1-2 weeks",
        "tips": [
          "Highlight product metrics moved",
          "Show experimentation case studies",
          "Mastery in SQL and Python/R"
        ]
      },
      {
        "id": 2,
        "title": "Quantitative & SQL Phone Screen",
        "description": "Complex SQL queries (window functions, self-joins) + probability & statistics fundamentals.",
        "duration": "45 min",
        "tips": [
          "Practice multi-stage CTEs",
          "Know p-values, power analysis, and sample size formulas",
          "Explain variance reduction (CUPED)"
        ]
      },
      {
        "id": 3,
        "title": "Virtual Onsite Data Loop",
        "description": "4-5 rounds: 1 SQL & Data Wrangling, 1 Experimentation & Metrics Design, 1 Applied ML/Stats Modeling, 1 Product Case Study.",
        "duration": "5 hours",
        "tips": [
          "Deconstruct business problems into statistical tests",
          "Address network interference in A/B testing",
          "Communicate data findings to non-technical leaders"
        ]
      },
      {
        "id": 4,
        "title": "Hiring Committee & Product Team Fit",
        "description": "Cross-functional review and team allocation across monetization, product growth, or integrity at Microsoft.",
        "duration": "2 weeks",
        "tips": [
          "Clarify whether team is research or analytics-focused",
          "Inquire about data platform tooling",
          "Negotiate sign-on package"
        ]
      }
    ],
    "frontend": [
      {
        "id": 1,
        "title": "Frontend Portfolio & Application",
        "description": "Showcase web performance, design systems, accessible UI/UX, and complex web apps for Microsoft.",
        "duration": "1-2 weeks",
        "tips": [
          "Highlight Core Web Vitals optimization",
          "Showcase state management at scale",
          "Include interactive demo links"
        ]
      },
      {
        "id": 2,
        "title": "JavaScript/TypeScript & DOM Screen",
        "description": "Live coding interview evaluating vanilla JavaScript/TS, DOM manipulation, asynchronous event loop, and closures.",
        "duration": "45-60 min",
        "tips": [
          "Deep understanding of Event Loop, Promises, and Microtasks",
          "Implement debounce, throttle, or deep clone from scratch",
          "Know CSS layout engines (Flexbox, Grid)"
        ]
      },
      {
        "id": 3,
        "title": "Frontend System Architecture & Design",
        "description": "Design client-side architecture for a complex feature (e.g., Infinite Scroll, Collaborative Doc Editor, or Video Feed) at Microsoft.",
        "duration": "60 min",
        "tips": [
          "Design network caching, optimistic UI, and offline states",
          "Address bundle splitting and tree-shaking",
          "Incorporate accessibility (WCAG) and internationalization (i18n)"
        ]
      },
      {
        "id": 4,
        "title": "Virtual Onsite Frontend Loop",
        "description": "4-5 rounds: 2 UI Component Coding, 1 Web App Architecture, 1 Algorithms/DS, 1 Cross-functional Collaboration (PM & Design).",
        "duration": "5 hours",
        "tips": [
          "Build modular, accessible UI components",
          "Discuss cross-browser rendering and memory leaks",
          "Show strong design empathy and UX intuition"
        ]
      },
      {
        "id": 5,
        "title": "Debrief & Offer Package",
        "description": "Final team allocation to product UI groups across Microsoft with competitive equity and compensation.",
        "duration": "1-2 weeks",
        "tips": [
          "Frontend engineers have high product visibility",
          "Leverage offers from competing tech firms",
          "Negotiate base and stock grants"
        ]
      }
    ],
    "mobile": [
      {
        "id": 1,
        "title": "Mobile App Application",
        "description": "Submit profile emphasizing iOS (Swift/SwiftUI) or Android (Kotlin/Jetpack Compose) applications with millions of downloads at Microsoft.",
        "duration": "1-2 weeks",
        "tips": [
          "Link to live App Store or Google Play apps",
          "Highlight app startup time and battery optimizations",
          "Show architecture (MVVM, VIPER, MVI)"
        ]
      },
      {
        "id": 2,
        "title": "Mobile Technical Phone Screen",
        "description": "Live coding testing language fundamentals (Swift memory ARC / Kotlin coroutines) and data structures.",
        "duration": "60 min",
        "tips": [
          "Know multithreading (GCD, Coroutines, Dispatchers)",
          "Understand memory retain cycles and leaks",
          "Write concise and idiomatic code"
        ]
      },
      {
        "id": 3,
        "title": "Mobile System Design (Client Architecture)",
        "description": "Architect a mobile feature at Microsoft scale (e.g., Instagram Stories, Uber Live Map, or Offline Messaging).",
        "duration": "60 min",
        "tips": [
          "Address local SQLite/CoreData caching",
          "Handle spotty network and sync queues",
          "Optimize image/video caching and memory footprints"
        ]
      },
      {
        "id": 4,
        "title": "Virtual Mobile Onsite Loop",
        "description": "4-5 rounds: 2 Mobile UI/Feature Coding, 1 Mobile System Design, 1 Computer Science DS/Algorithms, 1 Culture & Leadership.",
        "duration": "5 hours",
        "tips": [
          "Implement custom views and gesture animations",
          "Discuss battery efficiency and background tasks",
          "Demonstrate collaborative skills with backend teams"
        ]
      },
      {
        "id": 5,
        "title": "Team Matching & Compensation Offer",
        "description": "Placement within core mobile application teams at Microsoft with full Big Tech benefits.",
        "duration": "1-2 weeks",
        "tips": [
          "Mobile expertise is in high industry demand",
          "Ask about CI/CD release trains and test automation",
          "Negotiate stock and bonuses"
        ]
      }
    ],
    "security": [
      {
        "id": 1,
        "title": "Security Engineering Application",
        "description": "Submit profile highlighting AppSec, Cloud Infrastructure Security, Cryptography, or Threat Modeling for Microsoft.",
        "duration": "1-2 weeks",
        "tips": [
          "Highlight CVEs discovered, bug bounties, or CTF achievements",
          "Show experience with zero-trust architecture",
          "Demonstrate automated vulnerability scanning"
        ]
      },
      {
        "id": 2,
        "title": "Security Fundamentals & Coding Screen",
        "description": "Assess secure coding practices, cryptography primitives, and identifying vulnerabilities (OWASP Top 10).",
        "duration": "60 min",
        "tips": [
          "Identify SQLi, XSS, SSRF, and CSRF patterns",
          "Understand public key infrastructure (PKI) and TLS",
          "Code security tooling in Python, Go, or C++"
        ]
      },
      {
        "id": 3,
        "title": "Security Architecture & Threat Modeling",
        "description": "Perform comprehensive threat modeling for a new service at Microsoft (using STRIDE or PASTA frameworks).",
        "duration": "60 min",
        "tips": [
          "Identify trust boundaries and attack surfaces",
          "Design defense-in-depth security controls",
          "Address authentication, authorization (OAuth/OIDC), and IAM"
        ]
      },
      {
        "id": 4,
        "title": "Onsite Security Engineering Loop",
        "description": "4-5 rounds: 1 Secure Code Review/Exploitation, 1 Security Architecture, 1 Incident Response/Forensics, 1 Infrastructure Security, 1 Behavioral.",
        "duration": "5 hours",
        "tips": [
          "Demonstrate pragmatic security without blocking business velocity",
          "Know container/K8s security and secrets management",
          "Show calm and structured incident response instincts"
        ]
      },
      {
        "id": 5,
        "title": "Debrief & Security Org Placement",
        "description": "Placement in Red Team, Blue Team, Product Security, or Cloud Security groups at Microsoft.",
        "duration": "2 weeks",
        "tips": [
          "Security engineers receive top-tier engineering pay",
          "Ask about security tooling budget and organizational leverage",
          "Negotiate sign-on bonuses"
        ]
      }
    ],
    "devops": [
      {
        "id": 1,
        "title": "Cloud & Infrastructure Profile",
        "description": "Submit profile highlighting Infrastructure-as-Code (Terraform), Kubernetes orchestration, and automated CI/CD pipelines at Microsoft.",
        "duration": "1-2 weeks",
        "tips": [
          "Highlight multi-cluster Kubernetes deployments",
          "Show GitOps and zero-downtime deployment pipelines",
          "Quantify infrastructure cost savings"
        ]
      },
      {
        "id": 2,
        "title": "Automation & Scripting Screen",
        "description": "Hands-on scripting (Python/Go/Bash), Linux systems diagnosis, and Docker container internals.",
        "duration": "60 min",
        "tips": [
          "Demonstrate clean API scripting and error handling",
          "Understand cgroups, namespaces, and overlay networks",
          "Automate real infrastructure configuration tasks"
        ]
      },
      {
        "id": 3,
        "title": "Cloud Architecture & Pipeline Design",
        "description": "Design scalable, multi-region CI/CD pipelines and deployment infrastructure for Microsoft.",
        "duration": "60 min",
        "tips": [
          "Design canary and blue-green deployment strategies",
          "Incorporate policy-as-code and automated security scans",
          "Design centralized observability (Prometheus/Grafana/OpenTelemetry)"
        ]
      },
      {
        "id": 4,
        "title": "Onsite Infrastructure Loop",
        "description": "4-5 rounds: 1 Cloud Architecture, 1 Systems Scripting, 1 Troubleshooting & Debugging, 1 Configuration Management, 1 Culture.",
        "duration": "5 hours",
        "tips": [
          "Show how you enable developer self-service",
          "Address disaster recovery and cross-region failovers",
          "Demonstrate collaborative support mindset"
        ]
      },
      {
        "id": 5,
        "title": "Offer & Platform Team Allocation",
        "description": "Placement on central Developer Experience, Cloud Foundation, or Core Platform teams at Microsoft.",
        "duration": "1-2 weeks",
        "tips": [
          "Platform engineering is a key company investment",
          "Inquire about tech stack modernization roadmaps",
          "Negotiate competitive total compensation"
        ]
      }
    ],
    "sdet": [
      {
        "id": 1,
        "title": "SDET / QA Automation Application",
        "description": "Submit profile highlighting automated test framework design, end-to-end testing, and performance testing at Microsoft.",
        "duration": "1-2 weeks",
        "tips": [
          "Highlight custom test harness development",
          "Quantify bug detection rates and release velocity improvements",
          "Show experience with Playwright, Selenium, or Cypress"
        ]
      },
      {
        "id": 2,
        "title": "Coding & Test Strategy Phone Screen",
        "description": "Algorithmic coding round + deep dive into test design, edge case derivation, and unit test mocking.",
        "duration": "60 min",
        "tips": [
          "Solve the algorithmic problem with production code",
          "Proactively write comprehensive unit test cases",
          "Discuss boundary value analysis and equivalence partitioning"
        ]
      },
      {
        "id": 3,
        "title": "Test Framework & System Architecture",
        "description": "Design distributed automated test infrastructure capable of executing millions of test runs daily for Microsoft.",
        "duration": "60 min",
        "tips": [
          "Design test parallelization and shard execution",
          "Handle test flakiness and retry heuristics",
          "Integrate automated regression testing into CI/CD"
        ]
      },
      {
        "id": 4,
        "title": "Onsite Quality Engineering Loop",
        "description": "4-5 rounds: 2 Coding & Data Structures, 1 Test Framework Architecture, 1 Bug Finding & Quality Strategy, 1 Culture & Leadership.",
        "duration": "5 hours",
        "tips": [
          "Demonstrate engineering rigor equal to SWE candidates",
          "Show customer advocacy for quality and performance",
          "Explain how you coach engineering teams on testability"
        ]
      },
      {
        "id": 5,
        "title": "Hiring Committee & Offer",
        "description": "Placement within core quality engineering and release automation teams across Microsoft.",
        "duration": "1-2 weeks",
        "tips": [
          "SDETs with strong coding earn SWE-equivalent packages",
          "Ask about release gating authority",
          "Negotiate equity compensation"
        ]
      }
    ],
    "tpm": [
      {
        "id": 1,
        "title": "TPM Resume & Track Record",
        "description": "Submit profile emphasizing technical program execution, cross-organizational delivery, and dependency management for Microsoft.",
        "duration": "1-2 weeks",
        "tips": [
          "Highlight multi-team programs shipped on time",
          "Quantify technical scope (datacenter builds, cloud migrations)",
          "Demonstrate technical background (CS or Engineering degree)"
        ]
      },
      {
        "id": 2,
        "title": "Technical Program Diagnostic Screen",
        "description": "Evaluate program lifecycle management, handling ambiguity, and risk mitigation strategies.",
        "duration": "45 min",
        "tips": [
          "Prepare 2-minute elevator story on your biggest technical program",
          "Show proactive risk identification before crises happen",
          "Demonstrate executive reporting clarity"
        ]
      },
      {
        "id": 3,
        "title": "Technical Depth & Architecture Review",
        "description": "TPMs at Microsoft must speak peer-to-peer with senior architects. Walk through a complex distributed architecture.",
        "duration": "60 min",
        "tips": [
          "Explain API contracts, data flows, and bottleneck trade-offs",
          "Show how you arbitrate technical disagreements between teams",
          "Understand latency, throughput, and hardware constraints"
        ]
      },
      {
        "id": 4,
        "title": "Virtual Onsite TPM Loop",
        "description": "5 rounds: 1 Program Execution & Delivery, 1 Technical Architecture, 1 Cross-functional Leadership & Influence, 1 Risk & Crisis Management, 1 Culture.",
        "duration": "5 hours",
        "tips": [
          "Show how you align conflicting VP and director priorities",
          "Demonstrate structured milestone tracking without bureaucratic overhead",
          "Prepare STAR stories highlighting resilience in setbacks"
        ]
      },
      {
        "id": 5,
        "title": "Executive Debrief & Offer",
        "description": "Senior management review and placement within high-priority strategic initiatives at Microsoft.",
        "duration": "2 weeks",
        "tips": [
          "TPMs enjoy broad cross-company visibility",
          "Inquire about executive sponsorship and program budgets",
          "Negotiate sign-on bonuses and RSUs"
        ]
      }
    ]
  },
  "netflix": {
    "swe": [
      {
        "id": 1,
        "title": "Senior-Only Application",
        "description": "Netflix hires primarily Senior (L5+) engineers with battle-tested distributed systems experience.",
        "duration": "1-2 weeks",
        "tips": [
          "Read the Netflix Culture Memo",
          "Demonstrate high autonomy and ownership",
          "Highlight cloud-native microservices"
        ]
      },
      {
        "id": 2,
        "title": "Recruiter In-Depth Culture Screen",
        "description": "45-min screen testing cultural fit: 'Freedom and Responsibility' and 'Context, Not Control'.",
        "duration": "45 min",
        "tips": [
          "Expect probing questions on giving candid feedback",
          "Show self-direction",
          "Align with high-performance culture"
        ]
      },
      {
        "id": 3,
        "title": "Technical Screen with Senior Engineer",
        "description": "60-min practical coding or architecture challenge based on real streaming/infra issues.",
        "duration": "60 min",
        "tips": [
          "No esoteric trivia; practical architectures",
          "Discuss concurrency and failover",
          "Show production debugging instincts"
        ]
      },
      {
        "id": 4,
        "title": "The Onsite Panel (Part 1 & 2)",
        "description": "Split over 2 sessions: Part 1 technical deep-dive (coding + systems); Part 2 Director & HR culture screen.",
        "duration": "5 hours",
        "tips": [
          "Culture fit is as weighted as technical chops",
          "Directors probe for strategic thinking",
          "Demonstrate how you handle ambiguity"
        ]
      },
      {
        "id": 5,
        "title": "Top-of-Market All-Cash Offer",
        "description": "Netflix pays top of personal market: choose your own exact split between all-cash salary and stock options.",
        "duration": "3-5 days",
        "tips": [
          "Highest base salaries in tech",
          "Options vest monthly with immediate liquidity",
          "No tiered vesting cliffs"
        ]
      }
    ],
    "pm": [
      {
        "id": 1,
        "title": "PM Portfolio & Application",
        "description": "Submit PM resume emphasizing shipped products, user metrics, and business ROI at Netflix.",
        "duration": "1-2 weeks",
        "tips": [
          "Quantify DAU/MAU and revenue growth",
          "Show technical cross-functional fluency",
          "Include product teardowns"
        ]
      },
      {
        "id": 2,
        "title": "Recruiter Diagnostic Screen",
        "description": "Assess product passion, track record, communication cadence, and organizational alignment.",
        "duration": "30 min",
        "tips": [
          "Prepare 90-second product journey",
          "Know Netflix's core competitive threats",
          "Highlight customer empathy"
        ]
      },
      {
        "id": 3,
        "title": "Product Sense & Design Phone Screen",
        "description": "45-min interview: 'Design product X for demographic Y' or 'How would you improve feature Z?'.",
        "duration": "45 min",
        "tips": [
          "Use CIRCLES or similar framework",
          "Identify target user personas and pain points",
          "Prioritize features using trade-offs"
        ]
      },
      {
        "id": 4,
        "title": "Virtual Onsite Loop",
        "description": "4-5 rounds: 2 Product Sense & Execution, 1 Analytical & Metrics, 1 Technical Fluency, 1 Leadership.",
        "duration": "5 hours",
        "tips": [
          "Define North Star and guardrail metrics",
          "Demonstrate how you collaborate with SWE leads",
          "Prepare STAR stories of product failures"
        ]
      },
      {
        "id": 5,
        "title": "Debrief & Team Allocation",
        "description": "Calibration review by senior product directors at Netflix followed by leveled compensation offer.",
        "duration": "1-3 weeks",
        "tips": [
          "Clarify product ownership scope",
          "Negotiate equity and signing bonus",
          "Evaluate team engineering velocity"
        ]
      }
    ],
    "aiml": [
      {
        "id": 1,
        "title": "Research / Applied ML Application",
        "description": "Submit profile highlighting model training, ML pipelines, and production inference scale at Netflix.",
        "duration": "1-2 weeks",
        "tips": [
          "Cite publications (NeurIPS, ICML, CVPR)",
          "Highlight PyTorch/JAX contributions",
          "Show throughput/latency optimization"
        ]
      },
      {
        "id": 2,
        "title": "ML Recruiter Screen",
        "description": "Clarify specialization: LLMs, Generative AI, Computer Vision, Recommendation Systems, or RL.",
        "duration": "30 min",
        "tips": [
          "Differentiate research vs applied interests",
          "Reference recent Netflix AI breakthroughs",
          "Outline GPU cluster experience"
        ]
      },
      {
        "id": 3,
        "title": "ML Coding & Mathematics Screen",
        "description": "Implement core ML algorithms from scratch (e.g., attention mechanism, backpropagation, k-means).",
        "duration": "60 min",
        "tips": [
          "Vectorize with NumPy/PyTorch",
          "Know loss formulations and gradients",
          "Explain variance-bias tradeoffs"
        ]
      },
      {
        "id": 4,
        "title": "Virtual Onsite ML Loop",
        "description": "5 rounds: 1 ML Coding, 2 ML System Design (RAG, Recommendation, or Training Infra), 1 Research Depth, 1 Leadership.",
        "duration": "6 hours",
        "tips": [
          "Design scalable data pipelines and feature stores",
          "Discuss quantization, LoRA, and distributed training",
          "Address model hallucination & safety"
        ]
      },
      {
        "id": 5,
        "title": "Executive Review & Compute Allocation",
        "description": "Hiring debrief and offer package including high compute cluster access and top-tier equity.",
        "duration": "2-3 weeks",
        "tips": [
          "Ask about H100/TPU cluster quotas",
          "Negotiate research publishing freedom",
          "Evaluate team foundation model roadmap"
        ]
      }
    ],
    "sre": [
      {
        "id": 1,
        "title": "Systems Experience Application",
        "description": "Submit profile emphasizing Linux internals, distributed systems reliability, and incident handling for Netflix.",
        "duration": "1-2 weeks",
        "tips": [
          "Show on-call incident response leadership",
          "Highlight automation reducing toil",
          "Demonstrate multi-region infra"
        ]
      },
      {
        "id": 2,
        "title": "Systems Technical Screen",
        "description": "Live Linux kernel, networking (TCP/IP, DNS, BGP), and troubleshooting simulation.",
        "duration": "60 min",
        "tips": [
          "Explain strace, top, netstat debugging",
          "Know packet lifecycle end-to-end",
          "Practice systems coding in Go/Python"
        ]
      },
      {
        "id": 3,
        "title": "Non-Abstract Large System Design (NALSD)",
        "description": "Design high-availability systems with 99.999% reliability SLAs and disaster recovery for Netflix.",
        "duration": "60 min",
        "tips": [
          "Calculate bandwidth, storage, and IOPS",
          "Design graceful degradation and circuit breakers",
          "Incorporate SLI/SLO and error budgets"
        ]
      },
      {
        "id": 4,
        "title": "Onsite Reliability & Chaos Loop",
        "description": "4-5 rounds: Live troubleshooting sandbox, systems coding, NALSD architecture, culture & incident post-mortems.",
        "duration": "5 hours",
        "tips": [
          "Demonstrate blameless post-mortem culture",
          "Show how you automate operational tasks",
          "Address cascading failure modes"
        ]
      },
      {
        "id": 5,
        "title": "Committee Review & Offer",
        "description": "Compensation and team matching across core infrastructure organizations at Netflix.",
        "duration": "1-2 weeks",
        "tips": [
          "SRE compensation matches top SWE tier",
          "Ask about rotation schedules and on-call paging rates",
          "Negotiate equity grants"
        ]
      }
    ],
    "design": [
      {
        "id": 1,
        "title": "Staff/Principal Architecture Profile",
        "description": "Application showcasing multi-year technical vision, cross-org impact, and massive distributed architectures.",
        "duration": "1-3 weeks",
        "tips": [
          "Highlight systems serving millions of QPS",
          "Include whitepapers and tech patents",
          "Quantify infrastructure cost reductions"
        ]
      },
      {
        "id": 2,
        "title": "Director & Tech Fellow Screening",
        "description": "Strategic conversation on multi-year architecture evolutions and organizational technical standards.",
        "duration": "60 min",
        "tips": [
          "Focus on executive communication",
          "Discuss legacy migration strategies",
          "Demonstrate business-aligned tech bets"
        ]
      },
      {
        "id": 3,
        "title": "Architecture Deep-Dive Loop",
        "description": "5-6 rounds: End-to-end distributed systems design, data mesh architecture, cross-team influence, and incident resilience.",
        "duration": "6 hours",
        "tips": [
          "Apply CAP, consensus (Raft/Paxos), and sharding",
          "Demonstrate consensus building across org boundaries",
          "Show technical leadership in ambiguity"
        ]
      },
      {
        "id": 4,
        "title": "Executive Calibration & Vice President Review",
        "description": "Senior Leadership Review committee calibrates Staff/Principal/Distinguished tier at Netflix.",
        "duration": "3-4 weeks",
        "tips": [
          "Leveling determines substantial equity multiplier",
          "Demonstrate organization-wide mentorship",
          "Negotiate discretionary grants and governance roles"
        ]
      }
    ],
    "data": [
      {
        "id": 1,
        "title": "Data Science & Experimentation Application",
        "description": "Submit profile emphasizing causal inference, A/B testing at scale, and applied statistical modeling at Netflix.",
        "duration": "1-2 weeks",
        "tips": [
          "Highlight product metrics moved",
          "Show experimentation case studies",
          "Mastery in SQL and Python/R"
        ]
      },
      {
        "id": 2,
        "title": "Quantitative & SQL Phone Screen",
        "description": "Complex SQL queries (window functions, self-joins) + probability & statistics fundamentals.",
        "duration": "45 min",
        "tips": [
          "Practice multi-stage CTEs",
          "Know p-values, power analysis, and sample size formulas",
          "Explain variance reduction (CUPED)"
        ]
      },
      {
        "id": 3,
        "title": "Virtual Onsite Data Loop",
        "description": "4-5 rounds: 1 SQL & Data Wrangling, 1 Experimentation & Metrics Design, 1 Applied ML/Stats Modeling, 1 Product Case Study.",
        "duration": "5 hours",
        "tips": [
          "Deconstruct business problems into statistical tests",
          "Address network interference in A/B testing",
          "Communicate data findings to non-technical leaders"
        ]
      },
      {
        "id": 4,
        "title": "Hiring Committee & Product Team Fit",
        "description": "Cross-functional review and team allocation across monetization, product growth, or integrity at Netflix.",
        "duration": "2 weeks",
        "tips": [
          "Clarify whether team is research or analytics-focused",
          "Inquire about data platform tooling",
          "Negotiate sign-on package"
        ]
      }
    ],
    "frontend": [
      {
        "id": 1,
        "title": "Frontend Portfolio & Application",
        "description": "Showcase web performance, design systems, accessible UI/UX, and complex web apps for Netflix.",
        "duration": "1-2 weeks",
        "tips": [
          "Highlight Core Web Vitals optimization",
          "Showcase state management at scale",
          "Include interactive demo links"
        ]
      },
      {
        "id": 2,
        "title": "JavaScript/TypeScript & DOM Screen",
        "description": "Live coding interview evaluating vanilla JavaScript/TS, DOM manipulation, asynchronous event loop, and closures.",
        "duration": "45-60 min",
        "tips": [
          "Deep understanding of Event Loop, Promises, and Microtasks",
          "Implement debounce, throttle, or deep clone from scratch",
          "Know CSS layout engines (Flexbox, Grid)"
        ]
      },
      {
        "id": 3,
        "title": "Frontend System Architecture & Design",
        "description": "Design client-side architecture for a complex feature (e.g., Infinite Scroll, Collaborative Doc Editor, or Video Feed) at Netflix.",
        "duration": "60 min",
        "tips": [
          "Design network caching, optimistic UI, and offline states",
          "Address bundle splitting and tree-shaking",
          "Incorporate accessibility (WCAG) and internationalization (i18n)"
        ]
      },
      {
        "id": 4,
        "title": "Virtual Onsite Frontend Loop",
        "description": "4-5 rounds: 2 UI Component Coding, 1 Web App Architecture, 1 Algorithms/DS, 1 Cross-functional Collaboration (PM & Design).",
        "duration": "5 hours",
        "tips": [
          "Build modular, accessible UI components",
          "Discuss cross-browser rendering and memory leaks",
          "Show strong design empathy and UX intuition"
        ]
      },
      {
        "id": 5,
        "title": "Debrief & Offer Package",
        "description": "Final team allocation to product UI groups across Netflix with competitive equity and compensation.",
        "duration": "1-2 weeks",
        "tips": [
          "Frontend engineers have high product visibility",
          "Leverage offers from competing tech firms",
          "Negotiate base and stock grants"
        ]
      }
    ],
    "mobile": [
      {
        "id": 1,
        "title": "Mobile App Application",
        "description": "Submit profile emphasizing iOS (Swift/SwiftUI) or Android (Kotlin/Jetpack Compose) applications with millions of downloads at Netflix.",
        "duration": "1-2 weeks",
        "tips": [
          "Link to live App Store or Google Play apps",
          "Highlight app startup time and battery optimizations",
          "Show architecture (MVVM, VIPER, MVI)"
        ]
      },
      {
        "id": 2,
        "title": "Mobile Technical Phone Screen",
        "description": "Live coding testing language fundamentals (Swift memory ARC / Kotlin coroutines) and data structures.",
        "duration": "60 min",
        "tips": [
          "Know multithreading (GCD, Coroutines, Dispatchers)",
          "Understand memory retain cycles and leaks",
          "Write concise and idiomatic code"
        ]
      },
      {
        "id": 3,
        "title": "Mobile System Design (Client Architecture)",
        "description": "Architect a mobile feature at Netflix scale (e.g., Instagram Stories, Uber Live Map, or Offline Messaging).",
        "duration": "60 min",
        "tips": [
          "Address local SQLite/CoreData caching",
          "Handle spotty network and sync queues",
          "Optimize image/video caching and memory footprints"
        ]
      },
      {
        "id": 4,
        "title": "Virtual Mobile Onsite Loop",
        "description": "4-5 rounds: 2 Mobile UI/Feature Coding, 1 Mobile System Design, 1 Computer Science DS/Algorithms, 1 Culture & Leadership.",
        "duration": "5 hours",
        "tips": [
          "Implement custom views and gesture animations",
          "Discuss battery efficiency and background tasks",
          "Demonstrate collaborative skills with backend teams"
        ]
      },
      {
        "id": 5,
        "title": "Team Matching & Compensation Offer",
        "description": "Placement within core mobile application teams at Netflix with full Big Tech benefits.",
        "duration": "1-2 weeks",
        "tips": [
          "Mobile expertise is in high industry demand",
          "Ask about CI/CD release trains and test automation",
          "Negotiate stock and bonuses"
        ]
      }
    ],
    "security": [
      {
        "id": 1,
        "title": "Security Engineering Application",
        "description": "Submit profile highlighting AppSec, Cloud Infrastructure Security, Cryptography, or Threat Modeling for Netflix.",
        "duration": "1-2 weeks",
        "tips": [
          "Highlight CVEs discovered, bug bounties, or CTF achievements",
          "Show experience with zero-trust architecture",
          "Demonstrate automated vulnerability scanning"
        ]
      },
      {
        "id": 2,
        "title": "Security Fundamentals & Coding Screen",
        "description": "Assess secure coding practices, cryptography primitives, and identifying vulnerabilities (OWASP Top 10).",
        "duration": "60 min",
        "tips": [
          "Identify SQLi, XSS, SSRF, and CSRF patterns",
          "Understand public key infrastructure (PKI) and TLS",
          "Code security tooling in Python, Go, or C++"
        ]
      },
      {
        "id": 3,
        "title": "Security Architecture & Threat Modeling",
        "description": "Perform comprehensive threat modeling for a new service at Netflix (using STRIDE or PASTA frameworks).",
        "duration": "60 min",
        "tips": [
          "Identify trust boundaries and attack surfaces",
          "Design defense-in-depth security controls",
          "Address authentication, authorization (OAuth/OIDC), and IAM"
        ]
      },
      {
        "id": 4,
        "title": "Onsite Security Engineering Loop",
        "description": "4-5 rounds: 1 Secure Code Review/Exploitation, 1 Security Architecture, 1 Incident Response/Forensics, 1 Infrastructure Security, 1 Behavioral.",
        "duration": "5 hours",
        "tips": [
          "Demonstrate pragmatic security without blocking business velocity",
          "Know container/K8s security and secrets management",
          "Show calm and structured incident response instincts"
        ]
      },
      {
        "id": 5,
        "title": "Debrief & Security Org Placement",
        "description": "Placement in Red Team, Blue Team, Product Security, or Cloud Security groups at Netflix.",
        "duration": "2 weeks",
        "tips": [
          "Security engineers receive top-tier engineering pay",
          "Ask about security tooling budget and organizational leverage",
          "Negotiate sign-on bonuses"
        ]
      }
    ],
    "devops": [
      {
        "id": 1,
        "title": "Cloud & Infrastructure Profile",
        "description": "Submit profile highlighting Infrastructure-as-Code (Terraform), Kubernetes orchestration, and automated CI/CD pipelines at Netflix.",
        "duration": "1-2 weeks",
        "tips": [
          "Highlight multi-cluster Kubernetes deployments",
          "Show GitOps and zero-downtime deployment pipelines",
          "Quantify infrastructure cost savings"
        ]
      },
      {
        "id": 2,
        "title": "Automation & Scripting Screen",
        "description": "Hands-on scripting (Python/Go/Bash), Linux systems diagnosis, and Docker container internals.",
        "duration": "60 min",
        "tips": [
          "Demonstrate clean API scripting and error handling",
          "Understand cgroups, namespaces, and overlay networks",
          "Automate real infrastructure configuration tasks"
        ]
      },
      {
        "id": 3,
        "title": "Cloud Architecture & Pipeline Design",
        "description": "Design scalable, multi-region CI/CD pipelines and deployment infrastructure for Netflix.",
        "duration": "60 min",
        "tips": [
          "Design canary and blue-green deployment strategies",
          "Incorporate policy-as-code and automated security scans",
          "Design centralized observability (Prometheus/Grafana/OpenTelemetry)"
        ]
      },
      {
        "id": 4,
        "title": "Onsite Infrastructure Loop",
        "description": "4-5 rounds: 1 Cloud Architecture, 1 Systems Scripting, 1 Troubleshooting & Debugging, 1 Configuration Management, 1 Culture.",
        "duration": "5 hours",
        "tips": [
          "Show how you enable developer self-service",
          "Address disaster recovery and cross-region failovers",
          "Demonstrate collaborative support mindset"
        ]
      },
      {
        "id": 5,
        "title": "Offer & Platform Team Allocation",
        "description": "Placement on central Developer Experience, Cloud Foundation, or Core Platform teams at Netflix.",
        "duration": "1-2 weeks",
        "tips": [
          "Platform engineering is a key company investment",
          "Inquire about tech stack modernization roadmaps",
          "Negotiate competitive total compensation"
        ]
      }
    ],
    "sdet": [
      {
        "id": 1,
        "title": "SDET / QA Automation Application",
        "description": "Submit profile highlighting automated test framework design, end-to-end testing, and performance testing at Netflix.",
        "duration": "1-2 weeks",
        "tips": [
          "Highlight custom test harness development",
          "Quantify bug detection rates and release velocity improvements",
          "Show experience with Playwright, Selenium, or Cypress"
        ]
      },
      {
        "id": 2,
        "title": "Coding & Test Strategy Phone Screen",
        "description": "Algorithmic coding round + deep dive into test design, edge case derivation, and unit test mocking.",
        "duration": "60 min",
        "tips": [
          "Solve the algorithmic problem with production code",
          "Proactively write comprehensive unit test cases",
          "Discuss boundary value analysis and equivalence partitioning"
        ]
      },
      {
        "id": 3,
        "title": "Test Framework & System Architecture",
        "description": "Design distributed automated test infrastructure capable of executing millions of test runs daily for Netflix.",
        "duration": "60 min",
        "tips": [
          "Design test parallelization and shard execution",
          "Handle test flakiness and retry heuristics",
          "Integrate automated regression testing into CI/CD"
        ]
      },
      {
        "id": 4,
        "title": "Onsite Quality Engineering Loop",
        "description": "4-5 rounds: 2 Coding & Data Structures, 1 Test Framework Architecture, 1 Bug Finding & Quality Strategy, 1 Culture & Leadership.",
        "duration": "5 hours",
        "tips": [
          "Demonstrate engineering rigor equal to SWE candidates",
          "Show customer advocacy for quality and performance",
          "Explain how you coach engineering teams on testability"
        ]
      },
      {
        "id": 5,
        "title": "Hiring Committee & Offer",
        "description": "Placement within core quality engineering and release automation teams across Netflix.",
        "duration": "1-2 weeks",
        "tips": [
          "SDETs with strong coding earn SWE-equivalent packages",
          "Ask about release gating authority",
          "Negotiate equity compensation"
        ]
      }
    ],
    "tpm": [
      {
        "id": 1,
        "title": "TPM Resume & Track Record",
        "description": "Submit profile emphasizing technical program execution, cross-organizational delivery, and dependency management for Netflix.",
        "duration": "1-2 weeks",
        "tips": [
          "Highlight multi-team programs shipped on time",
          "Quantify technical scope (datacenter builds, cloud migrations)",
          "Demonstrate technical background (CS or Engineering degree)"
        ]
      },
      {
        "id": 2,
        "title": "Technical Program Diagnostic Screen",
        "description": "Evaluate program lifecycle management, handling ambiguity, and risk mitigation strategies.",
        "duration": "45 min",
        "tips": [
          "Prepare 2-minute elevator story on your biggest technical program",
          "Show proactive risk identification before crises happen",
          "Demonstrate executive reporting clarity"
        ]
      },
      {
        "id": 3,
        "title": "Technical Depth & Architecture Review",
        "description": "TPMs at Netflix must speak peer-to-peer with senior architects. Walk through a complex distributed architecture.",
        "duration": "60 min",
        "tips": [
          "Explain API contracts, data flows, and bottleneck trade-offs",
          "Show how you arbitrate technical disagreements between teams",
          "Understand latency, throughput, and hardware constraints"
        ]
      },
      {
        "id": 4,
        "title": "Virtual Onsite TPM Loop",
        "description": "5 rounds: 1 Program Execution & Delivery, 1 Technical Architecture, 1 Cross-functional Leadership & Influence, 1 Risk & Crisis Management, 1 Culture.",
        "duration": "5 hours",
        "tips": [
          "Show how you align conflicting VP and director priorities",
          "Demonstrate structured milestone tracking without bureaucratic overhead",
          "Prepare STAR stories highlighting resilience in setbacks"
        ]
      },
      {
        "id": 5,
        "title": "Executive Debrief & Offer",
        "description": "Senior management review and placement within high-priority strategic initiatives at Netflix.",
        "duration": "2 weeks",
        "tips": [
          "TPMs enjoy broad cross-company visibility",
          "Inquire about executive sponsorship and program budgets",
          "Negotiate sign-on bonuses and RSUs"
        ]
      }
    ]
  }
};

export const codingProblems = [
  {
    "id": "two-sum",
    "title": "Two Sum",
    "difficulty": "Easy",
    "company": [
      "google",
      "amazon",
      "meta",
      "microsoft",
      "apple"
    ],
    "category": "Arrays & Hashing",
    "description": "Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.\n\nYou may assume that each input would have exactly one solution, and you may not use the same element twice.\n\nYou can return the answer in any order.",
    "examples": [
      {
        "input": "nums = [2,7,11,15], target = 9",
        "output": "[0,1]",
        "explanation": "Because nums[0] + nums[1] == 9, we return [0, 1]."
      },
      {
        "input": "nums = [3,2,4], target = 6",
        "output": "[1,2]",
        "explanation": "nums[1] + nums[2] == 6, return [1, 2]."
      },
      {
        "input": "nums = [3,3], target = 6",
        "output": "[0,1]",
        "explanation": "nums[0] + nums[1] == 6, return [0, 1]."
      }
    ],
    "constraints": [
      "2 <= nums.length <= 10^4",
      "-10^9 <= nums[i] <= 10^9",
      "-10^9 <= target <= 10^9",
      "Only one valid answer exists."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number[]} nums\n * @param {number} target\n * @return {number[]}\n */\nfunction twoSum(nums, target) {\n  const map = new Map();\n  for (let i = 0; i < nums.length; i++) {\n    const complement = target - nums[i];\n    if (map.has(complement)) {\n      return [map.get(complement), i];\n    }\n    map.set(nums[i], i);\n  }\n  return [];\n}",
      "python": "def two_sum(nums: list[int], target: int) -> list[int]:\n    seen = {}\n    for i, num in enumerate(nums):\n        comp = target - num\n        if comp in seen:\n            return [seen[comp], i]\n        seen[num] = i\n    return []",
      "java": "class Solution {\n    public int[] twoSum(int[] nums, int target) {\n        Map<Integer, Integer> map = new HashMap<>();\n        for (int i = 0; i < nums.length; i++) {\n            int comp = target - nums[i];\n            if (map.containsKey(comp)) {\n                return new int[]{map.get(comp), i};\n            }\n            map.put(nums[i], i);\n        }\n        return new int[]{};\n    }\n}"
    },
    "testCases": [
      {
        "input": {
          "nums": [
            2,
            7,
            11,
            15
          ],
          "target": 9
        },
        "expected": [
          0,
          1
        ]
      },
      {
        "input": {
          "nums": [
            3,
            2,
            4
          ],
          "target": 6
        },
        "expected": [
          1,
          2
        ]
      },
      {
        "input": {
          "nums": [
            3,
            3
          ],
          "target": 6
        },
        "expected": [
          0,
          1
        ]
      }
    ],
    "solution": "Use a hash map to record elements and their indices. For each element, look up (target - num) in O(1) time.",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(n)"
  },
  {
    "id": "valid-parentheses",
    "title": "Valid Parentheses",
    "difficulty": "Easy",
    "company": [
      "meta",
      "google",
      "amazon",
      "microsoft",
      "netflix"
    ],
    "category": "Stack",
    "description": "Given a string `s` containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`, determine if the input string is valid.\n\nAn input string is valid if:\n1. Open brackets must be closed by the same type of brackets.\n2. Open brackets must be closed in the correct order.\n3. Every close bracket has a corresponding open bracket of the same type.",
    "examples": [
      {
        "input": "s = \"()\"",
        "output": "true",
        "explanation": "Matching parenthesis."
      },
      {
        "input": "s = \"()[]{}\"",
        "output": "true",
        "explanation": "All types matched properly."
      },
      {
        "input": "s = \"(]\"",
        "output": "false",
        "explanation": "Mismatched bracket types."
      }
    ],
    "constraints": [
      "1 <= s.length <= 10^4",
      "s consists of parentheses only '()[]{}'."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {string} s\n * @return {boolean}\n */\nfunction isValid(s) {\n  const stack = [];\n  const pairs = { ')': '(', '}': '{', ']': '[' };\n  for (const ch of s) {\n    if (pairs[ch]) {\n      if (stack.pop() !== pairs[ch]) return false;\n    } else {\n      stack.push(ch);\n    }\n  }\n  return stack.length === 0;\n}",
      "python": "def is_valid(s: str) -> bool:\n    stack = []\n    pairs = {')': '(', '}': '{', ']': '['}\n    for ch in s:\n        if ch in pairs:\n            if not stack or stack.pop() != pairs[ch]:\n                return False\n        else:\n            stack.append(ch)\n    return len(stack) == 0",
      "java": "class Solution {\n    public boolean isValid(String s) {\n        Stack<Character> stack = new Stack<>();\n        for (char c : s.toCharArray()) {\n            if (c == '(') stack.push(')');\n            else if (c == '{') stack.push('}');\n            else if (c == '[') stack.push(']');\n            else if (stack.isEmpty() || stack.pop() != c) return false;\n        }\n        return stack.isEmpty();\n    }\n}"
    },
    "testCases": [
      {
        "input": {
          "s": "()"
        },
        "expected": true
      },
      {
        "input": {
          "s": "()[]{}"
        },
        "expected": true
      },
      {
        "input": {
          "s": "(]"
        },
        "expected": false
      }
    ],
    "solution": "Push opening brackets or matching closers onto a stack. Check top element upon encountering closing brackets.",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(n)"
  },
  {
    "id": "reverse-linked-list",
    "title": "Reverse Linked List",
    "difficulty": "Easy",
    "company": [
      "microsoft",
      "google",
      "amazon",
      "apple"
    ],
    "category": "Linked List",
    "description": "Given the `head` of a singly linked list, reverse the list, and return the reversed list.",
    "examples": [
      {
        "input": "head = [1,2,3,4,5]",
        "output": "[5,4,3,2,1]",
        "explanation": "The list is reversed iteratively or recursively."
      },
      {
        "input": "head = [1,2]",
        "output": "[2,1]",
        "explanation": "Two element list reversed."
      },
      {
        "input": "head = []",
        "output": "[]",
        "explanation": "Empty list remains empty."
      }
    ],
    "constraints": [
      "The number of nodes in the list is the range [0, 5000].",
      "-5000 <= Node.val <= 5000"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {ListNode} head\n * @return {ListNode}\n */\nfunction reverseList(head) {\n  let prev = null;\n  let curr = head;\n  while (curr) {\n    const next = curr.next;\n    curr.next = prev;\n    prev = curr;\n    curr = next;\n  }\n  return prev;\n}",
      "python": "def reverse_list(head):\n    prev = None\n    curr = head\n    while curr:\n        next_node = curr.next\n        curr.next = prev\n        prev = curr\n        curr = next_node\n    return prev",
      "java": "class Solution {\n    public ListNode reverseList(ListNode head) {\n        ListNode prev = null;\n        ListNode curr = head;\n        while (curr != null) {\n            ListNode next = curr.next;\n            curr.next = prev;\n            prev = curr;\n            curr = next;\n        }\n        return prev;\n    }\n}"
    },
    "testCases": [
      {
        "input": {
          "head": [
            1,
            2,
            3,
            4,
            5
          ]
        },
        "expected": [
          5,
          4,
          3,
          2,
          1
        ]
      }
    ],
    "solution": "Maintain previous and current pointers, updating the next pointer of each node as you traverse.",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)"
  },
  {
    "id": "climbing-stairs",
    "title": "Climbing Stairs",
    "difficulty": "Easy",
    "company": [
      "google",
      "apple",
      "amazon"
    ],
    "category": "Dynamic Programming",
    "description": "You are climbing a staircase. It takes `n` steps to reach the top.\n\nEach time you can either climb `1` or `2` steps. In how many distinct ways can you climb to the top?",
    "examples": [
      {
        "input": "n = 2",
        "output": "2",
        "explanation": "1 step + 1 step, or 2 steps."
      },
      {
        "input": "n = 3",
        "output": "3",
        "explanation": "1+1+1, 1+2, or 2+1."
      }
    ],
    "constraints": [
      "1 <= n <= 45"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number} n\n * @return {number}\n */\nfunction climbStairs(n) {\n  if (n <= 2) return n;\n  let a = 1, b = 2;\n  for (let i = 3; i <= n; i++) {\n    const temp = a + b;\n    a = b;\n    b = temp;\n  }\n  return b;\n}",
      "python": "def climb_stairs(n: int) -> int:\n    if n <= 2:\n        return n\n    a, b = 1, 2\n    for _ in range(3, n + 1):\n        a, b = b, a + b\n    return b",
      "java": "class Solution {\n    public int climbStairs(int n) {\n        if (n <= 2) return n;\n        int a = 1, b = 2;\n        for (int i = 3; i <= n; i++) {\n            int temp = a + b;\n            a = b;\n            b = temp;\n        }\n        return b;\n    }\n}"
    },
    "testCases": [
      {
        "input": {
          "n": 2
        },
        "expected": 2
      },
      {
        "input": {
          "n": 3
        },
        "expected": 3
      },
      {
        "input": {
          "n": 5
        },
        "expected": 8
      }
    ],
    "solution": "Fibonacci recurrence relation: dp[i] = dp[i-1] + dp[i-2], optimized to O(1) space.",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)"
  },
  {
    "id": "maximum-subarray",
    "title": "Maximum Subarray (Kadane's)",
    "difficulty": "Easy",
    "company": [
      "amazon",
      "meta",
      "microsoft",
      "google"
    ],
    "category": "Dynamic Programming",
    "description": "Given an integer array `nums`, find the subarray with the largest sum, and return its sum.",
    "examples": [
      {
        "input": "nums = [-2,1,-3,4,-1,2,1,-5,4]",
        "output": "6",
        "explanation": "The subarray [4,-1,2,1] has the largest sum 6."
      },
      {
        "input": "nums = [1]",
        "output": "1",
        "explanation": "Single element array sum is 1."
      },
      {
        "input": "nums = [5,4,-1,7,8]",
        "output": "23",
        "explanation": "The entire array has sum 23."
      }
    ],
    "constraints": [
      "1 <= nums.length <= 10^5",
      "-10^4 <= nums[i] <= 10^4"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number[]} nums\n * @return {number}\n */\nfunction maxSubArray(nums) {\n  let currentSum = nums[0];\n  let maxSum = nums[0];\n  for (let i = 1; i < nums.length; i++) {\n    currentSum = Math.max(nums[i], currentSum + nums[i]);\n    maxSum = Math.max(maxSum, currentSum);\n  }\n  return maxSum;\n}",
      "python": "def max_sub_array(nums: list[int]) -> int:\n    current_sum = max_sum = nums[0]\n    for num in nums[1:]:\n        current_sum = max(num, current_sum + num)\n        max_sum = max(max_sum, current_sum)\n    return max_sum",
      "java": "class Solution {\n    public int maxSubArray(int[] nums) {\n        int cur = nums[0], max = nums[0];\n        for (int i = 1; i < nums.length; i++) {\n            cur = Math.max(nums[i], cur + nums[i]);\n            max = Math.max(max, cur);\n        }\n        return max;\n    }\n}"
    },
    "testCases": [
      {
        "input": {
          "nums": [
            -2,
            1,
            -3,
            4,
            -1,
            2,
            1,
            -5,
            4
          ]
        },
        "expected": 6
      },
      {
        "input": {
          "nums": [
            1
          ]
        },
        "expected": 1
      },
      {
        "input": {
          "nums": [
            5,
            4,
            -1,
            7,
            8
          ]
        },
        "expected": 23
      }
    ],
    "solution": "Kadane's algorithm: at each element, decide whether to add it to current running sum or start fresh.",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)"
  },
  {
    "id": "best-time-stock",
    "title": "Best Time to Buy and Sell Stock",
    "difficulty": "Easy",
    "company": [
      "amazon",
      "meta",
      "google",
      "apple",
      "microsoft"
    ],
    "category": "Arrays & Hashing",
    "description": "You are given an array `prices` where `prices[i]` is the price of a given stock on the `i`th day.\n\nYou want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.\n\nReturn the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return `0`.",
    "examples": [
      {
        "input": "prices = [7,1,5,3,6,4]",
        "output": "5",
        "explanation": "Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5."
      },
      {
        "input": "prices = [7,6,4,3,1]",
        "output": "0",
        "explanation": "In this case, no transactions are done and max profit = 0."
      }
    ],
    "constraints": [
      "1 <= prices.length <= 10^5",
      "0 <= prices[i] <= 10^4"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number[]} prices\n * @return {number}\n */\nfunction maxProfit(prices) {\n  let minPrice = Infinity;\n  let maxProfit = 0;\n  for (const price of prices) {\n    if (price < minPrice) minPrice = price;\n    else if (price - minPrice > maxProfit) maxProfit = price - minPrice;\n  }\n  return maxProfit;\n}",
      "python": "def max_profit(prices: list[int]) -> int:\n    min_price = float('inf')\n    max_profit = 0\n    for p in prices:\n        if p < min_price:\n            min_price = p\n        elif p - min_price > max_profit:\n            max_profit = p - min_price\n    return max_profit",
      "java": "class Solution {\n    public int maxProfit(int[] prices) {\n        int min = Integer.MAX_VALUE, max = 0;\n        for (int p : prices) {\n            if (p < min) min = p;\n            else if (p - min > max) max = p - min;\n        }\n        return max;\n    }\n}"
    },
    "testCases": [
      {
        "input": {
          "prices": [
            7,
            1,
            5,
            3,
            6,
            4
          ]
        },
        "expected": 5
      },
      {
        "input": {
          "prices": [
            7,
            6,
            4,
            3,
            1
          ]
        },
        "expected": 0
      }
    ],
    "solution": "Track running minimum price and compute potential profit at each step.",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)"
  },
  {
    "id": "longest-substring",
    "title": "Longest Substring Without Repeating Characters",
    "difficulty": "Medium",
    "company": [
      "amazon",
      "meta",
      "google",
      "microsoft",
      "apple"
    ],
    "category": "Sliding Window",
    "description": "Given a string `s`, find the length of the longest substring without duplicate characters.",
    "examples": [
      {
        "input": "s = \"abcabcbb\"",
        "output": "3",
        "explanation": "The answer is \"abc\", with the length of 3."
      },
      {
        "input": "s = \"bbbbb\"",
        "output": "1",
        "explanation": "The answer is \"b\", with length 1."
      },
      {
        "input": "s = \"pwwkew\"",
        "output": "3",
        "explanation": "The answer is \"wke\", with length 3."
      }
    ],
    "constraints": [
      "0 <= s.length <= 5 * 10^4",
      "s consists of English letters, digits, symbols and spaces."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {string} s\n * @return {number}\n */\nfunction lengthOfLongestSubstring(s) {\n  let maxLen = 0, left = 0;\n  const charIndex = new Map();\n  for (let right = 0; right < s.length; right++) {\n    if (charIndex.has(s[right]) && charIndex.get(s[right]) >= left) {\n      left = charIndex.get(s[right]) + 1;\n    }\n    charIndex.set(s[right], right);\n    maxLen = Math.max(maxLen, right - left + 1);\n  }\n  return maxLen;\n}",
      "python": "def length_of_longest_substring(s: str) -> int:\n    char_map = {}\n    left = max_len = 0\n    for right, ch in enumerate(s):\n        if ch in char_map and char_map[ch] >= left:\n            left = char_map[ch] + 1\n        char_map[ch] = right\n        max_len = max(max_len, right - left + 1)\n    return max_len",
      "java": "class Solution {\n    public int lengthOfLongestSubstring(String s) {\n        int max = 0, left = 0;\n        Map<Character, Integer> map = new HashMap<>();\n        for (int right = 0; right < s.length(); right++) {\n            char c = s.charAt(right);\n            if (map.containsKey(c) && map.get(c) >= left) {\n                left = map.get(c) + 1;\n            }\n            map.put(c, right);\n            max = Math.max(max, right - left + 1);\n        }\n        return max;\n    }\n}"
    },
    "testCases": [
      {
        "input": {
          "s": "abcabcbb"
        },
        "expected": 3
      },
      {
        "input": {
          "s": "bbbbb"
        },
        "expected": 1
      },
      {
        "input": {
          "s": "pwwkew"
        },
        "expected": 3
      }
    ],
    "solution": "Sliding window with hash map storing last seen index of characters to jump the left pointer forward.",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(min(n, m)) where m is charset size"
  },
  {
    "id": "3sum",
    "title": "3Sum",
    "difficulty": "Medium",
    "company": [
      "meta",
      "amazon",
      "apple",
      "google"
    ],
    "category": "Two Pointers",
    "description": "Given an integer array nums, return all the triplets `[nums[i], nums[j], nums[k]]` such that `i != j`, `i != k`, and `j != k`, and `nums[i] + nums[j] + nums[k] == 0`.\n\nNotice that the solution set must not contain duplicate triplets.",
    "examples": [
      {
        "input": "nums = [-1,0,1,2,-1,-4]",
        "output": "[[-1,-1,2],[-1,0,1]]",
        "explanation": "Distinct triplets summing to 0."
      },
      {
        "input": "nums = [0,1,1]",
        "output": "[]",
        "explanation": "No triplet sums to 0."
      }
    ],
    "constraints": [
      "3 <= nums.length <= 3000",
      "-10^5 <= nums[i] <= 10^5"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number[]} nums\n * @return {number[][]}\n */\nfunction threeSum(nums) {\n  nums.sort((a, b) => a - b);\n  const res = [];\n  for (let i = 0; i < nums.length - 2; i++) {\n    if (i > 0 && nums[i] === nums[i - 1]) continue;\n    let l = i + 1, r = nums.length - 1;\n    while (l < r) {\n      const sum = nums[i] + nums[l] + nums[r];\n      if (sum === 0) {\n        res.push([nums[i], nums[l], nums[r]]);\n        while (l < r && nums[l] === nums[l + 1]) l++;\n        while (l < r && nums[r] === nums[r - 1]) r--;\n        l++; r--;\n      } else if (sum < 0) l++;\n      else r--;\n    }\n  }\n  return res;\n}",
      "python": "def three_sum(nums: list[int]) -> list[list[int]]:\n    nums.sort()\n    res = []\n    for i in range(len(nums) - 2):\n        if i > 0 and nums[i] == nums[i - 1]:\n            continue\n        l, r = i + 1, len(nums) - 1\n        while l < r:\n            s = nums[i] + nums[l] + nums[r]\n            if s == 0:\n                res.append([nums[i], nums[l], nums[r]])\n                while l < r and nums[l] == nums[l + 1]: l += 1\n                while l < r and nums[r] == nums[r - 1]: r -= 1\n                l += 1; r -= 1\n            elif s < 0: l += 1\n            else: r -= 1\n    return res",
      "java": "class Solution {\n    public List<List<Integer>> threeSum(int[] nums) {\n        Arrays.sort(nums);\n        List<List<Integer>> res = new ArrayList<>();\n        for (int i = 0; i < nums.length - 2; i++) {\n            if (i > 0 && nums[i] == nums[i - 1]) continue;\n            int l = i + 1, r = nums.length - 1;\n            while (l < r) {\n                int sum = nums[i] + nums[l] + nums[r];\n                if (sum == 0) {\n                    res.add(Arrays.asList(nums[i], nums[l], nums[r]));\n                    while (l < r && nums[l] == nums[l + 1]) l++;\n                    while (l < r && nums[r] == nums[r - 1]) r--;\n                    l++; r--;\n                } else if (sum < 0) l++;\n                else r--;\n            }\n        }\n        return res;\n    }\n}"
    },
    "testCases": [
      {
        "input": {
          "nums": [
            -1,
            0,
            1,
            2,
            -1,
            -4
          ]
        },
        "expected": [
          [
            -1,
            -1,
            2
          ],
          [
            -1,
            0,
            1
          ]
        ]
      }
    ],
    "solution": "Sort array. Iterate through each element and use two pointers (left and right) on the remaining suffix while skipping duplicates.",
    "timeComplexity": "O(n^2)",
    "spaceComplexity": "O(log n) or O(n) for sorting"
  },
  {
    "id": "container-with-most-water",
    "title": "Container With Most Water",
    "difficulty": "Medium",
    "company": [
      "meta",
      "google",
      "amazon"
    ],
    "category": "Two Pointers",
    "description": "You are given an integer array `height` of length `n`. There are `n` vertical lines drawn such that the two endpoints of the `i`th line are `(i, 0)` and `(i, height[i])`.\n\nFind two lines that together with the x-axis form a container, such that the container contains the most water.\n\nReturn the maximum amount of water a container can store.",
    "examples": [
      {
        "input": "height = [1,8,6,2,5,4,8,3,7]",
        "output": "49",
        "explanation": "Max area between index 1 and 8: min(8, 7) * (8 - 1) = 49."
      },
      {
        "input": "height = [1,1]",
        "output": "1",
        "explanation": "Area = 1 * 1 = 1."
      }
    ],
    "constraints": [
      "n == height.length",
      "2 <= n <= 10^5",
      "0 <= height[i] <= 10^4"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number[]} height\n * @return {number}\n */\nfunction maxArea(height) {\n  let l = 0, r = height.length - 1, max = 0;\n  while (l < r) {\n    const area = Math.min(height[l], height[r]) * (r - l);\n    max = Math.max(max, area);\n    if (height[l] < height[r]) l++;\n    else r--;\n  }\n  return max;\n}",
      "python": "def max_area(height: list[int]) -> int:\n    l, r = 0, len(height) - 1\n    max_w = 0\n    while l < r:\n        area = min(height[l], height[r]) * (r - l)\n        max_w = max(max_w, area)\n        if height[l] < height[r]:\n            l += 1\n        else:\n            r -= 1\n    return max_w",
      "java": "class Solution {\n    public int maxArea(int[] height) {\n        int l = 0, r = height.length - 1, max = 0;\n        while (l < r) {\n            int area = Math.min(height[l], height[r]) * (r - l);\n            max = Math.max(max, area);\n            if (height[l] < height[r]) l++;\n            else r--;\n        }\n        return max;\n    }\n}"
    },
    "testCases": [
      {
        "input": {
          "height": [
            1,
            8,
            6,
            2,
            5,
            4,
            8,
            3,
            7
          ]
        },
        "expected": 49
      },
      {
        "input": {
          "height": [
            1,
            1
          ]
        },
        "expected": 1
      }
    ],
    "solution": "Two pointers at left and right boundaries. Greedily advance the pointer with the smaller height.",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)"
  },
  {
    "id": "merge-intervals",
    "title": "Merge Intervals",
    "difficulty": "Medium",
    "company": [
      "google",
      "meta",
      "amazon",
      "apple"
    ],
    "category": "Intervals",
    "description": "Given an array of intervals where `intervals[i] = [start_i, end_i]`, merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.",
    "examples": [
      {
        "input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
        "output": "[[1,6],[8,10],[15,18]]",
        "explanation": "Intervals [1,3] and [2,6] overlap into [1,6]."
      },
      {
        "input": "intervals = [[1,4],[4,5]]",
        "output": "[[1,5]]",
        "explanation": "Intervals [1,4] and [4,5] overlap at boundary 4."
      }
    ],
    "constraints": [
      "1 <= intervals.length <= 10^4",
      "intervals[i].length == 2",
      "0 <= start_i <= end_i <= 10^4"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number[][]} intervals\n * @return {number[][]}\n */\nfunction merge(intervals) {\n  intervals.sort((a, b) => a[0] - b[0]);\n  const merged = [intervals[0]];\n  for (let i = 1; i < intervals.length; i++) {\n    const last = merged[merged.length - 1];\n    if (intervals[i][0] <= last[1]) {\n      last[1] = Math.max(last[1], intervals[i][1]);\n    } else {\n      merged.push(intervals[i]);\n    }\n  }\n  return merged;\n}",
      "python": "def merge(intervals: list[list[int]]) -> list[list[int]]:\n    intervals.sort(key=lambda x: x[0])\n    merged = [intervals[0]]\n    for start, end in intervals[1:]:\n        if start <= merged[-1][1]:\n            merged[-1][1] = max(merged[-1][1], end)\n        else:\n            merged.append([start, end])\n    return merged",
      "java": "class Solution {\n    public int[][] merge(int[][] intervals) {\n        Arrays.sort(intervals, (a, b) -> Integer.compare(a[0], b[0]));\n        List<int[]> merged = new ArrayList<>();\n        merged.add(intervals[0]);\n        for (int i = 1; i < intervals.length; i++) {\n            int[] last = merged.get(merged.size() - 1);\n            if (intervals[i][0] <= last[1]) {\n                last[1] = Math.max(last[1], intervals[i][1]);\n            } else {\n                merged.add(intervals[i]);\n            }\n        }\n        return merged.toArray(new int[merged.size()][]);\n    }\n}"
    },
    "testCases": [
      {
        "input": {
          "intervals": [
            [
              1,
              3
            ],
            [
              2,
              6
            ],
            [
              8,
              10
            ],
            [
              15,
              18
            ]
          ]
        },
        "expected": [
          [
            1,
            6
          ],
          [
            8,
            10
          ],
          [
            15,
            18
          ]
        ]
      },
      {
        "input": {
          "intervals": [
            [
              1,
              4
            ],
            [
              4,
              5
            ]
          ]
        },
        "expected": [
          [
            1,
            5
          ]
        ]
      }
    ],
    "solution": "Sort intervals by start value, then sequentially merge overlapping ranges.",
    "timeComplexity": "O(n log n)",
    "spaceComplexity": "O(n)"
  },
  {
    "id": "number-of-islands",
    "title": "Number of Islands",
    "difficulty": "Medium",
    "company": [
      "amazon",
      "google",
      "meta",
      "microsoft"
    ],
    "category": "Graphs & BFS/DFS",
    "description": "Given an `m x n` 2D binary grid `grid` which represents a map of `'1'`s (land) and `'0'`s (water), return the number of islands.\n\nAn island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.",
    "examples": [
      {
        "input": "grid = [[\"1\",\"1\",\"1\",\"1\",\"0\"],[\"1\",\"1\",\"0\",\"1\",\"0\"],[\"1\",\"1\",\"0\",\"0\",\"0\"],[\"0\",\"0\",\"0\",\"0\",\"0\"]]",
        "output": "1",
        "explanation": "All 1s connect into 1 single island."
      },
      {
        "input": "grid = [[\"1\",\"1\",\"0\",\"0\",\"0\"],[\"1\",\"1\",\"0\",\"0\",\"0\"],[\"0\",\"0\",\"1\",\"0\",\"0\"],[\"0\",\"0\",\"0\",\"1\",\"1\"]]",
        "output": "3",
        "explanation": "There are 3 separate disconnected islands."
      }
    ],
    "constraints": [
      "m == grid.length",
      "n == grid[i].length",
      "1 <= m, n <= 300",
      "grid[i][j] is '0' or '1'."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {character[][]} grid\n * @return {number}\n */\nfunction numIslands(grid) {\n  let count = 0;\n  const dfs = (r, c) => {\n    if (r < 0 || r >= grid.length || c < 0 || c >= grid[0].length || grid[r][c] !== '1') return;\n    grid[r][c] = '0';\n    dfs(r + 1, c); dfs(r - 1, c); dfs(r, c + 1); dfs(r, c - 1);\n  };\n  for (let r = 0; r < grid.length; r++) {\n    for (let c = 0; c < grid[0].length; c++) {\n      if (grid[r][c] === '1') {\n        count++;\n        dfs(r, c);\n      }\n    }\n  }\n  return count;\n}",
      "python": "def num_islands(grid: list[list[str]]) -> int:\n    if not grid: return 0\n    rows, cols = len(grid), len(grid[0])\n    count = 0\n    def dfs(r, c):\n        if r < 0 or r >= rows or c < 0 or c >= cols or grid[r][c] != '1':\n            return\n        grid[r][c] = '0'\n        dfs(r+1, c); dfs(r-1, c); dfs(r, c+1); dfs(r, c-1)\n    for r in range(rows):\n        for c in range(cols):\n            if grid[r][c] == '1':\n                count += 1\n                dfs(r, c)\n    return count",
      "java": "class Solution {\n    public int numIslands(char[][] grid) {\n        int count = 0;\n        for (int r = 0; r < grid.length; r++) {\n            for (int c = 0; c < grid[0].length; c++) {\n                if (grid[r][c] == '1') {\n                    count++;\n                    dfs(grid, r, c);\n                }\n            }\n        }\n        return count;\n    }\n    private void dfs(char[][] g, int r, int c) {\n        if (r < 0 || r >= g.length || c < 0 || c >= g[0].length || g[r][c] != '1') return;\n        g[r][c] = '0';\n        dfs(g, r+1, c); dfs(g, r-1, c); dfs(g, r, c+1); dfs(g, r, c-1);\n    }\n}"
    },
    "testCases": [
      {
        "input": {
          "grid": [
            [
              "1",
              "1",
              "0"
            ],
            [
              "0",
              "1",
              "0"
            ],
            [
              "0",
              "0",
              "1"
            ]
          ]
        },
        "expected": 2
      }
    ],
    "solution": "Traverse grid. Whenever '1' is found, increment count and sink the island by DFS/BFS setting visited cells to '0'.",
    "timeComplexity": "O(m * n)",
    "spaceComplexity": "O(m * n) recursive stack"
  },
  {
    "id": "course-schedule",
    "title": "Course Schedule (Topological Sort)",
    "difficulty": "Medium",
    "company": [
      "google",
      "meta",
      "amazon",
      "microsoft"
    ],
    "category": "Graphs & BFS/DFS",
    "description": "There are a total of `numCourses` courses you have to take, labeled from `0` to `numCourses - 1`. You are given an array `prerequisites` where `prerequisites[i] = [a_i, b_i]` indicates that you must take course `b_i` first if you want to take course `a_i`.\n\nReturn `true` if you can finish all courses. Otherwise, return `false`.",
    "examples": [
      {
        "input": "numCourses = 2, prerequisites = [[1,0]]",
        "output": "true",
        "explanation": "To take course 1 you should have finished course 0. So it is possible."
      },
      {
        "input": "numCourses = 2, prerequisites = [[1,0],[0,1]]",
        "output": "false",
        "explanation": "Cycle detected: course 1 requires 0, and 0 requires 1."
      }
    ],
    "constraints": [
      "1 <= numCourses <= 2000",
      "0 <= prerequisites.length <= 5000",
      "prerequisites[i].length == 2",
      "All pairs are unique."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number} numCourses\n * @param {number[][]} prerequisites\n * @return {boolean}\n */\nfunction canFinish(numCourses, prerequisites) {\n  const inDegree = new Array(numCourses).fill(0);\n  const adj = Array.from({ length: numCourses }, () => []);\n  for (const [course, pre] of prerequisites) {\n    adj[pre].push(course);\n    inDegree[course]++;\n  }\n  const queue = [];\n  for (let i = 0; i < numCourses; i++) {\n    if (inDegree[i] === 0) queue.push(i);\n  }\n  let taken = 0;\n  while (queue.length) {\n    const node = queue.shift();\n    taken++;\n    for (const next of adj[node]) {\n      inDegree[next]--;\n      if (inDegree[next] === 0) queue.push(next);\n    }\n  }\n  return taken === numCourses;\n}",
      "python": "from collections import deque\ndef can_finish(num_courses: int, prerequisites: list[list[int]]) -> bool:\n    in_degree = [0] * num_courses\n    adj = [[] for _ in range(num_courses)]\n    for course, pre in prerequisites:\n        adj[pre].append(course)\n        in_degree[course] += 1\n    q = deque([i for i in range(num_courses) if in_degree[i] == 0])\n    taken = 0\n    while q:\n        node = q.popleft()\n        taken += 1\n        for nxt in adj[node]:\n            in_degree[nxt] -= 1\n            if in_degree[nxt] == 0:\n                q.append(nxt)\n    return taken == num_courses",
      "java": "class Solution {\n    public boolean canFinish(int numCourses, int[][] prerequisites) {\n        int[] inDegree = new int[numCourses];\n        List<List<Integer>> adj = new ArrayList<>();\n        for (int i = 0; i < numCourses; i++) adj.add(new ArrayList<>());\n        for (int[] p : prerequisites) {\n            adj.get(p[1]).add(p[0]);\n            inDegree[p[0]]++;\n        }\n        Queue<Integer> q = new LinkedList<>();\n        for (int i = 0; i < numCourses; i++) if (inDegree[i] == 0) q.add(i);\n        int count = 0;\n        while (!q.isEmpty()) {\n            int node = q.poll();\n            count++;\n            for (int nxt : adj.get(node)) {\n                if (--inDegree[nxt] == 0) q.add(nxt);\n            }\n        }\n        return count == numCourses;\n    }\n}"
    },
    "testCases": [
      {
        "input": {
          "numCourses": 2,
          "prerequisites": [
            [
              1,
              0
            ]
          ]
        },
        "expected": true
      },
      {
        "input": {
          "numCourses": 2,
          "prerequisites": [
            [
              1,
              0
            ],
            [
              0,
              1
            ]
          ]
        },
        "expected": false
      }
    ],
    "solution": "Kahn's algorithm (BFS topological sort) using in-degrees to detect cycles in directed graph.",
    "timeComplexity": "O(V + E)",
    "spaceComplexity": "O(V + E)"
  },
  {
    "id": "lru-cache",
    "title": "LRU Cache",
    "difficulty": "Medium",
    "company": [
      "google",
      "meta",
      "amazon",
      "microsoft",
      "apple"
    ],
    "category": "Design",
    "description": "Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.\n\nImplement the `LRUCache` class:\n- `LRUCache(int capacity)` Initialize the LRU cache with positive size capacity.\n- `int get(int key)` Return the value of the key if the key exists, otherwise return -1.\n- `void put(int key, int value)` Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity, evict the least recently used key.\n\nThe functions `get` and `put` must each run in O(1) average time complexity.",
    "examples": [
      {
        "input": "[\"LRUCache\", \"put\", \"put\", \"get\", \"put\", \"get\", \"put\", \"get\", \"get\", \"get\"]\n[[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]",
        "output": "[null, null, null, 1, null, -1, null, -1, 3, 4]",
        "explanation": "LRU operations executing in O(1)."
      }
    ],
    "constraints": [
      "1 <= capacity <= 3000",
      "0 <= key <= 10^4",
      "0 <= value <= 10^5",
      "At most 2 * 10^5 calls to get and put."
    ],
    "starterCode": {
      "javascript": "class LRUCache {\n  constructor(capacity) {\n    this.capacity = capacity;\n    this.map = new Map();\n  }\n  get(key) {\n    if (!this.map.has(key)) return -1;\n    const val = this.map.get(key);\n    this.map.delete(key);\n    this.map.set(key, val);\n    return val;\n  }\n  put(key, value) {\n    if (this.map.has(key)) this.map.delete(key);\n    this.map.set(key, value);\n    if (this.map.size > this.capacity) {\n      const firstKey = this.map.keys().next().value;\n      this.map.delete(firstKey);\n    }\n  }\n}",
      "python": "from collections import OrderedDict\nclass LRUCache:\n    def __init__(self, capacity: int):\n        self.cap = capacity\n        self.cache = OrderedDict()\n    def get(self, key: int) -> int:\n        if key not in self.cache:\n            return -1\n        self.cache.move_to_end(key)\n        return self.cache[key]\n    def put(self, key: int, value: int) -> None:\n        if key in self.cache:\n            self.cache.move_to_end(key)\n        self.cache[key] = value\n        if len(self.cache) > self.cap:\n            self.cache.popitem(last=False)",
      "java": "class LRUCache {\n    private final int capacity;\n    private final LinkedHashMap<Integer, Integer> map;\n    public LRUCache(int capacity) {\n        this.capacity = capacity;\n        this.map = new LinkedHashMap<>(capacity, 0.75f, true) {\n            protected boolean removeEldestEntry(Map.Entry eldest) {\n                return size() > capacity;\n            }\n        };\n    }\n    public int get(int key) {\n        return map.getOrDefault(key, -1);\n    }\n    public void put(int key, int value) {\n        map.put(key, value);\n    }\n}"
    },
    "testCases": [],
    "solution": "Combine a Doubly Linked List (for O(1) removals and prepends) with a Hash Map (for O(1) lookups).",
    "timeComplexity": "O(1) for both get and put",
    "spaceComplexity": "O(capacity)"
  },
  {
    "id": "design-twitter",
    "title": "Design Twitter",
    "difficulty": "Medium",
    "company": [
      "meta",
      "amazon",
      "microsoft"
    ],
    "category": "Design",
    "description": "Design a simplified version of Twitter where users can post tweets, follow/unfollow another user, and get the 10 most recent tweets in the user's news feed.",
    "examples": [
      {
        "input": "[\"Twitter\", \"postTweet\", \"getNewsFeed\", \"follow\", \"getNewsFeed\", \"unfollow\", \"getNewsFeed\"]\n[[], [1, 5], [1], [1, 2], [1], [1, 2], [1]]",
        "output": "[null, null, [5], null, [5, 6], null, [5]]",
        "explanation": "Feed updates dynamically with follows and posts."
      }
    ],
    "constraints": [
      "1 <= userId, followerId, followeeId <= 500",
      "0 <= tweetId <= 10^4",
      "At most 3 * 10^4 calls."
    ],
    "starterCode": {
      "javascript": "class Twitter {\n  constructor() {\n    this.tweets = []; // { userId, tweetId, time }\n    this.following = new Map(); // userId -> Set(followeeIds)\n    this.timer = 0;\n  }\n  postTweet(userId, tweetId) {\n    this.tweets.push({ userId, tweetId, time: this.timer++ });\n  }\n  getNewsFeed(userId) {\n    const followees = this.following.get(userId) || new Set();\n    const feed = [];\n    for (let i = this.tweets.length - 1; i >= 0 && feed.length < 10; i--) {\n      const t = this.tweets[i];\n      if (t.userId === userId || followees.has(t.userId)) {\n        feed.push(t.tweetId);\n      }\n    }\n    return feed;\n  }\n  follow(followerId, followeeId) {\n    if (!this.following.has(followerId)) this.following.set(followerId, new Set());\n    this.following.get(followerId).add(followeeId);\n  }\n  unfollow(followerId, followeeId) {\n    if (this.following.has(followerId)) this.following.get(followerId).delete(followeeId);\n  }\n}",
      "python": "class Twitter:\n    def __init__(self):\n        self.timer = 0\n        self.tweets = [] # (time, userId, tweetId)\n        self.following = {}\n    def post_tweet(self, user_id: int, tweet_id: int) -> None:\n        self.tweets.append((self.timer, user_id, tweet_id))\n        self.timer += 1\n    def get_news_feed(self, user_id: int) -> list[int]:\n        follows = self.following.get(user_id, set())\n        feed = []\n        for t, uid, tid in reversed(self.tweets):\n            if uid == user_id or uid in follows:\n                feed.append(tid)\n                if len(feed) == 10: break\n        return feed\n    def follow(self, follower_id: int, followee_id: int) -> None:\n        if follower_id not in self.following:\n            self.following[follower_id] = set()\n        self.following[follower_id].add(followee_id)\n    def unfollow(self, follower_id: int, followee_id: int) -> None:\n        if follower_id in self.following:\n            self.following[follower_id].discard(followee_id)",
      "java": "class Twitter {\n    private static int timeStamp = 0;\n    private Map<Integer, Set<Integer>> followed = new HashMap<>();\n    private Map<Integer, List<int[]>> tweets = new HashMap<>();\n    public Twitter() {}\n    public void postTweet(int userId, int tweetId) {\n        tweets.computeIfAbsent(userId, k -> new ArrayList<>()).add(new int[]{timeStamp++, tweetId});\n    }\n    public List<Integer> getNewsFeed(int userId) {\n        PriorityQueue<int[]> pq = new PriorityQueue<>((a, b) -> b[0] - a[0]);\n        Set<Integer> users = new HashSet<>(followed.getOrDefault(userId, new HashSet<>()));\n        users.add(userId);\n        for (int u : users) {\n            List<int[]> userTweets = tweets.getOrDefault(u, Collections.emptyList());\n            for (int[] t : userTweets) pq.add(t);\n        }\n        List<Integer> res = new ArrayList<>();\n        while (!pq.isEmpty() && res.size() < 10) res.add(pq.poll()[1]);\n        return res;\n    }\n    public void follow(int followerId, int followeeId) {\n        followed.computeIfAbsent(followerId, k -> new HashSet<>()).add(followeeId);\n    }\n    public void unfollow(int followerId, int followeeId) {\n        if (followed.containsKey(followerId)) followed.get(followerId).remove(followeeId);\n    }\n}"
    },
    "testCases": [],
    "solution": "Track follow relationships with hash sets and merge user timelines using a max-heap priority queue.",
    "timeComplexity": "O(k log k) for feed retrieval",
    "spaceComplexity": "O(N * T)"
  },
  {
    "id": "coin-change",
    "title": "Coin Change",
    "difficulty": "Medium",
    "company": [
      "amazon",
      "meta",
      "google"
    ],
    "category": "Dynamic Programming",
    "description": "You are given an integer array `coins` representing coins of different denominations and an integer `amount` representing a total amount of money.\n\nReturn the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return `-1`.\n\nYou may assume that you have an infinite number of each kind of coin.",
    "examples": [
      {
        "input": "coins = [1,2,5], amount = 11",
        "output": "3",
        "explanation": "11 = 5 + 5 + 1 (3 coins)."
      },
      {
        "input": "coins = [2], amount = 3",
        "output": "-1",
        "explanation": "Cannot make amount 3 with only 2s."
      },
      {
        "input": "coins = [1], amount = 0",
        "output": "0",
        "explanation": "0 coins needed for amount 0."
      }
    ],
    "constraints": [
      "1 <= coins.length <= 12",
      "1 <= coins[i] <= 2^31 - 1",
      "0 <= amount <= 10^4"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number[]} coins\n * @param {number} amount\n * @return {number}\n */\nfunction coinChange(coins, amount) {\n  const dp = new Array(amount + 1).fill(Infinity);\n  dp[0] = 0;\n  for (let i = 1; i <= amount; i++) {\n    for (const coin of coins) {\n      if (i - coin >= 0) {\n        dp[i] = Math.min(dp[i], dp[i - coin] + 1);\n      }\n    }\n  }\n  return dp[amount] === Infinity ? -1 : dp[amount];\n}",
      "python": "def coin_change(coins: list[int], amount: int) -> int:\n    dp = [float('inf')] * (amount + 1)\n    dp[0] = 0\n    for i in range(1, amount + 1):\n        for c in coins:\n            if i - c >= 0:\n                dp[i] = min(dp[i], dp[i - c] + 1)\n    return dp[amount] if dp[amount] != float('inf') else -1",
      "java": "class Solution {\n    public int coinChange(int[] coins, int amount) {\n        int[] dp = new int[amount + 1];\n        Arrays.fill(dp, amount + 1);\n        dp[0] = 0;\n        for (int i = 1; i <= amount; i++) {\n            for (int c : coins) {\n                if (i - c >= 0) dp[i] = Math.min(dp[i], dp[i - c] + 1);\n            }\n        }\n        return dp[amount] > amount ? -1 : dp[amount];\n    }\n}"
    },
    "testCases": [
      {
        "input": {
          "coins": [
            1,
            2,
            5
          ],
          "amount": 11
        },
        "expected": 3
      },
      {
        "input": {
          "coins": [
            2
          ],
          "amount": 3
        },
        "expected": -1
      },
      {
        "input": {
          "coins": [
            1
          ],
          "amount": 0
        },
        "expected": 0
      }
    ],
    "solution": "Bottom-up 1D DP: dp[i] = min(dp[i], dp[i - coin] + 1) for every coin denomination.",
    "timeComplexity": "O(amount * coins.length)",
    "spaceComplexity": "O(amount)"
  },
  {
    "id": "kth-largest-element",
    "title": "Kth Largest Element in an Array",
    "difficulty": "Medium",
    "company": [
      "meta",
      "amazon",
      "google",
      "apple"
    ],
    "category": "Heap & Priority Queue",
    "description": "Given an integer array `nums` and an integer `k`, return the `k`th largest element in the array.\n\nNote that it is the `k`th largest element in the sorted order, not the `k`th distinct element.\n\nCan you solve it in O(n) average time complexity?",
    "examples": [
      {
        "input": "nums = [3,2,1,5,6,4], k = 2",
        "output": "5",
        "explanation": "2nd largest element is 5."
      },
      {
        "input": "nums = [3,2,3,1,2,4,5,5,6], k = 4",
        "output": "4",
        "explanation": "4th largest element is 4."
      }
    ],
    "constraints": [
      "1 <= k <= nums.length <= 10^5",
      "-10^4 <= nums[i] <= 10^4"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number[]} nums\n * @param {number} k\n * @return {number}\n */\nfunction findKthLargest(nums, k) {\n  nums.sort((a, b) => b - a);\n  return nums[k - 1];\n}",
      "python": "import heapq\ndef find_kth_largest(nums: list[int], k: int) -> int:\n    return heapq.nlargest(k, nums)[-1]",
      "java": "class Solution {\n    public int findKthLargest(int[] nums, int k) {\n        PriorityQueue<Integer> minHeap = new PriorityQueue<>();\n        for (int num : nums) {\n            minHeap.add(num);\n            if (minHeap.size() > k) minHeap.poll();\n        }\n        return minHeap.peek();\n    }\n}"
    },
    "testCases": [
      {
        "input": {
          "nums": [
            3,
            2,
            1,
            5,
            6,
            4
          ],
          "k": 2
        },
        "expected": 5
      },
      {
        "input": {
          "nums": [
            3,
            2,
            3,
            1,
            2,
            4,
            5,
            5,
            6
          ],
          "k": 4
        },
        "expected": 4
      }
    ],
    "solution": "Use a min-heap of size k or Quickselect partitioning to achieve O(n) average runtime.",
    "timeComplexity": "O(n) average Quickselect or O(n log k) Min-Heap",
    "spaceComplexity": "O(k)"
  },
  {
    "id": "binary-tree-level-order",
    "title": "Binary Tree Level Order Traversal",
    "difficulty": "Medium",
    "company": [
      "amazon",
      "meta",
      "microsoft"
    ],
    "category": "Tree & BFS",
    "description": "Given the `root` of a binary tree, return the level order traversal of its nodes' values (i.e., from left to right, level by level).",
    "examples": [
      {
        "input": "root = [3,9,20,null,null,15,7]",
        "output": "[[3],[9,20],[15,7]]",
        "explanation": "Nodes traversed by horizontal level."
      },
      {
        "input": "root = [1]",
        "output": "[[1]]",
        "explanation": "Single node."
      }
    ],
    "constraints": [
      "The number of nodes in the tree is in the range [0, 2000].",
      "-1000 <= Node.val <= 1000"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {TreeNode} root\n * @return {number[][]}\n */\nfunction levelOrder(root) {\n  if (!root) return [];\n  const res = [];\n  const queue = [root];\n  while (queue.length) {\n    const levelSize = queue.length;\n    const currentLevel = [];\n    for (let i = 0; i < levelSize; i++) {\n      const node = queue.shift();\n      currentLevel.push(node.val);\n      if (node.left) queue.push(node.left);\n      if (node.right) queue.push(node.right);\n    }\n    res.push(currentLevel);\n  }\n  return res;\n}",
      "python": "from collections import deque\ndef level_order(root):\n    if not root: return []\n    res, q = [], deque([root])\n    while q:\n        level = []\n        for _ in range(len(q)):\n            node = q.popleft()\n            level.append(node.val)\n            if node.left: q.append(node.left)\n            if node.right: q.append(node.right)\n        res.append(level)\n    return res",
      "java": "class Solution {\n    public List<List<Integer>> levelOrder(TreeNode root) {\n        List<List<Integer>> res = new ArrayList<>();\n        if (root == null) return res;\n        Queue<TreeNode> q = new LinkedList<>();\n        q.add(root);\n        while (!q.isEmpty()) {\n            int size = q.size();\n            List<Integer> level = new ArrayList<>();\n            for (int i = 0; i < size; i++) {\n                TreeNode cur = q.poll();\n                level.add(cur.val);\n                if (cur.left != null) q.add(cur.left);\n                if (cur.right != null) q.add(cur.right);\n            }\n            res.add(level);\n        }\n        return res;\n    }\n}"
    },
    "testCases": [],
    "solution": "BFS queue keeping track of current queue length for level-by-level batching.",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(n)"
  },
  {
    "id": "decode-string",
    "title": "Decode String",
    "difficulty": "Medium",
    "company": [
      "google",
      "netflix",
      "meta"
    ],
    "category": "Stack",
    "description": "Given an encoded string, return its decoded string.\n\nThe encoding rule is: `k[encoded_string]`, where the `encoded_string` inside the square brackets is being repeated exactly `k` times. You may assume that the input string is always valid.",
    "examples": [
      {
        "input": "s = \"3[a]2[bc]\"",
        "output": "\"aaabcbc\"",
        "explanation": "a is repeated 3 times, bc is repeated 2 times."
      },
      {
        "input": "s = \"3[a2[c]]\"",
        "output": "\"accaccacc\"",
        "explanation": "Nested repetition: a2[c] -> acc repeated 3 times."
      }
    ],
    "constraints": [
      "1 <= s.length <= 30",
      "s consists of digits, letters, and brackets '[]'."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {string} s\n * @return {string}\n */\nfunction decodeString(s) {\n  const numStack = [];\n  const strStack = [];\n  let curStr = '';\n  let curNum = 0;\n  for (const ch of s) {\n    if (!isNaN(ch)) {\n      curNum = curNum * 10 + Number(ch);\n    } else if (ch === '[') {\n      numStack.push(curNum);\n      strStack.push(curStr);\n      curNum = 0;\n      curStr = '';\n    } else if (ch === ']') {\n      const repeatTimes = numStack.pop();\n      const prevStr = strStack.pop();\n      curStr = prevStr + curStr.repeat(repeatTimes);\n    } else {\n      curStr += ch;\n    }\n  }\n  return curStr;\n}",
      "python": "def decode_string(s: str) -> str:\n    num_stack, str_stack = [], []\n    cur_str, cur_num = '', 0\n    for ch in s:\n        if ch.isdigit():\n            cur_num = cur_num * 10 + int(ch)\n        elif ch == '[':\n            num_stack.append(cur_num)\n            str_stack.append(cur_str)\n            cur_num, cur_str = 0, ''\n        elif ch == ']':\n            k = num_stack.pop()\n            prev = str_stack.pop()\n            cur_str = prev + cur_str * k\n        else:\n            cur_str += ch\n    return cur_str",
      "java": "class Solution {\n    public String decodeString(String s) {\n        Stack<Integer> numStack = new Stack<>();\n        Stack<StringBuilder> strStack = new Stack<>();\n        StringBuilder cur = new StringBuilder();\n        int k = 0;\n        for (char ch : s.toCharArray()) {\n            if (Character.isDigit(ch)) {\n                k = k * 10 + (ch - '0');\n            } else if (ch == '[') {\n                numStack.push(k);\n                strStack.push(cur);\n                cur = new StringBuilder();\n                k = 0;\n            } else if (ch == ']') {\n                StringBuilder prev = strStack.pop();\n                int times = numStack.pop();\n                for (int i = 0; i < times; i++) prev.append(cur);\n                cur = prev;\n            } else {\n                cur.append(ch);\n            }\n        }\n        return cur.toString();\n    }\n}"
    },
    "testCases": [
      {
        "input": {
          "s": "3[a]2[bc]"
        },
        "expected": "aaabcbc"
      },
      {
        "input": {
          "s": "3[a2[c]]"
        },
        "expected": "accaccacc"
      }
    ],
    "solution": "Use two stacks (one for multiplier counts, one for partial strings) to resolve nested brackets.",
    "timeComplexity": "O(maxK * n)",
    "spaceComplexity": "O(m + n)"
  },
  {
    "id": "search-rotated-array",
    "title": "Search in Rotated Sorted Array",
    "difficulty": "Medium",
    "company": [
      "meta",
      "amazon",
      "google",
      "microsoft"
    ],
    "category": "Binary Search",
    "description": "Given the array `nums` after the possible rotation and an integer `target`, return the index of `target` if it is in `nums`, or `-1` if it is not in `nums`.\n\nYou must write an algorithm with O(log n) runtime complexity.",
    "examples": [
      {
        "input": "nums = [4,5,6,7,0,1,2], target = 0",
        "output": "4",
        "explanation": "Target 0 found at index 4."
      },
      {
        "input": "nums = [4,5,6,7,0,1,2], target = 3",
        "output": "-1",
        "explanation": "Target 3 is not in array."
      }
    ],
    "constraints": [
      "1 <= nums.length <= 5000",
      "-10^4 <= nums[i] <= 10^4",
      "All values of nums are unique."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number[]} nums\n * @param {number} target\n * @return {number}\n */\nfunction search(nums, target) {\n  let l = 0, r = nums.length - 1;\n  while (l <= r) {\n    const mid = Math.floor((l + r) / 2);\n    if (nums[mid] === target) return mid;\n    if (nums[l] <= nums[mid]) {\n      if (nums[l] <= target && target < nums[mid]) r = mid - 1;\n      else l = mid + 1;\n    } else {\n      if (nums[mid] < target && target <= nums[r]) l = mid + 1;\n      else r = mid - 1;\n    }\n  }\n  return -1;\n}",
      "python": "def search(nums: list[int], target: int) -> int:\n    l, r = 0, len(nums) - 1\n    while l <= r:\n        mid = (l + r) // 2\n        if nums[mid] == target: return mid\n        if nums[l] <= nums[mid]:\n            if nums[l] <= target < nums[mid]: r = mid - 1\n            else: l = mid + 1\n        else:\n            if nums[mid] < target <= nums[r]: l = mid + 1\n            else: r = mid - 1\n    return -1",
      "java": "class Solution {\n    public int search(int[] nums, int target) {\n        int l = 0, r = nums.length - 1;\n        while (l <= r) {\n            int mid = l + (r - l) / 2;\n            if (nums[mid] == target) return mid;\n            if (nums[l] <= nums[mid]) {\n                if (nums[l] <= target && target < nums[mid]) r = mid - 1;\n                else l = mid + 1;\n            } else {\n                if (nums[mid] < target && target <= nums[r]) l = mid + 1;\n                else r = mid - 1;\n            }\n        }\n        return -1;\n    }\n}"
    },
    "testCases": [
      {
        "input": {
          "nums": [
            4,
            5,
            6,
            7,
            0,
            1,
            2
          ],
          "target": 0
        },
        "expected": 4
      },
      {
        "input": {
          "nums": [
            4,
            5,
            6,
            7,
            0,
            1,
            2
          ],
          "target": 3
        },
        "expected": -1
      }
    ],
    "solution": "Modified binary search: determine which half is sorted, then check if target lies within that sorted range.",
    "timeComplexity": "O(log n)",
    "spaceComplexity": "O(1)"
  },
  {
    "id": "lca-binary-tree",
    "title": "Lowest Common Ancestor of a Binary Tree",
    "difficulty": "Medium",
    "company": [
      "meta",
      "amazon",
      "microsoft",
      "apple"
    ],
    "category": "Tree & Recursion",
    "description": "Given a binary tree, find the lowest common ancestor (LCA) of two given nodes `p` and `q`.\n\nThe lowest common ancestor is defined between two nodes `p` and `q` as the lowest node in `T` that has both `p` and `q` as descendants (where we allow a node to be a descendant of itself).",
    "examples": [
      {
        "input": "root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1",
        "output": "3",
        "explanation": "The LCA of nodes 5 and 1 is 3."
      },
      {
        "input": "root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4",
        "output": "5",
        "explanation": "Node 5 is ancestor of node 4."
      }
    ],
    "constraints": [
      "The number of nodes in the tree is in the range [2, 10^5].",
      "All Node.val are unique."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {TreeNode} root\n * @param {TreeNode} p\n * @param {TreeNode} q\n * @return {TreeNode}\n */\nfunction lowestCommonAncestor(root, p, q) {\n  if (!root || root === p || root === q) return root;\n  const left = lowestCommonAncestor(root.left, p, q);\n  const right = lowestCommonAncestor(root.right, p, q);\n  if (left && right) return root;\n  return left || right;\n}",
      "python": "def lowest_common_ancestor(root, p, q):\n    if not root or root == p or root == q:\n        return root\n    left = lowest_common_ancestor(root.left, p, q)\n    right = lowest_common_ancestor(root.right, p, q)\n    if left and right: return root\n    return left or right",
      "java": "class Solution {\n    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {\n        if (root == null || root == p || root == q) return root;\n        TreeNode left = lowestCommonAncestor(root.left, p, q);\n        TreeNode right = lowestCommonAncestor(root.right, p, q);\n        if (left != null && right != null) return root;\n        return left != null ? left : right;\n    }\n}"
    },
    "testCases": [],
    "solution": "Post-order recursive traversal: if both left and right subtrees return non-null, root is LCA.",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(h) recursion depth"
  },
  {
    "id": "trapping-rain-water",
    "title": "Trapping Rain Water",
    "difficulty": "Hard",
    "company": [
      "google",
      "amazon",
      "meta",
      "apple"
    ],
    "category": "Two Pointers",
    "description": "Given `n` non-negative integers representing an elevation map where the width of each bar is `1`, compute how much water it can trap after raining.",
    "examples": [
      {
        "input": "height = [0,1,0,2,1,0,1,3,2,1,2,1]",
        "output": "6",
        "explanation": "The elevation map traps 6 units of rain water."
      },
      {
        "input": "height = [4,2,0,3,2,5]",
        "output": "9",
        "explanation": "Traps 9 units of rain water."
      }
    ],
    "constraints": [
      "n == height.length",
      "1 <= n <= 2 * 10^4",
      "0 <= height[i] <= 10^5"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number[]} height\n * @return {number}\n */\nfunction trap(height) {\n  let l = 0, r = height.length - 1;\n  let leftMax = 0, rightMax = 0, water = 0;\n  while (l < r) {\n    if (height[l] < height[r]) {\n      if (height[l] >= leftMax) leftMax = height[l];\n      else water += leftMax - height[l];\n      l++;\n    } else {\n      if (height[r] >= rightMax) rightMax = height[r];\n      else water += rightMax - height[r];\n      r--;\n    }\n  }\n  return water;\n}",
      "python": "def trap(height: list[int]) -> int:\n    l, r = 0, len(height) - 1\n    left_max = right_max = water = 0\n    while l < r:\n        if height[l] < height[r]:\n            if height[l] >= left_max: left_max = height[l]\n            else: water += left_max - height[l]\n            l += 1\n        else:\n            if height[r] >= right_max: right_max = height[r]\n            else: water += right_max - height[r]\n            r -= 1\n    return water",
      "java": "class Solution {\n    public int trap(int[] height) {\n        int l = 0, r = height.length - 1;\n        int leftMax = 0, rightMax = 0, water = 0;\n        while (l < r) {\n            if (height[l] < height[r]) {\n                if (height[l] >= leftMax) leftMax = height[l];\n                else water += leftMax - height[l];\n                l++;\n            } else {\n                if (height[r] >= rightMax) rightMax = height[r];\n                else water += rightMax - height[r];\n                r--;\n            }\n        }\n        return water;\n    }\n}"
    },
    "testCases": [
      {
        "input": {
          "height": [
            0,
            1,
            0,
            2,
            1,
            0,
            1,
            3,
            2,
            1,
            2,
            1
          ]
        },
        "expected": 6
      },
      {
        "input": {
          "height": [
            4,
            2,
            0,
            3,
            2,
            5
          ]
        },
        "expected": 9
      }
    ],
    "solution": "Two pointers maintaining leftMax and rightMax to compute trapped water at each step in O(1) space.",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)"
  },
  {
    "id": "merge-k-sorted-lists",
    "title": "Merge k Sorted Lists",
    "difficulty": "Hard",
    "company": [
      "meta",
      "amazon",
      "google",
      "microsoft"
    ],
    "category": "Heap & Divide and Conquer",
    "description": "You are given an array of `k` linked-lists `lists`, each linked-list is sorted in ascending order.\n\nMerge all the linked-lists into one sorted linked-list and return it.",
    "examples": [
      {
        "input": "lists = [[1,4,5],[1,3,4],[2,6]]",
        "output": "[1,1,2,3,4,4,5,6]",
        "explanation": "All lists merged into one sorted list."
      },
      {
        "input": "lists = []",
        "output": "[]",
        "explanation": "Empty input."
      }
    ],
    "constraints": [
      "k == lists.length",
      "0 <= k <= 10^4",
      "0 <= lists[i].length <= 500",
      "-10^4 <= lists[i][j] <= 10^4"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {ListNode[]} lists\n * @return {ListNode}\n */\nfunction mergeKLists(lists) {\n  if (!lists || lists.length === 0) return null;\n  const mergeTwo = (l1, l2) => {\n    const dummy = { next: null };\n    let cur = dummy;\n    while (l1 && l2) {\n      if (l1.val <= l2.val) { cur.next = l1; l1 = l1.next; }\n      else { cur.next = l2; l2 = l2.next; }\n      cur = cur.next;\n    }\n    cur.next = l1 || l2;\n    return dummy.next;\n  };\n  let interval = 1;\n  while (interval < lists.length) {\n    for (let i = 0; i + interval < lists.length; i += interval * 2) {\n      lists[i] = mergeTwo(lists[i], lists[i + interval]);\n    }\n    interval *= 2;\n  }\n  return lists[0];\n}",
      "python": "import heapq\ndef merge_k_lists(lists):\n    min_heap = []\n    for i, node in enumerate(lists):\n        if node: heapq.heappush(min_heap, (node.val, i, node))\n    dummy = ListNode(0)\n    cur = dummy\n    while min_heap:\n        val, i, node = heapq.heappop(min_heap)\n        cur.next = node\n        cur = cur.next\n        if node.next:\n            heapq.heappush(min_heap, (node.next.val, i, node.next))\n    return dummy.next",
      "java": "class Solution {\n    public ListNode mergeKLists(ListNode[] lists) {\n        if (lists == null || lists.length == 0) return null;\n        PriorityQueue<ListNode> pq = new PriorityQueue<>((a, b) -> a.val - b.val);\n        for (ListNode node : lists) if (node != null) pq.add(node);\n        ListNode dummy = new ListNode(0);\n        ListNode cur = dummy;\n        while (!pq.isEmpty()) {\n            ListNode node = pq.poll();\n            cur.next = node;\n            cur = cur.next;\n            if (node.next != null) pq.add(node.next);\n        }\n        return dummy.next;\n    }\n}"
    },
    "testCases": [],
    "solution": "Divide and conquer (pair-wise merging) or min-heap of current heads to achieve O(N log k).",
    "timeComplexity": "O(N log k) where N is total nodes",
    "spaceComplexity": "O(1) divide and conquer or O(k) min-heap"
  },
  {
    "id": "median-sorted-arrays",
    "title": "Median of Two Sorted Arrays",
    "difficulty": "Hard",
    "company": [
      "google",
      "amazon",
      "apple",
      "microsoft"
    ],
    "category": "Binary Search",
    "description": "Given two sorted arrays `nums1` and `nums2` of size `m` and `n` respectively, return the median of the two sorted arrays.\n\nThe overall run time complexity should be O(log (m+n)).",
    "examples": [
      {
        "input": "nums1 = [1,3], nums2 = [2]",
        "output": "2.00000",
        "explanation": "merged = [1,2,3], median = 2."
      },
      {
        "input": "nums1 = [1,2], nums2 = [3,4]",
        "output": "2.50000",
        "explanation": "merged = [1,2,3,4], median = (2 + 3) / 2 = 2.5."
      }
    ],
    "constraints": [
      "nums1.length == m",
      "nums2.length == n",
      "0 <= m, n <= 1000",
      "1 <= m + n <= 2000"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number[]} nums1\n * @param {number[]} nums2\n * @return {number}\n */\nfunction findMedianSortedArrays(nums1, nums2) {\n  if (nums1.length > nums2.length) return findMedianSortedArrays(nums2, nums1);\n  const m = nums1.length, n = nums2.length;\n  let l = 0, r = m;\n  while (l <= r) {\n    const pX = Math.floor((l + r) / 2);\n    const pY = Math.floor((m + n + 1) / 2) - pX;\n    const maxLX = pX === 0 ? -Infinity : nums1[pX - 1];\n    const minRX = pX === m ? Infinity : nums1[pX];\n    const maxLY = pY === 0 ? -Infinity : nums2[pY - 1];\n    const minRY = pY === n ? Infinity : nums2[pY];\n    if (maxLX <= minRY && maxLY <= minRX) {\n      if ((m + n) % 2 === 1) return Math.max(maxLX, maxLY);\n      return (Math.max(maxLX, maxLY) + Math.min(minRX, minRY)) / 2;\n    } else if (maxLX > minRY) {\n      r = pX - 1;\n    } else {\n      l = pX + 1;\n    }\n  }\n}",
      "python": "def find_median_sorted_arrays(nums1: list[int], nums2: list[int]) -> float:\n    if len(nums1) > len(nums2):\n        nums1, nums2 = nums2, nums1\n    m, n = len(nums1), len(nums2)\n    l, r = 0, m\n    while l <= r:\n        px = (l + r) // 2\n        py = (m + n + 1) // 2 - px\n        max_lx = float('-inf') if px == 0 else nums1[px - 1]\n        min_rx = float('inf') if px == m else nums1[px]\n        max_ly = float('-inf') if py == 0 else nums2[py - 1]\n        min_ry = float('inf') if py == n else nums2[py]\n        if max_lx <= min_ry and max_ly <= min_rx:\n            if (m + n) % 2 == 1: return float(max(max_lx, max_ly))\n            return (max(max_lx, max_ly) + min(min_rx, min_ry)) / 2.0\n        elif max_lx > min_ry: r = px - 1\n        else: l = px + 1",
      "java": "class Solution {\n    public double findMedianSortedArrays(int[] nums1, int[] nums2) {\n        if (nums1.length > nums2.length) return findMedianSortedArrays(nums2, nums1);\n        int m = nums1.length, n = nums2.length, l = 0, r = m;\n        while (l <= r) {\n            int px = (l + r) / 2;\n            int py = (m + n + 1) / 2 - px;\n            int maxLX = px == 0 ? Integer.MIN_VALUE : nums1[px - 1];\n            int minRX = px == m ? Integer.MAX_VALUE : nums1[px];\n            int maxLY = py == 0 ? Integer.MIN_VALUE : nums2[py - 1];\n            int minRY = py == n ? Integer.MAX_VALUE : nums2[py];\n            if (maxLX <= minRY && maxLY <= minRX) {\n                if ((m + n) % 2 == 1) return Math.max(maxLX, maxLY);\n                return (Math.max(maxLX, maxLY) + Math.min(minRX, minRY)) / 2.0;\n            } else if (maxLX > minRY) r = px - 1;\n            else l = px + 1;\n        }\n        return 0.0;\n    }\n}"
    },
    "testCases": [
      {
        "input": {
          "nums1": [
            1,
            3
          ],
          "nums2": [
            2
          ]
        },
        "expected": 2.0
      },
      {
        "input": {
          "nums1": [
            1,
            2
          ],
          "nums2": [
            3,
            4
          ]
        },
        "expected": 2.5
      }
    ],
    "solution": "Binary search on the smaller array's partition to partition both arrays into two equal halves.",
    "timeComplexity": "O(log(min(m, n)))",
    "spaceComplexity": "O(1)"
  },
  {
    "id": "word-search-ii",
    "title": "Word Search II",
    "difficulty": "Hard",
    "company": [
      "google",
      "amazon",
      "microsoft"
    ],
    "category": "Trie & Backtracking",
    "description": "Given an `m x n` board of characters and a list of strings `words`, return all words on the board.\n\nEach word must be constructed from letters of sequentially adjacent cells.",
    "examples": [
      {
        "input": "board = [[\"o\",\"a\",\"a\",\"n\"],[\"e\",\"t\",\"a\",\"e\"],[\"i\",\"h\",\"k\",\"r\"],[\"i\",\"f\",\"l\",\"v\"]], words = [\"oath\",\"pea\",\"eat\",\"rain\"]",
        "output": "[\"eat\",\"oath\"]",
        "explanation": "Words oath and eat can be formed."
      }
    ],
    "constraints": [
      "m == board.length",
      "n == board[i].length",
      "1 <= m, n <= 12",
      "1 <= words.length <= 3 * 10^4"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {character[][]} board\n * @param {string[]} words\n * @return {string[]}\n */\nfunction findWords(board, words) {\n  const root = {};\n  for (const w of words) {\n    let node = root;\n    for (const c of w) {\n      if (!node[c]) node[c] = {};\n      node = node[c];\n    }\n    node.word = w;\n  }\n  const res = [];\n  const dfs = (r, c, node) => {\n    const char = board[r][c];\n    if (!node[char]) return;\n    const next = node[char];\n    if (next.word) {\n      res.push(next.word);\n      next.word = null;\n    }\n    board[r][c] = '#';\n    const dirs = [[1,0],[-1,0],[0,1],[0,-1]];\n    for (const [dr, dc] of dirs) {\n      const nr = r + dr, nc = c + dc;\n      if (nr >= 0 && nr < board.length && nc >= 0 && nc < board[0].length && board[nr][nc] !== '#') {\n        dfs(nr, nc, next);\n      }\n    }\n    board[r][c] = char;\n  };\n  for (let r = 0; r < board.length; r++) {\n    for (let c = 0; c < board[0].length; c++) {\n      dfs(r, c, root);\n    }\n  }\n  return res;\n}",
      "python": "def find_words(board: list[list[str]], words: list[str]) -> list[str]:\n    trie = {}\n    for w in words:\n        node = trie\n        for c in w:\n            node = node.setdefault(c, {})\n        node['#'] = w\n    res = []\n    rows, cols = len(board), len(board[0])\n    def dfs(r, c, parent):\n        ch = board[r][c]\n        cur = parent[ch]\n        if '#' in cur:\n            res.append(cur.pop('#'))\n        board[r][c] = '$'\n        for dr, dc in [(1,0),(-1,0),(0,1),(0,-1)]:\n            nr, nc = r + dr, c + dc\n            if 0 <= nr < rows and 0 <= nc < cols and board[nr][nc] in cur:\n                dfs(nr, nc, cur)\n        board[r][c] = ch\n        if not cur:\n            parent.pop(ch)\n    for r in range(rows):\n        for c in range(cols):\n            if board[r][c] in trie:\n                dfs(r, c, trie)\n    return res",
      "java": "class Solution {\n    // Trie + Backtracking solution\n    public List<String> findWords(char[][] board, String[] words) {\n        // Build Trie and run 4-directional DFS with pruning\n        return new ArrayList<>();\n    }\n}"
    },
    "testCases": [],
    "solution": "Build Prefix Tree (Trie) over all target words. Run 4-directional DFS on board, pruning Trie nodes dynamically.",
    "timeComplexity": "O(M * N * 4^L)",
    "spaceComplexity": "O(sum of word lengths)"
  }
];

export const systemDesignTopics = [
  {
    "id": "url-shortener",
    "title": "Design a URL Shortener",
    "difficulty": "Medium",
    "company": [
      "google",
      "meta",
      "amazon"
    ],
    "description": "Design a high-scale URL shortening service like Bitly with high read-to-write ratio (100:1) and analytics.",
    "keyComponents": [
      "API Gateway",
      "Hash Generator (Base62)",
      "KV Store / Redis",
      "Relational DB",
      "Analytics Counter / Kafka"
    ],
    "considerations": [
      "Hash collision handling",
      "Read-heavy caching (80/20 rule)",
      "Custom short aliases",
      "URL expiration TTL",
      "301 vs 302 redirect analytics"
    ]
  },
  {
    "id": "news-feed",
    "title": "Design a Real-Time News Feed",
    "difficulty": "Hard",
    "company": [
      "meta",
      "google",
      "twitter"
    ],
    "description": "Design a social media news feed like Facebook Feed or Instagram with dynamic ranking for billions of users.",
    "keyComponents": [
      "Feed Service",
      "Fan-out Service",
      "Post Storage",
      "Social Graph DB",
      "ML Ranking Model",
      "Timeline Cache"
    ],
    "considerations": [
      "Push vs Pull hybrid fan-out model",
      "Celebrity hot partition handling",
      "Real-time timeline ranking",
      "Cross-region replication",
      "Deduplication"
    ]
  },
  {
    "id": "chat-system",
    "title": "Design a Real-Time Messaging App",
    "difficulty": "Hard",
    "company": [
      "meta",
      "microsoft",
      "google"
    ],
    "description": "Design an ultra-low latency real-time messaging system like WhatsApp or Slack supporting 1-on-1 and group chats.",
    "keyComponents": [
      "WebSocket Gateway",
      "Message Queue (Kafka)",
      "Presence Service",
      "Cassandra/ScyllaDB Message Store",
      "Push Notifications (APNs/FCM)"
    ],
    "considerations": [
      "WebSocket connection state management",
      "At-least-once vs exactly-once delivery",
      "Offline message buffering",
      "End-to-end encryption (Signal protocol)",
      "Group chat message fan-out"
    ]
  },
  {
    "id": "video-streaming",
    "title": "Design Video Streaming Platform",
    "difficulty": "Hard",
    "company": [
      "netflix",
      "google",
      "amazon"
    ],
    "description": "Design a distributed global video streaming platform like Netflix or YouTube supporting adaptive bitrate streaming.",
    "keyComponents": [
      "Edge CDN (Open Connect)",
      "Video Transcoding Pipeline",
      "Blob Storage (S3)",
      "Metadata Service",
      "Recommendation Engine",
      "DRM Licensing"
    ],
    "considerations": [
      "Adaptive bitrate (HLS / DASH)",
      "Chunk-based upload and parallel transcoding",
      "Edge caching hit ratio optimization",
      "Multi-tenant bandwidth control",
      "Video DRM licensing"
    ]
  },
  {
    "id": "distributed-crawler",
    "title": "Design Distributed Web Crawler",
    "difficulty": "Hard",
    "company": [
      "google",
      "microsoft",
      "amazon"
    ],
    "description": "Design a scalable web crawler capable of parsing billions of web pages per month with deduplication and politeness.",
    "keyComponents": [
      "URL Frontier",
      "DNS Resolver Cache",
      "HTML Fetcher & Parser",
      "Robots.txt Evaluator",
      "Content Deduplicator (SimHash)",
      "Document Store"
    ],
    "considerations": [
      "Politeness policies & domain rate limiting",
      "Spider traps and circular link detection",
      "SimHash fuzzy deduplication",
      "Distributed URL priority queuing",
      "Dynamic IP rotation"
    ]
  },
  {
    "id": "distributed-cache",
    "title": "Design Distributed In-Memory Cache",
    "difficulty": "Hard",
    "company": [
      "google",
      "amazon",
      "meta"
    ],
    "description": "Design a distributed in-memory cache system like Memcached or Redis Cluster supporting consistent hashing and replication.",
    "keyComponents": [
      "Client Library",
      "Consistent Hashing Ring",
      "Virtual Nodes",
      "Eviction Engine (LRU/LFU)",
      "Gossip Protocol",
      "WAL Persistence"
    ],
    "considerations": [
      "Consistent hashing node add/remove rebalancing",
      "Cache stampede and thundering herd mitigation",
      "Write-through vs write-back policies",
      "Eviction algorithms under memory limits",
      "Replication and failover election"
    ]
  }
];

export const behavioralQuestions = [
  {
    "id": "conflict",
    "question": "Tell me about a time you had a technical disagreement with a senior engineer or product manager. How did you resolve it?",
    "framework": "STAR",
    "category": "Collaboration",
    "tips": [
      "Focus on data and objective trade-offs rather than egos",
      "Show active listening and empathy",
      "Demonstrate disagree and commit principle"
    ],
    "companies": [
      "google",
      "meta",
      "amazon",
      "apple",
      "microsoft",
      "netflix"
    ]
  },
  {
    "id": "failure",
    "question": "Describe a critical production outage or major project failure you were responsible for. How did you react and what was learned?",
    "framework": "STAR",
    "category": "Growth Mindset",
    "tips": [
      "Take genuine ownership without deflecting blame",
      "Describe step-by-step containment during the crisis",
      "Highlight blameless post-mortem and guardrails implemented"
    ],
    "companies": [
      "google",
      "meta",
      "amazon",
      "microsoft",
      "netflix"
    ]
  },
  {
    "id": "leadership",
    "question": "Tell me about a time you had to lead a cross-functional initiative with conflicting priorities and tight deadlines.",
    "framework": "STAR",
    "category": "Leadership",
    "tips": [
      "Explain how you aligned stakeholder incentives",
      "Quantify milestones achieved and risks preempted",
      "Show mentorship and delegation"
    ],
    "companies": [
      "amazon",
      "google",
      "meta",
      "apple",
      "microsoft"
    ]
  },
  {
    "id": "innovation",
    "question": "Describe a time you proposed a novel architectural improvement that challenged the established status quo.",
    "framework": "STAR",
    "category": "Innovation",
    "tips": [
      "Explain the latent bottleneck or developer friction",
      "Describe prototype testing and metric validation",
      "Quantify developer velocity or cloud cost reduction"
    ],
    "companies": [
      "google",
      "apple",
      "meta",
      "netflix"
    ]
  },
  {
    "id": "customer",
    "question": "Tell me about a time you went above and beyond to solve a customer problem or prevent user frustration.",
    "framework": "STAR",
    "category": "Customer Obsession",
    "tips": [
      "Crucial for Amazon LP #1 (Customer Obsession)",
      "Show user empathy and diving deep into telemetry logs",
      "Demonstrate lasting systemic solution rather than temporary patch"
    ],
    "companies": [
      "amazon",
      "google",
      "apple",
      "microsoft"
    ]
  },
  {
    "id": "ambiguity",
    "question": "How do you navigate projects with ambiguous requirements and uncertain technical feasibility?",
    "framework": "STAR",
    "category": "Decision Making",
    "tips": [
      "Outline structured decomposition of ambiguous goals",
      "Describe rapid proof-of-concept prototyping",
      "Demonstrate comfort with fast decision-making under uncertainty"
    ],
    "companies": [
      "google",
      "meta",
      "netflix",
      "amazon"
    ]
  }
];

export const skillCategories = [
  {
    "key": "algorithms",
    "label": "Algorithms & DS"
  },
  {
    "key": "systemDesign",
    "label": "System Design"
  },
  {
    "key": "coding",
    "label": "Coding Proficiency"
  },
  {
    "key": "behavioral",
    "label": "Behavioral/Leadership"
  },
  {
    "key": "domainKnowledge",
    "label": "Domain Knowledge"
  },
  {
    "key": "communication",
    "label": "Communication"
  }
];

export const jobListings = [
  {
    "id": 1,
    "title": "Software Engineer L4",
    "company": "google",
    "location": "Mountain View, CA",
    "salary": "$170K - $250K",
    "type": "Full-time",
    "skills": {
      "algorithms": 85,
      "systemDesign": 70,
      "coding": 90,
      "behavioral": 65,
      "domainKnowledge": 60,
      "communication": 70
    },
    "tags": [
      "Go",
      "C++",
      "Distributed Systems",
      "Cloud"
    ]
  },
  {
    "id": 2,
    "title": "Frontend Engineer E5",
    "company": "meta",
    "location": "Menlo Park, CA",
    "salary": "$190K - $280K",
    "type": "Full-time",
    "skills": {
      "algorithms": 75,
      "systemDesign": 65,
      "coding": 90,
      "behavioral": 70,
      "domainKnowledge": 85,
      "communication": 75
    },
    "tags": [
      "React",
      "TypeScript",
      "GraphQL",
      "Web Performance"
    ]
  },
  {
    "id": 3,
    "title": "SDE II (AWS Core)",
    "company": "amazon",
    "location": "Seattle, WA",
    "salary": "$150K - $220K",
    "type": "Full-time",
    "skills": {
      "algorithms": 80,
      "systemDesign": 75,
      "coding": 85,
      "behavioral": 80,
      "domainKnowledge": 70,
      "communication": 75
    },
    "tags": [
      "Java",
      "AWS Lambda",
      "DynamoDB",
      "Microservices"
    ]
  },
  {
    "id": 4,
    "title": "AI/ML Research Engineer",
    "company": "google",
    "location": "San Francisco, CA",
    "salary": "$210K - $330K",
    "type": "Full-time",
    "skills": {
      "algorithms": 90,
      "systemDesign": 75,
      "coding": 85,
      "behavioral": 60,
      "domainKnowledge": 95,
      "communication": 70
    },
    "tags": [
      "PyTorch",
      "JAX",
      "Gemini",
      "Transformers"
    ]
  },
  {
    "id": 5,
    "title": "Senior Site Reliability Engineer",
    "company": "google",
    "location": "Sunnyvale, CA",
    "salary": "$185K - $275K",
    "type": "Full-time",
    "skills": {
      "algorithms": 75,
      "systemDesign": 85,
      "coding": 80,
      "behavioral": 70,
      "domainKnowledge": 90,
      "communication": 75
    },
    "tags": [
      "Linux",
      "Kubernetes",
      "Borg",
      "Go"
    ]
  },
  {
    "id": 6,
    "title": "Principal System Architect",
    "company": "microsoft",
    "location": "Redmond, WA",
    "salary": "$230K - $360K",
    "type": "Full-time",
    "skills": {
      "algorithms": 80,
      "systemDesign": 95,
      "coding": 80,
      "behavioral": 85,
      "domainKnowledge": 90,
      "communication": 90
    },
    "tags": [
      "Azure",
      "Distributed Systems",
      "High Availability"
    ]
  },
  {
    "id": 7,
    "title": "Senior SWE (Streaming Core)",
    "company": "netflix",
    "location": "Los Gatos, CA",
    "salary": "$300K - $480K",
    "type": "Full-time",
    "skills": {
      "algorithms": 80,
      "systemDesign": 90,
      "coding": 90,
      "behavioral": 85,
      "domainKnowledge": 85,
      "communication": 85
    },
    "tags": [
      "Java",
      "Spring Cloud",
      "Chaos Engineering",
      "Microservices"
    ]
  },
  {
    "id": 8,
    "title": "iOS Software Engineer",
    "company": "apple",
    "location": "Cupertino, CA",
    "salary": "$175K - $265K",
    "type": "Full-time",
    "skills": {
      "algorithms": 75,
      "systemDesign": 70,
      "coding": 90,
      "behavioral": 65,
      "domainKnowledge": 90,
      "communication": 70
    },
    "tags": [
      "Swift",
      "SwiftUI",
      "CoreData",
      "Metal"
    ]
  },
  {
    "id": 9,
    "title": "Android System Engineer",
    "company": "google",
    "location": "Mountain View, CA",
    "salary": "$180K - $260K",
    "type": "Full-time",
    "skills": {
      "algorithms": 80,
      "systemDesign": 75,
      "coding": 90,
      "behavioral": 65,
      "domainKnowledge": 90,
      "communication": 70
    },
    "tags": [
      "Kotlin",
      "Android NDK",
      "Jetpack Compose",
      "IPC"
    ]
  },
  {
    "id": 10,
    "title": "Product Manager L5",
    "company": "google",
    "location": "New York, NY",
    "salary": "$180K - $260K",
    "type": "Full-time",
    "skills": {
      "algorithms": 50,
      "systemDesign": 60,
      "coding": 55,
      "behavioral": 85,
      "domainKnowledge": 85,
      "communication": 95
    },
    "tags": [
      "Product Strategy",
      "Analytics",
      "CIRCLES",
      "Ads"
    ]
  },
  {
    "id": 11,
    "title": "Technical Program Manager (TPM)",
    "company": "meta",
    "location": "Menlo Park, CA",
    "salary": "$170K - $250K",
    "type": "Full-time",
    "skills": {
      "algorithms": 55,
      "systemDesign": 75,
      "coding": 60,
      "behavioral": 90,
      "domainKnowledge": 80,
      "communication": 95
    },
    "tags": [
      "Datacenter Infra",
      "Agile Delivery",
      "Risk Management"
    ]
  },
  {
    "id": 12,
    "title": "Data Scientist (Experimentation)",
    "company": "meta",
    "location": "Remote, US",
    "salary": "$165K - $245K",
    "type": "Full-time",
    "skills": {
      "algorithms": 70,
      "systemDesign": 55,
      "coding": 75,
      "behavioral": 75,
      "domainKnowledge": 90,
      "communication": 85
    },
    "tags": [
      "SQL",
      "Python",
      "Causal Inference",
      "A/B Testing"
    ]
  },
  {
    "id": 13,
    "title": "Cloud & DevOps Engineer",
    "company": "amazon",
    "location": "Austin, TX",
    "salary": "$155K - $230K",
    "type": "Full-time",
    "skills": {
      "algorithms": 70,
      "systemDesign": 80,
      "coding": 80,
      "behavioral": 75,
      "domainKnowledge": 85,
      "communication": 70
    },
    "tags": [
      "Terraform",
      "Kubernetes",
      "CI/CD",
      "AWS CloudFormation"
    ]
  },
  {
    "id": 14,
    "title": "Security Engineer (Product Security)",
    "company": "apple",
    "location": "Cupertino, CA",
    "salary": "$190K - $285K",
    "type": "Full-time",
    "skills": {
      "algorithms": 80,
      "systemDesign": 80,
      "coding": 85,
      "behavioral": 70,
      "domainKnowledge": 95,
      "communication": 75
    },
    "tags": [
      "AppSec",
      "Threat Modeling",
      "Crypto",
      "Secure Enclave"
    ]
  },
  {
    "id": 15,
    "title": "SDET & Automation Lead",
    "company": "microsoft",
    "location": "Redmond, WA",
    "salary": "$150K - $225K",
    "type": "Full-time",
    "skills": {
      "algorithms": 75,
      "systemDesign": 70,
      "coding": 85,
      "behavioral": 75,
      "domainKnowledge": 85,
      "communication": 75
    },
    "tags": [
      "Playwright",
      "C#",
      "Test Frameworks",
      "Azure DevOps"
    ]
  },
  {
    "id": 16,
    "title": "Applied Scientist (NLP / LLM)",
    "company": "amazon",
    "location": "Seattle, WA",
    "salary": "$185K - $290K",
    "type": "Full-time",
    "skills": {
      "algorithms": 90,
      "systemDesign": 70,
      "coding": 85,
      "behavioral": 75,
      "domainKnowledge": 95,
      "communication": 75
    },
    "tags": [
      "SageMaker",
      "Bedrock",
      "NLP",
      "Vector Databases"
    ]
  },
  {
    "id": 17,
    "title": "Staff Infrastructure Security Engineer",
    "company": "meta",
    "location": "Sunnyvale, CA",
    "salary": "$215K - $340K",
    "type": "Full-time",
    "skills": {
      "algorithms": 80,
      "systemDesign": 90,
      "coding": 85,
      "behavioral": 80,
      "domainKnowledge": 95,
      "communication": 80
    },
    "tags": [
      "Zero Trust",
      "K8s Hardening",
      "IAM",
      "Incident Response"
    ]
  },
  {
    "id": 18,
    "title": "Senior Frontend Architect",
    "company": "netflix",
    "location": "Los Gatos, CA",
    "salary": "$290K - $450K",
    "type": "Full-time",
    "skills": {
      "algorithms": 75,
      "systemDesign": 85,
      "coding": 95,
      "behavioral": 85,
      "domainKnowledge": 90,
      "communication": 85
    },
    "tags": [
      "React",
      "TV UI Performance",
      "TypeScript",
      "Web Workers"
    ]
  }
];
