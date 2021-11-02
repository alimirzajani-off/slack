import React, { useRef, useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchDirectList } from '../../../action'

const DirectList = (props) => {
  const mounted = useRef()
  useEffect(() => {
    if (!mounted.current) {
      props.fetchDirectList()
    }
    mounted.current = true
  })

  const disPlayDirectlList = () => {
    return props.directs.map((item) => {
      return (
        <li key={item.id}>
          <div>
            <Link to={item.id}>{item.name}</Link>
          </div>
        </li>
      )
    })
  }

  return (
    <ul className="direct-list">
      <li>
        <div>Direct message</div>
      </li>
      {disPlayDirectlList()}
    </ul>
  )
}

const mapStateToProps = (state) => {
  return { directs: state.directList }
}

export default connect(mapStateToProps, { fetchDirectList })(DirectList)
