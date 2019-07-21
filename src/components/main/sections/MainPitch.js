import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Typography } from '@material-ui/core'

const MainPitch = (props) => (
  <Grid container>
    <Grid item xs={12}>
      <Typography variant={'h3'} gutterBottom>
        {props.mainpitch.title}
      </Typography>
      <Typography variant={'h4'} gutterBottom>
        {props.mainpitch.description}
      </Typography>
    </Grid>
  </Grid>
)

MainPitch.propTypes = {
  mainpitch: PropTypes.any
}

export default MainPitch
