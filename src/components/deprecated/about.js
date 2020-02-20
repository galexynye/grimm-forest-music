import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'

import SiteContainer from '../05_page/Layout/SiteContainer'
import AboutComponent from '../05_page/Pages/about'
import { pageData } from '../../sitedata/PageData/aboutData'


class About extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    return (
      <SiteContainer>
        <Helmet
          meta={[{ name: 'description', content: 'About Grimm Forest Music' }]}
          title={`About - General Grimm Forest Music | ${siteTitle}`}
        />
        <AboutComponent pageData={pageData} />
      </SiteContainer>
    )
  }
}

export default About

export const pageQuery = graphql`
  query {
   site {
    siteMetadata {
      title    
    }
  }
  

}
`