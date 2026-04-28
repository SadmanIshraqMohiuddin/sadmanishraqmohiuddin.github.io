export const profile = {
  name: "Sadman Ishraq Mohiuddin",
  shortName: "Sadman Mohiuddin",
  title: "Senior Business Analyst & Operations Strategy Professional",
  location: "Montreal, Quebec, Canada",
  email: "sadman.mohiuddin@gmail.com",
  linkedin: "https://www.linkedin.com/in/sadmanishraqmohiuddin",
  cvPath: "/Sadman-Ishraq-Mohiuddin-CV.pdf",
  headline:
    "Senior Business Analyst & Operations Strategy Professional",
  subheadline:
    "I help organizations translate complex operational challenges into structured requirements, scalable platforms, improved processes, and measurable business outcomes — across enterprise technology, cloud transformation, data analytics, and platform operations.",
  positioning:
    "Enterprise Systems · Process Improvement · Data Analytics · Requirements Engineering · Cloud Transformation · Platform Operations",
};

export const metrics = [
  { value: "~30,000", label: "users impacted by enterprise cloud transformation" },
  { value: "30,000+", label: "retail outlets on national fiscal compliance platform" },
  { value: "600,000+", label: "devices targeted in EFDMS scale-out architecture" },
  { value: "14,000+", label: "healthcare logistics orders fulfilled" },
  { value: "40+", label: "partner pharmacy network built" },
  { value: "18 MW+", label: "solar infrastructure deployment supported" },
  { value: "247", label: "solar sites & ~800 irrigation systems coordinated" },
  { value: "40+", label: "global ExxonMobil sites served by engineering analysis" },
];

export type Experience = {
  company: string;
  role: string;
  location: string;
  period: string;
  summary: string;
  highlights: string[];
  stack?: string[];
};

