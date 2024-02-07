function ChatItem({chat}) {
    return (
        <div classname="chat-messages">
            <div>
                {new Date(chat.createdAt).toLocaleString('en-GB')}</div>
            <h2>{chat.text}</h2>
        </div>
    )
}

export default ChatItem