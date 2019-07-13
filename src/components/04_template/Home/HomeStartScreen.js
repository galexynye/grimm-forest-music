import React from 'react'
import styled from 'styled-components'
import { FullHeightSection } from '../../01_atom/FullHeightSection';
import GrimmForestWords from '../../../assets/GrimmGraphics/GrimmForest_1000px.png'
import MusicandSound from '../../../assets/GrimmGraphics/MusicandSound_Home.png'
import AudioforImpact from '../../../assets/GrimmGraphics/AudioForImpact_Home.png'
import GrimmTreeCircle from '../../../assets/GrimmGraphics/GrimmCircleTree_315px.png'
import PlayCircle from '../../../assets/GrimmGraphics/PlayCircle_315px.png'
import { FlexboxOrganism, GridContainer } from '../../00_utilities/Utilities';
import { msTheme } from '../../../styles/Theme'

const HomePics = styled.img`
    ${msTheme.mediaquery().medium}{
        width: 200px;
    }
    ${msTheme.mediaquery().small}{
        width: 150px;
    }
`
const HomePicsContainerShort = styled.div`
    @media (min-height: 850px) { 
        display: none;
    }
`
const HomePicsContainerTall = styled.div`
    @media (max-height: 850px) { 
        display: none;
    }
`

const HomeStartScreen = () => {
    return (
        <FullHeightSection>
            <GridContainer gTC="1fr" gTCL="1fr" gTCM="1fr">
                <FlexboxOrganism margin="-70px 0px 0px 0px" marginSmall="0px" paddingSmall="0px">
                    {/* <img src={GrimmForestWords} style={{ width: "800px", maxWidth: "100%", margin: "auto" }} /> */}
                    <img src={GrimmForestWords} />
                </FlexboxOrganism>
                <HomePicsContainerShort>
                    <GridContainer gTC="1fr 1fr 1fr" gTCL="1fr 1fr 1fr" gTCM="1fr">
                        <FlexboxOrganism padding="0px 20px 20px 20px">
                            {/* <img src={MusicandSound} style={{ width: "315px", maxWidth: "100%", margin: "auto" }} /> */}
                            <HomePics src={MusicandSound} />
                        </FlexboxOrganism>
                        <FlexboxOrganism padding="0px 20px 20px 20px">
                            <img src={GrimmTreeCircle} />
                        </FlexboxOrganism>
                        <FlexboxOrganism padding="0px 20px 20px 20px">
                            <HomePics src={AudioforImpact} />
                        </FlexboxOrganism>
                    </GridContainer>
                </HomePicsContainerShort>
                <HomePicsContainerTall>
                    <GridContainer gTC="1fr" gTCL="1fr" gTCM="1fr">
                        <FlexboxOrganism padding="0px 20px 20px 20px">
                            {/* <img src={MusicandSound} style={{ width: "315px", maxWidth: "100%", margin: "auto" }} /> */}
                            <HomePics src={MusicandSound} />
                        </FlexboxOrganism>
                        <FlexboxOrganism padding="0px 20px 20px 20px">
                            <img src={GrimmTreeCircle} />
                        </FlexboxOrganism>
                        <FlexboxOrganism padding="0px 20px 20px 20px">
                            <HomePics src={AudioforImpact} />
                        </FlexboxOrganism>
                    </GridContainer>
                </HomePicsContainerTall>
            </GridContainer>
        </FullHeightSection>
    )
}

export default HomeStartScreen