export const experiences: Experience[] = [
  {
    company: "AANNEX SOLUTION INC",
    role: "Senior Business Analyst",
    location: "Canada & Bangladesh",
    period: "Oct 2025 — Present",
    summary:
      "Lead end-to-end business analysis and requirements engineering for a large-scale enterprise cloud transformation program at a major Canadian financial institution, supporting modernization initiatives impacting approximately 30,000 users.",
    highlights: [
      "Facilitate stakeholder discovery and requirements elicitation across cloud engineering, DevOps, infrastructure, security, and enterprise architecture teams.",
      "Conduct AS-IS / TO-BE analysis and enterprise impact assessments for migration of legacy Exchange environments to Microsoft 365.",
      "Drive business requirements for phased Microsoft Teams, OneDrive, Microsoft Rooms, and Copilot rollouts across a 30,000-seat environment, including SaaS licensing strategy.",
      "Define requirements for migrating legacy on-premise infrastructure to Microsoft Azure (Canada Central / Canada East), modernizing multi-tier end-of-life enterprise applications.",
      "Document enterprise architecture, system dependencies, API integrations, and Oracle-to-Azure SQL data migration pathways.",
      "Partner with architecture and security teams on FinOps governance, IAM controls, and Web Application Firewall (WAF) requirements aligned with enterprise risk and regulatory standards.",
    ],
    stack: ["Microsoft 365", "Azure", "IaC", "IAM", "WAF", "FinOps", "Oracle → Azure SQL"],
  },
  {
    company: "ARBREE LIMITED",
    role: "Senior Business Analyst",
    location: "Dhaka, Bangladesh",
    period: "Mar 2022 — Oct 2025",
    summary:
      "Led business analysis, requirements engineering, and stakeholder management across enterprise software platforms spanning banking, fintech, healthcare, government, EV infrastructure, logistics, and e-commerce.",
    highlights: [
      "Owned requirements management and delivery oversight for the Electronic Fiscal Device Management System (EFDMS), serving 30,000+ retail outlets and architected to scale to 600,000+ devices nationwide.",
      "Translated business needs into functional specifications and structured platform architectures via stakeholder workshops, BPMN process mapping, and solution design.",
      "Authored SQL queries (joins, aggregations, data cleaning) to validate datasets and system outputs throughout platform development.",
      "Produced UML architecture diagrams and system workflows in Visio and Lucidchart to align engineering teams.",
      "Coordinated Agile delivery (Scrum / Kanban): sprint planning, backlog prioritization, release timelines.",
      "Led UAT, QA validation, and defect resolution to ensure systems met functional and operational requirements.",
    ],
    stack: ["BPMN", "SQL", "UML", "Jira", "Visio", "Lucidchart", "Scrum / Kanban"],
  },
  {
    company: "Aamar Pharma Limited",
    role: "Head of Operations & Strategy",
    location: "Dhaka, Bangladesh",
    period: "Jul 2022 — Jan 2024",
    summary:
      "Led operations and platform development for a digital healthcare logistics startup, supporting 14,000+ completed orders, ~$150K cumulative revenue, and ~70% customer retention through an aggregated pharmacy delivery platform.",
    highlights: [
      "Drove ~43% average YoY revenue growth (2021–2023) through operational improvements, partner expansion, and platform scaling.",
      "Contributed to ~48% average YoY customer growth, expanding the active base to 526+ customers across the Dhaka service area.",
      "Built Excel-based forecasting and demand projection models — scenario modelling, sensitivity analysis — to evaluate pricing, unit economics, and pharmacy network expansion.",
      "Developed Power BI dashboards monitoring order volumes, medicine demand trends, delivery performance, and customer activity.",
      "Used SQL and Excel KPI tracking to optimize pharmacy sourcing and fulfillment workflows.",
      "Captured 23+ structured operational data points per order, enabling data-driven decision making and logistics optimization.",
      "Built and managed a 40+ partner pharmacy network, enabling a distributed asset-light inventory model.",
      "Achieved ~74-minute average delivery time — ~18% faster than the 90-minute SLA.",
      "Designed end-to-end fulfillment: order intake, prescription verification, pharmacy sourcing, dispatch, and last-mile logistics.",
      "Contributed to proprietary OMS, B2C ordering platform, and early B2B integrations.",
    ],
    stack: ["Power BI", "SQL", "Excel modelling", "OMS", "Operational analytics"],
  },
  {
    company: "ARBREE LIMITED",
    role: "Business Analyst & QA Lead",
    location: "Kuwait & Bangladesh",
    period: "Oct 2020 — Mar 2022",
    summary:
      "Led requirements engineering and stakeholder workshops for enterprise software platforms across healthcare, logistics, fintech, and real estate sectors.",
    highlights: [
      "Produced functional specifications, user stories, and system documentation that translated business requirements into structured development tasks.",
      "Designed process maps, system workflows, and platform architecture diagrams in Lucidchart and Visio.",
      "Coordinated with developers and product stakeholders to refine feature requirements, system logic, and integrations.",
      "Supported Agile delivery in Jira (Scrum / Kanban): sprint planning, backlog prioritization, release coordination.",
      "Tracked delivery via Gantt-based project tracking across multiple parallel software initiatives.",
      "Managed QA processes: test case design, functional testing, defect tracking, and system requirement validation.",
    ],
    stack: ["Jira", "Visio", "Lucidchart", "QA / UAT", "Scrum / Kanban"],
  },
  {
    company: "Solargao Limited",
    role: "Engineering Team Lead",
    location: "Dhaka, Bangladesh",
    period: "Mar 2020 — Aug 2020",
    summary:
      "Led a multidisciplinary engineering and field operations team of ~200 personnel deploying over 18 MW of solar infrastructure across Bangladesh — spanning 247 solar sites and nearly 800 solar-powered irrigation systems.",
    highlights: [
      "Analyzed rural energy access gaps, irrigation demand, and solar deployment patterns to support implementation strategies for renewable energy adoption.",
      "Supported the rollout of agent banking and mobile financial services with the Asian Development Bank (ADB), enabling microloans for solar-powered irrigation.",
      "Analyzed satellite and geospatial datasets in ArcGIS to identify optimal solar installation locations.",
      "Directed scoping, engineering documentation, and technical design for solar irrigation systems, mini-grids, and hybrid solar-diesel power stations.",
      "Coordinated with government agencies, engineers, and local stakeholders aligned to rural electrification initiatives.",
    ],
    stack: ["ArcGIS", "Geospatial analysis", "ADB collaboration", "Field operations"],
  },
  {
    company: "ARBREE LIMITED",
    role: "Business Analyst",
    location: "Dhaka, Bangladesh",
    period: "Apr 2018 — Feb 2020",
    summary:
      "Conducted business analysis and requirements engineering for digital platforms across healthcare, fintech, logistics, and real estate.",
    highlights: [
      "Led stakeholder interviews, requirement workshops, and elicitation sessions to identify business needs, operational workflows, and system objectives.",
      "Developed functional specifications, user stories, use cases, and BRDs.",
      "Produced process maps and system models in Lucidchart and Visio defining platform logic and operational processes.",
      "Performed business process mapping and operational analysis to identify inefficiencies and design improved digital workflows.",
      "Authored SOP documentation, RACI matrices, and project documentation clarifying responsibilities and governance.",
      "Documented system requirements, feature roadmaps, and technical specifications for product development.",
    ],
    stack: ["BRDs / PRDs", "User stories", "RACI", "SOPs", "Lucidchart"],
  },
  {
    company: "ARBREE LIMITED",
    role: "Digital Solutions Analyst",
    location: "Bangladesh & United Kingdom",
    period: "Nov 2016 — Mar 2018",
    summary:
      "Conducted market research, competitive analysis, and early product discovery for digital platform concepts.",
    highlights: [
      "Performed exploratory data analysis to identify market trends, demand signals, and operational constraints.",
      "Developed PRDs, feature roadmaps, and workflow documentation outlining proposed system logic.",
      "Produced process maps, use cases, and conceptual system workflows in Visio and Lucidchart.",
      "Documented user scenarios, system requirements, and business use cases for internal product evaluation.",
      "Refined product ideas and platform concepts through stakeholder interviews and discovery sessions.",
    ],
    stack: ["Market research", "PRDs", "Roadmapping", "EDA"],
  },
  {
    company: "ExxonMobil Corporation",
    role: "Mechanical Engineer (Fixed Equipment)",
    location: "Kuala Lumpur",
    period: "Sep 2015 — Sep 2016",
    summary:
      "Delivered engineering analysis and reliability work across 40+ global ExxonMobil refinery and chemical sites, contributing to a $3M refinery retrofit project delivered ~$50K under budget.",
    highlights: [
      "Performed piping integrity, flow restriction, vibration, and fatigue analysis supporting ExxonMobil's proprietary SCANfining™ process units.",
      "Conducted fitness-for-service evaluations and mechanical integrity assessments for pressure vessels, heat exchangers, towers, tanks, and piping using API and ASME codes (PV Elite, CAESAR II).",
      "Developed internal Excel-based engineering calculation tools automating analysis derived from API and ASME standards.",
      "Updated global engineering standards including the Tank Maintenance Guide, General Practice guidelines, and Equipment Degradation Documentation.",
      "Supported FCC catalyst transfer systems, Flexicoking gasifier preliminary design, heat exchanger analysis, reactor nozzle stress evaluation, and piping integrity reviews.",
    ],
    stack: ["API / ASME", "PV Elite", "CAESAR II", "Excel automation"],
  },
  {
    company: "National Cadet Corps Singapore",
    role: "Company Sergeant Major (CSM)",
    location: "Singapore",
    period: "Early leadership",
    summary:
      "Senior cadet leadership role responsible for coordinating training, discipline, and operational planning across the platoon.",
    highlights: [
      "Led training and operational planning for cadet teams.",
      "Coordinated community service initiatives with the People's Association Youth Movement (PAYM).",
      "Coordinated training in navigation, reconnaissance, endurance conditioning, and expedition planning — building discipline and team coordination.",
    ],
  },
];

