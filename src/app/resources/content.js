import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Tyler",
  lastName: "Salva",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Senior Software Engineer",
  avatar: "/images/avatar.jpg",
  location: "America/Chicago", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English"], // optional: Leave the array empty if you don't want to display languages
  };

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://linkedin.com/in/tyler-s-4a9281140/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:tylersalva9466@gmail.com",
  },
];

const home = {
  display: false,
  label: "Home",
  title: `${person.name} — ${person.role}`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  tagline: "Senior Software Engineer",
  headline: <>I build AI-powered healthcare platforms that scale.</>,
  subline: (
    <>
     I'm Tyler, a <InlineCode>Senior Software Engineer</InlineCode> with 9+ years turning large-scale clinical data into secure, high-performance products, from LLM-driven clinical intelligence to FHIR interoperability, used by hospitals, providers, and millions of patients.
     </>
  ),
  stats: [
    { value: "9+", label: "Years of experience" },
    { value: "130M+", label: "Patients impacted" },
    { value: "70%", label: "Faster equipment delivery" },
    { value: "Gold", label: "Stevie Award, Tech" },
  ],
};

const about = {
  label: "",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: false,
  },
  calendar: {
    display: true,
    link: "https://calendly.com/tylersalva9466/30min",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
      Tyler Salva is a Senior Software Engineer with 9+ years of experience building AI-powered
      healthcare platforms, scalable cloud applications, and distributed backend systems. He works
      across the full stack with Python, Java, React, and AWS to develop secure, high-performance
      products used by hospitals, healthcare providers, and millions of patients. His background
      spans LLM applications, NLP, healthcare interoperability (FHIR), and designing reliable
      systems that process large-scale clinical data while meeting HIPAA compliance.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Truveta",
        timeframe: "2024 - Present",
        role: "Senior Software Engineer",
        link: "https://www.truveta.com/",
        logo: "https://www.google.com/s2/favicons?domain=truveta.com&sz=64",
        links: [
          { label: "Truveta Intelligence", url: "https://www.truveta.com/intelligence", icon: "sparkles" },
        ],
        achievements: [
          <>
            Led engineering for Truveta Intelligence, building a natural language query engine to analyze billions of live clinical data points with sub-minute query response times.
          </>,
          <>
            Architected distributed data pipelines handling multi-modal EHR data for over 130M patients, and deployed Truveta Language Model (TLM) upgrades that parsed unstructured clinical notes to extract 2.7M oncology staging records.
          </>,
          <>
            Re-engineered legacy static pipelines into a governance-driven multi-agent AI system for zero-shot clinical ontology alignment, achieving human-expert accuracy on complex diagnosis and medication classifications, earning the Gold Stevie Award for Tech Achievement.
          </>,
        ],
        images: []
      },
      {
        company: "Tomorrow Health",
        timeframe: "2022 - 2024",
        role: "Senior Software Engineer",
        link: "https://home.tomorrowhealth.com",
        logo: "https://www.google.com/s2/favicons?domain=tomorrowhealth.com&sz=64",
        links: [
          { label: "AI Ordering", url: "https://home.tomorrowhealth.com/ai-ordering", icon: "sparkles" },
          { label: "AI Fax Intake", url: "https://home.tomorrowhealth.com/ai-fax-intake", icon: "sparkles" },
        ],
        achievements: [
          <>
            Led full-stack development of cloud-native web apps using Python (Django/FastAPI) and React, scaling backend systems to safely process millions of patient healthcare transactions.
          </>,
          <>
            Built integration pipelines on FHIR R4 and SMART on FHIR so external hospital EHR networks could connect seamlessly, and implemented NLP/OCR workflows to automate data extraction from incoming clinical faxes and notes.
          </>,
          <>
            Engineered high-accuracy mapping tools that cross-referenced unstructured doctor notes with complex insurance rules, speeding up medical equipment delivery by 70%, on HIPAA-compliant AWS storage with end-to-end encryption and immutable logging.
          </>,
        ],
        images: []
      },
      {
        company: "Twin Health",
        timeframe: "2020 - 2022",
        role: "Software Engineer II",
        link: "https://usa.twinhealth.com/",
        logo: "https://www.google.com/s2/favicons?domain=twinhealth.com&sz=64",
        links: [
          { label: "iOS App", url: "https://apps.apple.com/us/app/twin-health/id1456423142", icon: "apple" },
          { label: "Android App", url: "https://play.google.com/store/apps/details?hl=en_US&id=com.twinsdigital.v2", icon: "googlePlay" },
        ],
        achievements: [
          <>
            Built and optimized the patient-facing Whole Body Digital Twin mobile app in React Native for meal logging, habit tracking, and real-time metabolic updates to help reverse Type 2 diabetes.
          </>,
          <>
            Developed secure background pipelines that synced live readings from continuous glucose monitors (CGMs) and smartwatches to the cloud via Bluetooth Low Energy (BLE) and health APIs.
          </>,
          <>
            Scaled backend microservices with Java (Spring Boot) and Python to process millions of daily data points per user, and connected the app to core AI models for personalized nutrition tips and behavioral nudges, all under strict HIPAA compliance in PostgreSQL and AWS.
          </>
        ],
        images: []
      },
      {
        company: "Uber Health",
        timeframe: "2017 - 2020",
        role: "Software Engineer I",
        link: "https://www.uberhealth.com",
        logo: "https://www.google.com/s2/favicons?domain=uberhealth.com&sz=64",
        links: [],
        achievements: [
          <>
            Wrote microservices in Go and Python to support the Uber Health API launch, and helped maintain HIPAA-compliant data pipelines that separated patient privacy details from operational ride data.
          </>,
          <>
            Supported the team with testing, bug fixes, and backend updates using Kafka and Cassandra to keep trip tracking reliable.
          </>,
          <>
            As an intern during the early beta, aided the full-stack team by writing dashboard features and testing SMS notification setups.
          </>
        ],
        images: []
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "California Institute of Technology",
        description: <>Bachelor of Science, Computer Science</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical skills",
    skills: [
      {
        title: "AI & Machine Learning",
        icon: "brain",
        summary: "LLMs, NLP & Agentic AI",
        description: <>LLM applications, NLP, and Agentic AI with RAG, prompt engineering, LangChain, and Hugging Face. Experienced in OCR, semantic and vector search, and clinical AI for large-scale healthcare data.</>,
        images: [],
      },
      {
        title: "Full-Stack Development",
        icon: "layers",
        summary: "React & Python/Java APIs",
        description: <>Frontend with React, React Native, Next.js, Vue.js, and Angular. Backend with FastAPI, Django, Spring Boot, Node.js, NestJS, Express.js, ASP.NET, GraphQL, and REST APIs.</>,
        images: [],
      },
      {
        title: "Languages",
        icon: "code",
        summary: "Python, TypeScript, Go, Java",
        description: <>Python, JavaScript, TypeScript, Go, Java, C#, and SQL.</>,
        images: [],
      },
      {
        title: "Cloud & DevOps",
        icon: "cloud",
        summary: "AWS, Docker & Kubernetes",
        description: <>AWS, Docker, Kubernetes, Terraform, GitHub Actions, and CI/CD on Linux. Focused on secure, HIPAA-compliant, high-availability infrastructure.</>,
        images: [],
      },
      {
        title: "Databases & Data",
        icon: "database",
        summary: "SQL, NoSQL & vector stores",
        description: <>PostgreSQL, Microsoft SQL Server, MySQL, MongoDB, and Redis, plus vector stores like Pinecone and pgvector. Skilled in healthcare interoperability with FHIR R4 and SMART on FHIR.</>,
        images: [],
      },
      {
        title: "Engineering Practices",
        icon: "gears",
        summary: "System design & API design",
        description: <>System design, API design, and OAuth 2.0 security, delivered in Agile/Scrum teams using Git, Jira, and Slack.</>,
        images: [],
      }
    ]
  },
};

const blog = {
  label: "Blog",
  title: "Blog Posts",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Personal Projects",
  title: "My projects",
  description: `Side projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/Screenshot 2024-12-13 183324.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/Screenshot 2024-12-13 183310.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/InspireB_Roll.mp4",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/Screenshot 2024-12-13 183251.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/ComfyUI_00077_.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/Screenshot 2024-12-13 183242.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/Gen-3+Alpha+Turbo+3425129327,+Cropped+-+MarkuryFLU.mp4",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/ComfyUI_00007_.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/ComfyUI_00090_.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/ComfyUI_00008_.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/ComfyUI_00173_.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/Gen-3+Alpha+2434284061,+Cropped+-+ComfyUI_00.mp4",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/Screenshot 2024-12-13 183258.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/ComfyUI_00021.jpeg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
