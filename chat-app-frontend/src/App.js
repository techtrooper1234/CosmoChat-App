  import React from 'react';
  import { Routes, Route } from 'react-router-dom';
  import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import Home from './components/Home/Home';
  import Chat from './components/Chat/Chat';
  import Landing from './components/Entry/Landing';
  import Navigation from './components/Shared/Navigation';
  import Login from './components/Entry/Login'
  import Register from './components/Entry/Register';
  import DropDown from './components/Dropdown/DropDown';

  const App = () => {
   return (
     <>
       <Navigation /> 
       <div className='container'>
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/chat" element={<Chat />} />
         <Route path="/dropdown" element={<DropDown />} />
         <Route path="/landing" element={<Landing />} />
         <Route path="/login" element={<Login />} />
         <Route path="/register" element={<Register />} />
       </Routes>
       </div>
       <ToastContainer />
     </>
   );
  }
  
 export default App;