import { useState } from 'react';
import SearchBar from './SearchBar';
import LanguageList from './LanguageList';
import "./LandingPage.css";

export default function LandingPage() {
    const [searchResults, setSearchResults] = useState([]);
    const [selectedResult, setSelectedResult] = useState(null);
    const [language, setLanguage] = useState('eng'); // Default to English

    const handleSearch = (searchTerm) => {
        const ws = new WebSocket(`ws://localhost:8765`);

        ws.onopen = () => {
            console.log('WebSocket connection opened');
            ws.send(JSON.stringify({ searchTerm, language })); // Send both search term and language
        };

        ws.onmessage = (event) => {
            try {
                const data = JSON.parse(event.data);
                setSearchResults(data.results);
            } catch (error) {
                console.error('Error parsing WebSocket message:', error);
            }
        };

        ws.onerror = (error) => {
            console.error('WebSocket error:', error);
        };

        ws.onclose = () => {
            console.log('WebSocket connection closed');
        };
    };

    const handleResultClick = (result) => {
        setSelectedResult(result);
    };

    const handleLanguageChange = (selectedLanguage) => {
        setLanguage(selectedLanguage);
    };

    const clearSearch = () => {
        document.querySelector('.search-input').value = '';
    };

    return (
        <div className="landing-page">
            <div className="prompts">
                <h1>Welcome to Translator App!</h1>
                <h2>Looking for a job? Enter keywords below</h2>
            </div>
            <div className="language-list-container">
                <LanguageList onLanguageChange={handleLanguageChange} />
            </div>
            <div className="search-bar-container">
                <SearchBar onSearch={handleSearch} clearSearch={clearSearch} />
            </div>
            <div className="content-container">
                {searchResults.length > 0 && (
                    <div className="results-container">
                        <h3>Search Results:</h3>
                        {searchResults.map(result => (
                            <div key={result.id} onClick={() => handleResultClick(result)}>
                                {result.title}
                            </div>
                        ))}
                    </div>
                )}
                {selectedResult && (
                    <div className="translation-containers">
                        <div className="english-version">
                            <h3>English Version:</h3>
                            <p>{selectedResult.title}</p>
                            <p>{selectedResult.description}</p>
                        </div>
                        <div className="other-language-version">
                            <h3>Other Language Version:</h3>
                            <p>{selectedResult.title_translation}</p>
                            <p>{selectedResult.description_translation}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}