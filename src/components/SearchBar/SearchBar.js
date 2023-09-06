import { useState, forwardRef } from "react";
import './SearchBar.css';

const SearchBar = forwardRef(({ onSubmit, onInputNameChange }, ref) => {
    const [name, setName] = useState('');

    const handleFormSubmit = (event) => {
        event.preventDefault();
        onSubmit(name);
    };

    const onInputChange = (event) => {
        const nameFromInput = event.target.value;
        setName(nameFromInput);
        onInputNameChange(nameFromInput);
    };

    return (
        <form className="search-container" onSubmit={handleFormSubmit}>
            <div className="search-bar">
                <input 
                    data-testid="search-bar"
                    onChange={onInputChange}  
                    value={name} 
                    type="text" 
                    placeholder="Search by name..."
                    ref={ref}
                />
                <button data-testid="search-icon" className="search-icon">
                    <i className="fa fa-search"></i>
                </button>
            </div>
        </form>
    );
});

export default SearchBar;