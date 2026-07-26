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
    { name: "Python", category: "LANGUAGE", icon: "https://skillicons.dev/icons?i=py&theme=light" },
    { name: "SQL", category: "DATABASE", icon: "https://img.icons8.com/?size=100&id=bcdiBt8pFXfZ&format=png&color=000000" },
    { name: "PyTorch", category: "AI/ML", icon: "https://skillicons.dev/icons?i=pytorch&theme=light" },
    { name: "TensorFlow", category: "AI/ML", icon: "https://skillicons.dev/icons?i=tensorflow&theme=light" },
    { name: "OpenCV", category: "AI/ML", icon: "https://skillicons.dev/icons?i=opencv&theme=light" },
    { name: "Scikit-learn", category: "DATA SCIENCE", icon: "https://skillicons.dev/icons?i=sklearn&theme=light" },
    { name: "Pandas", category: "DATA SCIENCE", icon: "https://img.icons8.com/?size=100&id=9L16NypUzu38&format=png&color=000000" },
    { name: "NumPy", category: "DATA SCIENCE", icon: "https://img.icons8.com/?size=100&id=bcdiBt8pFXfZ&format=png&color=000000" },
    { name: "R", category: "LANGUAGE", icon: "https://skillicons.dev/icons?i=r&theme=light" },
    { name: "PostgreSQL", category: "DATABASE", icon: "https://skillicons.dev/icons?i=postgres&theme=light" },
    { name: "MongoDB", category: "DATABASE", icon: "https://skillicons.dev/icons?i=mongodb&theme=light" },
    { name: "MySQL", category: "DATABASE", icon: "https://skillicons.dev/icons?i=mysql&theme=light" },
    { name: "Apache Spark", category: "BIG DATA", icon: "https://img.icons8.com/?size=100&id=bcdiBt8pFXfZ&format=png&color=000000" },
    { name: "Apache Kafka", category: "STREAMING", icon: "https://img.icons8.com/?size=100&id=bcdiBt8pFXfZ&format=png&color=000000" },
    { name: "Docker", category: "DEVOPS", icon: "https://skillicons.dev/icons?i=docker&theme=light" },
    { name: "AWS", category: "CLOUD", icon: "https://skillicons.dev/icons?i=aws&theme=light" },
    { name: "GCP BigQuery", category: "CLOUD", icon: "https://skillicons.dev/icons?i=gcp&theme=light" },
    { name: "GitHub", category: "TOOLS", icon: "https://skillicons.dev/icons?i=github&theme=light" },
    { name: "Streamlit", category: "DATA VIZ", icon: "https://img.icons8.com/?size=100&id=w9gsKSM38X2h&format=png&color=000000" },
    { name: "Power BI", category: "DATA VIZ", icon: "https://img.icons8.com/?size=100&id=bcdiBt8pFXfZ&format=png&color=000000" },
    { name: "Tableau", category: "DATA VIZ", icon: "https://img.icons8.com/?size=100&id=bcdiBt8pFXfZ&format=png&color=000000" },
    { name: "FastAPI", category: "BACKEND", icon: "https://skillicons.dev/icons?i=fastapi&theme=light" },
    { name: "Jupyter", category: "TOOLS", icon: "https://img.icons8.com/fluency/48/jupyter.png" },
    { name: "DBeaver", category: "DATABASE", icon: "https://img.icons8.com/?size=100&id=kjaF4LlvyR6g&format=png&color=000000" },
  ] as TechStackItem[],

  projects: [
    {
      id: "dumbell-detection-ai",
      title: "Dumbbell AI",
      subtitle: "Computer Vision & ML Pose Tracking",
      description: "Deep learning computer vision system utilizing OpenCV to track dumbbell exercise form, count repetitions in real-time, and calculate workout metrics.",
      category: "SIDE PROJECTS",
      tags: ["OpenCV", "Python", "Machine Learning", "PyTorch"],
      githubUrl: "https://github.com/surajg2/dumbell_detection",
      liveUrl: "https://github.com/surajg2/dumbell_detection",
      image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1000&q=80",
      date: "2024",
      highlights: ["Real-Time Rep Counting", "OpenCV Pose Tracking", "Custom ML Metrics"]
    },
    {
      id: "indias-medicine-bank",
      title: "India's Medicine Bank",
      subtitle: "Healthcare Supply & Inventory Platform",
      description: "Data-driven healthcare distribution platform built with Python Flask & SQLite to track medicine donations, analyze expiry timelines, and allocate medical resources.",
      category: "SIDE PROJECTS",
      tags: ["Python", "Flask", "SQLite", "Render Cloud"],
      githubUrl: "https://github.com/surajg2/IMB-Indias-Medicine-Bank-",
      liveUrl: "https://github.com/surajg2/IMB-Indias-Medicine-Bank-",
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1000&q=80",
      date: "2024",
      highlights: ["Automated Expiry Tracking", "SQLite Database", "Cloud Deployment"]
    },
    {
      id: "ibm-data-science-analytics",
      title: "IBM Data Science",
      subtitle: "Predictive Analytics & SQL Warehousing",
      description: "Comprehensive data analysis suite containing exploratory data analysis (EDA), SQL data warehousing, predictive machine learning models, and visualization notebooks.",
      category: "SIDE PROJECTS",
      tags: ["Python", "SQL", "Scikit-Learn", "EDA"],
      githubUrl: "https://github.com/surajg2/IBM",
      liveUrl: "https://github.com/surajg2/IBM",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
      date: "2024",
      highlights: ["Exploratory Data Analysis", "ML Model Evaluation", "SQL Warehousing"]
    },
    {
      id: "devlog-dumbell-ai",
      title: "Dumbbell AI Devlog",
      subtitle: "OpenCV & Pose Keypoint Engineering",
      description: "Engineering computer vision pipelines, custom ML pose keypoints, real-time video frame processing, and rep count algorithms.",
      category: "DEVLOGS & MY STORY",
      tags: ["Devlog", "OpenCV", "Python"],
      githubUrl: "https://github.com/surajg2/dumbell_detection",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=80",
      date: "Nov 2024",
      highlights: ["OpenCV Frame Processing", "Custom ML Weight Tracking"]
    },
    {
      id: "devlog-medicine-bank-architecture",
      title: "Medicine Bank Devlog",
      subtitle: "Database Schemas & Expiry Analytics",
      description: "Designing relational SQLite schemas for medicine inventory tracking, automated stock aggregation, and deploying Flask apps on Render.",
      category: "DEVLOGS & MY STORY",
      tags: ["Devlog", "Python", "SQLite"],
      githubUrl: "https://github.com/surajg2/IMB-Indias-Medicine-Bank-",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1000&q=80",
      date: "Oct 2024",
      highlights: ["Schema Optimization", "Expiry Analytics"]
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
