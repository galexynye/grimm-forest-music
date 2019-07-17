import React, { Component } from 'react'
import { FullHeightSection } from '../../01_atom/FullHeightSection';
import { GridContainer, GridItem, ResponsivePhoto, FlexboxOrganism, WidthWrapper, ResponsiveIframe } from '../../00_utilities/Utilities';
import StudPic from '../../../assets/GrimmStudioPics/BallSide.jpg'
import { msTheme } from '../../../styles/Theme';
import { ButtonCTA } from '../../01_atom/ButtonCTA';
import { SiteContext } from '../../05_page/Layout/SiteContainer';


export class MusicSection extends Component {
    render() {
        return (
            <section id="music">
                <FullHeightSection>
                    <GridContainer gTC="1fr 1fr" gTCL="1fr" gridGap="90px" gridGapL="20px" gTCM="1fr">
                        {/* <ResponsiveIframe><iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/814433031&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe></ResponsiveIframe> */}
                        <GridItem orderL="2" alignSelf="center">
                            {/* <ResponsiveIframe> */}
                            {/* <iframe width="100%" height="350px" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/814433031&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=true"></iframe> */}
                            <iframe width="100%" height="325" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/827858171&color=%233c3c3c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
                            {/* </ResponsiveIframe> */}
                        </GridItem>
                        <GridItem orderL="1" alignSelf="center">
                            {/* <FlexboxOrganism> */}
                            <div>
                                <h2 >Instrumental Tracks</h2>
                                <p>Here is a collection of original compositions and songs made at Grimm Forest Music. Below is button to watch a short preview of several tracks with slightly higher sound quality and some visuals.</p>
                                <WidthWrapper width="250px" margin="0px">
                                    <SiteContext.Consumer>
                                        {context => {
                                            return (
                                                <a href="#top"><ButtonCTA _handleClick={context._toggleShowHomeTrailer} text="Watch Grimm Preview"></ButtonCTA></a>
                                            )
                                        }}

                                    </SiteContext.Consumer>
                                </WidthWrapper>
                            </div>
                            {/* <p>Grimm Forest Music and Sound is the studio of composer Alex Nye offering custom music and sound design for movies and games.</p> */}
                            {/* </FlexboxOrganism> */}
                        </GridItem>
                        <GridItem orderL="3" alignSelf="center">
                            <h2>Songs</h2>
                            <p>Before I fell in love with composing and producing, I was songwriter...still am. The songs here are done as an artistic expression without any particular commercial objective. If you are interested in licensing a song or want me to work on a song for your project I'm happy to hear from you. I hope you enjoy them!</p>

                        </GridItem>
                        <GridItem orderL="4" alignSelf="center">
                            {/* <ResponsiveIframe> */}
                            <iframe width="100%" height="325" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/814433031&color=%233c3c3c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
                            {/* </ResponsiveIframe> */}
                        </GridItem>
                    </GridContainer>
                </FullHeightSection>
            </section>
        )
    }
}
