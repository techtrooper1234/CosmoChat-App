import { useState, useEffect } from 'react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {createChat} from '../../src/services/chats/chatSlice';
  
  const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [text, setText] = useState('');

  // Using useDispatch to dispatch message state
  const dispatch = useDispatch()

  const handleUserInput = (e) => {
    setInput(e.target.value);
    
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    
    if (input.trim() === '') return;
    dispatch(createChat({ text, input }))
    setText('')
    setInput('')
    

    setMessages((prevMessages) => [
      ...prevMessages,
      { text: input, type: 'user' },
    ]);
    setInput('');

    

    // Add logic here to send user input to your chat bot backend and get a response
    // You can update the messages state with the bot's response.
  };

  useEffect(() => {
    // Add logic here to simulate receiving a response from the chat bot
    // and update the messages state.
    const botResponse = { text: 'Hello, I am ReX 😃', type: 'bot' };
    const botResponse2 = { text: 'What aspect of your career would you like guidance on?', type: 'bot' };

    setMessages((prevMessages) => [...prevMessages, botResponse, botResponse2]);
  }, []);
  

  return (
    <div className="chat-bot-container">
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${message.type === 'bot' ? 'bot' : 'user'}`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          placeholder="Type a message to ReX..."
          value={input}
          onChange={handleUserInput}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};


 export default Chat;