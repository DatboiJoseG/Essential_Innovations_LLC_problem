import { useState } from 'react';
import SearchBar from './SearchBar';
import "./LandingPage.css";

export default function LandingPage() {
    const [searchResults, setSearchResults] = useState([]);
    const [selectedResult, setSelectedResult] = useState(null);

    const handleSearch = (searchTerm) => {
        const ws = new WebSocket(`ws://localhost:8765`);

        ws.onopen = () => {
            console.log('WebSocket connection opened');
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

    return (
        <div className="landing-page">
            <div className="prompts">
                <h1>Welcome to Translator App!</h1>
                <h2>Looking for a job? Enter keywords below</h2>
            </div>
            <div className="search-bar-container">
                <SearchBar onSearch={handleSearch} />
            </div>
            <div className="content-container">
                <div className="results-container">
                    <h3>Search Results:</h3>
                    {searchResults.map(result => (
                        <div key={result.id} onClick={() => handleResultClick(result)}>
                            {result.text}
                        </div>
                    ))}
                </div>
                {selectedResult && (
                    <div className="translation-containers">
                        <div className="english-version">
                            <h3>English Version:</h3>
                            <p>{selectedResult.text}</p>
                        </div>
                        <div className="other-language-version">
                            <h3>Other Language Version:</h3>
                            <p>{/* Implement translation logic here */}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}