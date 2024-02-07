import { useState, useEffect } from 'react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {createChat, getChats} from '../services/chats/chatSlice';
import Spinner from '../components/Spinner'

  
  const Chatwindow = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [text, setText] = useState('');
  const { user } = useSelector((state) => state.auth)
  const {chats, isLoading, isError, message} = useSelector((state) => state.chats)

  // Using useDispatch to dispatch message state
  const dispatch = useDispatch()

  const handleUserInput = (e) => {
    setText(e.target.value);
    
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    
    if (text.trim() === '') return;
    dispatch(createChat({ text, input }))
    setText('')
    setInput('')
    
    

    setMessages((prevMessages) => [
      ...prevMessages,
      { text: text, type: 'user' }
    ]);
    setText('');

    

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

  useEffect(() => {
    
    dispatch(getChats())
  }, [user, dispatch]);

  if(isLoading) {
    return <Spinner />
  }
  

  return (
    <div className="chat-bot-container">
      <div className="chat-messages">
       {messages.map((message,  index) => (
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
          value={text}
          name='text'
          onChange={handleUserInput}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};


 export default Chatwindow;