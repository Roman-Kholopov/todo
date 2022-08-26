import React, { StrictMode } from "react";
import ReactDOM from 'react-dom/client';
import TodoList from "./components/todo-list";
import AppHeader from "./components/app-header";
import SearchPanel from "./components/search-panel";

const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () => {

    const isLoggedIn = true;
    const loginBox = <span>Log in please</span>;
    const welcomeBox = <span>Welcome Back</span>;

    return (
        <div>
            { isLoggedIn ? welcomeBox : loginBox}
            <AppHeader />
            <SearchPanel />
            <TodoList />
        </div>
    )
}

root.render(
    <StrictMode>
        <App/>
    </StrictMode>
);