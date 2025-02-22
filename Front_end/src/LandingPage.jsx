import SearchBar from './SearchBar';
import "./LandingPage.css";

export default function LandingPage() {
    const handleSearch = (searchTerm) => {
        // Implement your search logic here
        console.log('Searching for:', searchTerm);
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
        </div>
    );
}