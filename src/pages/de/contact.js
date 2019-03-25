import React, { PureComponent } from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import SiteContainer from '../../components/05_page/Layout/SiteContainer'
import ContactPage from '../../components/05_page/Pages/contact'
import { pageDataGerman } from '../../sitedata/PageData/contactData'


export default class contact extends PureComponent {

    render() {
        const { data } = this.props
        const siteTitle = data.site.siteMetadata.title


        return (
            <SiteContainer>
                <Helmet
                    meta={[{ name: 'description', content: 'Contact Music Sequencing, make suggestions or hire me' }]}
                    title={`Contact | ${siteTitle}`}
                >
                    {/* <script src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit" async defer></script> */}
                    <script src="https://www.google.com/recaptcha/api.js" async defer></script>
                </Helmet>
                <ContactPage pageData={pageDataGerman} />

            </SiteContainer>
        )
    }
}



export const pageQuery = graphql`
  query {
   site {
    siteMetadata {
      title    
    }
  }
  

}
`
