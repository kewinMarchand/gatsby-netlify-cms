import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import MainHeader from '../components/main/MainHeader'
import MainBody from '../components/main/MainBody'

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return ( 
    <Layout>
      <MainHeader
        image={frontmatter.image}
        title={frontmatter.title}
        subheading={frontmatter.subheading}
      />
      <MainBody
        heading={frontmatter.heading}
        description={frontmatter.description}
        intro={frontmatter.intro}
        mainpitch={frontmatter.mainpitch}
        pitch={frontmatter.pitch}
        productsList={frontmatter.productsList}
        subheader={frontmatter.subheader}
        blogList={frontmatter.blogList}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
        productsList,
        blogList,
        pitch,
        subheader
      }
    }
  }
`