export type CaseStudy = {
  slug: string;
  title: string;
  sector: string;
  context: string;
  challenge: string;
  role: string;
  actions: string[];
  tools: string[];
  outcomes: string[];
  skills: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "enterprise-cloud-transformation",
    title: "Enterprise Cloud Transformation Program",
    sector: "Financial Services · Canada",
    context:
      "Large-scale cloud and collaboration platform modernization at a major Canadian financial institution serving approximately 30,000 users.",
    challenge:
      "Migrate a complex legacy estate — Exchange, multi-tier on-premise applications, and Oracle workloads — onto Microsoft 365 and Azure while maintaining enterprise security, regulatory alignment, and cost discipline.",
    role: "Senior Business Analyst leading requirements engineering, stakeholder discovery, and enterprise architecture documentation.",
    actions: [
      "Facilitated discovery and elicitation workshops with cloud engineering, DevOps, infrastructure, security, and enterprise architecture teams.",
      "Performed AS-IS / TO-BE analysis and enterprise impact assessments across collaboration and infrastructure domains.",
      "Defined business requirements and adoption strategies for Microsoft Teams, OneDrive, Microsoft Rooms, and Copilot rollout.",
      "Drove migration requirements for legacy infrastructure to Azure (Canada Central / Canada East) and Oracle-to-Azure SQL pathways.",
      "Partnered with security and architecture on FinOps governance, IAM controls, and WAF requirements.",
    ],
    tools: ["Microsoft 365", "Microsoft Azure", "IaC", "IAM", "WAF", "FinOps", "Oracle → Azure SQL"],
    outcomes: [
      "Aligned a 30,000-seat enterprise on a structured cloud adoption roadmap.",
      "Established repeatable requirements artifacts for SaaS licensing, IAM, and FinOps governance.",
      "Documented enterprise architecture and integration pathways supporting downstream engineering execution.",
    ],
    skills: [
      "Requirements engineering",
      "Enterprise architecture documentation",
      "Cloud transformation strategy",
      "Stakeholder facilitation",
    ],
  },
  {
    slug: "efdms",
    title: "Electronic Fiscal Device Management System (EFDMS)",
    sector: "Government · National Fiscal Compliance",
    context:
      "National government fiscal compliance platform connecting retail outlets to a centralized device and transaction management infrastructure.",
    challenge:
      "Deliver a platform supporting 30,000+ retail outlets day-one, with an architecture engineered to scale to 600,000+ devices nationwide — coordinating government stakeholders, vendors, and engineering teams.",
    role: "Senior Business Analyst owning requirements management, stakeholder coordination, and delivery oversight.",
    actions: [
      "Captured business and system requirements across compliance, device lifecycle, and reporting workflows.",
      "Mapped end-to-end system workflows and platform architecture in BPMN and UML.",
      "Coordinated stakeholders across government, retailers, and engineering vendors.",
      "Led UAT and validation cycles to ensure system behavior matched fiscal compliance requirements.",
    ],
    tools: ["BPMN", "UML", "SQL", "Visio", "Lucidchart", "Jira"],
    outcomes: [
      "Platform live across 30,000+ retail outlets.",
      "Architecture validated for scale to 600,000+ connected devices.",
      "Delivered structured requirements and system documentation supporting national rollout.",
    ],
    skills: [
      "Requirements management",
      "Enterprise software delivery",
      "Stakeholder coordination",
      "UAT leadership",
    ],
  },
  {
    slug: "aamar-pharma",
    title: "Digital Healthcare Logistics Platform — Aamar Pharma",
    sector: "Healthcare Logistics · Startup",
    context:
      "Aggregated pharmacy delivery platform connecting customers, partner pharmacies, and dispatch operations across Dhaka.",
    challenge:
      "Scale a healthcare logistics platform with reliable delivery performance, predictable unit economics, and strong customer retention — without owning inventory.",
    role: "Head of Operations & Strategy leading platform operations, analytics, and partner network growth.",
    actions: [
      "Designed end-to-end fulfillment: order intake, prescription verification, pharmacy sourcing, dispatch, and last-mile delivery.",
      "Built and managed a 40+ partner pharmacy network supporting an asset-light inventory model.",
      "Implemented 23+ structured operational data points per order to enable analytics and continuous improvement.",
      "Developed Power BI dashboards and SQL/Excel KPI tracking for demand patterns, fulfillment performance, and customer activity.",
      "Built Excel-based forecasting and demand projection models for pricing, unit economics, and network expansion.",
    ],
    tools: ["Power BI", "SQL", "Excel modelling", "OMS"],
    outcomes: [
      "14,000+ completed orders and ~$150K cumulative revenue.",
      "~70% customer retention; ~74-minute average delivery time, ~18% faster than the 90-minute SLA.",
      "~43% average YoY revenue growth and ~48% average YoY customer growth (2021–2023).",
      "Active base scaled to 526+ customers across the Dhaka service area.",
    ],
    skills: [
      "Operations strategy",
      "Operational analytics",
      "Process design",
      "Partner network development",
    ],
  },
  {
    slug: "solargao",
    title: "Renewable Energy Infrastructure Deployment — Solargao",
    sector: "Renewable Energy · Rural Infrastructure",
    context:
      "Solar infrastructure deployment program across Bangladesh, supporting rural electrification, irrigation, and livelihood improvement initiatives.",
    challenge:
      "Coordinate a ~200-person engineering and field operations team to deliver large-scale renewable energy infrastructure across hundreds of geographically dispersed rural sites.",
    role: "Engineering Team Lead overseeing engineering, field operations, and stakeholder coordination.",
    actions: [
      "Directed scoping, engineering documentation, and technical design for solar irrigation systems, mini-grids, and hybrid solar-diesel power stations.",
      "Analyzed satellite and geospatial datasets in ArcGIS to identify optimal installation locations.",
      "Supported agent banking and mobile financial services rollout with the Asian Development Bank (ADB), enabling microloans for solar irrigation.",
      "Coordinated with government agencies, engineers, and local stakeholders aligned to rural electrification.",
    ],
    tools: ["ArcGIS", "Geospatial analysis", "Engineering documentation"],
    outcomes: [
      "18 MW+ of solar infrastructure deployed across 247 sites.",
      "Nearly 800 solar-powered irrigation systems delivered.",
      "Expanded renewable energy adoption across rural agricultural installations.",
    ],
    skills: [
      "Operations leadership",
      "Field program management",
      "Geospatial analysis",
      "Multi-stakeholder coordination",
    ],
  },
  {
    slug: "exxonmobil-engineering",
    title: "ExxonMobil Global Engineering & Reliability Analysis",
    sector: "Energy · Industrial Engineering",
    context:
      "Engineering analysis and operational reliability across 40+ global ExxonMobil refinery and chemical sites.",
    challenge:
      "Provide standardized, code-compliant engineering analysis and reliability insight at global scale — including support for a $3M refinery retrofit project.",
    role: "Mechanical Engineer (Fixed Equipment) within the global engineering organization.",
    actions: [
      "Performed piping integrity, flow restriction, vibration, and fatigue analysis for SCANfining™ process units.",
      "Conducted fitness-for-service evaluations on pressure vessels, heat exchangers, towers, tanks, and piping using API/ASME codes with PV Elite and CAESAR II.",
      "Developed Excel-based engineering tools automating API and ASME calculations.",
      "Updated global engineering standards including the Tank Maintenance Guide and Equipment Degradation Documentation.",
    ],
    tools: ["API / ASME", "PV Elite", "CAESAR II", "Excel automation"],
    outcomes: [
      "Engineering analysis delivered across 40+ global sites.",
      "Contributed to a $3M refinery retrofit project, with a $300K work package delivered ~$50K under budget.",
      "Reusable engineering tooling adopted across regional teams.",
    ],
    skills: [
      "Engineering analysis",
      "Reliability assessment",
      "Standards compliance",
      "Cross-regional collaboration",
    ],
  },
  {
    slug: "ifrs-ai-assistant",
    title: "AI IFRS Accounting Research Assistant",
    sector: "Enterprise AI · Financial Reporting",
    context:
      "AI-driven platform for retrieving and interpreting International Financial Reporting Standards (IFRS) for accounting and audit professionals.",
    challenge:
      "Translate complex accounting research workflows into a structured, AI-enabled platform that delivers accurate, traceable answers to IFRS questions.",
    role: "Senior Business Analyst leading requirements engineering and stakeholder translation.",
    actions: [
      "Captured user research workflows and translated them into structured business and functional requirements.",
      "Designed AI-enabled research workflow logic, retrieval scope, and source-citation patterns.",
      "Coordinated with engineering on enterprise platform logic and data ingestion requirements.",
    ],
    tools: ["Requirements engineering", "Workflow design", "AI / retrieval architecture"],
    outcomes: [
      "Defined the requirements baseline for an AI-powered IFRS research platform.",
      "Aligned stakeholders on AI workflow scope, accuracy guardrails, and traceability.",
    ],
    skills: [
      "Business analysis",
      "AI workflow design",
      "Stakeholder translation",
      "Enterprise platform requirements",
    ],
  },
  {
    slug: "ev-charging-network",
    title: "EV Charging Network Management Platform",
    sector: "EV Infrastructure · Platform Operations",
    context:
      "Platform for monitoring EV charging stations, usage analytics, and payment transactions across a distributed network.",
    challenge:
      "Define platform requirements covering real-time station monitoring, usage analytics, and reliable payment workflows.",
    role: "Senior Business Analyst contributing to requirements and platform design.",
    actions: [
      "Captured business requirements covering station monitoring, usage analytics, and payment workflows.",
      "Mapped operational workflows for charging session lifecycle and exception handling.",
      "Defined reporting and analytics requirements supporting operational decision-making.",
    ],
    tools: ["Requirements engineering", "Workflow mapping", "Analytics design"],
    outcomes: [
      "Established a structured requirements baseline for an EV charging operations platform.",
      "Aligned stakeholders on monitoring, usage analytics, and payment behavior.",
    ],
    skills: [
      "Platform requirements",
      "Operational analytics",
      "Workflow design",
      "Cross-functional coordination",
    ],
  },
];

