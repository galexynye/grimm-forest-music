import React from 'react'
import styled from 'styled-components'
import { msTheme } from '../../../styles/Theme'
import { Snow } from '../../01_atom/Snow'
import { GridContainer, ResponsivePhoto, FlexboxOrganism, WidthWrapper } from '../../00_utilities/Utilities';
import { ButtonCTA } from '../../01_atom/ButtonCTA';
import Logo from '../../../assets/GrimmGraphics/grimmTree_White_390x618.png'

import grimmWords from '../../../assets/GrimmGraphics/grimmWords_White_406x145.png'
import SnowFlake from '../../../assets/GrimmGraphics/snowflake_100x100.png'



const HomeContainer = styled.div`
  min-height: calc(95vh - ${msTheme.heights.header});
  display: flex;
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
                {this.state.snowing && <Snow />}
                <GridContainer margin="20px auto" gTC="1fr 1fr" gTCM="1fr" >
                    <SnowflakeWrapper onClick={this.snowToggle}>
                        <img src={SnowFlake} />
                    </SnowflakeWrapper>

                    <FlexboxOrganism>
                        <div>
                            {/* <div className="center"> */}
                            <ResponsivePhoto src={grimmWords} margin="0px auto 30px auto" />
                            {/* </div> */}
                            {/* <img src={grimmWords} /> */}
                            <p>{pageData.p1}</p>
                            <p>{pageData.p2}</p>
                            {/* <p>{pageData.p3}</p> */}
                            <WidthWrapper width="250px" margin="0px">
                                <ButtonCTA to={pageData.to} text="Listen" color={msTheme.colors.bgColor} bgColor={msTheme.colors.primary} />
                            </WidthWrapper>
                        </div>
                    </FlexboxOrganism>

                    <FlexboxOrganism>

                        <img src={Logo} />

                    </FlexboxOrganism>


                </GridContainer>


            </HomeContainer>

        )
    }
}


