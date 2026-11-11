export interface RoadmapStep {
  title: string;
  description: string;
  keyTopics: string[];
}

export interface RoadmapTrack {
  id: string;
  title: string;
  subtitle: string;
  timeframe: string;
  level: string;
  recommendTrack?: string;
  steps: RoadmapStep[];
}

export interface ResourceItem {
  id: string;
  technology: string;
  track: string;
  provider: string;
  type: string;
  description: string;
  url: string;
}

export const roadmapsData: RoadmapTrack[] = [
  {
    id: "frontend",
    title: "Frontend Development",
    subtitle: "Build fast, accessible, responsive web interfaces from semantic HTML to modern React.",
    timeframe: "4–6 months",
    level: "Beginner Friendly",
    recommendTrack: "frontend",
    steps: [
      {
        title: "1. HTML5 & Semantic Structure",
        description: "Master document structure, accessible forms, landmarks, and SEO-friendly markup.",
        keyTopics: ["Semantic tags", "Forms & validation", "ARIA basics"]
      },
      {
        title: "2. CSS3, Flexbox, Grid & Responsive Design",
        description: "Create fluid layouts across mobile, tablet, and desktop using modern CSS.",
        keyTopics: ["Flexbox & CSS Grid", "Media queries", "Tailwind CSS"]
      },
      {
        title: "3. Modern JavaScript (ES6+) & DOM",
        description: "Learn asynchronous fetch, closures, modules, and interactive DOM manipulation.",
        keyTopics: ["Promises & async/await", "Array methods", "Browser APIs"]
      },
      {
        title: "4. Git, GitHub & Package Tooling",
        description: "Collaborate safely with branches, pull requests, npm scripts, and Vite.",
        keyTopics: ["Git workflow", "npm / Vite", "Linting"]
      },
      {
        title: "5. React & TypeScript",
        description: "Build reusable component architectures, custom hooks, routing, and type-safe UIs.",
        keyTopics: ["Hooks & state", "React Router", "TypeScript"]
      },
      {
        title: "6. Automated Testing & Deployment",
        description: "Verify component behavior with Vitest / Testing Library and ship to Vercel or GitHub Pages.",
        keyTopics: ["Unit & UI tests", "Web performance", "CI deployment"]
      }
    ]
  },
  {
    id: "backend",
    title: "Backend & MERN Stack",
    subtitle: "Design APIs, authentication, databases, and scalable server architectures.",
    timeframe: "4–6 months",
    level: "Intermediate",
    recommendTrack: "mern",
    steps: [
      {
        title: "1. Programming Foundations & Git",
        description: "Build fluency in JavaScript/Node.js or Python alongside terminal and Git workflows.",
        keyTopics: ["Data structures", "CLI basics", "Version control"]
      },
      {
        title: "2. Node.js & Express APIs",
        description: "Create RESTful endpoints, middleware pipelines, input validation, and structured error handling.",
        keyTopics: ["REST principles", "Middleware", "Zod / validation"]
      },
      {
        title: "3. Relational & Document Databases",
        description: "Model schemas, write efficient queries, and configure indexes in PostgreSQL and MongoDB.",
        keyTopics: ["SQL joins", "MongoDB schemas", "Indexing"]
      },
      {
        title: "4. Authentication & Security",
        description: "Protect endpoints with bcrypt password hashing, JWT/sessions, CORS, and rate limiting.",
        keyTopics: ["JWT & cookies", "OWASP basics", "Rate limiting"]
      },
      {
        title: "5. Caching, Queues & Deployment",
        description: "Improve reliability with environment configuration, logging, Redis caching, and cloud hosting.",
        keyTopics: ["Env secrets", "Health checks", "Cloud deployment"]
      }
    ]
  },
  {
    id: "android",
    title: "Android Development",
    subtitle: "Create reliable native mobile applications using Kotlin, Jetpack Compose, and MVVM.",
    timeframe: "5–7 months",
    level: "Beginner to Intermediate",
    recommendTrack: "android",
    steps: [
      {
        title: "1. Kotlin Fundamentals",
        description: "Master null safety, data classes, lambdas, collections, and Kotlin coroutines.",
        keyTopics: ["Null safety", "OOP in Kotlin", "Coroutines"]
      },
      {
        title: "2. Android Studio & App Lifecycle",
        description: "Understand Gradle builds, Activity/Fragment lifecycles, permissions, and navigation.",
        keyTopics: ["Gradle", "Lifecycle states", "Navigation"]
      },
      {
        title: "3. Jetpack Compose & Material 3",
        description: "Build reactive declarative UIs, state hoisting, lists, and adaptive layouts.",
        keyTopics: ["Composables", "State hoisting", "Material Design"]
      },
      {
        title: "4. Local Storage & Networking",
        description: "Persist offline data with Room and consume REST APIs cleanly with Retrofit.",
        keyTopics: ["Room DB", "Retrofit", "JSON parsing"]
      },
      {
        title: "5. MVVM Architecture & Testing",
        description: "Separate UI, ViewModel, and repository layers with automated JUnit and Compose tests.",
        keyTopics: ["MVVM", "Dependency injection", "UI tests"]
      }
    ]
  },
  {
    id: "data-analytics",
    title: "Data Analyst",
    subtitle: "Turn raw datasets into clear decisions with SQL, Python, statistics, and BI dashboards.",
    timeframe: "4–5 months",
    level: "Beginner Friendly",
    recommendTrack: "data-analytics",
    steps: [
      {
        title: "1. Spreadsheets & Descriptive Statistics",
        description: "Clean messy records, build pivot tables, and compute averages, variance, and distributions.",
        keyTopics: ["Excel / Sheets", "Summary metrics", "Data cleaning"]
      },
      {
        title: "2. SQL Querying & Analysis",
        description: "Extract insights from relational databases with joins, CTEs, aggregations, and window functions.",
        keyTopics: ["JOINs & GROUP BY", "Window functions", "Subqueries"]
      },
      {
        title: "3. Python, NumPy & Pandas",
        description: "Automate data cleaning, merging, reshaping, and exploratory analysis in notebooks.",
        keyTopics: ["Pandas DataFrames", "Missing values", "Jupyter"]
      },
      {
        title: "4. Data Visualization & BI Dashboards",
        description: "Communicate insights clearly using Matplotlib/Seaborn, Power BI, or Tableau.",
        keyTopics: ["Chart selection", "KPI dashboards", "Storytelling"]
      }
    ]
  },
  {
    id: "devops",
    title: "DevOps & Cloud Engineering",
    subtitle: "Automate builds, containers, cloud infrastructure, and observability pipelines.",
    timeframe: "6+ months",
    level: "Intermediate to Advanced",
    steps: [
      {
        title: "1. Linux, Networking & Scripting",
        description: "Manage processes, permissions, DNS/HTTP, SSH, and automation scripts in Bash or Python.",
        keyTopics: ["Linux CLI", "TCP/IP & DNS", "Bash scripting"]
      },
      {
        title: "2. Containers with Docker",
        description: "Package services reproducibly using multi-stage Dockerfiles and Docker Compose.",
        keyTopics: ["Images & layers", "Docker Compose", "Volumes"]
      },
      {
        title: "3. CI/CD Pipelines",
        description: "Automate linting, testing, and deployments via GitHub Actions or GitLab CI.",
        keyTopics: ["GitHub Actions", "Automated tests", "Release gates"]
      },
      {
        title: "4. Cloud Providers & Infrastructure as Code",
        description: "Provision compute, object storage, IAM, and Kubernetes clusters reproducibly with Terraform.",
        keyTopics: ["AWS / GCP", "IAM least privilege", "Terraform / K8s"]
      }
    ]
  },
  {
    id: "ai-ml",
    title: "AI & Machine Learning",
    subtitle: "Build mathematical intuition and train supervised, deep learning, and NLP models.",
    timeframe: "6–9 months",
    level: "Intermediate to Advanced",
    steps: [
      {
        title: "1. Mathematics for Machine Learning",
        description: "Understand vectors, matrix operations, derivatives, probability, and statistical inference.",
        keyTopics: ["Linear algebra", "Probability", "Calculus intuition"]
      },
      {
        title: "2. Python Scientific Stack",
        description: "Manipulate tensors and tabular datasets efficiently with NumPy, Pandas, and Matplotlib.",
        keyTopics: ["NumPy", "Pandas", "Exploratory EDA"]
      },
      {
        title: "3. Classical Machine Learning",
        description: "Train regression, classification, clustering, and cross-validation pipelines in Scikit-Learn.",
        keyTopics: ["Train/test split", "Tree ensembles", "Evaluation metrics"]
      },
      {
        title: "4. Deep Learning & Applied NLP/CV",
        description: "Build neural networks with PyTorch or TensorFlow and fine-tune domain models responsibly.",
        keyTopics: ["Neural networks", "PyTorch / TensorFlow", "Model evaluation"]
      }
    ]
  }
];

