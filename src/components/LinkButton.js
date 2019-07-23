import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { Button, Grid } from '@material-ui/core'

const LinkButton = (props) => {
  const {href, text} = props
  return (
    <Grid container justify={'center'}>
      <Grid item>
        <Link to={href} style={{textDecoration: 'none'}}>
          <Button variant={'outlined'} color={'primary'}>      
              {text}     
          </Button>
        </Link>
      </Grid>
    </Grid>
  )
}

LinkButton.propTypes = {
  href: PropTypes.string,
  text: PropTypes.string
}

export default LinkButton
