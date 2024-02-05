import axios from 'axios'

const API_URL = '/api/chats/'

// Create new chat
const createChat = async (chatData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.post(API_URL, chatData, config)

    return response.data
}

const chatService = {
    createChat
}

export default chatService