  import React from 'react';
  import { useState } from "react";
  import { Link } from 'react-router-dom';
  import Rex_Logo from '../../assets/Rex_Logo.png';
  import Activity_Icon from '../../assets/Activity_Icon.svg';
  import Setting_Icon from '../../assets/Setting_Icon.svg';
  import DropDown from '../Dropdown/DropDown';

  
 const Navigation = () => {
  const [openSetting, setOpenSetting] = useState(false);
  

   return (
    <nav className='mainnav'>  
      <div className='logo'>
      <Link to="/">
        <img src={Rex_Logo} alt="Rex Logo" 
        style={{ width: '78px',
        height: '48px', margin: '0 10px'}}
      />
      </Link>
      </div>
  
      <ul>

      <li>
      <Link to="/">
        <img src={Activity_Icon} alt="Activity_Ic" 
        style={{ width: '28px',
        height: '28px', margin: '0 15px'}}/>
      </Link>
      </li>

      <li>
      <Link to="#">
        <img 
        onClick={()=>setOpenSetting(!openSetting)}
        src={Setting_Icon} alt="Setting_Ic" 
        style={{ width: '28px',
        height: '28px', margin: '0 15px'}}/>
      </Link>
      </li>
      {
        openSetting && <DropDown />
      }
      </ul>
      
      </nav>
      
       
   );
  }
  

 export default Navigation;

 
