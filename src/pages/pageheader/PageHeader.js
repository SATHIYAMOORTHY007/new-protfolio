import React from 'react'
import './styles.scss'
function PageHeader(props) {
  const { headerText, Icon } = props

  return (
    <div className="wrapper">
      <h2>{headerText}</h2>
      <span>{Icon}</span>
    </div>
  )
}

export default PageHeader
