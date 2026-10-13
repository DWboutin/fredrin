export type Experience = {
  role: string;
  company?: string;
  period: string;
  context?: string;
  highlights: string[];
};

export type Metric = {
  label: string;
  before?: string;
  after?: string;
  change: string;
};

export type SkillGroup = { name: string; skills: string[] };

export type ContactLink = { label: string; text: string; href: string };

export const profile = {
  name: "Mikael Boutin",
  role: "Senior Frontend Engineer · React / Next.js / TypeScript",
  location: "Quebec, Canada (Remote)",
  photo: "/mikael-boutin.jpg",
  photoAlt: "Portrait of Mikael Boutin, smiling, with glasses and a beard",
};

export const contactLinks: ContactLink[] = [
  { label: "Email", text: "mikaelboutin.dw@gmail.com", href: "mailto:mikaelboutin.dw@gmail.com" },
  { label: "LinkedIn", text: "linkedin.com/in/mikael-boutin", href: "https://linkedin.com/in/mikael-boutin" },
  { label: "GitHub", text: "github.com/DWboutin", href: "https://github.com/DWboutin" },
];

export const summary = [
  "Senior frontend engineer with 15 years of web development experience, including 10 years specializing in React. Proven record of leading teams, architecting frontend platforms from the ground up, and delivering measurable results.",
  "Most recently, I cut first-load JavaScript by 93% and reached a perfect Lighthouse Performance score of 100 on a production Web3 application.",
  "Comfortable across the stack (Node.js, AWS, CI/CD) and an early adopter of AI-assisted engineering workflows (Claude Code, Codex, Cursor, multi-agent systems). Bilingual: French (native) and English (professional).",
];

export const stats = [
  { value: "15", label: "years of web development" },
  { value: "10", label: "years specializing in React" },
  { value: "93%", label: "less first-load JavaScript" },
  { value: "100", label: "Lighthouse Performance score" },
];

export const score = { label: "Lighthouse Performance", from: 88, to: 100 };

export const metrics: Metric[] = [
  { label: "First-load JavaScript", before: "1.58 MB", after: "116 kB", change: "93% less" },
  { label: "Largest Contentful Paint", before: "2.28s", after: "0.81s", change: "64% faster" },
  { label: "First Contentful Paint", change: "45% faster" },
  { label: "Cumulative Layout Shift", change: "67% lower" },
  { label: "Console errors", change: "88% fewer" },
  { label: "Lighthouse Accessibility", before: "72", after: "86", change: "32% fewer axe violations" },
];

