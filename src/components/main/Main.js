import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import MainHeader from './MainHeader'
import MainBody from './MainBody'

const Main = (props) => {
  return ( 
    <Fragment>
      <MainHeader
        image={props.frontmatter.image}
        title={props.frontmatter.title}
        subheading={props.frontmatter.subheading}
      />
      <MainBody
        heading={props.frontmatter.heading}
        description={props.frontmatter.description}
        intro={props.frontmatter.intro}
        mainpitch={props.frontmatter.mainpitch}
        pitch={props.frontmatter.pitch}
        productsList={props.frontmatter.productsList}
        subheader={props.frontmatter.subheader}
        blogList={props.frontmatter.blogList}
      />
    </Fragment>
  )
}

Main.propTypes = {
  frontmatter: PropTypes.any
}

export default Main
