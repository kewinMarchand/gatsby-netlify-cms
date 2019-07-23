import React from 'react'
import PropTypes from 'prop-types'
import Features from '../../Features'
import LinkButton from '../../LinkButton'
import { Grid } from '@material-ui/core'

const MainProductsList = (props) => (
  <Grid container style={{marginBottom: 40}}>
    <Grid item xs={12} style={{marginBottom: 40}}>
      <Features gridItems={props.intro.blurbs} />
      <LinkButton href={"/products"} text={"Voir tous les produits" }/>
    </Grid>
  </Grid>
)

MainProductsList.propTypes = {
  intro: PropTypes.any
}

export default MainProductsList
