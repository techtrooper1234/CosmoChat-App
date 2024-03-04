import { useState } from "react";
import {FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import Setting_Icon from '../assets/Setting_Icon.svg'
import { useDispatch, useSelector } from "react-redux";
import {logout, reset} from '../../src/services/auth/authSlice'




function DropDown() {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {user} = useSelector((state) => state.auth)

    const [openSetting, setOpenSetting] = useState(false);


    const onLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/')
    }

    return (
        <drop>
        <div className= 'navdrop'>
        
                <ul>
                    {user ? (
                    <li>
                    <button onClick={onLogout}>
              <FaSignOutAlt /> Logout
            </button>
                    </li>
                    ) : (
                    <>
                      <li>
                        <Link to='/register'>
                    <FaUser /> Register
                    </Link>
                    <Link to='/login'>
                    <FaSignInAlt /> Login
                    </Link>
                      </li>
                        </>
                        )}
                    {
                      openSetting && <DropDown />
                    }
      
                </ul>
        </div>
        
      
        </drop>
    
    );
    };


export default DropDown