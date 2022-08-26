import React, { StrictMode } from "react";
import ReactDOM from 'react-dom/client';
import TodoList from "./components/todo-list";
import AppHeader from "./components/app-header";
import SearchPanel from "./components/search-panel";

const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () => {

    return (
        <div>
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