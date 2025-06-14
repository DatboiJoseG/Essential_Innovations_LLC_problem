import { useState } from 'react';

export default function LanguageList({ onLanguageChange, language }) {
  const handleLanguageChange = (selectedLanguage) => {
    onLanguageChange(selectedLanguage);
  };

  return (
    <div className="language-list">
      <label>Select Language:</label>
      <button
        className={language === 'es' ? 'language-button active' : 'language-button'}
        onClick={() => handleLanguageChange('es')}
      >
        Spanish
      </button>
      <button
        className={language === 'fr' ? 'language-button active' : 'language-button'}
        onClick={() => handleLanguageChange('fr')}
      >
        French
      </button>
      <button
        className={language === 'de' ? 'language-button active' : 'language-button'}
        onClick={() => handleLanguageChange('de')}
      >
        German
      </button>
    </div>
  );
}