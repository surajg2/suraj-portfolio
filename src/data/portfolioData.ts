export interface TechStackItem {
  name: string;
  category: 'Language' | 'AI/ML' | 'Frontend' | 'Backend' | 'Database' | 'Data Science' | 'DevOps' | 'Tools' | 'Design';
  icon: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: 'SIDE PROJECTS' | 'DEVLOGS & MY STORY';
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  image: string;
  date: string;
  highlights?: string[];
}

export interface CodingProfile {
  platform: string;
  username: string;
  url: string;
  icon: string;
  stats: string;
  color: string;
}

export const PORTFOLIO_DATA = {
  profile: {
    name: "Suraj Gupta",
    role: "Data Analyst & Data Engineer",
    location: "Mumbai, India",
    expertise: ["Data Analytics", "Machine Learning (ML)", "Data Engineering", "SQL & Data Warehousing", "Python Analytics"],
    learning: "Cloud Architecture (AWS/GCP) & Advanced Data Visualization",
    github: "https://github.com/surajg2",
    linkedin: "https://www.linkedin.com/in/surajgupta/",
    email: "surajgupta2006@gmail.com",
    phone: "+91 9876543210",
  },
  education: [
    {
      period: "2024 - 2028",
      degree: "B.Tech in Computer Science (Data Science)",
      field: "3rd Year Student • CSE Data Science Specialization",
      institution: "St. John College of Engineering and Management",
    },
    {
      period: "2020 - 2022",
      degree: "Higher Secondary Certificate (HSC)",
      field: "Science Stream",
      institution: "Sau Sitabai Ramkrishna Karandikar College",
    },
  ],
  coreStack: [
    { name: "SQL", category: "Data Science", icon: "https://img.icons8.com/?size=100&id=bcdiBt8pFXfZ&format=png&color=000000" },
    { name: "Python", category: "Language", icon: "https://skillicons.dev/icons?i=py&theme=light" },
    { name: "Pandas", category: "Data Science", icon: "https://img.icons8.com/?size=100&id=9L16NypUzu38&format=png&color=000000" },
    { name: "NumPy", category: "Data Science", icon: "https://img.icons8.com/?size=100&id=bcdiBt8pFXfZ&format=png&color=000000" },
    { name: "R", category: "Data Science", icon: "https://skillicons.dev/icons?i=r&theme=light" },
    { name: "Scikit-learn", category: "AI/ML", icon: "https://skillicons.dev/icons?i=sklearn&theme=light" },
    { name: "PyTorch", category: "AI/ML", icon: "https://skillicons.dev/icons?i=pytorch&theme=light" },
    { name: "TensorFlow", category: "AI/ML", icon: "https://skillicons.dev/icons?i=tensorflow&theme=light" },
    { name: "OpenCV", category: "AI/ML", icon: "https://skillicons.dev/icons?i=opencv&theme=light" },
    { name: "PostgreSQL", category: "Database", icon: "https://skillicons.dev/icons?i=postgres&theme=light" },
    { name: "MongoDB", category: "Database", icon: "https://skillicons.dev/icons?i=mongodb&theme=light" },
    { name: "Apache Spark", category: "Database", icon: "https://img.icons8.com/?size=100&id=bcdiBt8pFXfZ&format=png&color=000000" },
    { name: "Apache Kafka", category: "Database", icon: "https://img.icons8.com/?size=100&id=bcdiBt8pFXfZ&format=png&color=000000" },
    { name: "MySQL", category: "Database", icon: "https://skillicons.dev/icons?i=mysql&theme=light" },
    { name: "AWS", category: "DevOps", icon: "https://skillicons.dev/icons?i=aws&theme=light" },
    { name: "GCP BigQuery", category: "DevOps", icon: "https://skillicons.dev/icons?i=gcp&theme=light" },
    { name: "Docker", category: "DevOps", icon: "https://skillicons.dev/icons?i=docker&theme=light" },
    { name: "Git & GitHub", category: "Tools", icon: "https://skillicons.dev/icons?i=git&theme=light" },
    { name: "Streamlit", category: "Frontend", icon: "https://img.icons8.com/?size=100&id=w9gsKSM38X2h&format=png&color=000000" },
    { name: "Power BI", category: "Frontend", icon: "https://img.icons8.com/?size=100&id=bcdiBt8pFXfZ&format=png&color=000000" },
    { name: "Tableau", category: "Frontend", icon: "https://img.icons8.com/?size=100&id=bcdiBt8pFXfZ&format=png&color=000000" },
    { name: "FastAPI", category: "Backend", icon: "https://skillicons.dev/icons?i=fastapi&theme=light" },
    { name: "Jupyter", category: "Tools", icon: "https://img.icons8.com/fluency/48/jupyter.png" },
    { name: "DBeaver", category: "Database", icon: "https://img.icons8.com/?size=100&id=kjaF4LlvyR6g&format=png&color=000000" },
  ] as TechStackItem[],

  projects: [
    {
      id: "data-churn-analytics",
      title: "Enterprise Customer Churn & BI Analytics Engine",
      subtitle: "Data Analytics & Predictive Insights",
      description: "End-to-end data analytics platform utilizing SQL, Python, and PowerBI dashboards to analyze customer behavior patterns, predict churn risk, and deliver executive business insights.",
      category: "SIDE PROJECTS",
      tags: ["SQL", "Python", "Pandas", "PowerBI", "Data Analytics"],
      githubUrl: "https://github.com/surajgupta/churn-analytics",
      liveUrl: "https://churn-analytics-demo.dev",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
      date: "2024",
      highlights: ["95% Analytical Accuracy", "Automated SQL Data Processing", "Interactive Executive Dashboards"]
    },
    {
      id: "data-streaming-pipeline",
      title: "Real-Time Streaming ETL & Data Pipeline",
      subtitle: "Data Engineering & Stream Processing",
      description: "High-throughput data engineering pipeline using Apache Kafka, PostgreSQL, and PySpark for ingesting, transforming, and storing multi-source streaming telemetry.",
      category: "SIDE PROJECTS",
      tags: ["Data Engineering", "Python", "PostgreSQL", "Kafka", "Docker"],
      githubUrl: "https://github.com/surajgupta/streaming-etl-pipeline",
      liveUrl: "https://etl-pipeline-demo.dev",
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1000&q=80",
      date: "2024",
      highlights: ["Real-time Stream Transformation", "Zero Data Loss Guarantee", "Containerized Data Infrastructure"]
    },
    {
      id: "data-quant-analytics",
      title: "Financial Time-Series & Market Data Analytics",
      subtitle: "Data Engineering & Quantitative Analysis",
      description: "Automated market data ingestion pipeline and quantitative analysis suite tracking financial indicators, SQL data warehouse aggregations, and interactive Streamlit reports.",
      category: "SIDE PROJECTS",
      tags: ["Data Analyst", "Python", "SQL", "Streamlit", "Pandas"],
      githubUrl: "https://github.com/surajgupta/market-data-analytics",
      liveUrl: "https://market-analytics.dev",
      image: "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&w=1000&q=80",
      date: "2024",
      highlights: ["Automated Daily Data ETL", "SQL Data Warehouse Integration", "Real-Time Analytics Dashboard"]
    },
    {
      id: "devlog-data-engineering",
      title: "Architecting End-to-End Scalable Data Pipelines",
      subtitle: "Devlog #1 • Data Engineering & Warehousing",
      description: "Detailed breakdown of building scalable data engineering workflows from raw data ingestion and SQL transformations to automated pipeline scheduling and warehousing.",
      category: "DEVLOGS & MY STORY",
      tags: ["Devlog", "Data Engineering", "SQL", "ETL"],
      githubUrl: "https://github.com/surajgupta/data-engineering-guide",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=80",
      date: "Nov 2024",
      highlights: ["ETL Pipeline Optimization", "SQL Query Tuning", "Automated Pipeline Health Checks"]
    },
    {
      id: "devlog-data-analytics-journey",
      title: "My Data Analytics Journey & Insights Framework",
      subtitle: "Devlog #2 • Data Analytics & Storytelling",
      description: "Personal insights on transforming raw datasets into actionable business stories, mastering SQL analytics, continuous problem solving, and building impactful data projects.",
      category: "DEVLOGS & MY STORY",
      tags: ["Personal Story", "Data Analyst", "Career"],
      githubUrl: "https://github.com/surajgupta/data-analytics-roadmap",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1000&q=80",
      date: "Oct 2024",
      highlights: ["Data Storytelling Best Practices", "Top 5 Data Analyst Tools", "Project Case Studies"]
    }
  ] as ProjectItem[],

  codingProfiles: [
    {
      platform: "LeetCode",
      username: "surajgupta",
      url: "https://leetcode.com/u/surajgupta/",
      icon: "https://img.icons8.com/?size=100&id=w9gsKSM38X2h&format=png&color=000000",
      stats: "350+ Problems Solved",
      color: "#FFA116"
    },
    {
      platform: "CodeChef",
      username: "surajgupta",
      url: "https://www.codechef.com/users/surajgupta",
      icon: "https://img.icons8.com/color/48/codechef.png",
      stats: "3★ Rated Programmer",
      color: "#5B4638"
    },
    {
      platform: "Kaggle",
      username: "surajgupta",
      url: "https://www.kaggle.com/surajgupta",
      icon: "https://img.icons8.com/?size=100&id=bcdiBt8pFXfZ&format=png&color=000000",
      stats: "Datasets & Notebook Contributor",
      color: "#20BEFF"
    },
    {
      platform: "GeeksforGeeks",
      username: "surajgupta",
      url: "https://www.geeksforgeeks.org/profile/surajgupta",
      icon: "https://img.icons8.com/?size=100&id=AbQBhN9v62Ob&format=png&color=000000",
      stats: "Overall Score: 850+",
      color: "#2F9E44"
    },
    {
      platform: "HackerRank",
      username: "surajgupta",
      url: "https://www.hackerrank.com/surajgupta",
      icon: "https://img.icons8.com/?size=100&id=QrYhwpUzAcoy&format=png&color=000000",
      stats: "5★ Problem Solving",
      color: "#2EC4B6"
    }
  ] as CodingProfile[]
};
