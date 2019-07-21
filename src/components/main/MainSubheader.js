import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Typography } from '@material-ui/core'

const MainSubheader = (props) => (
  <Grid container>
    <Grid item xs={12}>
      <Typography variant={'h3'}>
        {props.heading}
      </Typography>
      <Typography>
        {props.description}
      </Typography>
    </Grid>
  </Grid>
)

MainSubheader.propTypes = {
  heading: PropTypes.any,
  description: PropTypes.any
}

export default MainSubheader
