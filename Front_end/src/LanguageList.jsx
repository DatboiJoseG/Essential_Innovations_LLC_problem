import { useState } from 'react';

export default function LanguageList({ onLanguageChange }) {
  const [language, setLanguage] = useState('eng');

  const handleLanguageChange = (selectedLanguage) => {
    console.log(`Language changed to: ${selectedLanguage}`)
    setLanguage(selectedLanguage);
    onLanguageChange(selectedLanguage);
  };

  return (
    <div className="language-list">
      <label>Select Language:</label>
      <button
        className={language === 'eng' ? 'active' : ''}
        onClick={() => handleLanguageChange('eng')}
      >
        English
      </button>
      <button
        className={language === 'es' ? 'active' : ''}
        onClick={() => handleLanguageChange('es')}
      >
        Spanish
      </button>
      <button
        className={language === 'fr' ? 'active' : ''}
        onClick={() => handleLanguageChange('fr')}
      >
        French
      </button>
      <button
        className={language === 'de' ? 'active' : ''}
        onClick={() => handleLanguageChange('de')}
      >
        German
      </button>
    </div>
  );
}