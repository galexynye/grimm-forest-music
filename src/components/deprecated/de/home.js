import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import SiteContainer from '../../components/05_page/Layout/SiteContainer'
import IndexPage from '../../components/05_page/Pages/index'
import { pageDataGerman } from '../../sitedata/PageData/indexData'


export default class Home extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            snowing: true
        }
    }

    snowToggle = () => {
        this.setState({ snowing: !this.state.snowing })
    }

    render() {
        const { data } = this.props
        const siteTitle = data.site.siteMetadata.title

        return (

            <SiteContainer>
                <Helmet
                    meta={[{ name: 'description', content: 'Articles, Tutorials, Professional Music Services and a Blog on Music Production' }]}
                    title={`${siteTitle}`}
                />
                <IndexPage pageData={pageDataGerman} />
            </SiteContainer >
        )
    }
}


// export const pageQuery = graphql`
//   query {
//    site {
//     siteMetadata {
//       title    
//     }
//   }


// }
// `