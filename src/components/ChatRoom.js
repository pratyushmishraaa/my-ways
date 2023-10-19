

import React, { useState, useEffect } from 'react';
import "../stylesheets/Chatroom.css";


function ChatRoom() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  // Fetch messages for the current chat room
  useEffect(() => {
    // Implement fetching messages via REST API and update the state
  }, []);

  const handleSendMessage = () => {
   // Update messages state using setMessages
   setMessages([...messages, newMessage]);
   setNewMessage(''); // Clear the input field
 };
 

  return (
    <div>
      <div>
        {messages.map((message) => (
          <div key={message._id}>{message.text}</div>
        ))}
      </div>
      <div>
        <input type="text" value={newMessage} onChange={(e) => setNewMessage(e.target.value)} />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
}

export default ChatRoom;
