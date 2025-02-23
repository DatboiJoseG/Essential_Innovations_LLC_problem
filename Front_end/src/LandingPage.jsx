import { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import LanguageList from './LanguageList';
import "./LandingPage.css";

export default function LandingPage() {
    const [searchResults, setSearchResults] = useState([]);
    const [selectedResult, setSelectedResult] = useState(null);
    const [language, setLanguage] = useState('eng'); // Default to English
    const [searchTerm, setSearchTerm] = useState('');
    const [ws, setWs] = useState(null);

    useEffect(() => {
        return () => {
            if (ws) {
                ws.close();
            }
        };
    }, [ws]);

    const handleSearch = (term) => {
        setSearchTerm(term);
        if (ws) {
            ws.close();
        }

        const newWs = new WebSocket(`ws://localhost:8765`);
        setWs(newWs);

        newWs.onopen = () => {
            console.log('WebSocket connection opened');
            newWs.send(JSON.stringify({ searchTerm: term, language })); // Send both search term and language
        };

        newWs.onmessage = (event) => {
            try {
                const data = JSON.parse(event.data);
                console.log('WebSocket message received:', data); // Debugging statement
                setSearchResults(data.results);
            } catch (error) {
                console.error('Error parsing WebSocket message:', error);
            }
        };

        newWs.onerror = (error) => {
            console.error('WebSocket error:', error);
        };

        newWs.onclose = (event) => {
            console.log('WebSocket connection closed', event);
            if (event.code !== 1000) {
                console.error('WebSocket closed unexpectedly:', event);
            }
        };
    };

    const handleResultClick = (result) => {
        setSelectedResult(result);
    };

    const handleLanguageChange = (selectedLanguage) => {
        setLanguage(selectedLanguage);
    };

    const clearSearch = () => {
        setSearchTerm('');
        setSearchResults([]);
        setSelectedResult(null);
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
                <SearchBar onSearch={handleSearch} clearSearch={clearSearch} searchTerm={searchTerm} />
            </div>
            <div className="content-container">
                {searchResults && searchResults.length > 0 && (
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