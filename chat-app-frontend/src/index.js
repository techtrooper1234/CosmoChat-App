import React from 'react';
  import ReactDOM from 'react-dom';
  import './index.css';
  import App from './App';
  import { BrowserRouter } from 'react-router-dom';
  import { ChatProvider } from './context/ChatContext';
  
 ReactDOM.render(
  <ChatProvider>
   <BrowserRouter>
     <App />
   </BrowserRouter>,
   </ChatProvider>,
   document.getElementById('root')
  );