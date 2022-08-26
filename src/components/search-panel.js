import React from "react";

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

export default SearchPanel;