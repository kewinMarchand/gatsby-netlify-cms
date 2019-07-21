import React from 'react'
import { Link } from 'gatsby'
import BlogRoll from '../components/BlogRoll'
import {Button} from '@material-ui/core'

const BlogList = () => (
  <div className="column is-12">
    <h3 className="has-text-weight-semibold is-size-2">
      Derniers articles
    </h3>
    <BlogRoll />
    <div className="column is-12 has-text-centered">
      <Link to="/blog">
          <Button variant="outlined" color={'primary'}>
            Voir tout
          </Button>
        </Link>
    </div>
  </div>            
)

export default BlogList
