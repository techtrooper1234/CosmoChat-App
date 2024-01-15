import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import Rex_Welcome_Image from '../../assets/Rex_Welcome_Image.png';
import Navigation from '../Shared/Navigation';
  
// BEM -> Block Element Modifier

 const Home = () => {

  const StartChatBtn = {
    margin: "1rem",
    textDecoration: "none",
    color: 'white',
    background: 'blueviolet',
    paddingTop: '10px',
    paddingBottom: '10px',
    paddingLeft: '80px',
    paddingRight: '80px',
    borderRadius: '60px',
    fontSize: '20px',
    shadow: '4px'
  
  };

   return (
    <Stack spacing={2} justifyContent="center"
    alignItems="center">
      
      <div className="RexWelcomeImage">
        <img src={Rex_Welcome_Image} width={300} alt="Rex" 
        style={{ alignSelf: "center" }}
        />
      </div>
       <h1>Welcome to ReX Chat!</h1>
       <h2>Receive Career Help from ReX!</h2>
      <h4>Start a conversation with ReX right now!</h4>
       <Link style={StartChatBtn} to="/chat">Start Chat with ReX</Link>
     </Stack>
   );
  }
  
 export default Home;