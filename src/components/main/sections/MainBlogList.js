import React from 'react'
import BlogRoll from '../../BlogRoll'
import LinkButton from '../../LinkButton'
import { Grid, Typography } from '@material-ui/core'

const MainBlogList = () => (
  <Grid container style={{marginBottom: 40}}>
    <Grid item xs={12}>
      <Typography variant={'h3'} gutterBottom>
        Derniers articles
      </Typography>
      <BlogRoll />
      <LinkButton href={"/blog"} text={"Voir tout"} />
    </Grid>
  </Grid>         
)

export default MainBlogList
