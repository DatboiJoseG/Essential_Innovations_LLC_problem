import { useState } from "react";
import "./LanguageListStyle.css"; // Import the CSS file

const LanguageSelector = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  return (
    <div className="language-container">
      <button 
        className={`language-button ${selectedLanguage === "en" ? "active" : ""}`} 
        onClick={() => setSelectedLanguage("en")}
      >
        English
      </button>
      <button 
        className={`language-button ${selectedLanguage === "es" ? "active" : ""}`} 
        onClick={() => setSelectedLanguage("es")}
      >
        Español
      </button>
      <button 
        className={`language-button ${selectedLanguage === "fr" ? "active" : ""}`} 
        onClick={() => setSelectedLanguage("fr")}
      >
        Français
      </button>
      <button 
        className={`language-button ${selectedLanguage === "ar" ? "active" : ""}`} 
        onClick={() => setSelectedLanguage("ar")}
      >
        العربية
      </button>
    </div>
  );
};

export default LanguageSelector;
