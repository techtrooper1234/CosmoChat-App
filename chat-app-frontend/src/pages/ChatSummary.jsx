import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Rex_Logo_WT from '../assets/Rex_Logo_WT.png';
import { Link, useNavigate } from 'react-router-dom';
import Spinner from '../components/Spinner';
import { getChats } from '../services/chats/chatSlice';
import ChatItem from '../components/ChatItem';




function ChatSummary () {
  const navigate = useNavigate
  const dispatch = useDispatch()  
  const { user } = useSelector((state) => state.auth)
  const { chats, isLoading, isError, message } = useSelector ((state) => state.chats)


  useEffect(() => {
    if(isError) {
      console.log(message);
    }
    if (!user) {
      navigate('/login')
    }

    dispatch(getChats)
  }, [user, navigate, isError, message, dispatch])

  if(isLoading) {
    return <Spinner />
  }

  
  return (
        <>  
          <Link to='' className="csheading">
            <h5>Active Chat</h5> 
          </Link>
          <section className="chatsummary-container">
        <img src={Rex_Logo_WT} alt="Rex Logo WT" 
        style={{ width: '58px',
        height: '48px',  marginRight: '400px', display: 'grid'}}
        /> {chats.length > 0 ? (
          <div className="ind-chats">
            {chats.map((chat) => (
              <ChatItem key={chat._id} chat={chat}/>
            ))}
          </div>
        ) : (<h3>You don't have any Active Chats</h3>) }
      </section>
        
          <Link to='' className="csheading2">
          <h5>Ended Chat</h5>  
          </Link>
          <h3>You don't have any Ended Chats</h3>
      
      
      </>
    )
}

export default ChatSummary
