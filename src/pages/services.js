
import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { WidthWrapper, GridContainer, ResponsiveIframe, FlexboxOrganism, ResponsivePhoto, GridItem } from '../components/00_utilities/Utilities'
import SiteContainer from '../components/05_page/Layout/SiteContainer'
import { msTheme } from '../styles/Theme'
import { HeroService } from '../components/04_template/HeroServices'
import { ServicesForm } from '../components/04_template/ServicesForm'
import { ServicesOffered } from '../components/04_template/ServicesOffered'
import { IndustryLogos } from '../components/02_molecule/IndustryLogos'
import Frog from '../assets/GrimmStudioPics/Frog.jpg'





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
                        <script src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit" async defer></script>
                    </Helmet>

                    <HeroService />
                    <IndustryLogos />
                    <div className="mT80">
                        <ServicesOffered />
                    </div>
                    {/* <ServicesCards /> */}
                    {/* <ServicesMovies /> */}

                    <GridContainer gTC="1fr 1fr" gridGap="140px 80px" gridGapM="40px" gTCM="1fr" margin="30px auto">
                        <div>
                            <ServicesForm />
                        </div>
                        <GridItem alignSelf="center">
                            <h3 className="center">Don't like contact forms?</h3>
                            <p className="center">Email directly alex@grimmforestmusic.com</p>

                            <img src={Frog} style={{ maxWidth: "100%" }} />
                            <p className="center mT20">Have a great day!</p>
                        </GridItem>
                    </GridContainer>


                </SiteContainer>

            </div>
        )
    }
}

export default Services

export const pageQuery = graphql`
  query {
   site {
    siteMetadata {
      title    
    }
  }
  

}
`