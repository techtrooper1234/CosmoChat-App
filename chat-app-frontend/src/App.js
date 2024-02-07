  import React from 'react';
  import 'whatwg-fetch';
  import { Routes, Route } from 'react-router-dom';
  import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import Home from './pages/Home';
  import Chat from './pages/Chat';
  import ChatSummary from './pages/ChatSummary';
  import Navigation from './components/Navigation';
  import Login from './pages/Login'
  import Register from './pages/Register';
  import DropDown from './components/DropDown';

  const App = () => {
   return (
     <>
       <Navigation /> 
       <div className='container'>
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/chat" element={<Chat />} />
         <Route path="/chatsummary" element={<ChatSummary />} />
         <Route path="/dropdown" element={<DropDown />} />
         <Route path="/login" element={<Login />} />
         <Route path="/register" element={<Register />} />

       </Routes>
       </div>
       <ToastContainer />
     </>
   );
  }
  
 export default App;
