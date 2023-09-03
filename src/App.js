import logo from './logo.svg';
import './App.css';
import SearchBar from "./components/SearchBar";
import UserList from "./components/UserList";

const users = [
    { "name": "User1", "company": "User1 Company", "companyUrl": "www.user1company.com", "totalAlbums": "33 albums" },
    { "name": "User2", "company": "User2 Company", "companyUrl": "www.user2company.com", "totalAlbums": "33 albums" },
    { "name": "User3", "company": "User3 Company", "companyUrl": "www.user3company.com", "totalAlbums": "33 albums" },
    { "name": "User4", "company": "User4 Company", "companyUrl": "www.user4company.com", "totalAlbums": "33 albums" },
    { "name": "User5", "company": "User5 Company", "companyUrl": "www.user5company.com", "totalAlbums": "33 albums" },
    { "name": "User6", "company": "User6 Company", "companyUrl": "www.user6company.com", "totalAlbums": "33 albums" },
    { "name": "User7", "company": "User7 Company", "companyUrl": "www.user7company.com", "totalAlbums": "33 albums" },
    { "name": "User8", "company": "User8 Company", "companyUrl": "www.user8company.com", "totalAlbums": "33 albums" },
    { "name": "User9", "company": "User9 Company", "companyUrl": "www.user9company.com", "totalAlbums": "33 albums" },
    { "name": "User10", "company": "User10 Company", "companyUrl": "www.user10company.com", "totalAlbums": "33 albums" },
    { "name": "User11", "company": "User11 Company", "companyUrl": "www.user11company.com", "totalAlbums": "33 albums" },
    { "name": "User12", "company": "User12 Company", "companyUrl": "www.user12company.com", "totalAlbums": "33 albums" },
];

const App = () => {
    return (
        <div className="app">
            <header className="app-header">
                <img src={logo} className="app-logo" alt="logo" />
            </header>
            <SearchBar />
            <UserList users={users} />
        </div>
    );
};

export default App;