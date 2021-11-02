import React from 'react'
import { SearchOutlined } from '@ant-design/icons'

const SearchBox = () => {
  return (
    <div className="search-box">
      <input type="search" placeholder={`search`} />
      <SearchOutlined className="icon" />
    </div>
  )
}

export default SearchBox
