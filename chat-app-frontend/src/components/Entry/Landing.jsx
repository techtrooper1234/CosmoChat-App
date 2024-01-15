import React from 'react';
import {FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa';
import Rex_Welcome_Image from '../../assets/Rex_Welcome_Image.png';
import {Link} from 'react-router-dom';
import { Stack } from '@mui/material';


function Landing() {
    return (
        <Stack spacing={2} justifyContent="center"
    alignItems="center">

        <div className="RexWelcomeImage">
        <img src={Rex_Welcome_Image} width={300} alt="Rex" 
        style={{ alignSelf: "center" }}
        />
      </div>,
      <ul>
        <li>
          <Link to='/login'>
            <FaSignInAlt /> Login
          </Link>
        </li>
        <li>
          <Link to='/register'>
            <FaUser /> Register
          </Link>
        </li>
      </ul>
      </Stack>
    )
}

export default Landing