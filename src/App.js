import React, { useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css';
import { getAllUserData, getAllUsersByName } from "./api";
import SearchBar from "./components/SearchBar";
import UserList from "./components/UserList";

const App = () => {
    const [users, setUsers] = useState([]);
    const [name, setName] = useState('');

    useEffect(() => {
        const getUsers = async () => {
            const users = await getAllUserData();
            setUsers(users);
        };

        getUsers();
    }, []);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            const getUsersBasedOnInputValue = async () => {
                let users;
                if (name) {
                    users = await getAllUsersByName(name);
                } else {
                    users = await getAllUserData();
                }
                setUsers(users);
            };
            getUsersBasedOnInputValue();
        }, 1000);

        return () => {
            clearTimeout(timeoutId);
        };
    }, [name]);

    const handleSubmit = async (name) => {
        const users = await getAllUsersByName(name);
        setUsers(users);
    };

    const handleInputChange = (name) => {
        setName(name);
    }

    return (
        <div className="app">
            <header className="app-header">
                <img src={logo} className="app-logo" alt="logo" />
            </header>
            <SearchBar onSubmit={handleSubmit} onInputNameChange={handleInputChange} />
            <UserList users={users} />
        </div>
    );
};

export default App;