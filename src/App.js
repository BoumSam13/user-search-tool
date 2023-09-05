import React, { useState, useEffect, useRef } from "react";
import InfiniteScroll from 'react-infinite-scroll-component';
import logo from './logo.svg';
import './App.css';
import { getAllUserData, getAllUsersByName } from "./api";
import SearchBar from "./components/SearchBar";
import UserList from "./components/UserList";

const App = () => {
    const [users, setUsers] = useState([]);
    const [name, setName] = useState('');
    const [page, setPage] = useState(1);
    const [inputChanged, setInputChanged] = useState(false);
    const [hasMore, setHasMore] = useState(true);

    const scrollableRef = useRef(null);
    const childInputRef = useRef(null);

    const removeFocusFromChildInput = () => {
        childInputRef.current.blur();
    };

    const clickScrollableApp = () => {
        scrollableRef.current.click();
    }

    const getUsers = async () => {
        // Remove focus from input so that the scroll event can be triggered
        if (inputChanged) {
            removeFocusFromChildInput();
            clickScrollableApp();
        }

        let usersResponse;
        if (name) {
            usersResponse = await getAllUsersByName(name, page);
        } else {
            usersResponse = await getAllUserData(page);
        }

        if (usersResponse.length > 0) {
            if (page === 1) {
                setUsers(usersResponse);
            } else {
                setUsers((prevData) => [...prevData, ...usersResponse]);
            }
            
            setPage(page + 1);
        } else {
            setHasMore(false);
        }
    };

    useEffect(() => {
        if (inputChanged) {
            const timeoutId = setTimeout(() => {
                getUsers();
            }, 1000);
    
            return () => {
                clearTimeout(timeoutId);
            };
        } else {
            getUsers();
        }
    }, [name]);

    const handleSubmit = async (name) => {
        const users = await getAllUsersByName(name);
        setUsers(users);
    };

    const handleInputChange = (name) => {
        setName(name);
        setPage(1);
        setInputChanged(true);
    }

    return (
        <div className="app" tabIndex={0} ref={scrollableRef}>
            <header className="app-header">
                <img src={logo} className="app-logo" alt="logo" />
            </header>
            <SearchBar onSubmit={handleSubmit} onInputNameChange={handleInputChange} ref={childInputRef} />
            <InfiniteScroll
                dataLength={users.length}
                next={getUsers}
                hasMore={hasMore}
                loader={<h4>Loading...</h4>}
                scrollableTarget={scrollableRef}
            >
                <UserList users={users} />
            </InfiniteScroll> 
        </div>
    );
};

export default App;