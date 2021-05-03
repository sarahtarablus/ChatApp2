import React, { useState } from 'react';
import App from './App.js';
import './style.css';


const ChatPage = () => {
    const [message, setMessage] = useState({});
    const [chat, setChat] = useState([]);
    const [users, setUsers] = useState([user1, user2]);

    let user1 = {
        name: "Sarah",
        messages: [
            { text: "Hello" },
            { text: "How are you?" }
        ]
    }


    let user2 = {
        name: "Samuel",
        messages: [
            { text: "Hi" },
            { text: "I'm good and you?" }
        ]
    }

    const typeMessage = (e) => {
        let target = e.target.value;
        let obj = { target };
        setMessage(prev => ({
            ...prev, obj
        }))

        console.log(message);
    }


    const sendMessage = (e) => {
        e.preventDefault();
        if (Object.keys(message) !== 0) {
            setChat(prev => [...prev, message])
            console.log(chat);
        }
        else {

            return;
        }

    }

    return (
        <div>
            <div className="navbar navbar-expand-sm navbar-primary bg-secondary px-4 py-4 d-flex justify-content-end">
                <a href="./App.js" className="btn btn-md active" role="button" aria-pressed="true">LOG OUT</a>
            </div>

            <div className="container d-flex justify-content-start">
                <div className="container-1">
                    <div className="users-title d-flex justify-content-center">
                        <h5>ACTIVE USERS</h5>
                    </div>
                
                </div>
                <div className="container-2">
                    <div className="chat-title d-flex justify-content-center">
                        <h5>CHAT</h5>
                    </div>
                    {chat.map((message, index) => { return <div className="chatMessage" key={index}><div className="text-white">{message.obj.user}</div><div className="msg" >{message.obj.target}</div></div> })}


                </div>
            </div>

            <div className="d-flex justify-content-center input-group mb-3">
                <input className="message form-control form-control-lg" onChange={typeMessage} type="text" placeholder="write here" />
                <div className="input-group-append">
                    <button onClick={sendMessage} className="message-button btn btn-outline-secondary" type="submit">Send</button>
                </div>
            </div>
        </div>










    )
}

export default ChatPage;

//{ chat.length === -1 ? '' : chat.map(c => { return <div className="chat">{c}</div> }) }

//<div className="d-flex justify-content-center">
//    {users.forEach(user => {
//        <div className="user">user.name</div>
//    })}
//</div>