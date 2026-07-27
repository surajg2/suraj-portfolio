import React from 'react';
import { X, Printer, ExternalLink } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const { profile } = PORTFOLIO_DATA;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-[5000] bg-[#0c0c0c] flex flex-col overflow-hidden animate-fadeIn">
      
      {/* Top Fixed Control Bar */}
      <div className="w-full flex items-center justify-between px-4 sm:px-8 py-4 border-b border-white/15 bg-black/95 text-white shrink-0 shadow-lg">
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
          <h3 className="text-xs sm:text-sm font-extrabold tracking-[0.2em] text-white uppercase font-mono">
            OFFICIAL RESUME • SURAJ GUPTA
          </h3>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black text-xs font-black tracking-wider uppercase hover:bg-amber-400 hover:scale-105 transition-all shadow-md"
          >
            <Printer className="w-4 h-4" />
            <span>PRINT / SAVE PDF</span>
          </button>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/15 border border-white/20 text-white flex items-center justify-center hover:bg-white hover:text-black transition-all"
            aria-label="Close Resume"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Full-Height Scrollable Paper Document Stage */}
      <div className="flex-1 overflow-y-auto p-3 sm:p-8 md:p-12 bg-neutral-900/90 flex justify-center items-start">
        
        {/* Authentic White Paper Sheet */}
        <div className="w-full max-w-4xl bg-white text-[#111111] p-6 sm:p-12 md:p-16 shadow-2xl rounded-2xl border border-neutral-300 font-serif text-[0.85rem] sm:text-[0.92rem] leading-relaxed my-2 sm:my-6">
          
          {/* Header Title Section */}
          <div className="text-center pb-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-wide text-black uppercase font-sans mb-1.5">
              SURAJ GUPTA
            </h1>
            <p className="text-xs sm:text-sm font-bold text-neutral-800 font-sans mb-2">
              Data Science | Machine Learning | Python Developer | Data Analytics | Generative AI
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs font-sans text-neutral-700">
              <span>India</span>
              <span>|</span>
              <a href={profile.website || "https://surajg2.vercel.app/"} target="_blank" rel="noreferrer" className="text-blue-700 underline font-semibold hover:text-blue-900">Portfolio</a>
              <span>|</span>
              <a href={profile.github} target="_blank" rel="noreferrer" className="text-blue-700 underline font-semibold hover:text-blue-900">GitHub</a>
              <span>|</span>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-blue-700 underline font-semibold hover:text-blue-900">LinkedIn</a>
            </div>
          </div>

          <hr className="border-t-2 border-black mb-6" />

          {/* Professional Summary */}
          <div className="mb-6">
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-black border-b border-black pb-1 mb-2 font-sans">
              PROFESSIONAL SUMMARY
            </h2>
            <p className="text-neutral-800 leading-relaxed text-justify font-sans text-xs sm:text-sm">
              Data Science enthusiast with a strong foundation in machine learning, data analytics, and software development. Proficient in Python, SQL, Pandas, NumPy, and Scikit-learn, with experience developing end-to-end AI-powered applications and interactive dashboards. Adept at transforming complex data into meaningful insights through analytical thinking and data-driven decision-making.
            </p>
          </div>

          {/* Technical Skills */}
          <div className="mb-6">
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-black border-b border-black pb-1 mb-2.5 font-sans">
              TECHNICAL SKILLS
            </h2>
            <ul className="space-y-1 text-neutral-900 font-sans text-xs sm:text-sm">
              <li><strong>Programming Languages:</strong> Python, SQL, Java, Javascript, TypeScript, HTML5, CSS3</li>
              <li><strong>Data Analysis &amp; Visualization:</strong> Pandas, NumPy, Matplotlib, Power BI, Microsoft Excel</li>
              <li><strong>Frameworks &amp; Libraries:</strong> Django, React, LangChain, Streamlit, Scikit-learn, OpenCV, YOLO, Sentence Transformers</li>
              <li><strong>Machine Learning:</strong> Scikit-learn, XGBoost, Model Evaluation, Feature Engineering, Data Preprocessing</li>
              <li><strong>AI &amp; Generative AI:</strong> Retrieval-Augmented Generation (RAG), Ollama, Semantic Search, Embedding Models</li>
              <li><strong>Web &amp; Backend:</strong> FastAPI, Streamlit, HTML, CSS</li>
              <li><strong>Databases:</strong> MySQL, SQLite, PostgreSQL</li>
              <li><strong>APIs &amp; Web Technologies:</strong> REST APIs, GitHub API</li>
              <li><strong>Developer Tools:</strong> Git, GitHub, Jupyter Notebook, Visual Studio Code</li>
              <li><strong>Core Concepts:</strong> Data Structures &amp; Algorithms, Statistics, Exploratory Data Analysis (EDA), Object-Oriented Programming (OOP)</li>
            </ul>
          </div>

          {/* Projects */}
          <div className="mb-6">
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-black border-b border-black pb-1 mb-3 font-sans">
              PROJECTS
            </h2>

            <div className="space-y-4 font-sans text-xs sm:text-sm">
              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-1">
                  <span className="font-bold text-black text-sm sm:text-base">AI Portfolio Website</span>
                  <span className="italic text-neutral-700 font-mono text-xs">React, TypeScript, GitHub API, GitHub Pages, REST APIs</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-neutral-800 pl-1 mt-1">
                  <li>Designed and developed a modern portfolio website using React and TypeScript.</li>
                  <li>Integrated the GitHub API to automatically display repositories, keeping project listings up to date without manual edits.</li>
                  <li>Implemented an admin dashboard enabling portfolio content updates through GitHub using Personal Access Tokens.</li>
                  <li>Configured GitHub Pages deployment to automatically publish updates whenever repository content changes.</li>
                </ul>
              </div>

              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-1">
                  <span className="font-bold text-black text-sm sm:text-base">India’s Medicine Bank( I MB )</span>
                  <span className="italic text-neutral-700 font-mono text-xs">HTML, CSS, JavaScript, Python, Django, SQLite, Git</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-neutral-800 pl-1 mt-1">
                  <li>Developed a Retrieval-Augmented Generation (RAG) application capable of answering product-related questions.</li>
                  <li>Converted product data into embeddings using Sentence Transformers for semantic search.</li>
                  <li>Stored and indexed embeddings in ChromaDB for efficient retrieval.</li>
                  <li>Retrieved relevant context using LangChain and generated responses locally using Ollama.</li>
                </ul>
              </div>

              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-1">
                  <span className="font-bold text-black text-sm sm:text-base">AI Solar Advisor</span>
                  <span className="italic text-neutral-700 font-mono text-xs">Python, Scikit-learn, XGBoost, SHAP, Streamlit, FastAPI, SQLite</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-neutral-800 pl-1 mt-1">
                  <li>Developed an end-to-end AI application to predict solar power generation using machine learning models.</li>
                  <li>Estimated electricity bill savings and recommended optimal solar panel sizes based on user inputs.</li>
                  <li>Integrated SHAP to provide explainable AI (XAI) insights for model predictions.</li>
                  <li>Built an interactive Streamlit dashboard and FastAPI backend for real-time predictions.</li>
                </ul>
              </div>

              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-1">
                  <span className="font-bold text-black text-sm sm:text-base">Dumbell Detection System</span>
                  <span className="italic text-neutral-700 font-mono text-xs">YOLO, OpenCV, Roboflow, Python</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-neutral-800 pl-1 mt-1">
                  <li>Developed a real-time object detection system using YOLO for identifying dumbbells.</li>
                  <li>Trained and evaluated the detection model using Roboflow datasets.</li>
                  <li>Applied OpenCV for image processing and video frame handling.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="mb-6">
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-black border-b border-black pb-1 mb-2 font-sans">
              EDUCATION
            </h2>
            <div className="space-y-3 font-sans text-xs sm:text-sm">
              <div className="flex flex-wrap justify-between items-baseline gap-1">
                <div>
                  <strong className="text-black font-extrabold text-sm sm:text-base">Bachelor of Engineering (Computer Science And Engineering (Data Science))</strong>
                  <p className="text-neutral-700 font-medium">St. John College of Engineering and Management</p>
                </div>
                <span className="font-mono font-bold text-black">2024 – 2028</span>
              </div>

              <div className="flex flex-wrap justify-between items-baseline gap-1 pt-1">
                <div>
                  <strong className="text-black font-bold">Higher Secondary (Class XII) – Science (PCM)</strong>
                  <p className="text-neutral-700">H.D Save Jr College (SSE)</p>
                </div>
                <span className="font-mono font-bold text-black">2023 | 69%</span>
              </div>

              <div className="flex flex-wrap justify-between items-baseline gap-1 pt-1">
                <div>
                  <strong className="text-black font-bold">Secondary (Class X)</strong>
                  <p className="text-neutral-700">Boisar Military School (SSE)</p>
                </div>
                <span className="font-mono font-bold text-black">2021 | 88.20%</span>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-black border-b border-black pb-1 mb-2 font-sans">
              CERTIFICATIONS
            </h2>
            <ul className="list-disc list-inside space-y-1 text-neutral-800 font-sans text-xs sm:text-sm">
              <li>Oracle Cloud Infrastructure 2023 Foundations Associate (1Z0-1085-23) certification</li>
              <li>Google AI Essentials – Google</li>
              <li>IBM SkillsBuild Certification in Data Fundamental</li>
              <li>Data Science with Python – SWAYAM</li>
              <li>YOLOvX Internship Certification – WISERLI</li>
            </ul>
          </div>

        </div>

      </div>

    </div>
  );
};
