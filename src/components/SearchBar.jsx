import '/src/vendor-dashboard.css'

export default function SearchBar({ searchValue, onSearchChange, onSearchClick }) {
    return (
        <div className="search-container">
            <input
                type="search"
                placeholder="Search by name or Category..."
                value={searchValue}
                onChange={onSearchChange}
            />
            <button onClick={onSearchClick}>Search</button>
        </div>
    );
}