export const resourcesData: ResourceItem[] = [
  {
    id: "res-mdn",
    technology: "HTML, CSS & JavaScript",
    track: "Frontend",
    provider: "MDN Web Docs",
    type: "Interactive Guide & Reference",
    description: "Authoritative curriculum covering web standards, accessibility, CSS layout, and modern JS.",
    url: "https://developer.mozilla.org/en-US/docs/Learn_web_development"
  },
  {
    id: "res-fcc-rwd",
    technology: "Responsive Web Design",
    track: "Frontend",
    provider: "freeCodeCamp",
    type: "Hands-on Projects",
    description: "Free interactive HTML & CSS certification with 5 portfolio projects.",
    url: "https://www.freecodecamp.org/learn/2022/responsive-web-design/"
  },
  {
    id: "res-react",
    technology: "React & Component UI",
    track: "Frontend",
    provider: "React Official Docs",
    type: "Official Interactive Docs",
    description: "Modern hook-based React tutorials covering state, effects, and architecture.",
    url: "https://react.dev/learn"
  },
  {
    id: "res-ts",
    technology: "TypeScript",
    track: "Frontend",
    provider: "TypeScript Handbook",
    type: "Official Documentation",
    description: "Core type system concepts, generics, narrowing, and React typing patterns.",
    url: "https://www.typescriptlang.org/docs/handbook/intro.html"
  },
  {
    id: "res-js-info",
    technology: "JavaScript Deep Dive",
    track: "Frontend / MERN",
    provider: "JavaScript.info",
    type: "Structured Tutorial",
    description: "Clear explanations of closures, prototypes, event loops, promises, and DOM APIs.",
    url: "https://javascript.info/"
  },
  {
    id: "res-odin",
    technology: "Full-Stack JavaScript (MERN)",
    track: "Backend / MERN",
    provider: "The Odin Project",
    type: "Project Curriculum",
    description: "Open-source full-stack track from Git and JS to Node.js, Express, and React.",
    url: "https://www.theodinproject.com/paths/full-stack-javascript"
  },
  {
    id: "res-node",
    technology: "Node.js & Express APIs",
    track: "Backend / MERN",
    provider: "Node.js Official",
    type: "Developer Guide",
    description: "Official introduction to Node.js runtime, async programming, modules, and HTTP servers.",
    url: "https://nodejs.org/en/learn/getting-started/introduction-to-nodejs"
  },
  {
    id: "res-mongo",
    technology: "MongoDB & Data Modeling",
    track: "Backend / MERN",
    provider: "MongoDB University",
    type: "Free Video & Labs",
    description: "Schema design, CRUD operations, indexes, and aggregation frameworks.",
    url: "https://learn.mongodb.com/"
  },
  {
    id: "res-android",
    technology: "Android & Jetpack Compose",
    track: "Android",
    provider: "Google Android Developers",
    type: "Official Course",
    description: "Step-by-step codelabs to build Kotlin and Jetpack Compose Android apps.",
    url: "https://developer.android.com/courses/android-basics-compose/course"
  },
  {
    id: "res-kotlin",
    technology: "Kotlin Language",
    track: "Android",
    provider: "Kotlin Official Docs",
    type: "Language Reference",
    description: "Syntax, coroutines, collections, and multiplatform basics directly from JetBrains.",
    url: "https://kotlinlang.org/docs/getting-started.html"
  },
  {
    id: "res-kaggle",
    technology: "SQL, Pandas & Visualization",
    track: "Data Analytics",
    provider: "Kaggle Learn",
    type: "Interactive Notebooks",
    description: "Bite-sized coding exercises in Python, Pandas, SQL, and data storytelling.",
    url: "https://www.kaggle.com/learn"
  },
  {
    id: "res-fcc-da",
    technology: "Data Analysis with Python",
    track: "Data Analytics",
    provider: "freeCodeCamp",
    type: "Certification & Projects",
    description: "NumPy, Pandas, Matplotlib, and real-world data cleaning certification projects.",
    url: "https://www.freecodecamp.org/learn/data-analysis-with-python/"
  },
  {
    id: "res-docker",
    technology: "Docker & Containers",
    track: "DevOps",
    provider: "Docker Docs",
    type: "Official Getting Started",
    description: "Containerizing applications, writing Dockerfiles, and managing multi-container stacks.",
    url: "https://docs.docker.com/get-started/"
  },
  {
    id: "res-k8s",
    technology: "Kubernetes Basics",
    track: "DevOps",
    provider: "Kubernetes.io",
    type: "Interactive Tutorial",
    description: "Clusters, deployments, scaling, and service discovery from official Kubernetes docs.",
    url: "https://kubernetes.io/docs/tutorials/kubernetes-basics/"
  },
  {
    id: "res-fastai",
    technology: "Practical Deep Learning",
    track: "AI & ML",
    provider: "fast.ai",
    type: "Free Course",
    description: "Top-down practical course on training and deploying deep learning models with PyTorch.",
    url: "https://course.fast.ai/"
  }
];
