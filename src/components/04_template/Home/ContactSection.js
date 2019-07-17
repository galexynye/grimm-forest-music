import React, { Component } from 'react'
import { FullHeightSection } from '../../01_atom/FullHeightSection';
import { GridContainer, GridItem, ResponsivePhoto, FlexboxOrganism, WidthWrapper, ResponsiveIframe } from '../../00_utilities/Utilities';
import FrogPic from '../../../assets/GrimmStudioPics/Frog.jpg'
import discord from '../../../assets/Icons/Discord-Logo-White.png'
import twitter from '../../../assets/Icons/Twitter_Social_Icon_Circle_White.png'
import { msTheme } from '../../../styles/Theme';
import { ButtonCTA } from '../../01_atom/ButtonCTA';


export class ContactSection extends Component {
    render() {
        return (
            <section id="contact">
                <FullHeightSection>
                    <GridContainer gTC="1fr 1fr" gridGap="90px" gridGapL="20px">
                        {/* <ResponsiveIframe><iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/814433031&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe></ResponsiveIframe> */}

                        <GridItem orderL="1" alignSelf="center">
                            {/* <FlexboxOrganism> */}
                            {/* <div> */}
                            <h2 >Contact</h2>

                            <p>Happy to hear from you if you have any questions, interested in working together, or just want to say hi.</p>
                            <p>Email: <a href="mailto:alex@grimmforestmusic.com">alex@grimmforestmusic.com</a> </p>
                            {/* <p>You can reach me on any of the platforms below.</p> */}
                            <p>Discord: galexnye#2212</p>
                            <p>Twitter: <a href="https://twitter.com/galexnye" target="_blank">@galexnye</a></p>
                            {/* <FlexboxOrganism flexFlow="row" justifyContent="flex-start">
                                <WidthWrapper width="50px">
                                    <ResponsivePhoto src={discord} />
                                </WidthWrapper>
                                <WidthWrapper width="50px">
                                    <ResponsivePhoto src={twitter} />
                                </WidthWrapper>
                            </FlexboxOrganism> */}
                            {/* </div> */}
                            {/* <p>Grimm Forest Music and Sound is the studio of composer Alex Nye offering custom music and sound design for movies and games.</p> */}
                            {/* </FlexboxOrganism> */}
                        </GridItem>
                        <GridItem orderL="2" alignSelf="center">
                            {/* <ResponsivePhoto src={FrogPic}  border={`3px solid ${msTheme.colors.primary}`} /> */}
                            <ResponsivePhoto src={FrogPic} />
                        </GridItem>
                    </GridContainer>
                </FullHeightSection>
            </section>
        )
    }
}
