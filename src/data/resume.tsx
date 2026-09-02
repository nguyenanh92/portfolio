import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Nguyen Anh Tuan",
  avatarUrl: "/me.webp",
  initials: "NA",
  url: "https://nguyenanh98.com/",
  location: "Ha Noi, Viet Nam",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description: "1 programmer. I love building things and helping people.",
  summary:
    "Software engineer with 8 years of experience in software development. Proficient in designing, developing, and deploying end-to-end web/mobile applications, with a strong specialization in AI engineering (RAG, intelligent agents, Azure AI Foundry) and Cloud/DevOps (Microsoft Azure, CI/CD pipelines). Skilled in C#, Python, JavaScript/TypeScript, ReactJS, and .NET Core.",
  skills: [
    "TypeScript",
    "JavaScript (ES6+)",
    "C#",
    "Python",
    "Rust",
    "SQL",
    "HTML5 / CSS3",
    "Bash / PowerShell",
    "React",
    "Next.js",
    "TanStack Start",
    "TanStack Router",
    "Vue.js",
    "Nuxt.js",
    "React Native",
    "Expo Router",
    "TailwindCSS (v3 & v4)",
    "Shadcn UI",
    "Ant Design",
    "Bootstrap",
    "Framer Motion",
    "Node.js",
    "Express.js",
    ".Net Core",
    ".NET Framework",
    "PostgreSQL",
    "MSSQL",
    "SQLite",
    "MongoDB",
    "Prisma",
    "Drizzle ORM",
    "Supabase",
    "Redis",
    "AI Agents",
    "RAG (Retrieval-Augmented Generation)",
    "Prompt Engineering",
    "MCP (Model Context Protocol)",
    "CopilotKit",
    "LangChain",
    "LangGraph",
    "Harness Engineering",
    "Context Engineering",
    "OpenAI / Gemini APIs",
    "Vector Databases",
    "Microsoft Azure",
    "Azure AI Foundry",
    "Cloudflare Workers & D1",
    "DevOps",
    "CI/CD",
    "Docker",
    "Kubernetes",
    "Bun & Vite",
    "Tauri",
    "Turborepo",
    "Firebase",
    "Clerk",
    "Vercel",
    "Netlify",
    "Git / GitHub Actions",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "work@nguyenanh98.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "#",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/nguyenanh92/",
        icon: Icons.linkedin,

        navbar: true,
      },
      J2Team: {
        name: "J2Team",
        url: "https://launch.j2team.dev/@nguyen-anh-2",
        icon: Icons.j2team,
        navbar: true,
      },
      Unikorn: {
        name: "Unikorn",
        url: "https://unikorn.vn/u/nguyen-anh-fkpu3f",
        icon: Icons.unikorn,
        navbar: true,
      },
      ProductHunt: {
        name: "Product Hunt",
        url: "https://www.producthunt.com/@nguyenanh98",
        icon: Icons.producthunt,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Add-On Development",
      badges: [],
      href: "https://aod.vn/",
      location: "",
      title: "Software Engineer",
      logoUrl: "/add.jpg",
      start: "Otc 2022",
      end: "Now",
      description:
        "Architected and developed enterprise web/mobile applications. Managed and administered Microsoft Azure cloud environments, implemented CI/CD pipelines for automated builds/deployments, and integrated generative AI services using Azure AI Foundry.",
    },
    {
      company: "VNEXT HOLDINGS · ",
      badges: [],
      href: "https://www.vnext.vn/",
      location: "",
      title: "Full-stack Developer",
      logoUrl: "/vnext.svg",
      start: "Jun 2021",
      end: "Aug 2022 ",
      description:
        "Participated in outsourcing projects, mainly building backend systems.",
    },
    {
      company: "VCCORP ",
      badges: [],
      href: "https://vccorp.vn/",
      location: "",
      title: "Full-stack Developer",
      logoUrl: "/vc.png",
      start: "May 2021",
      end: "Jun 2021",
      description: "Built a data storage system for news logs.",
    },
    {
      company: "Navisoft., JSC ·",
      badges: [],
      href: "https://navisoft.com.vn/",
      location: "",
      title: "Full-stack Developer",
      logoUrl: "/navi.png",
      start: "Sep 2020",
      end: "Apr 2021",
      description:
        "Maintained trading module systems, built performance testing tools. Developed online learning support web. Researched new technologies and organized seminars.",
    },
    {
      company: "IIT Techcom",
      badges: [],
      href: "https://iit.com.vn/",
      location: "",
      title: "Web Developer",
      logoUrl: "/logo-iit.png",
      start: "Jan 2019",
      end: "Sep 2020",
      description:
        "Developed websites for restaurants, hotels, and tourism. Directly interacted with clients, brainstormed ideas, designed mockups, features, and implemented them.",
    },
  ],
  education: [
    {
      school: "FPT APTECH ",
      href: "https://aptech.fpt.edu.vn/",
      degree: "Software  & Web Developer",
      logoUrl: "/Logo-fpt-aptech.png",
      start: "2016",
      end: "2019",
    },
    {
      school: "Coder School",
      href: "https://devc-challenge.coderschool.vn/",
      degree: "Product Management",
      logoUrl: "/OLC.jpg",
      start: "2020",
      end: "2020",
    },
  ],
  projects: [
    {
      title: "Lanle.Store - Shopee Choice Studio",
      href: "https://lanle.store",
      dates: "2026",
      active: true,
      description:
        "A mobile-first Shopee affiliate link converter and deal lookup platform with automated link transformation, price history tracking, caption generator, and top brand voucher carousels.",
      technologies: [
        "TanStack Start",
        "TanStack Router",
        "React 19",
        "Typescript",
        "TailwindCSS",
        "Drizzle ORM",
        "Cloudflare D1",
        "Cloudflare Workers",
        "Vite",
      ],
      links: [
        {
          type: "Website",
          href: "https://lanle.store",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/products/lanle-store.png",
      video: "",
    },
    {
      title: "911FS - Financial Services Marketplace",
      href: "https://911fs.vn",
      dates: "2026",
      active: true,
      description:
        "A financial service marketplace in Vietnam connecting financial partners and clients with listing management, encrypted lead routing CRM, multi-tier admin panel, and wallet system.",
      technologies: [
        "TanStack Start",
        "TanStack Router",
        "React 19",
        "Typescript",
        "TailwindCSS",
        "Prisma",
        "Supabase",
        "PostgreSQL",
        "Nitro",
        "i18n",
      ],
      links: [
        {
          type: "Website",
          href: "https://911fs.vn",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/products/911fs.vn.png",
      video: "",
    },
    {
      title: "TiềnNè.app",
      href: "https://tienne.app",
      dates: "2026",
      active: true,
      description:
        "A 24/7 automated affiliate cashback and reward points platform for Shopee, TikTok Shop, Lazada, and Tiki with VietQR payout integration and Zalo Sync Bot.",
      technologies: [
        "TanStack Start",
        "React Native",
        "Expo Router",
        "Typescript",
        "TailwindCSS",
        "Supabase",
        "PostgreSQL",
        "Cloudflare Workers",
        "Turborepo",
      ],
      links: [
        {
          type: "Website",
          href: "https://tienne.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/products/tienne-app.png",
      video: "",
    },
    {
      title: "Biomate",
      href: "#",
      dates: "2026",
      active: true,
      description:
        "Official marketing website and e-commerce platform for agricultural biological crop protection, featuring SSR performance optimization, product catalog, and article management.",
      technologies: [
        "TanStack Start",
        "TanStack Router",
        "React",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "Supabase",
        "Drizzle ORM",
        "Bun",
        "Docker",
      ],
      links: [
        {
          type: "Website",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/products/biomate-web.png",
      video: "",
    },
    {
      title: "Zalo Auto Copy Deal & Auto-Reply SaaS",
      href: "#",
      dates: "2026",
      active: true,
      description:
        "Automated SaaS platform for affiliate marketers on Zalo: silent source group deal listening, automated link conversion with custom UTM/SubID parameters, anti-duplicate MD5 hashing, and 24/7 personal auto-reply bot.",
      technologies: [
        "TanStack Start",
        "Typescript",
        "Node.js",
        "Supabase",
        "PostgreSQL",
        "Redis",
        "Zalo API Daemon",
        "Docker",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/products/zalo-auto-copy-deal.png",
      video: "",
    },
    {
      title: "EniMail",
      href: "https://eni-mail.online",
      dates: "2026",
      active: true,
      description:
        "A modern email service platform with a clean interface for managing and sending emails efficiently.",
      technologies: [
        "TanStack Start",
        "React",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "Drizzle ORM",
        "Cloudflare D1",
        "Cloudflare Workers",
        "Vite",
      ],
      links: [
        {
          type: "Website",
          href: "https://eni-mail.online",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/products/eni-mail.online_.png",
      video: "",
    },
    {
      title: "Monpos",
      href: "https://monpos.vn",
      dates: "2026",
      active: true,
      description:
        "A point-of-sale (POS) system designed for managing sales, inventory, and business operations with an intuitive interface.",
      technologies: [
        "Tauri",
        "Rust",
        "React",
        "Typescript",
        "TailwindCSS",
        "SQLite",
        "Drizzle ORM",
        "Vite",
        "Zustand",
      ],
      links: [
        {
          type: "Website",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/products/monpos.vn_.png",
      video: "",
    },
    {
      title: "The Places Finder",
      href: "https://www.theplacesfinder.com",
      dates: "2026",
      active: true,
      description:
        "Discover and explore various places across different categories. Find restaurants, hotels, attractions, and more with detailed information and reviews.",
      technologies: ["Next.js", "Typescript", "TailwindCSS", "Shadcn UI"],
      links: [
        {
          type: "Website",
          href: "https://www.theplacesfinder.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/products/www.theplacesfinder.com_.png",
      video: "",
    },
    {
      title: "Harness Learning",
      href: "https://harness.nguyenanh98.com",
      dates: "2026",
      active: true,
      description:
        "Learn Harness Engineering is a course dedicated to the engineering of AI coding agents..",
      technologies: [
        "React",
        "VitePress",
        "Vite",
        "TailwindCSS",
        "CopilotKit",
        "Mermaid.js",
        "Typescript",
        "Framer Motion",
      ],
      links: [
        {
          type: "Website",
          href: "https://harness.nguyenanh98.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/products/harness.nguyenanh98.com.png",
      video: "",
    },
    {
      title: "Harness Kit",
      href: "https://nguyenanh92.github.io/harness-kit",
      dates: "2026",
      active: true,
      description:
        "A zero-dependency AI Agent Harness template and validation kit using standard Python libraries to build resilient, self-correcting agents.",
      technologies: ["HTML", "Vanilla CSS", "JavaScript", "Python", "Mermaid.js"],
      links: [
        {
          type: "Website",
          href: "https://nguyenanh92.github.io/harness-kit",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/products/nguyenanh92.github.io_harness-kit_.png",
      video: "",
    },
    {
      title: "Kitora Tools",
      href: "https://kitora.tools",
      dates: "2026",
      active: true,
      description:
        "A collection of essential online developer tools and utilities including formatters, encoders, parsers, and quick testing playgrounds.",
      technologies: ["Next.js", "Typescript", "TailwindCSS", "Shadcn UI"],
      links: [
        {
          type: "Website",
          href: "https://kitora.tools",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/products/kitora.tools.png",
      video: "",
    },
    {
      title: "AOD Trade Union Portal",
      href: "#",
      dates: "2024",
      active: true,
      description:
        "An internal enterprise portal for managing trade union activities, welfare programs, member registrations, and collective benefits.",
      technologies: [".NET Core", "React", "MSSQL", "TailwindCSS", "Typescript"],
      links: [
        {
          type: "Website",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/products/congdoan.add-on-company.com_.png",
      video: "",
    },
    {
      title: "AOD Confession",
      href: "#",
      dates: "2025",
      active: true,
      description:
        "A secure, anonymous suggestions system for enterprise employees, facilitating direct communication with corporate management.",
      technologies: [".NET Core", "Vue.js", "MSSQL", "Bootstrap", "Javascript"],
      links: [
        {
          type: "Website",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/products/homthu.add-on-company.com.png",
      video: "",
    },
    {
      title: "AOD Voting Platform",
      href: "#",
      dates: "2025",
      active: true,
      description:
        "An employee polling and voting system for union elections, policy voting, and corporate surveys with secure verification.",
      technologies: ["React", "Next.js", "Node.js", "MongoDB", "TailwindCSS", "Typescript"],
      links: [
        {
          type: "Website",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/products/voting.add-on-company.com_.png",
      video: "",
    },
    {
      title: "AOD Voucher Rewards",
      href: "#",
      dates: "2025",
      active: true,
      description:
        "A corporate rewards distribution platform allowing administration to allocate vouchers and gifts to employees for recognition, holidays, and milestones.",
      technologies: [".NET Core", "React", "MSSQL", "TailwindCSS", "Typescript"],
      links: [
        {
          type: "Website",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/products/voucher.add-on-company.com_.png",
      video: "",
    },
    {
      title: "Teams QR Employees",
      href: "#",
      dates: "2024",
      active: true,
      description:
        "A Microsoft Teams application providing dynamic QR codes for employee authentication, campus check-ins, and secure facility access control.",
      technologies: ["Microsoft Teams SDK", "React", "Node.js", "Express", "TailwindCSS", "Typescript"],
      links: [],
      image: "/products/qr-employess.png",
      video: "",
    },
    {
      title: "Teams Azure DevOps Manager",
      href: "#",
      dates: "2024",
      active: true,
      description:
        "An integrated Microsoft Teams app that links with Azure DevOps API, enabling team members to manage scrum boards and tasks directly inside Teams chats.",
      technologies: ["Microsoft Teams SDK", "Azure DevOps API", "React", "Node.js", "TailwindCSS", "Typescript"],
      links: [],
      image: "/products/azure-devops-task-manager.png",
      video: "",
    },
    {
      title: "Outlook Agent",
      href: "#",
      dates: "2024",
      active: true,
      description:
        "An intelligent AI agent deployed directly within Microsoft Outlook. It automates email drafting, summarizes long conversation threads, extracts action items, and schedules calendar events using advanced natural language processing.",
      technologies: ["Office Add-in SDK", "React", "Node.js", "Express", "OpenAI API", "TailwindCSS", "Typescript"],
      links: [],
      image: "/products/outlook-agent.png",
      video: "",
    },
    {
      title: "Eniplaces",
      href: "https://www.eniplaces.com/",
      dates: "2025",
      active: true,
      description: "Explore thousands of places across different categories. From authentic local eateries to luxury hotels, find exactly what you're searching for.",
      technologies: ["Next.js", "Typescript", "TailwindCSS", "Shadcn UI"],
      links: [
        {
          type: "Website",
          href: "https://www.eniplaces.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "https://i.ibb.co/N60QYsNZ/Screenshot-2025-12-10-175525.png",
      video: "",
    },
    {
      title: "Synthanswerai",
      href: "https://www.synthanswerai.com/",
      dates: "2025",
      active: true,
      description:
        "Discover how SynthAnswer AI is changing the way students, researchers, and professionals approach problem-solving with cutting-edge artificial intelligence technology.",
      technologies: [
        "Next.js",
        "Typescript",
        "Supabase",
        "OpenAI API",
        "Lemon Squeezy",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.synthanswerai.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "https://www.synthanswerai.com/img/slider-4.png",
      video: "",
    },
    {
      title: "AuraMemory.dev",
      href: "https://www.auramemory.dev/",
      dates: "2025",
      active: true,
      description:
        "Transform your AI interactions with intelligent memory management. Store, search, and leverage context from all your conversations to create more meaningful and productive AI experiences.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Python FastAPI",
        "MCP Server",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.auramemory.dev/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "https://i.ibb.co/Hf55rxGX/Screenshot-2025-12-09-093617.png",
      video: "",
    },
    {
      title: "Beestorylab",
      href: "https://www.beestorylab.com/en",
      dates: "2025",
      active: true,
      description:
        "Create beautiful comics with just a few text prompts. Easy, fast, and fun for all ages!",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Python FastAPI",
        "MCP Server",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.beestorylab.com/en",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "https://i.ibb.co/rR7YWk5W/Screenshot-2025-12-09-094234.png",
      video: "",
    },
    {
      title: "VNFarm",
      href: "https://vnfarm.com.vn/",
      dates: "Mar 2022 - Sep 2022",
      active: true,
      description:
        "Personal SEO-optimized e-commerce website integrated with payment gateways and shipping services.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://vnfarm.com.vn",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "https://i.ibb.co/p2zjHZv/vn-farm.png",
      video: "",
    },
    {
      title: "Panda Fund",
      href: "https://panda-fund.vercel.app/dashboard/",
      dates: "2024",
      active: true,
      description: "Fund management and expense tracking platform.",
      technologies: [
        "Next.js",
        "Typescript",
        "MongoDB",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "clerk auth",
      ],
      links: [
        {
          type: "Website",
          href: "https://panda-fund.vercel.app/dashboard/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/products/panda-fund.png",
      video: "",
    },

    {
      title: "Panda Tracker",
      href: "https://panda-tracker.vercel.app/",
      dates: "2024",
      active: true,
      description: "Personal finance and spending tracker.",
      technologies: [
        "Next.js",
        "Typescript",
        "MongoDB",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "clerk auth",
      ],
      links: [
        {
          type: "Website",
          href: "https://panda-tracker.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/products/panda-tracker.png",
      video: "",
    },
    // {
    //   title: "Salary Exchange",
    //   href: "https://salaryaod.netlify.app/",
    //   dates: "2022",
    //   active: true,
    //   description: "Web scraper for exchange rates and currency converter.",
    //   technologies: ["Vue.js", "Typescript", "Nodejs", "XML"],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://salaryaod.netlify.app/",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //   ],
    //   image: "/products/salary.png",
    //   video: "",
    // },
    // {
    //   title: "Panda Bet",
    //   href: "https://panda88.vercel.app/",
    //   dates: "2024",
    //   active: true,
    //   description: "Web platform for internal sports betting.",
    //   technologies: [
    //     "Next.js",
    //     "MongoDB",
    //     "NextAuth",
    //     "Typescript",
    //     "Prisma",
    //     "Shadcn UI",
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://panda88.vercel.app/",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //   ],
    //   image: "/products/panda-bet.png",
    //   video: "",
    // },
    {
      title: "Panda Scan",
      href: "https://panda-scan.vercel.app/",
      dates: "2024",
      active: true,
      description: "Web utility to check metadata of NPM and NuGet packages.",
      technologies: ["Next.js", "Typescript", "Shadcn UI"],
      links: [
        {
          type: "Website",
          href: "https://panda-scan.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/products/scan.png",
      video: "",
    },
    // {
    //   title: "Panda Note Money Extension",
    //   href: "https://chromewebstore.google.com/detail/pandaex/bjgfakkjhmjipfonglkbecengkjjaacg",
    //   dates: "2024",
    //   active: true,
    //   description: "Chrome extension for tracking lunch debt notes.",
    //   technologies: ["Javascript"],
    //   links: [
    //     {
    //       type: "Extension",
    //       href: "https://chromewebstore.google.com/detail/pandaex/bjgfakkjhmjipfonglkbecengkjjaacg",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //   ],
    //   image: "/products/panda-note.png",
    //   video: "",
    // },
    // {
    //   title: "Panda Tarot",
    //   href: "https://panda-tarot.vercel.app/",
    //   dates: "2024",
    //   active: true,
    //   description: "Online Tarot card reading website.",
    //   technologies: ["React.js", "GeminiAPI", "Typescript"],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://panda-tarot.vercel.app/",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //   ],
    //   image: "/products/tarot.png",
    //   video: "",
    // },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Hack The North",
      dates: "September 14th - 16th, 2018",
      location: "Waterloo, Ontario",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "FirstNet Public Safety Hackathon",
      dates: "March 23rd - 24th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [],
    },
    {
      title: "DeveloperWeek Hackathon",
      dates: "February 3rd - 4th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
    {
      title: "HackDavis",
      dates: "January 20th - 21st, 2018",
      location: "Davis, California",
      description:
        "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/my6footprint",
        },
        {
          title: "ML",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/my6footprint-machine-learning",
        },
        {
          title: "iOS",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/CarbonWallet",
        },
        {
          title: "Server",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/wallet6-server",
        },
      ],
    },
    {
      title: "ETH Waterloo",
      dates: "October 13th - 15th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
      links: [
        {
          title: "Organization",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ethdocnet",
        },
      ],
    },
    {
      title: "Hack The North",
      dates: "September 15th - 17th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a virtual reality application allowing users to see themselves in third person.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Streamer Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/htn2017",
        },
        {
          title: "Client Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/RTSPClient",
        },
      ],
    },
    {
      title: "Hack The 6ix",
      dates: "August 26th - 27th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ShareShip/ShareShip",
        },
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://share-ship.herokuapp.com/",
        },
      ],
    },
    {
      title: "Stupid Hack Toronto",
      dates: "July 23rd, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/nsagirlfriend/nsagirlfriend",
        },
      ],
    },
    {
      title: "Global AI Hackathon - Toronto",
      dates: "June 23rd - 25th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/TinySamosas/",
        },
      ],
    },
    {
      title: "McGill AI for Social Innovation Hackathon",
      dates: "June 17th - 18th, 2017",
      location: "Montreal, Quebec",
      description:
        "Developed realtime facial microexpression analyzer using AI",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
      links: [],
    },
    {
      title: "Open Source Circular Economy Days Hackathon",
      dates: "June 10th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/genecis",
        },
      ],
    },
    {
      title: "Make School's Student App Competition 2017",
      dates: "May 19th - 21st, 2017",
      location: "International",
      description: "Improved PocketDoc and submitted to online competition",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
      win: "Top 10 Finalist | Honourable Mention",
      links: [
        {
          title: "Medium Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
        },
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "HackMining",
      dates: "May 12th - 14th, 2017",
      location: "Toronto, Ontario",
      description: "Developed neural network to optimize a mining process",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
      links: [],
    },
    {
      title: "Waterloo Equithon",
      dates: "May 5th - 7th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "SpaceApps Waterloo",
      dates: "April 28th - 30th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/earthwatch",
        },
      ],
    },
    {
      title: "MHacks 9",
      dates: "March 24th - 26th, 2017",
      location: "Ann Arbor, Michigan",
      description:
        "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/threejs-planes",
        },
      ],
    },
    {
      title: "StartHacks I",
      dates: "March 4th - 5th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
      win: "1st Place Winner",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-ionic",
        },
        {
          title: "Source (Server)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-rails",
        },
      ],
    },
    {
      title: "QHacks II",
      dates: "February 3rd - 5th, 2017",
      location: "Kingston, Ontario",
      description:
        "Developed a mobile game which enables city-wide manhunt with random lobbies",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/human-huntr-react-native",
        },
        {
          title: "Source (API)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/human-huntr-rails",
        },
      ],
    },
    {
      title: "Terrible Hacks V",
      dates: "November 26th, 2016",
      location: "Waterloo, Ontario",
      description:
        "Developed a mock of Windows 11 with interesting notifications and functionality",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
        },
      ],
    },
    {
      title: "Portal Hackathon",
      dates: "October 29, 2016",
      location: "Kingston, Ontario",
      description:
        "Developed an internal widget for uploading assignments using Waterloo's portal app",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/UWPortalSDK/crowmark",
        },
      ],
    },
  ],
  certificates: [
    {
      title: "Generative AI for Educators with Gemini Certificate",
      issuer: "Google",
      issuerLogo: "google",
      date: "Dec 2025",
      credentialUrl: "https://edu.exceedlms.com/student/award/R6oVpTKM6UCRpGewJjz2e2Rh",
      skills: [],
      description: "",
    },
    {
      title: "BOOTCAMP LLM & AI AIGENT",
      issuer: "Cole",
      issuerLogo: "cole",
      date: "2025",
      credentialUrl: "/certificates/1751518353150.jpg",
      skills: ["Retrieval-Augmented Generation (RAG)", "AI Agents"],
      description: "",
    },
    {
      title: "AI Applications for Vietnamese Youth",
      issuer: "OpenEdu",
      issuerLogo: "openedu",
      date: "May 2025",
      credentialUrl: "/certificates/OpenEDU Khoá học Ứng dụng AI cho Thanh niên Việt Nam.pdf",
      skills: ["AI Prompting"],
      description:
        "This initiative explores how artificial intelligence can empower Vietnamese youth across education, career development, creativity, and civic engagement. By leveraging AI tools and platforms, young people in Vietnam can access new opportunities, enhance problem-solving skills, and contribute to building a smarter, more inclusive digital future.",
    },
    {
      title: "Generative AI for Educators Certificate",
      issuer: "Google",
      issuerLogo: "google",
      date: "Jun 2025",
      credentialUrl: "https://skillshop.exceedlms.com/student/award/RAEwYRFcZPRxi9tfNGmbTgFC",
      skills: [],
      description: "",
    },
    {
      title: "Google Prompting Essentials",
      issuer: "Coursera",
      issuerLogo: "coursera",
      date: "Apr 2025",
      credentialUrl: "https://www.credly.com/badges/f084f55f-28ed-49bc-bf09-42bfe4f79d1f/linked_in_profile",
      skills: [],
      description: "",
    },
  ],
} as const;
