import React, {Fragment} from 'react'
import './all.sass'
import Metas from './Metas'
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import theme from '../MuiTheme'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const TemplateWrapper = ({ children }) => {
  return (
    <Fragment>
      <Metas/>
      <MuiThemeProvider theme={createMuiTheme(theme)}>
        <CssBaseline/>
        <Navbar />
        {children}
        <Footer />
      </MuiThemeProvider>
    </Fragment>
  )
}

export default TemplateWrapper
