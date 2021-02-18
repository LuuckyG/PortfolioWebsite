import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Site from './layout/Site'
import Header from './layout/Header'
import Content from './layout/Content'
import Footer from './layout/Footer'
import Router from './layout/Router'


const Layout = ({ children }) => (
  <Site>
    <Helmet
      title="Luuk's Personal Development Site"
      meta={[
        { name: 'description', content: 'Luuk Geelen\'s personal website, portfolio, blog, tutorials, and just cool stuff' },
        { name: 'keywords', content: 'resume, blog, porfolio, tutorials, online courses, luuk geelen' },
      ]}
      script={[
        { 'src': 'https://use.fontawesome.com/releases/v5.0.4/js/all.js'},
      ]}
      link={[
        {'rel':'stylesheet', 'href': 'https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css'},
        {'rel':'stylesheet', 'href': './style.css'}
      ]}
    />
    <Header />
      <Content>
        <Router className="block" />
      </Content>
    <Footer />
  </Site>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout