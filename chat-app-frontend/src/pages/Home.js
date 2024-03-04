import React from 'react';
import { Link } from 'react-router-dom';
import Rex_Welcome_Image from '../assets/Rex_Welcome_Image.png';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {useSelector} from 'react-redux';
  
// BEM -> Block Element Modifier

 const Home = () => {
  const navigate = useNavigate()

  const {user} = useSelector((state) => state.auth)

  useEffect(() => {
    if(!user) {
      navigate('/login')
    }
  }, [user, navigate])

  const StartChatBtn = {
    //margin: "1rem",
    textDecoration: "none",
    color: 'white',
    background: 'blueviolet',
    paddingTop: '5px',
    paddingBottom: '10px',
    paddingLeft: '15px',
    paddingRight: '15px',
    borderRadius: '20px',
    fontSize: '20px',
    shadow: '4px'
  };

   return (
    

      <div>
      <div>
        <img src={Rex_Welcome_Image} width={300} alt="Rex" 
        style={{ alignSelf: "center" }}
        />
      </div>
       <h1>Welcome, {user && user.name}! &#128075;</h1>
       <h2>Receive Career Help from ReX!</h2>
      <h4>Start a conversation with ReX right now!</h4>
       <Link style={StartChatBtn}  to="/chat">Start Chat with ReX</Link>
       </div>

   );
  }
  
 export default Home;