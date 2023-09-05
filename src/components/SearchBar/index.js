import { useState, forwardRef } from "react";
import './index.css';

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
                    onChange={onInputChange}  
                    value={name} 
                    type="text" 
                    placeholder="Search by name..."
                    ref={ref}
                />
                <button className="search-icon"><i className="fa fa-search"></i></button>
            </div>
        </form>
    );
});

export default SearchBar;