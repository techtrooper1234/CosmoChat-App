import React from 'react';
import {FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa';
import Rex_Welcome_Image from '../../assets/Rex_Welcome_Image.png';
import {Link} from 'react-router-dom';

function Landing() {
    return (

        <div>
        <div className="RexWelcomeImage">
        <img src={Rex_Welcome_Image} width={300} alt="Rex" 
        style={{ alignSelf: "center" }}
        />
      </div>
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
      </div>
    )
}

export default Landing