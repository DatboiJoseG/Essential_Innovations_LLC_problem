import { useState } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import "./LandingPage.css";

export default function LandingPage() {
    const [searchResults, setSearchResults] = useState([]);
    const [selectedResult, setSelectedResult] = useState(null);

    const handleSearch = async (searchTerm) => {
        try {
            // Replace with your backend API endpoint
            const response = await axios.get(`https://your-backend-url.com/search?query=${searchTerm}`);
            setSearchResults(response.data.results); // Adjust based on your API response structure
        } catch (error) {
            console.error('Error fetching search results:', error);
        }
    };

    const handleResultClick = (result) => {
        setSelectedResult(result);
    };

    return (
        <div className="landing-page">
            <div className="prompts">
                <h1>Welcome to Translator App!</h1>
                <h2>Looking for a <a className="Job_word" target='_blank' href='https://www.linkedin.com/?trk=Officekey'>job</a>? Enter keywords below</h2>
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