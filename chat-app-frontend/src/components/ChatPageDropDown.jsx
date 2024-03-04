import { useState } from "react";
import { FaRegRectangleXmark } from 'react-icons/fa6';
import { LuArrowDownSquare } from "react-icons/lu"
import { BsBoxArrowRight } from "react-icons/bs"
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";




function ChatPageDropDown() {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [openSetting, setOpenSetting] = useState(false);


    return (
        <drop>
        <div className= 'navdrop2'>
        
                <ul>
                    
                    <li> <Link to='#'>
                    <FaRegRectangleXmark /> Clear Chat
                    </Link></li>
                    <li> <Link to='#'> 
                    <LuArrowDownSquare /> Export Chat 
                    </Link></li>
                    <li> <Link to='#'> 
                    <BsBoxArrowRight /> End Session 
                    </Link></li>
                    {
                      openSetting && <ChatPageDropDown />
                    }
      
                </ul>
        </div>
        
      
        </drop>
    
    );
    };


export default ChatPageDropDown
