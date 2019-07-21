import React from 'react'
import PropTypes from 'prop-types'
import MainPitch from './MainPitch'
import MainSubheader from './MainSubheader'
import MainProductsList from './MainProductsList'
import MainBlogList from './MainBlogList'

export const MainBody = (props) => (
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <MainPitch mainpitch={props.mainpitch} />
                <MainSubheader 
                  heading={props.heading}
                  description={props.description}
                />
                {props.productsList && <MainProductsList intro={props.intro} />}
                {props.blogList && <MainBlogList />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
)

MainBody.propTypes = {
  mainpitch: PropTypes.object,
  heading: PropTypes.string,  
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  productsList: PropTypes.bool.isRequired,
  blogList: PropTypes.bool.isRequired
}

export default MainBody
