import Rex_Logo_WT from '../assets/Rex_Logo_WT.png';


function ChatItem({chat}) {
    return (
        <div classname="chat-messages">
            <div>
            <img src={Rex_Logo_WT} alt="Rex Logo WT" 
        style={{ width: '38px',
        height: '28px',  marginRight: '2px', /*display: 'grid'*/}}
        />{new Date(chat.createdAt).toLocaleString('en-GB')}</div>
            <h5>{chat.text}</h5>
        </div>
    )
}

export default ChatItem