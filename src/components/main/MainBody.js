import React from 'react'
import PropTypes from 'prop-types'
import MainPitch from './sections/MainPitch'
import MainProductsList from './sections/MainProductsList'
import MainSubheader from './sections/MainSubheader'
import MainBlogList from './sections/MainBlogList'
import { Grid } from '@material-ui/core'

export const MainBody = (props) => (
  <Grid container justify={'center'}>
    <Grid item xs={10}>
      {props.pitch &&
        <MainPitch
          mainpitch={props.mainpitch} 
        />
      }
      {props.productsList && 
        <MainProductsList 
          intro={props.intro} 
        />
      }
      {props.subheader &&
        <MainSubheader 
          heading={props.heading}
          description={props.description}
        />
      }
      {props.blogList && 
        <MainBlogList />
      }
    </Grid>
  </Grid>  
)

MainBody.propTypes = {
  mainpitch: PropTypes.object,
  heading: PropTypes.string,  
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  pitch: PropTypes.bool.isRequired,
  productsList: PropTypes.bool.isRequired,
  blogList: PropTypes.bool.isRequired,
  subheader: PropTypes.bool.isRequired
}

export default MainBody
