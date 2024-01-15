  import React from 'react';
  import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
  import Home from './components/Home/Home';
  import Chat from './components/Chat/Chat';
  import Landing from './components/Entry/Landing';
  import Navigation from './components/Shared/Navigation';
  import Login from './components/Entry/Login'
  import Register from './components/Entry/Register';

  const App = () => {
   return (
     <>
       <Navigation />
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/chat" element={<Chat />} />
         <Route path="/landing" element={<Landing />} />
         <Route path="/login" element={<Login />} />
         <Route path="/register" element={<Register />} />
       </Routes>
     </>
   );
  }
  
 export default App;