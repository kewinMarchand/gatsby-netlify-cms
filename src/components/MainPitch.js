import React from 'react'
import PropTypes from 'prop-types'

export const MainPitch = ({mainpitch}) => (
  <div className="content">
    <div className="tile">
      <h1 className="title">{mainpitch.title}</h1>
    </div>
    <div className="tile">
      <h3 className="subtitle">{mainpitch.description}</h3>
    </div>
  </div>
)

MainPitch.propTypes = {
  mainpitch: PropTypes.object
}

export default MainPitch
