import logo from './logo.svg';
import './App.css';

const App = () => {
    return (
        <div className="app">
            <header className="app-header">
                <img src={logo} className="app-logo" alt="logo" />
            </header>
        </div>
    );
};

export default App;