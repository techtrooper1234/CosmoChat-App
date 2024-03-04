  import React from 'react';
  import 'whatwg-fetch';
  import { Routes, Route, useLocation } from 'react-router-dom';
  import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import Home from './pages/Home';
  import Chat from './pages/Chat';
  import ChatSummary from './pages/ChatSummary';
  import Navigation from './components/Navigation';
  import ChatPageNavbar from './components/ChatPageNavbar';
  import Login from './pages/Login'
  import Register from './pages/Register';
  import DropDown from './components/DropDown';
  import ChatPageDropDown from './components/ChatPageDropDown';

  const App = () => {

    const location = useLocation();
   
    const currentPath = location.pathname;

    // Use different Navbar components based on the current route
    const renderNavbar = () => {
      if (currentPath === '/chat') {
        return <ChatPageNavbar />;
      } else {
        return <Navigation />;
      }
    };
   
    return (
     <>
       {renderNavbar()} 
       <div className='container'>
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/chat" element={<Chat />} />
         <Route path="/chatsummary" element={<ChatSummary />} />
         <Route path="/chatpagedropdown" element={<ChatPageDropDown />} />
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
