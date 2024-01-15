import React, { createContext, useState } from 'react';
  
 export const ChatContext = createContext();
  
 export const ChatProvider = ({ children }) => {
   const [messages, setMessages] = useState([]);
  
   const sendMessage = (message) => {
     setMessages([...messages, message]);
   };
  
   return (
     <ChatContext.Provider value={{ messages, sendMessage }}>
       {children}
     </ChatContext.Provider>
   );
  };