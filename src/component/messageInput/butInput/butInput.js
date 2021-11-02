import React from 'react'
import {
  ThunderboltOutlined,
  BoldOutlined,
  ItalicOutlined,
  StrikethroughOutlined,
  OrderedListOutlined,
  UnorderedListOutlined,
  PicLeftOutlined,
  CodeOutlined,
  LinkOutlined,
  SmileOutlined,
  PaperClipOutlined,
  SendOutlined,
  DownOutlined,
} from '@ant-design/icons'

const ButInput = () => {
  return (
    <div className="d-flex justify-content-between icon-style">
      <div>
        <ul className="d-flex right-section">
          <li style={{ borderRight: '1px solid black' }}>
            <ThunderboltOutlined />
          </li>
          <li>
            <BoldOutlined />
          </li>
          <li>
            <ItalicOutlined />
          </li>
          <li>
            <StrikethroughOutlined />
          </li>
          <li>
            <i className="fas fa-code"></i>
          </li>
          <li>
            <LinkOutlined />
          </li>
          <li>
            <OrderedListOutlined />
          </li>
          <li>
            <UnorderedListOutlined />
          </li>
          <li>
            <PicLeftOutlined />
          </li>
          <li>
            <CodeOutlined />
          </li>
        </ul>
      </div>
      <div>
        <ul className="d-flex icons-list left-section">
          <li></li>
          <li>
            <i className="fas fa-at"></i>
          </li>
          <li>
            <i className="fas fa-font"></i>
          </li>
          <li>
            <SmileOutlined />
          </li>
          <li>
            <PaperClipOutlined />
          </li>
          <li>
            <SendOutlined />
          </li>
          <li style={{ borderLeft: '1px solid black' }}>
            <DownOutlined />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ButInput
