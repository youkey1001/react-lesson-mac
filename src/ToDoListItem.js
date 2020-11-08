import React from 'react';
import './ToDoListItem.css';

const ToDoListItem = props => {
    const { title, description, index, handleRemove} = props

    return (
        <div className="ToDoListItem">
            <div className="ToDoListItem-title">{title}</div>
            <div className="ToDoListItem-description">{description}</div>
            <button onClick={() => handleRemove(index)}>削除</button>
        </div>
    )
}

export default ToDoListItem