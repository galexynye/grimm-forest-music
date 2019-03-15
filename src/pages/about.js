import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'

import SiteContainer from '../components/05_page/Layout/SiteContainer'
import AboutComponent from '../components/05_page/Pages/about'

const aboutData = {
    pageTitle: {
        text: "About",
        description: "Grimm Forest Music & Sound"
    },
    story: {
        h2: "What's the Story",
        p1: "Grimm Forest Music & Sound is the studio of artist-producer, Saywell. The name Grimm Forest comes from the studio's location in Germany's Black Forest, an inspiration for many of the Grimm Fairytales.",
        button: { text: "Listen", to: "/listen" }
    },
    saywell: {
        h2: "About Saywell",
        p1: "Alex Nye, artistically known as Saywell, started working in film music in 2012 after graduating from Berklee College of Music. Film Projects include Amazon's Hand of God and 20th Century Fox's Poltergeist. In 2017, he relocated from Los Angeles to Freiburg, Germany, working as an indepedent producer, mixer, and creating music for media."
    },
    offer: {
        h2: "What's offered?",
        p1: "Fully produced original music, mixing & mastering, producing for other artists. To learn more about the services offered by Grimm Forest Music & Sound click the button below.",
        button: { text: "Music Services", to: "/services" }
    }

}


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
                <AboutComponent aboutData={aboutData} />
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