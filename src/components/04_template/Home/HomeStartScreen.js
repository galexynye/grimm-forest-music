import React, { useRef, useEffect, useContext } from 'react'
import styled from 'styled-components'
import { FullHeightSection } from '../../01_atom/FullHeightSection';
import { OverlayContainer } from '../../01_atom/OverlayContainer'
import GrimmForestWords from '../../../assets/GrimmGraphics/GrimmForest_1000px.png'
import MusicandSound from '../../../assets/GrimmGraphics/MusicandSound_Home.png'
import AudioforImpact from '../../../assets/GrimmGraphics/AudioForImpact_Home.png'
import GrimmTreeCircle from '../../../assets/GrimmGraphics/GrimmCircleTree_315px.png'
import PlayCircle from '../../../assets/GrimmGraphics/PlayCircle_315px.png'
import { FlexboxOrganism, GridContainer, ResponsiveIframe, WidthWrapper, GridItem, ResponsivePhoto } from '../../00_utilities/Utilities';
import { msTheme } from '../../../styles/Theme'
import { SiteContext } from '../../05_page/Layout/SiteContainer';

// There's three goddamn components in here

const HomeWordsPics = styled.img`
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


const BigPlayTrailerButtonStyle = styled.button`
    min-height: 330px;
    min-width: 330px;
    font-size: 100%;
    font-family: inherit;
    border: 0;
    padding: 0;
    border-radius: 50%;
    background-color: ${msTheme.colors.bgColor};
    img{
    &:hover{
        cursor: pointer;
    }
    }
`


// Trailer button that starts play by taking the function in via props

export class BigPlayTrailerButton extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            showTree: true
        }
    }
    toggleTree = () => {
        this.setState({
            showTree: !this.state.showTree
        })
    }
    render() {

        return (
            <BigPlayTrailerButtonStyle onClick={this.props.onClick} onMouseEnter={this.toggleTree} onMouseLeave={this.toggleTree}>
                {this.state.showTree && <img src={GrimmTreeCircle} />}
                {!this.state.showTree && <img src={PlayCircle} />}
            </BigPlayTrailerButtonStyle >
        )
    }
}






// Hook that alerts clicks outside of the passed ref

function useOutsideAlerter(ref, _outSideClickHandler) {
    function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
            _outSideClickHandler() // Does the function if clicked outside of the ref
        }
    }

    useEffect(() => {
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    });
}

// Functional component that shows the trailer 
const HomeScreenCenterPics = () => {
    const context = useContext(SiteContext) // Get's Site global context
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef, context._toggleShowHomeTrailer); // Passes the function to change state adn rap to the hook (defined above)
    return (
        // top Image Grim Forest
        <React.Fragment>
            <FlexboxOrganism padding="0px 20px 20px 20px">
                <HomeWordsPics src={MusicandSound} />
            </FlexboxOrganism>

            {/* Tree button and Playback overlay */}
            <SiteContext.Consumer>
                {
                    context => {
                        return (
                            <React.Fragment>
                                <FlexboxOrganism padding="0px 20px 20px 20px">
                                    <BigPlayTrailerButton onClick={context._toggleShowHomeTrailer} />
                                </FlexboxOrganism>
                                <OverlayContainer display={context.state.showHomeTrailer} _toggle={context._toggleShowHomeTrailer}>
                                    <FlexboxOrganism height="100vh">
                                        <GridContainer gTC="1fr" gTCL="1fr" gTCM="1fr">
                                            <GridItem alignSelf="center" height="100vh">


                                                <ResponsiveIframe ref={wrapperRef}>
                                                    <iframe src="https://player.vimeo.com/video/348605943" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
                                                    <p style={{ fontSize: "24px", zIndex: '-1', position: 'absolute', top: '50%', left: "50%", transform: "translate(-50%, -50%)" }}>Loading...</p>
                                                </ResponsiveIframe>

                                            </GridItem>

                                        </GridContainer>
                                    </FlexboxOrganism>

                                </OverlayContainer>

                            </React.Fragment>
                        )
                    }
                }
            </SiteContext.Consumer>

            <FlexboxOrganism padding="0px 20px 20px 20px">
                <HomeWordsPics src={AudioforImpact} />
            </FlexboxOrganism>
        </React.Fragment>
    )

}

const HomeStartScreen = () => {
    return (
        <section id="top">
            <FullHeightSection>
                <GridContainer gTC="1fr" gTCL="1fr" gTCM="1fr">
                    <FlexboxOrganism margin="-70px 0px 0px 0px" marginSmall="30px 0px 0px 0px" paddingSmall="0px">
                        <img style={{ maxWidth: "90vw", margin: 'auto' }} src={GrimmForestWords} />
                    </FlexboxOrganism>

                    {/* Long Container */}
                    <HomePicsContainerTall>
                        <GridContainer gTC="1fr" gTCL="1fr" gTCM="1fr">
                            <HomeScreenCenterPics />
                        </GridContainer>
                    </HomePicsContainerTall>

                    {/* Short Containers  */}
                    <HomePicsContainerShort>
                        <GridContainer gTC="1fr 1fr 1fr" gTCL="1fr 1fr 1fr" gTCM="1fr">
                            <HomeScreenCenterPics />
                        </GridContainer>
                    </HomePicsContainerShort>


                </GridContainer>
            </FullHeightSection>
        </section>
    )
}

export default HomeStartScreen
