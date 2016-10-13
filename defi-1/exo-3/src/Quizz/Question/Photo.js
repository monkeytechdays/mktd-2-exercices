import React from 'react'

const Photo = (props) => (
  <div className='question-photo'>
    <img src={props.src} alt='Singe mystérieux.' />
  </div>
)

Photo.propTypes = {
  src: React.PropTypes.string
}

export default Photo
