import logo from './logo.svg';
import './App.css';
import SearchBar from "./components/SearchBar";

const App = () => {
    return (
        <div className="app">
            <header className="app-header">
                <img src={logo} className="app-logo" alt="logo" />
            </header>
            <SearchBar />
        </div>
    );
};

export default App;