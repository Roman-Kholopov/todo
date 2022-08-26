import React from "react";

const TodoListItem = ({items}) => {
    
    return (items.map((item) => (
            <li>
                {item}
            </li>
        ))  
    )
    // return (items.map((item) => (
    //         <span>
    //             {item}
    //         </span>
    //     ))  
    // )
    // return <span>Drink Coffee</span>;
}

export default TodoListItem;