export const capabilities = [
  {
    group: "Business Analysis & Requirements",
    items: [
      "Requirements elicitation",
      "Business requirements documentation",
      "Functional specifications",
      "User stories",
      "AS-IS / TO-BE analysis",
      "Stakeholder workshops",
      "UAT coordination",
    ],
  },
  {
    group: "Operations & Strategy",
    items: [
      "Process improvement",
      "Operational analytics",
      "Fulfillment operations",
      "Platform scaling",
      "KPI tracking",
      "SOP development",
      "RACI matrices",
    ],
  },
  {
    group: "Data & Tools",
    items: ["SQL", "Excel", "Power BI", "Tableau", "Visio", "Lucidchart", "Jira", "ArcGIS"],
  },
  {
    group: "Enterprise Technology",
    items: [
      "Cloud transformation",
      "Microsoft 365",
      "Azure migration",
      "SaaS adoption",
      "API & system integration documentation",
      "Enterprise architecture support",
      "IAM, WAF, FinOps & governance requirements",
    ],
  },
];

export const certifications = [
  "Google Data Analytics Professional Certificate — Share Data Through the Art of Visualization",
  "CCBA® (Certification of Capability in Business Analysis) — Certification Training",
  "Electric Industry Operations and Markets",
  "Excel Skills for Business — Intermediate I",
  "Introduction to Programming Using Python",
];

