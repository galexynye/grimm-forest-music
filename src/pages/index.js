import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import SiteContainer from '../components/05_page/Layout/SiteContainer'
import { msTheme } from '../styles/Theme'
import { Snow } from '../components/01_atom/Snow'
import Logo from '../assets/GrimmGraphics/grimmTree_White_390x618.png'
import { GridContainer, ResponsivePhoto, FlexboxOrganism, WidthWrapper } from '../components/00_utilities/Utilities';
import { ButtonCTA } from '../components/01_atom/ButtonCTA';
import Screen from '../assets/GrimmStudioPics/BallSide.jpg'
import grimmWords from '../assets/GrimmGraphics/grimmWords_White_406x145.png'
import SnowFlake from '../assets/GrimmGraphics/snowflake_100x100.png'

// Sets A Main Container Size
const containerSize = msTheme.widths.wide

const HomeContainer = styled.div`
  min-height: calc(100vh - ${msTheme.heights.header});
  display: flex;
`

const SnowflakeWrapper = styled.div`
  position: absolute; 
  top: 0;
  right: 0;
  img{
    padding: 25px;
    max-width: 40px;
  }
  ${msTheme.mediaquery().medium}{
    display: none;
  }
`



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
    // const siteTitle = "Grimm Forest"
    return (
      // <SiteContainer headerPosition="absolute">
      <div>


        <SiteContainer>
          {this.state.snowing && <Snow />}

          <Helmet
            meta={[{ name: 'description', content: 'Articles, Tutorials, Professional Music Services and a Blog on Music Production' }]}
            title={`${siteTitle}`}
          />
          <HomeContainer>

            {/* <p>Hello</p> */}
            {/* <FlexboxOrganism height="100vh"> */}
            <GridContainer margin="20px auto" gTC="1fr 1fr" gTCM="1fr" >
              <SnowflakeWrapper onClick={this.snowToggle}>
                <img src={SnowFlake} />
              </SnowflakeWrapper>

              <FlexboxOrganism>
                <div className="center">
                  <ResponsivePhoto src={grimmWords} margin="0px 0px 20px 0px" />
                  {/* <h2 className="mT40">Let's Collaborate</h2> */}
                  <p>Music crafted for emotional impact. Sound sculpted for fidelity across all playback sources.  </p>
                  <p>"My goal with our collaboration is to make music people want to remember; music that grabs the audience and immerses them into another world."</p>
                  <p>-Saywell</p>
                  <WidthWrapper width="250px" widthSmall="250px">
                    <ButtonCTA to="/listen" text="Listen" color={msTheme.colors.bgColor} bgColor={msTheme.colors.primary} />
                  </WidthWrapper>
                  {/* <WidthWrapper width="300px">
                    <ResponsivePhoto borderRadius="40%" src={Screen} ></ResponsivePhoto>
                  </WidthWrapper> */}
                  {/* <ResponsivePhoto src={Screen} ></ResponsivePhoto> */}
                </div>
              </FlexboxOrganism>

              <FlexboxOrganism>
                {/* <img src={Logo} style={{ maxHeight: "700px" }} /> */}
                <img src={Logo} />

              </FlexboxOrganism>

              {/* <FlexboxOrganism>
              <p>Music crafted for emotional impact. Sound sculpted for fidelity across all playback sources. </p>
            </FlexboxOrganism> */}


            </GridContainer>
            {/* </FlexboxOrganism> */}
          </HomeContainer>
        </SiteContainer >
      </div>
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