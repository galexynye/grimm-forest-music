import React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
// import Img from 'gatsby-image'
import SiteContainer from '../components/05_page/Layout/SiteContainer'
import { ArticleContainer } from "../components/05_page/ArticleContainer";
import { msTheme } from '../styles/Theme'
import { PageTitle } from '../components/01_atom/PageTitle'
import { GridContainer, ResponsivePhoto, WidthWrapper, FlexboxOrganism, GridItem } from '../components/00_utilities/Utilities';
import Millenia from '../assets/GrimmStudioPics/Millenia.jpg'
import Saywell from '../assets/SaywellPics/SaywellLookingDown.jpg'
import Footpedal from '../assets/GrimmStudioPics/FootPedal.jpg'
import { ButtonCTA } from '../components/01_atom/ButtonCTA';


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

                <PageTitle text="About" description="Grimm Forest Music & Sound" ></PageTitle>


                {/* <img src={FootPedal} /> */}

                <GridContainer gTC="1fr 1fr" gridGap="140px 80px" gridGapM="40px" gTCM="1fr" margin="30px auto">
                    <GridItem orderM="2" alignSelf="center">
                        <img src={Millenia} style={{ maxWidth: "100%", borderRadius: "40px" }} />
                    </GridItem>
                    <GridItem orderM="1" alignSelf="center">

                        <div className="center" >
                            <h2>What's the story?</h2>
                            <p>Grimm Forest Music & Sound is the studio of artist-producer, Saywell. The name Grimm Forest comes from the studio's location in Germany's Black Forest, an inspiration for many of the Grimm Fairytales.</p>
                            <WidthWrapper width="250px" widthSmall="250px">
                                <ButtonCTA text="Listen" to="/listen" bgColor={msTheme.colors.primary} />
                            </WidthWrapper>
                        </div>

                    </GridItem>

                    <GridItem orderM="3" alignSelf="center">


                        <div className="center">
                            <h2>About Saywell</h2>
                            <p>Alex Nye, artistically known as Saywell, started working in film music in 2012 after graduating from Berklee College of Music. Film Projects include Amazon's Hand of God and 20th Century Fox's Poltergeist. In 2017, he relocated from Los Angeles to Freiburg, Germany, working as an indepedent producer and creating music for media.</p>
                        </div>

                        {/* </FlexboxOrganism> */}
                    </GridItem>
                    <GridItem orderM="4" alignSelf="center">
                        <img src={Saywell} style={{ maxWidth: "100%", borderRadius: "40px" }} />
                    </GridItem>



                    <GridItem orderM="6" alignSelf="center">
                        <img src={Footpedal} style={{ maxWidth: "100%", borderRadius: "40px" }} />
                    </GridItem>

                    <GridItem orderM="5" alignSelf="center">


                        <div className="center">
                            <h2>What's offered?</h2>
                            <p>Fully produced original music, mixing & mastering, producing for other artists. To learn more about the services offered by Grimm Forest Music & Sound click the button below.</p>
                            <WidthWrapper width="250px" widthSmall="250px">
                                <ButtonCTA to="/services" text="Music Services" bgColor={msTheme.colors.primary} />
                            </WidthWrapper>
                        </div>


                    </GridItem>

                    {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2669.5148620284517!2d7.85202231586921!3d48.00376206845021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47911c845da56c13%3A0x669f9aa373e8d76d!2sTennenbacher+Str.+3%2C+79106+Freiburg+im+Breisgau!5e0!3m2!1sen!2sde!4v1552392983047" width="600" height="450" frameborder="0" allowfullscreen></iframe> */}







                </GridContainer>

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