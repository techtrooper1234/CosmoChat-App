const mongoose = require('mongoose')

const chatSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    },
    message: {
      type: String,
      trim: true,
    },
    chat: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Chat",
    },
    text: {
      type: String,
    },
  }, 
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Chat', chatSchema)
