import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router'
import { fetchPostMessage } from '../../../action'

const TextInput = (props) => {
  const [Text, setText] = useState(null)
  const { id } = useParams()

  const handleText = (e) => {
    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.fetchPostMessage(id, Text)
    setText('')
  }

  return (
    <form className="text-group" onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        placeholder={!Text ? 'Message #General' : null}
        value={Text}
        onChange={(e) => handleText(e)}
      />
    </form>
  )
}

export default connect(null, { fetchPostMessage })(TextInput)
