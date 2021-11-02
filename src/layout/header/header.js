import React from 'react'
import { ClockCircleOutlined, QuestionCircleOutlined } from '@ant-design/icons'
import SearchBox from './searchbox/searchbox'
import './header.css'

const Header = () => {
  return (
    <div className="fixed-top header">
      <ClockCircleOutlined className="header-icon" />
      <SearchBox />
      <QuestionCircleOutlined className="header-icon" />
    </div>
  )
}

export default Header
