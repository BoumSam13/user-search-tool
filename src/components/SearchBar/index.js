import './index.css';

const SearchBar = () => {
    return (
        <form className="search-container">
            <div className="search-bar">
                <input type="text" id="search" placeholder="Search by name..."/>
                <i class="fa fa-search search-icon"></i>
            </div>
        </form>
    );
};

export default SearchBar;