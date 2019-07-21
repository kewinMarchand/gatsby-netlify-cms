import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { Button } from '@material-ui/core'

const LinkButton = (props) => {
  const {href, text} = props
  return (
    <div className="columns">
      <div className="column is-12 has-text-centered">
        <Link to={href}>
          <Button variant={'outlined'} color={'primary'}>      
              {text}     
          </Button>
        </Link>
      </div>
    </div>
  )
}

LinkButton.propTypes = {
  href: PropTypes.string,
  text: PropTypes.string
}

export default LinkButton
