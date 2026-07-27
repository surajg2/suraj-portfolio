import React from 'react';
import { X, Printer, Download, ExternalLink } from 'lucide-react';
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
    <div className="fixed inset-0 z-[4000] flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl max-h-[92vh] bg-stone-900 text-black rounded-3xl shadow-2xl border border-white/10 overflow-hidden flex flex-col">
        
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black/90 text-white shrink-0">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
            <h3 className="text-xs sm:text-sm font-extrabold tracking-[0.2em] text-white uppercase font-mono">
              OFFICIAL RESUME DOCUMENT • SURAJ GUPTA
            </h3>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black text-xs font-extrabold tracking-wider uppercase hover:bg-amber-400 transition-all shadow-sm"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>PRINT / SAVE PDF</span>
            </button>

            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white hover:text-black transition-all"
              aria-label="Close Resume"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Authentic PDF Sheet Document */}
        <div className="overflow-y-auto p-4 sm:p-8 bg-neutral-800 flex justify-center">
          
          <div className="w-full max-w-3xl bg-white text-[#111111] p-6 sm:p-12 shadow-2xl font-serif text-[0.82rem] leading-snug border border-neutral-300">
            
            {/* Header Title Section */}
            <div className="text-center pb-3">
              <h1 className="text-2xl sm:text-3xl font-black tracking-wide text-black uppercase font-sans mb-1">
                SURAJ GUPTA
              </h1>
              <p className="text-xs font-semibold text-neutral-800 font-sans mb-1.5">
                Data Science | Machine Learning | Python Developer | Data Analytics | Generative AI
              </p>
              <div className="flex items-center justify-center gap-3 text-xs font-sans text-neutral-700">
                <span>India</span>
                <span>|</span>
                <a href={profile.website || "https://surajg2.vercel.app/"} target="_blank" rel="noreferrer" className="text-blue-700 underline font-medium">Portfolio</a>
                <span>|</span>
                <a href={profile.github} target="_blank" rel="noreferrer" className="text-blue-700 underline font-medium">GitHub</a>
                <span>|</span>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-blue-700 underline font-medium">LinkedIn</a>
              </div>
            </div>

            <hr className="border-t border-black mb-4" />

            {/* Professional Summary */}
            <div className="mb-4">
              <h2 className="text-xs font-bold uppercase tracking-wider text-black border-b border-black pb-0.5 mb-1.5 font-sans">
                PROFESSIONAL SUMMARY
              </h2>
              <p className="text-neutral-800 text-[0.8rem] leading-normal text-justify">
                Data Science enthusiast with a strong foundation in machine learning, data analytics, and software development. Proficient in Python, SQL, Pandas, NumPy, and Scikit-learn, with experience developing end- to-end AI-powered applications and interactive dashboards. Adept at transforming complex data into meaningful insights through analytical thinking and data-driven decision-making.
              </p>
            </div>

            {/* Technical Skills */}
            <div className="mb-4">
              <h2 className="text-xs font-bold uppercase tracking-wider text-black border-b border-black pb-0.5 mb-1.5 font-sans">
                TECHNICAL SKILLS
              </h2>
              <ul className="space-y-0.5 text-neutral-900 text-[0.78rem]">
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
            <div className="mb-4">
              <h2 className="text-xs font-bold uppercase tracking-wider text-black border-b border-black pb-0.5 mb-2 font-sans">
                PROJECTS
              </h2>

              <div className="space-y-3 text-[0.78rem]">
                <div>
                  <div className="flex items-baseline justify-between font-sans">
                    <span className="font-bold text-black">AI Portfolio Website</span>
                    <span className="italic text-neutral-700 text-[0.72rem]">React, TypeScript, GitHub API, GitHub Pages, REST APIs</span>
                  </div>
                  <ul className="list-disc list-inside space-y-0.5 text-neutral-800 pl-1 mt-0.5">
                    <li>Designed and developed a modern portfolio website using React and TypeScript.</li>
                    <li>Integrated the GitHub API to automatically display repositories, keeping project listings up to date without manual edits.</li>
                    <li>Implemented an admin dashboard enabling portfolio content updates through GitHub using Personal Access Tokens.</li>
                    <li>Configured GitHub Pages deployment to automatically publish updates whenever repository content changes.</li>
                  </ul>
                </div>

                <div>
                  <div className="flex items-baseline justify-between font-sans">
                    <span className="font-bold text-black">India’s Medicine Bank( I MB )</span>
                    <span className="italic text-neutral-700 text-[0.72rem]">HTML, CSS, JavaScript, Python, Django, SQLite, Git</span>
                  </div>
                  <ul className="list-disc list-inside space-y-0.5 text-neutral-800 pl-1 mt-0.5">
                    <li>Developed a Retrieval-Augmented Generation (RAG) application capable of answering product-related questions.</li>
                    <li>Converted product data into embeddings using Sentence Transformers for semantic search.</li>
                    <li>Stored and indexed embeddings in ChromaDB for efficient retrieval.</li>
                    <li>Retrieved relevant context using LangChain and generated responses locally using Ollama.</li>
                  </ul>
                </div>

                <div>
                  <div className="flex items-baseline justify-between font-sans">
                    <span className="font-bold text-black">AI Solar Advisor</span>
                    <span className="italic text-neutral-700 text-[0.72rem]">Python, Scikit-learn, XGBoost, SHAP, Streamlit, FastAPI, SQLite</span>
                  </div>
                  <ul className="list-disc list-inside space-y-0.5 text-neutral-800 pl-1 mt-0.5">
                    <li>Developed an end-to-end AI application to predict solar power generation using machine learning models.</li>
                    <li>Estimated electricity bill savings and recommended optimal solar panel sizes based on user inputs.</li>
                    <li>Integrated SHAP to provide explainable AI (XAI) insights for model predictions.</li>
                    <li>Built an interactive Streamlit dashboard and FastAPI backend for real-time predictions.</li>
                  </ul>
                </div>

                <div>
                  <div className="flex items-baseline justify-between font-sans">
                    <span className="font-bold text-black">Dumbell Detection System</span>
                    <span className="italic text-neutral-700 text-[0.72rem]">YOLO, OpenCV, Roboflow, Python</span>
                  </div>
                  <ul className="list-disc list-inside space-y-0.5 text-neutral-800 pl-1 mt-0.5">
                    <li>Developed a real-time object detection system using YOLO for identifying dumbbells.</li>
                    <li>Trained and evaluated the detection model using Roboflow datasets.</li>
                    <li>Applied OpenCV for image processing and video frame handling.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="mb-4">
              <h2 className="text-xs font-bold uppercase tracking-wider text-black border-b border-black pb-0.5 mb-1.5 font-sans">
                EDUCATION
              </h2>
              <div className="space-y-2 text-[0.78rem]">
                <div className="flex justify-between items-baseline">
                  <div>
                    <strong className="text-black font-sans">Bachelor of Engineering (Computer Science And Engineering (Data Science))</strong>
                    <p className="text-neutral-700 font-sans">St. John College of Engineering and Management</p>
                  </div>
                  <span className="font-sans font-medium text-neutral-800">2024 – 2028</span>
                </div>

                <div className="flex justify-between items-baseline pt-1">
                  <div>
                    <strong className="text-black font-sans">Higher Secondary (Class XII) – Science (PCM)</strong>
                    <p className="text-neutral-700 font-sans">H.D Save Jr College (SSE)</p>
                  </div>
                  <span className="font-sans font-medium text-neutral-800">2023 | 69%</span>
                </div>

                <div className="flex justify-between items-baseline pt-1">
                  <div>
                    <strong className="text-black font-sans">Secondary (Class X)</strong>
                    <p className="text-neutral-700 font-sans">Boisar Military School (SSE)</p>
                  </div>
                  <span className="font-sans font-medium text-neutral-800">2021 | 88.20%</span>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-black border-b border-black pb-0.5 mb-1.5 font-sans">
                CERTIFICATIONS
              </h2>
              <ul className="list-disc list-inside space-y-0.5 text-neutral-800 text-[0.78rem]">
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
    </div>
  );
};
