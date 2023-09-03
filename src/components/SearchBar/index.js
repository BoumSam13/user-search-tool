import './index.css';

const SearchBar = () => {
    return (
        <div className="search-container">
            <div className="search-bar">
                <input type="text" id="search" placeholder="Search by name..."/>
                <i class="fa fa-search search-icon"></i>
            </div>
        </div>
    );
};

export default SearchBar;