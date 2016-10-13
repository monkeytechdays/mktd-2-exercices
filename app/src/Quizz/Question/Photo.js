import React from 'react'

const Photo = (props) => (
  <div className='question-photo'>
    {props.loading
      ? <div>Chargement de l'image en cours...</div>
      : <img src={props.src} alt='Singe mystérieux.' />}
  </div>
)

Photo.propTypes = {
  src: React.PropTypes.string,
  alt: React.PropTypes.string,
  loading: React.PropTypes.bool.isRequired
}

export default Photo
