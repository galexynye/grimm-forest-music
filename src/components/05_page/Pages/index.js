import React from 'react'
import styled from 'styled-components'
import { msTheme } from '../../../styles/Theme'
import { Snow } from '../../01_atom/Snow'
import { GridContainer, ResponsivePhoto, FlexboxOrganism, WidthWrapper } from '../../00_utilities/Utilities';
import { ButtonCTA } from '../../01_atom/ButtonCTA';
import SnowFlake from '../../../assets/GrimmGraphics/snowflake_100x100.png'
import HomeStartScreen from '../../04_template/Home/HomeStartScreen';
import { SiteContext } from '../Layout/SiteContainer'


const HomeContainer = styled.div`
  /* min-height: calc(95vh - ${msTheme.heights.header});
  display: flex; */
`

const SnowflakeWrapper = styled.div`
  position: absolute; 
  top: 7px;
  right: 120px;
  img{
    padding: 25px;
    max-width: 35px;
  }
  &:hover{
      cursor: pointer;
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
    const { pageData } = this.props
    return (
      <HomeContainer>
        {/* This state should be from the React Context */}
        <SiteContext.Consumer>
          {context => (
            <React.Fragment>
              {context.state.snowing && <Snow />}
            </React.Fragment>

          )}
        </SiteContext.Consumer>
        {/* {this.state.snowing && <Snow />} */}
        <HomeStartScreen />

      </HomeContainer>

    )
  }
}


