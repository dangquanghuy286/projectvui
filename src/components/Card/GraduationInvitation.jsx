import { useState, useEffect } from "react";
import SparklesBackground from "./SparklesBackground";
import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";
import ContactInfo from "./ContactInfo";

export default function GraduationInvitation() {
  const [isVisible, setIsVisible] = useState(false);
  const [sparkleAnimation, setSparkleAnimation] = useState(false);
  const [showMap, setShowMap] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setSparkleAnimation((prev) => !prev);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const toggleMap = () => {
    setShowMap((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-800 flex items-center justify-center p-2 sm:p-6 md:p-8 relative overflow-hidden">
      <SparklesBackground sparkleAnimation={sparkleAnimation} />
      <div
        className={`w-full max-w-[98%] sm:max-w-3xl transition-all duration-1000 transform ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="bg-white rounded-xl sm:rounded-3xl shadow-2xl overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 animate-pulse opacity-20 rounded-xl sm:rounded-3xl"></div>
          <Header />
          <MainContent showMap={showMap} toggleMap={toggleMap} />
          <Footer />
        </div>
        <ContactInfo />
      </div>
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        @media (max-width: 640px) {
          .text-sm { font-size: 0.875rem; line-height: 1.4; }
          .text-base { font-size: 1rem; line-height: 1.5; }
          .text-lg { font-size: 1.125rem; line-height: 1.4; }
          .text-xl { font-size: 1.25rem; line-height: 1.3; }
          .text-2xl { font-size: 1.5rem; line-height: 1.3; }
          .leading-relaxed { line-height: 1.4; }
          .hover\\:scale-105:hover { transform: scale(1); }
          .group:hover .group-hover\\:opacity-100 { opacity: 0; }
          .group:hover .group-hover\\:translate-y-0 { transform: translateY(4px); }
          .group:hover .group-hover\\:pointer-events-auto { pointer-events: none; }
        }
        @media (max-width: 375px) {
          .text-sm { font-size: 0.8rem; }
          .text-base { font-size: 0.9rem; }
          .text-lg { font-size: 1rem; }
          .text-xl { font-size: 1.125rem; }
          .text-2xl { font-size: 1.25rem; }
        }
      `}</style>
    </div>
  );
}
