// ============================================================
// PORTFOLIO DATA — Edit this file to update all content
// ============================================================
// TODO items are clearly marked below — replace with real values

export const personalInfo = {
  name: 'Deena Dhayalan',
  title: 'Software Engineer',
  subtitle: 'Big Data Engineer',
  tagline: 'Building high-performance data pipelines & scalable distributed systems',
  email: 'your-email@example.com', // TODO: Replace with your real email
  phone: '+91-7418577294',
  github: 'https://github.com/YOUR_USERNAME', // TODO: Replace with your GitHub profile URL
  linkedin: 'https://linkedin.com/in/YOUR_PROFILE', // TODO: Replace with your LinkedIn URL
  portfolio: '#', // TODO: Replace with your deployed portfolio URL
  resumeFile: '/Deena_Dhayalan_Resume.pdf',
  location: 'Chennai, India',
}

export const summary =
  'Engineer with hands-on experience designing and implementing high-performance data pipelines using modern big data technologies. Proficient in working with distributed systems such as Kafka, Hadoop, Hive, Trino, and Apache Pinot to enable scalable data ingestion, transformation, and querying. Skilled in building reliable, low-latency pipelines for both batch and real-time workloads. Experienced in optimizing query performance and managing large-scale data infrastructure that powers analytics and business decision-making.'

export const skills = [
  {
    category: 'Programming Languages',
    icon: 'code',
    items: ['Python', 'Java', 'SQL'],
  },
  {
    category: 'Backend & Architecture',
    icon: 'server',
    items: ['Distributed Systems', 'System Design', 'Event-Driven Architecture', 'REST APIs'],
  },
  {
    category: 'AI / Machine Learning',
    icon: 'brain',
    items: ['Generative AI (LLMs)', 'LangChain', 'LangGraph', 'RAG Systems', 'Semantic Search', 'Prompt Engineering', 'Agentic Reasoning', 'Model Evaluation'],
  },
  {
    category: 'Big Data & Streaming',
    icon: 'database',
    items: ['Apache Kafka', 'Apache Hadoop (HDFS)', 'Apache Hive', 'Apache Pinot', 'Trino', 'ClickHouse'],
  },
  {
    category: 'Data Engineering',
    icon: 'layers',
    items: ['ETL/ELT', 'Data Warehouse', 'Data LakeHouse', 'Medallion Architecture', 'Data Modeling', 'SQL Optimization', 'ORC Format'],
  },
  {
    category: 'Databases',
    icon: 'hard-drive',
    items: ['MySQL', 'PostgreSQL', 'Redis'],
  },
  {
    category: 'Cloud & Storage',
    icon: 'cloud',
    items: ['AWS S3'],
  },
  {
    category: 'DevOps & Platform',
    icon: 'terminal',
    items: ['Docker', 'Kubernetes', 'GitHub Actions', 'CI/CD', 'Ant', 'Gradle'],
  },
]

export const experiences = [
  {
    company: 'Zoho Corporation',
    role: 'Software Engineer',
    type: 'Full-time',
    period: 'July 2022 – Present',
    location: 'Chennai, India',
    current: true,
    project: 'BDaaS (Big Data as a Service)',
    highlights: [
      'Built a high-performance CDC/ingestion service transporting data from MySQL/PostgreSQL to a data lakehouse — capable of handling 5 TB/day.',
      'Developed low-latency processing pipelines using Kafka Consumer APIs and Kafka Streams capable of handling up to 5 billion rows per hour.',
      'Established and integrated Apache tools (Pinot, Kafka, HDFS, Hive, Trino) into the BDaaS platform.',
      'Built a data storage layer using Apache Hadoop following medallion architecture with ORC format for better compression and faster retrieval.',
      'Developed an admin service to onboard and manage internal Zoho services — successfully onboarded Zoho CRM and ManageEngine.',
      'Ensured secure and scalable deployment of AI capabilities within a global SaaS platform.',
      'Mentored junior engineers in distributed systems design and clean code principles, improving team delivery velocity through rigorous peer reviews.',
    ],
    technologies: ['Java', 'Kafka', 'Hadoop', 'Hive', 'Trino', 'Apache Pinot', 'MySQL', 'PostgreSQL', 'Docker', 'Kubernetes'],
  },
  {
    company: 'Zoho Corporation',
    role: 'Project Intern',
    type: 'Internship',
    period: 'January 2022 – June 2022',
    location: 'Chennai, India',
    current: false,
    project: 'WebAnalytics Platform',
    highlights: [
      'Built backend modules for the WebAnalytics platform to process and analyze user interaction data.',
      'Integrated an S3-like object store for log data storage and implemented log streaming into HDFS using ORC format.',
      'Conducted a POC on Apache Pinot for sub-second analytics over high-volume streaming data — achieving 2M+ events/hour in stress tests.',
      'Gained hands-on exposure to distributed systems, low-latency streaming, and real-time analytics infrastructure.',
    ],
    technologies: ['Java', 'Apache Pinot', 'HDFS', 'ORC', 'S3'],
  },
]

export const projects = [
  {
    name: 'Data Viewer with Trino',
    description:
      'Designed a unified data exploration tool that aggregates datasets from multiple internal platforms. Enables seamless ad hoc querying over near real-time data using Trino, reducing reporting overhead and accelerating data-driven decisions.',
    problem: 'Multiple internal platforms with siloed data made cross-platform analytics slow and cumbersome.',
    solution: 'Unified data exploration layer with Trino as the query engine for near real-time ad hoc queries.',
    technologies: ['Trino', 'Java', 'SQL', 'Data LakeHouse'],
    impact: 'Reduced reporting overhead and accelerated data-driven decision-making across teams.',
    type: 'Internal Tool',
  },
  {
    name: 'Multipart Upload System',
    description:
      'Developed a backend service that supports multi-part file uploads for large payloads. The system ensures chunk validation, ordering, and automatic compaction into final files, improving reliability and scalability of large file handling.',
    problem: 'Large file uploads were unreliable and did not scale — single-part uploads caused failures with big payloads.',
    solution: 'Backend service with chunk validation, ordering guarantees, and automatic compaction into final assembled files.',
    technologies: ['Java', 'Backend Services', 'File Systems'],
    impact: 'Improved reliability and scalability of large file handling in production.',
    type: 'Backend Service',
  },
]

export const education = [
  {
    degree: 'B.Tech. in Information Science and Engineering',
    institution: 'Kumaraguru College of Technology',
    location: 'Tamil Nadu, India',
    period: 'July 2018 – April 2022',
    gpa: '9.1 / 10',
  },
]

export const publications = [
  {
    title: 'Agriculture-Based Recommendation System with Image Processing',
    venue: 'IEEE',
    description:
      'System that recommends suitable crops and predicts plant diseases using live soil and weather data combined with image analysis.',
    link: '#', // TODO: Replace with actual IEEE link
  },
]

export const achievements = [
  {
    title: 'Chess Champion',
    description: 'Won the Zonal-level Chess Tournament.',
    icon: 'trophy',
  },
  {
    title: 'State Chess Ranking',
    description: 'Represented Tamil Nadu in State Chess Championships.',
    icon: 'award',
  },
]

export const stats = [
  { label: 'Years of Experience', value: '3+' },
  { label: 'Data Throughput', value: '5TB/day' },
  { label: 'Kafka Throughput', value: '5B rows/hr' },
  { label: 'GPA', value: '9.1/10' },
]
