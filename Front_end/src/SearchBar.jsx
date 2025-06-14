import { useState } from 'react';

export default function SearchBar({ onSearch, clearSearch, searchTerm, setSearchTerm }) {
    const handleChange = (event) => {
        setSearchTerm && setSearchTerm(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch(searchTerm);
        clearSearch && clearSearch();
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