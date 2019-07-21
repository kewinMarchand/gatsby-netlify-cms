import React from 'react'
import PropTypes from 'prop-types'

export const MainHeader = ({
  image,
  title,
  subheading
}) => (
  <div
    className="full-width-image margin-top-0"
    style={{
      backgroundImage: `url(${
        !!image.childImageSharp ? image.childImageSharp.fluid.src : image
      })`,
      backgroundPosition: `center`,
      backgroundAttachment: `fixed`
    }}
  >
    <div
      style={{
        display: 'flex',
        height: '150px',
        lineHeight: '1',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <h1
        className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
        style={{
          color: 'white',
          lineHeight: '1',
          padding: '0.25rem',
        }}
      >
        {title}
      </h1>
      <h3
        className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
        style={{
          color: 'white',
          lineHeight: '1',
          padding: '0.25rem',
        }}
      >
        {subheading}
      </h3>
    </div>
  </div>
)

MainHeader.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  subheading: PropTypes.string
}

export default MainHeader
