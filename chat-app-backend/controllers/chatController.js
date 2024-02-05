const asyncHandler = require('express-async-handler')

const Chat = require('../models/chatModel')
const User = require('../models/userModel')


// @desc Get chats
// @route GET /api/chats
// @access Private
const getChats = asyncHandler(async (req, res) => {
  const chats = await Chat.find({ user: req.user.id})
  res.status(200).json(chats)
})

// @desc Set chat
// @route POST /api/chats
// @access Private
const setChat = asyncHandler(async (req, res) => {
  if(!req.body.input)  {
    res.status(400)
    throw new Error('Please add a valid field')
  }

  const chat = await Chat.create({
    text: req.body.text,
    user: req.user.id,
  })

  res.status(200).json(chat)
})

// @desc Update chats
// @route PUT /api/chats/:id
// @access Private
const updateChat = asyncHandler(async (req, res) => {
  const chat = await Chat.findById(req.params.id)

  if(!chat) {
    res.status(400)
    throw new Error('Chat not found')
  }


  //Check for User
  if(!req.user) {
    res.status(401)
    throw new Error('User not found')
  }

  // To make sure the logged in user matches the chat user
  if(chat.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }

  const updatedChat = await Chat.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })

  res.status(200).json(updatedChat)
})

// @desc Delete chat
// @route DELETE /api/chats/:id
// @access Private
const deleteChat = asyncHandler(async (req, res) => {
  const chat = await Chat.findById(req.params.id)

  if(!chat) {
    res.status(400)
    throw new Error('Chat not found')
  }


  //Check for User
  if(!req.user) {
    res.status(401)
    throw new Error('User not found')
  }

  // To make sure the logged in user matches the chat user
  if(chat.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }

  await chat.deleteOne()

  res.status(200).json({ id: req.params.id })
})

module.exports = {
    getChats,
    setChat,
    updateChat,
    deleteChat,
}