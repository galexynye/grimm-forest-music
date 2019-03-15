import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import SiteContainer from '../../components/05_page/Layout/SiteContainer'
import IndexPage from '../../components/05_page/Pages/index'


const pageData = {
    p1: "Musik crafted for emotional impact. Sound sculpted for fidelity across all playback sources.",
    p2: "My goal with our collaboration is to make music people want to remember; music that grabs the audience and immerses them into another world.",
    to: "/de/listen"
}

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
                <IndexPage pageData={pageData} />
            </SiteContainer >
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