export const education = [
  {
    school: "Queen Mary, University of London",
    detail: "Bachelor of Engineering with Honours (BEng), Aerospace Engineering",
    period: "2012 — 2015",
  },
  {
    school: "Academia School Dhaka",
    detail: "A-Levels — Physics, Mathematics, Further Mathematics",
    period: "2010 — 2012",
  },
  {
    school: "Deyi Secondary School, Singapore",
    detail: "Cambridge O-Levels",
    period: "2006 — 2009",
  },
];

export const languages = [
  { name: "English", level: "Native or Bilingual" },
  { name: "Bengali", level: "Native or Bilingual" },
  { name: "French", level: "Elementary" },
];

export const honors = [
  "International Science & Engineering Excellence Award",
  "Overall Outstanding Cadet — Alpha Platoon",
  "Overall Outstanding Cadet Award — Senior Specialist Course Platoon",
  "Best Cadet — Senior Specialist Course Platoon",
  "3rd Best PDS AI",
];

export type Publication = {
  title: string;
  publisher: string;
  conference: string;
  description: string;
  link: string;
  keywords: string[];
};

export const publications: Publication[] = [
  {
    title: "A Fast Resource Efficient Method for Human Action Recognition",
    publisher: "Association for Computing Machinery (ACM)",
    conference: "ACM UbiComp 2018",
    description:
      "[Inference] Co authored a peer reviewed research paper presented at ACM UbiComp 2018 proposing a computationally efficient human action recognition framework trained on the Sussex Huawei locomotion dataset. The method emphasized lightweight feature design and efficient training to enable fast activity classification while operating under constrained computational resources, achieving 82.8 percent classification accuracy.",
    link: "https://dl.acm.org/doi/10.1145/3267305.3267527",
    keywords: [
      "Machine Learning",
      "Human Action Recognition",
      "Signal Processing",
      "Pattern Analysis",
      "Multimodal Sensor Data",
    ],
  },
];

export const opportunityTypes = [
  "Senior Business Analyst",
  "Operations / Strategy",
  "Consulting Engagement",
  "Enterprise Transformation",
  "Platform Operations",
  "Other",
];