import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
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
          {chats.length > 0 ? (
          <div className="ind-chats">
            {chats.map((chat) => (
              <ChatItem key={chat._id} chat={chat}/>
            ))}
          </div>
        ) : (<h3>Active Chats Appear Here</h3>) }
      </section>
        
          <Link to='' className="csheading2">
          <h5>Ended Chat</h5>  
          </Link>
          <section className="chatsummary-container">
          <h3>Ended Chats Appear Here</h3>
          </section>
      
      
      </>
    )
}

export default ChatSummary