export const experiences: Experience[] = [
  {
    role: "Senior Frontend Developer (Frontend Lead)",
    company: "Always Geeky Games",
    period: "Jun 2023 to Present",
    context:
      "Web3 play-to-earn game studio · React, React Native, Next.js, TypeScript, Wagmi, RainbowKit, Privy, Zustand",
    highlights: [
      "Lead a team of 3 frontend developers: code reviews, branch strategy, task definition, weekly knowledge-sharing sessions, and internal training documentation.",
      "Own the entire Web3 payments and transactions layer (Wagmi, RainbowKit, Alchemy, Privy on Polygon and Solana) for the web marketplace and the React Native mobile app, including account creation with custodial wallets.",
      "Drove a full performance overhaul, cutting first-load JavaScript by 93% (1.58 MB → 116 kB) and raising Lighthouse Performance from 88 to 100.",
      "Improved LCP by 64% (2.28s → 0.81s), FCP by 45%, CLS by 67%, and reduced console errors by 88%.",
      "Migrated the application from the Next.js pages router to the App Router, enabling route-level code splitting, layouts, streaming, and granular loading/error boundaries.",
      "Introduced TanStack Query with stable cache keys plus Next.js cache tags/revalidation; added virtualized grids, debounced filters, infinite queries, and dynamic imports for listing-heavy marketplace pages.",
      "Raised Lighthouse Accessibility from 72 to 86 (semantic structure, live-status announcers, 32% fewer axe violations).",
      "Established the team's React best practices and testing standards (Jest, Storybook, Testing Library).",
    ],
  },
  {
    role: "Senior Frontend Developer",
    company: "Roof.ai",
    period: "Oct 2022 to Jun 2023",
    context: "Customer-intelligence SaaS for real estate · React, TypeScript, Gatsby, Node.js",
    highlights: [
      "Architected a customer-facing analytics application with automated deployments and unit tests (React, TypeScript, Gatsby, Node.js, Jest, Auth0).",
      "Architected an email template management platform with automated deployment pipelines (Node.js, GitHub Actions).",
      "Defined the company's official frontend stack: React + TypeScript, Jest + Testing Library, semantic commits/Commitizen for release management.",
      "Refactored undocumented legacy frontend projects, extracting core business logic and incrementally porting it to TypeScript.",
    ],
  },
  {
    role: "Lead Frontend Developer",
    company: "Qohash",
    period: "Aug 2019 to Sep 2022",
    context: "Data security posture management platform (cybersecurity) · bilingual, English-first environment",
    highlights: [
      "First experienced frontend hire; led a team of 6 developers and 2 designers.",
      "Proposed and led a complete Angular → React migration of the core platform, delivered in 4 months.",
      "Architected the company's two main frontend applications and a shared UI-kit / design system documented in Storybook.",
      "Trained 3 developers in React best practices and migrated 2 designers from Adobe XD to Figma with a collaborative prototyping workflow.",
      "Established the testing culture: unit/component tests with Jest and end-to-end coverage with Cypress.",
      "Ran sprint planning, daily stand-ups, and discovery workshops; participated in frontend hiring interviews; shipped a native Windows app with Electron.",
    ],
  },
  {
    role: "Co-founder & Full-Stack Developer",
    company: "Conecto",
    period: "Oct 2018 to Aug 2019",
    context: "Lead-management SaaS for roofing contractors",
    highlights: [
      "Designed and built the entire product solo: React web app, React Native mobile app, and a fully unit-tested serverless Node.js backend on AWS (Cognito, S3, DynamoDB).",
      "Integrated Twilio automated call validation, Mailchimp/Mandrill campaigns, Zapier workflows, and SEO-focused marketing sites.",
    ],
  },
  {
    role: "Earlier Experience",
    period: "2010 to 2018",
    highlights: [
      "Crakmedia (Frontend Developer, 2015 to 2018): led the adoption of React and the refactor of the company's main product; introduced unit and E2E testing; technical right hand of the engineering director for sprint planning.",
      "Caravan Coop (React Consultant, 2018): structured the team's React architecture and delivered a full Python/Wagtail website independently.",
      "Nurun (Frontend Consultant, 2014 to 2015): WCAG accessibility implementation on government websites.",
      "Cégep Garneau (Web Development Teacher, 2013 to 2014): created the syllabus and taught HTML/CSS, responsive mobile-first integration, jQuery, and WordPress.",
      "Industrielle Alliance & Unikmedia (Web Developer, 2010 to 2013): responsive websites, WordPress and custom PHP/MySQL CMS development, SEO (several #1 Google rankings).",
    ],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    name: "Frontend",
    skills: [
      "React",
      "React Native",
      "Next.js (App Router, RSC, SSR/ISR)",
      "TypeScript",
      "Tailwind",
      "shadcn/ui",
      "Radix",
      "Zustand",
      "Redux",
      "TanStack Query",
      "Zod",
      "Styled-components",
      "Gatsby",
    ],
  },
  {
    name: "Performance",
    skills: [
      "Bundle analysis & code splitting",
      "Caching/revalidation strategies",
      "List virtualization",
      "Core Web Vitals",
      "Lighthouse",
    ],
  },
  {
    name: "Quality & Observability",
    skills: [
      "Jest",
      "Vitest",
      "Testing Library",
      "Playwright",
      "Cypress",
      "Storybook",
      "Sentry",
      "Google Analytics / GTM",
      "ESLint",
      "WCAG accessibility",
      "axe audits",
    ],
  },
  {
    name: "Backend & Cloud",
    skills: [
      "Node.js",
      "Python",
      "REST & GraphQL APIs",
      "tRPC",
      "PostgreSQL",
      "MongoDB",
      "Supabase",
      "AWS (Cognito, S3, DynamoDB)",
      "Serverless",
      "Docker",
      "Vercel",
      "GitHub Actions CI/CD",
      "Electron",
    ],
  },
  {
    name: "Web3",
    skills: [
      "Wagmi",
      "RainbowKit",
      "Privy",
      "Alchemy",
      "Polygon",
      "Solana",
      "Custodial wallets",
      "Payment and transaction flows",
      "Solidity basics (Hardhat)",
    ],
  },
  {
    name: "AI Engineering",
    skills: [
      "Claude Code",
      "Codex",
      "Cursor",
      "Claude & OpenAI APIs",
      "ElevenLabs",
      "Twilio",
      "MCP integrations",
      "Multi-agent workflow design",
      "Local LLM stacks (Ollama)",
    ],
  },
  {
    name: "Leadership",
    skills: [
      "Team leadership",
      "Mentoring",
      "Code review",
      "Sprint planning",
      "Design systems (Figma)",
      "Stakeholder communication",
    ],
  },
];

export const projects = [
  "Helped define and develop the MVP of Amical AI (amical-ai.com), a conversational AI companion phone for seniors and people with cognitive disorders, building real-time voice interactions with ElevenLabs and telephony integration with Twilio.",
  "Daily AI-assisted development workflow built around Claude Code, Codex and Cursor: agent-driven feature development, automated code review, and documentation generation.",
  "Designed a multi-agent AI development system (11 specialized agents) governing a Next.js/TypeScript/Supabase product: layered agent roles, a decision protocol requiring scored option matrices, and an Obsidian knowledge base connected via MCP (Model Context Protocol).",
  "Consulted for an insurance brokerage on AI document-classification automation under Quebec's Law 25 data-sovereignty constraints: architected a fully local stack (Ollama LLM, OCR pipeline, Python, REST API integration).",
];

export const education = [
  { name: "Cégep Garneau", detail: "Certificate of Collegial Studies, Web Development (2009 to 2011)" },
  { name: "Collège Bart", detail: "3D Animation (2005 to 2006)" },
  { name: "Languages", detail: "French (native), English (professional working proficiency)" },
];
