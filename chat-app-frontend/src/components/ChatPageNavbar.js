import React from 'react';
import { useState } from "react";
import { Link } from 'react-router-dom';
import { FiSearch } from "react-icons/fi";
import { PiDotsThreeCircleDuotone } from "react-icons/pi";
import { GoArrowLeft } from "react-icons/go"
import ChatPageDropDown from '../components/ChatPageDropDown';



const ChatPageNavbar = () => {
const [openSetting, setOpenSetting] = useState(false);


 return (
  <nav className='mainnav'>  
    <div className='logo'>
    <Link to="/">
      <GoArrowLeft /> ReX
    </Link>
    </div>

    <ul>

    <li>
    <Link to="#">
     <FiSearch />
    </Link>
    </li>

    <li>
    <Link to="#">
      <PiDotsThreeCircleDuotone onClick={()=>setOpenSetting(!openSetting)} />
    </Link>
    </li>
    {
      openSetting && <ChatPageDropDown />
    }
    </ul>
    
    </nav>
    
     
 );
}


export default ChatPageNavbar;


