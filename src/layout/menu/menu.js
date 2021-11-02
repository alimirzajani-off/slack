import React from 'react'
import { EditOutlined } from '@ant-design/icons'
import './menu.css'
import ChannelList from './channelList/channelList'
import MainList from './mainList/mainList'
import DirectList from './directList/directList'

const Menu = () => {
  return (
    <div className="menu">
      <div className="d-flex justify-content-between team-name">
        <div>
          <h4>Slack</h4>
        </div>
        <div className="edit-icon">
          <EditOutlined />
        </div>
      </div>
      <div>
        <MainList />
        <ChannelList />
        <DirectList />
      </div>
    </div>
  )
}

export default Menu
