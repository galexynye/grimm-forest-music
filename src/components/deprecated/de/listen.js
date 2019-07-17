
import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import { pageDataGerman } from '../../sitedata/PageData/listenData'
import ListenComponent from '../../components/05_page/Pages/listen'


// Services Page, contains the State and methods for the React Player 

class Listen extends React.PureComponent {
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

                <Helmet
                    meta={[{ name: 'description', content: 'Hear a sampling of original music from Grimm Forest Music and Sound' }]}
                    title={`Listen | ${siteTitle}`}
                >

                </Helmet>
                <ListenComponent pageData={pageDataGerman} />


            </div>
        )
    }
}

export default Listen

// export const pageQuery = graphql`
//   query {
//    site {
//     siteMetadata {
//       title    
//     }
//   }


// }
// `