import React, { Component } from 'react'
import { FullHeightSection } from '../../01_atom/FullHeightSection';
import { GridContainer, GridItem, ResponsivePhoto, FlexboxOrganism, WidthWrapper, ResponsiveIframe } from '../../00_utilities/Utilities';
import StudPic from '../../../assets/GrimmStudioPics/BallSide.jpg'
import { msTheme } from '../../../styles/Theme';
import { ButtonCTA } from '../../01_atom/ButtonCTA';


export class MusicSection extends Component {
    render() {
        return (
            <FullHeightSection>

                <GridContainer gTC="1fr 1fr" gridGap="90px" gridGapL="20px" gTCM="1fr">
                    {/* <ResponsiveIframe><iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/814433031&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe></ResponsiveIframe> */}
                    <GridItem orderM="2">
                        <ResponsiveIframe><iframe width="100%" height="100%" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/814433031&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe></ResponsiveIframe>
                    </GridItem>
                    <GridItem orderM="1">
                        <FlexboxOrganism>

                            <h2 style={{ color: msTheme.colors.primary }}>Music</h2>
                            <p style={{ fontFamily: msTheme.font.headerFont }}>Here is a collection of original compositions and songs made at Grimm Forest Music.</p>
                            <p style={{ fontFamily: msTheme.font.headerFont }}>Have you seen the demo video yet?</p>
                            <WidthWrapper width="250px" margin="0px">
                                <ButtonCTA text="Watch Demo" color="black"></ButtonCTA>
                            </WidthWrapper>
                            {/* <p>Grimm Forest Music and Sound is the studio of composer Alex Nye offering custom music and sound design for movies and games.</p> */}
                        </FlexboxOrganism>
                    </GridItem>
                </GridContainer>
            </FullHeightSection>
        )
    }
}
