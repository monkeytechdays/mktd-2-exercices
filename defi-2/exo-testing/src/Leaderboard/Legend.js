import React from 'react'

const Legend = (props) => <h3 className='legend'>{props.children}</h3>

Legend.propTypes = {
  children: React.PropTypes.node.isRequired
}

export default Legend
