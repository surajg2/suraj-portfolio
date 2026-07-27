import React, { useState } from 'react';
import { X, Copy, CheckCircle2, Briefcase, Code2, GraduationCap, Award, Mail, Phone, MapPin, Download } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const { profile, education } = PORTFOLIO_DATA;

  const resumeSkills = {
    programming: ["Python", "SQL", "Java", "JavaScript", "TypeScript", "HTML5", "CSS3"],
    dataViz: ["Pandas", "NumPy", "Matplotlib", "Power BI", "Microsoft Excel"],
    frameworks: ["Django", "React", "LangChain", "Streamlit", "Scikit-learn", "OpenCV", "YOLO", "Sentence Transformers"],
    machineLearning: ["Scikit-learn", "XGBoost", "Model Evaluation", "Feature Engineering", "Data Preprocessing"],
    generativeAI: ["Retrieval-Augmented Generation (RAG)", "Ollama", "Semantic Search", "Embedding Models"],
    backend: ["FastAPI", "Streamlit", "HTML", "CSS"],
    databases: ["MySQL", "SQLite", "PostgreSQL"],
    tools: ["Git", "GitHub", "Jupyter Notebook", "Visual Studio Code"],
    coreConcepts: ["Data Structures & Algorithms", "Statistics", "Exploratory Data Analysis (EDA)", "OOP"]
  };

  const resumeProjects = [
    {
      title: "AI Portfolio Website",
      stack: "React, TypeScript, GitHub API, GitHub Pages, REST APIs",
      bullets: [
        "Designed and developed a modern portfolio website using React and TypeScript.",
        "Integrated the GitHub API to automatically display repositories, keeping project listings up to date without manual edits.",
        "Implemented an admin dashboard enabling portfolio content updates through GitHub using Personal Access Tokens.",
        "Configured GitHub Pages deployment to automatically publish updates whenever repository content changes."
      ]
    },
    {
      title: "India’s Medicine Bank (IMB)",
      stack: "HTML, CSS, JavaScript, Python, Django, SQLite, Git",
      bullets: [
        "Developed a Retrieval-Augmented Generation (RAG) application capable of answering product-related questions.",
        "Converted product data into embeddings using Sentence Transformers for semantic search.",
        "Stored and indexed embeddings in ChromaDB for efficient retrieval.",
        "Retrieved relevant context using LangChain and generated responses locally using Ollama."
      ]
    },
    {
      title: "AI Solar Advisor",
      stack: "Python, Scikit-learn, XGBoost, SHAP, Streamlit, FastAPI, SQLite",
      bullets: [
        "Developed an end-to-end AI application to predict solar power generation using machine learning models.",
        "Estimated electricity bill savings and recommended optimal solar panel sizes based on user inputs.",
        "Integrated SHAP to provide explainable AI (XAI) insights for model predictions.",
        "Built an interactive Streamlit dashboard and FastAPI backend for real-time predictions."
      ]
    },
    {
      title: "Dumbbell Detection System",
      stack: "YOLO, OpenCV, Roboflow, Python",
      bullets: [
        "Developed a real-time object detection system using YOLO for identifying dumbbells.",
        "Trained and evaluated the detection model using Roboflow datasets.",
        "Applied OpenCV for image processing and video frame handling."
      ]
    }
  ];

  const resumeCertifications = [
    "Oracle Cloud Infrastructure 2023 Foundations Associate (1Z0-1085-23) certification",
    "Google AI Essentials – Google",
    "IBM SkillsBuild Certification in Data Fundamental",
    "Data Science with Python – SWAYAM",
    "YOLOvX Internship Certification – WISERLI"
  ];

  const handleCopyResumeText = () => {
    const text = `
SURAJ GUPTA
Data Science | Machine Learning | Python Developer | Data Analytics | Generative AI
Location: India | Email: ${profile.email} | Phone: ${profile.phone}
GitHub: ${profile.github} | LinkedIn: ${profile.linkedin}

PROFESSIONAL SUMMARY:
Data Science enthusiast with a strong foundation in machine learning, data analytics, and software development. Proficient in Python, SQL, Pandas, NumPy, and Scikit-learn, with experience developing end-to-end AI-powered applications and interactive dashboards. Adept at transforming complex data into meaningful insights through analytical thinking and data-driven decision-making.

TECHNICAL SKILLS:
- Programming Languages: ${resumeSkills.programming.join(', ')}
- Data Analysis & Visualization: ${resumeSkills.dataViz.join(', ')}
- Frameworks & Libraries: ${resumeSkills.frameworks.join(', ')}
- Machine Learning: ${resumeSkills.machineLearning.join(', ')}
- AI & Generative AI: ${resumeSkills.generativeAI.join(', ')}
- Databases: ${resumeSkills.databases.join(', ')}
- Tools: ${resumeSkills.tools.join(', ')}

PROJECTS:
${resumeProjects.map(p => `${p.title} | ${p.stack}\n` + p.bullets.map(b => `• ${b}`).join('\n')).join('\n\n')}

EDUCATION:
- Bachelor of Engineering (Computer Science And Engineering (Data Science)) | St. John College of Engineering and Management (2024 – 2028)
- Higher Secondary (Class XII) – Science (PCM) | H.D Save Jr College (SSE) (2023 | 69%)
- Secondary (Class X) | Boisar Military School (SSE) (2021 | 88.20%)

CERTIFICATIONS:
${resumeCertifications.map(c => `• ${c}`).join('\n')}
    `.trim();

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-[4000] flex items-center justify-center p-3 sm:p-6 md:p-8 bg-black/80 backdrop-blur-md animate-fadeIn">
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#eae8e3] text-neutral-900 rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl border border-black/10 overflow-hidden flex flex-col">
        
        {/* Header Controller */}
        <div className="flex items-center justify-between px-6 sm:px-10 py-5 border-b border-black/10 bg-white/70 backdrop-blur-sm shrink-0">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-black animate-pulse" />
            <h3 className="text-xs sm:text-sm font-extrabold tracking-[0.25em] text-[#111111] uppercase font-sans">
              OFFICIAL RESUME • SURAJ GUPTA
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyResumeText}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-black text-white text-[0.75rem] font-bold tracking-wider uppercase hover:bg-neutral-800 transition-all shadow-sm"
            >
              {copied ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-amber-400" />}
              <span>{copied ? 'COPIED!' : 'COPY TEXT'}</span>
            </button>

            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-black/10 border border-black/10 text-black flex items-center justify-center hover:bg-black hover:text-white transition-all"
              aria-label="Close Resume"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Resume Document */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-8 font-sans">
          
          {/* Header Info */}
          <div className="text-center sm:text-left border-b border-black/10 pb-6">
            <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#0f0f0f] font-display">
              SURAJ GUPTA
            </h1>
            <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-amber-800 mt-1 font-mono">
              Data Science | Machine Learning | Python Developer | Data Analytics | Generative AI
            </p>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 mt-3 text-xs font-mono font-semibold text-neutral-700">
              <span>📍 India</span>
              <span>✉️ {profile.email}</span>
              <span>📞 {profile.phone}</span>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#0f0f0f] font-sans">
              <Briefcase className="w-4 h-4 text-amber-600" />
              <span>PROFESSIONAL SUMMARY</span>
            </div>
            <p className="text-xs sm:text-sm text-neutral-800 font-medium leading-relaxed bg-white/80 p-5 rounded-2xl border border-black/5">
              Data Science enthusiast with a strong foundation in machine learning, data analytics, and software development. Proficient in Python, SQL, Pandas, NumPy, and Scikit-learn, with experience developing end-to-end AI-powered applications and interactive dashboards. Adept at transforming complex data into meaningful insights through analytical thinking and data-driven decision-making.
            </p>
          </div>

          {/* Technical Skills */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#0f0f0f] font-sans">
              <Code2 className="w-4 h-4 text-amber-600" />
              <span>TECHNICAL SKILLS</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="bg-white/80 p-4 rounded-xl border border-black/5">
                <span className="font-bold text-black uppercase tracking-wider block mb-1 font-mono">Programming Languages</span>
                <span className="text-neutral-700 font-medium">{resumeSkills.programming.join(', ')}</span>
              </div>
              <div className="bg-white/80 p-4 rounded-xl border border-black/5">
                <span className="font-bold text-black uppercase tracking-wider block mb-1 font-mono">Data Analysis &amp; Viz</span>
                <span className="text-neutral-700 font-medium">{resumeSkills.dataViz.join(', ')}</span>
              </div>
              <div className="bg-white/80 p-4 rounded-xl border border-black/5">
                <span className="font-bold text-black uppercase tracking-wider block mb-1 font-mono">AI &amp; Generative AI</span>
                <span className="text-neutral-700 font-medium">{resumeSkills.generativeAI.join(', ')}</span>
              </div>
              <div className="bg-white/80 p-4 rounded-xl border border-black/5">
                <span className="font-bold text-black uppercase tracking-wider block mb-1 font-mono">Machine Learning</span>
                <span className="text-neutral-700 font-medium">{resumeSkills.machineLearning.join(', ')}</span>
              </div>
              <div className="bg-white/80 p-4 rounded-xl border border-black/5">
                <span className="font-bold text-black uppercase tracking-wider block mb-1 font-mono">Frameworks &amp; Libraries</span>
                <span className="text-neutral-700 font-medium">{resumeSkills.frameworks.join(', ')}</span>
              </div>
              <div className="bg-white/80 p-4 rounded-xl border border-black/5">
                <span className="font-bold text-black uppercase tracking-wider block mb-1 font-mono">Databases</span>
                <span className="text-neutral-700 font-medium">{resumeSkills.databases.join(', ')}</span>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#0f0f0f] font-sans">
              <Briefcase className="w-4 h-4 text-amber-600" />
              <span>PROJECTS</span>
            </div>

            <div className="space-y-3">
              {resumeProjects.map((p, idx) => (
                <div key={idx} className="bg-white/80 p-5 rounded-2xl border border-black/5 flex flex-col gap-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h4 className="text-sm font-black text-[#0f0f0f] uppercase">{p.title}</h4>
                    <span className="text-[0.65rem] font-mono font-bold text-amber-800">{p.stack}</span>
                  </div>
                  <ul className="list-disc list-inside text-xs text-neutral-700 space-y-1 font-medium">
                    {p.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#0f0f0f] font-sans">
              <GraduationCap className="w-4 h-4 text-amber-600" />
              <span>EDUCATION</span>
            </div>

            <div className="space-y-2">
              <div className="bg-white/80 p-4 rounded-xl border border-black/5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h4 className="text-sm font-extrabold text-[#0f0f0f] uppercase">Bachelor of Engineering (CSE - Data Science)</h4>
                  <p className="text-xs text-neutral-600 font-medium">St. John College of Engineering and Management</p>
                </div>
                <span className="text-xs font-mono font-bold text-amber-800">2024 – 2028</span>
              </div>

              <div className="bg-white/80 p-4 rounded-xl border border-black/5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h4 className="text-sm font-extrabold text-[#0f0f0f] uppercase">Higher Secondary (Class XII) – Science (PCM)</h4>
                  <p className="text-xs text-neutral-600 font-medium">H.D Save Jr College (SSE)</p>
                </div>
                <span className="text-xs font-mono font-bold text-amber-800">2023 | 69%</span>
              </div>

              <div className="bg-white/80 p-4 rounded-xl border border-black/5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h4 className="text-sm font-extrabold text-[#0f0f0f] uppercase">Secondary (Class X)</h4>
                  <p className="text-xs text-neutral-600 font-medium">Boisar Military School (SSE)</p>
                </div>
                <span className="text-xs font-mono font-bold text-amber-800">2021 | 88.20%</span>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-3 pb-4">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#0f0f0f] font-sans">
              <Award className="w-4 h-4 text-amber-600" />
              <span>CERTIFICATIONS</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {resumeCertifications.map((c, idx) => (
                <div key={idx} className="bg-white/80 p-3.5 rounded-xl border border-black/5 flex items-center justify-between">
                  <span className="font-bold text-neutral-800">{c}</span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 ml-2" />
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
