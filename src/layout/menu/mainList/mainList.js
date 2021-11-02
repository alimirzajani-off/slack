import React from 'react'
import { MessageOutlined } from '@ant-design/icons'

const MainList = () => {
  return (
    <ul className="main-list">
      <li>
        <div>
          <MessageOutlined className="i" />
          Threads
        </div>
      </li>
      <li>
        <div>
          <i className="fas fa-at"></i>
          mention & reactions
        </div>
      </li>
      <li>
        <div>
          <i className="far fa-bookmark"></i>
          saved items
        </div>
      </li>
      <li>
        <div>
          <i className="fas fa-network-wired"></i>
          Slack connect
        </div>
      </li>
      <li>
        <div>
          <i className="fas fa-ellipsis-v"></i>
          more
        </div>
      </li>
    </ul>
  )
}

export default MainList
