  import React from 'react';
  import { Link } from 'react-router-dom';
  import Stack from '@mui/material/Stack';
  import Rex_Logo from '../../assets/Rex_Logo.png';
  import Activity_Icon from '../../assets/Activity_Icon.svg';
  import Setting_Icon from '../../assets/Setting_Icon.svg'

  
 const Navigation = () => {
   return (
     
      <Stack direction="row" alignItems="center" 
    justifyContent="flex-start" minWidth="100%"
    spacing={19} 
    >
      
      <Link to="/">
        <img src={Rex_Logo} alt="Rex Logo" 
        style={{ width: '78px',
        height: '48px', margin: '0 10px'}}
      />
      </Link>


      

      <Stack direction="row-reverse" alignItems="flex-end" minWidth="80%"
      > 
      <Link to="/">
        <img src={Activity_Icon} alt="Activity_Ic" 
        style={{ width: '28px',
        height: '28px', margin: '0 10px'}}/>
      </Link>
      <Link to="/">
        <img src={Setting_Icon} alt="Setting_Ic" 
        style={{ width: '28px',
        height: '28px', margin: '0 10px'}}/>
      </Link>
      </Stack>

      </Stack>
       
   );
  }
  

 export default Navigation;

 
