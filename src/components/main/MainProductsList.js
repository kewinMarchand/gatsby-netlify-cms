import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import Features from '../Features'
import LinkButton from '../LinkButton'

const MainProductsList = (props) => (
  <Fragment>
    <Features gridItems={props.intro.blurbs} />
    <LinkButton href={"/products"} text={"Voir tous les produits" }/>
  </Fragment>
)

MainProductsList.propTypes = {
  intro: PropTypes.any
}

export default MainProductsList
