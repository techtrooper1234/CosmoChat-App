import React, { useContext } from 'react';
  import { ChatContext } from '../../context/ChatContext';
  
 const Chat = () => {
   const { messages, sendMessage } = useContext(ChatContext);
  
   return (
     <div>
       <h1>Chat with ReX</h1>
       {/* Chat UI goes here */}
     </div>
   );
  }
  
 export default Chat;