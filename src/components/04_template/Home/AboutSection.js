import React, { Component } from 'react'
import { FullHeightSection } from '../../01_atom/FullHeightSection';
import { GridContainer, GridItem, ResponsivePhoto, FlexboxOrganism, WidthWrapper } from '../../00_utilities/Utilities';
import StudPic from '../../../assets/GrimmStudioPics/BallSide.jpg'
import { msTheme } from '../../../styles/Theme';
import { ButtonCTA } from '../../01_atom/ButtonCTA';

import { IndustryLogos } from '../../02_molecule/IndustryLogos'


export class AboutSection extends Component {
    render() {
        return (
            <section id="about">
                <FullHeightSection>
                    <GridContainer gTC="1fr 1fr" gridGap="90px" gridGapL="20px" gTCM="1fr">
                        <GridItem alignSelf="center">
                            <FlexboxOrganism>
                                <div>
                                    <h2 >About</h2>
                                    <p>Grimm Forest Music and Sound is the studio of composer Alex Nye offering custom music and sound design for movies and games. </p>
                                    <p> The name Grimm Forest comes from the studio's location in Germany's Black Forest, an inspiration for many of the Grimm brothers' fairytales. Compositions by Alex have been included in projects from these major studios in movies like Sam Raimi produced Poltergeist and the Amazon Series "Hand Of God".</p>
                                    <IndustryLogos />
                                    {/* <p>Click below for bio and latest info</p>
                                    <WidthWrapper width="250px" margin="0px">
                                        <ButtonCTA to="/about" text="More About"></ButtonCTA>
                                    </WidthWrapper> */}
                                    {/* <p>Grimm Forest Music and Sound is the studio of composer Alex Nye offering custom music and sound design for movies and games.</p> */}
                                </div>
                            </FlexboxOrganism>
                        </GridItem>
                        {/* <ResponsivePhoto src={StudPic} bgImg border={`3px solid ${msTheme.colors.primary}`} /> */}
                        <GridItem alignSelf="center">
                            <ResponsivePhoto src={StudPic} bgImg />


                        </GridItem>
                    </GridContainer>

                </FullHeightSection>

            </section >
        )
    }
}
