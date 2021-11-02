import React from 'react'
import TextInput from './textInput/textInput'
import './messageInput.css'
import ButInput from './butInput/butInput'

const MessageInput = () => {
  return (
    <div className="fixed-bottom input-groups chat">
      <TextInput />
      <ButInput />
    </div>
  )
}

export default MessageInput
