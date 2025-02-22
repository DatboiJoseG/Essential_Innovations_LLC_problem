import { useState } from 'react';

export default function SearchBar({ onSearch, clearSearch }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch(searchTerm);
        setSearchTerm('');
        clearSearch(); 
    };

    return (
        <form onSubmit={handleSubmit} className="search-bar-form">
            <input
                type="text"
                value={searchTerm}
                onChange={handleChange}
                placeholder="Search..."
                className="search-input"
            />
            <button type="submit" className="search-button">Search</button>
        </form>
    );
}