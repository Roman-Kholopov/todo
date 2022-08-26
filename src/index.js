import React, { StrictMode } from "react";
import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(document.getElementById('root'));

const TodoList = ({items}) => {
    return (
        <ul>
            {items.map((item) => (
                <li>
                    {item}
                </li>
            ))}
        </ul>
    );
}

const AppHeader = () => {
    return <h1>My Todo List</h1>;
}

const SearchPanel = () => {

    const searchText = 'Type here to search';
    const seachStyle = {
        fontSize: '20px'
    }
    return <input
        style={seachStyle}
        placeholder={searchText}
    />;
}

const App = () => {

    const isLoggedIn = true;
    const loginBox = <span>Log in please</span>;
    const welcomeBox = <span>Welcome Back</span>;

    return (
        <div>
            { isLoggedIn ? welcomeBox : loginBox}
            <AppHeader />
            <SearchPanel />
            <TodoList items={['Drink Coffee', 'Build Awesome App']}/>
        </div>
    )
}

root.render(
    <StrictMode>
        <App/>
    </StrictMode>
);