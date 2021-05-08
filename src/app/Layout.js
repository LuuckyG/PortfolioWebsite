import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Global, css, ThemeProvider } from '@emotion/react'

import theme from '../app/utils/theme'
import Site from './layout/Site'
import Header from './layout/Header'
import Content from './layout/Content'
import Footer from './layout/Footer'
import Router from './layout/Router'
import ScrollToTop from './layout/ScrollToTop'
import site from './utils/site.json'

const globalStyles = css`
  @font-face {
    font-family: 'Playfair Display';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('Playfair Display'), local('Playfair Display');
  }
  @font-face {
    font-family: 'Playfair Display';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local('Playfair Display'), local('Playfair Display');
  }
`;


const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Global styles={globalStyles} />
    <Site>
      <Helmet
        title={site.info.title}
        meta={[
          { name: 'description', content: site.info.description },
          { name: 'keywords', content: site.info.keywords },
        ]}
        script={[]}
        link={[
          { 'rel': 'stylesheet', 'href': 'https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css' },
          { 'rel': 'preconnect', 'href': 'https://fonts.gstatic.com' },
          { 'rel': 'stylesheet', 'href': 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap' }
          // { 'rel': 'stylesheet', 'href': './style.css' }
        ]}
      />
      <Header />
      <Content>
        <Router />
        <ScrollToTop />
      </Content>
      <Footer />
    </Site>
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout