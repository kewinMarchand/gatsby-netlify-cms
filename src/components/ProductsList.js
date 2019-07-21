import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Features from '../components/Features'
import {Button} from '@material-ui/core'

const ProductsList = (heading, description, intro) => (
  <Fragment>
    <div className="columns">
      <div className="column is-12">
        <h3 className="has-text-weight-semibold is-size-2">
          {heading}
        </h3>
        <p>{description}</p>
      </div>
    </div>
    <Features gridItems={intro.blurbs} />
    <div className="columns">
      <div className="column is-12 has-text-centered">
        <Link to="/products">
          <Button variant="outlined" color={'primary'}>
            Voir tous les produits
          </Button>
        </Link>
      </div>
    </div>
  </Fragment>
)

ProductsList.propTypes = {
  heading: PropTypes.any,
  description: PropTypes.any,
  intro: PropTypes.any
}

export default ProductsList
