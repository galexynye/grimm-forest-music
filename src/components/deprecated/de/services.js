
import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import SiteContainer from '../../components/05_page/Layout/SiteContainer'
import { pageDataGerman } from '../../sitedata/PageData/servicesData'
import ServicesComponent from '../../components/05_page/Pages/services'


// Services Page, contains the State and methods for the React Player 

class Services extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
        }
    }


    render() {
        const { data } = this.props
        const siteTitle = data.site.siteMetadata.title

        return (
            <div>
                <SiteContainer headerPosition="absolute">
                    <Helmet
                        meta={[{ name: 'description', content: 'Professional producing, mixing, mastering and original music for hire.' }]}
                        title={`Professional Music Services - Mixing, Mastering, Producing and Original Music | ${siteTitle}`}
                    >
                        <script src="https://www.google.com/recaptcha/api.js" async defer></script>
                    </Helmet>
                    <ServicesComponent pageData={pageDataGerman} />
                </SiteContainer>

            </div>
        )
    }
}

export default Services

// export const pageQuery = graphql`
//   query {
//    site {
//     siteMetadata {
//       title    
//     }
//   }


// }
// `