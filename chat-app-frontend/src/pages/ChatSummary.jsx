import React from 'react'
import { useState } from 'react';
import { UseSelector, useDispatch } from 'react-redux';
import Chat from '../pages/Chat'
import Rex_Logo_WT from '../assets/Rex_Logo_WT.png';
import { Link } from 'react-router-dom';




function ChatSummary () {
    return (

        <div>
        
      <ul>
        <li>
          <Link to='/'>
            <h5>Active Chat</h5> 
          </Link>
          <div className="'chatsummary-container'">
        <img src={Rex_Logo_WT} alt="Rex Logo WT" 
        style={{ width: '48px',
        height: '28px', margin: '0 10px'}}
        />
      </div>
        </li>
        <li>
          <Link to='/'>
          <h5>Ended Chat</h5>  
          </Link>
        </li>
      </ul>
      
      </div>
    )
}

export default ChatSummary
