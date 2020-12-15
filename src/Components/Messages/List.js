import React from 'react'
import Item from './Item'
import { useSelector } from "react-redux";

function List() {
    const messages = useSelector((state) => state.messages.messages);
    console.log(messages);
    return (
        <div className="messages">
            <ul className="messages-list">
                {messages.map((msg,i) => <Item key={i} msg={msg} /> )}
            </ul>
        </div>

    )
}

export default List
