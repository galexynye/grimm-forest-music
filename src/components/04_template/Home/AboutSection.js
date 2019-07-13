import React, { Component } from 'react'
import { FullHeightSection } from '../../01_atom/FullHeightSection';
import { GridContainer, ResponsivePhoto, FlexboxOrganism, WidthWrapper } from '../../00_utilities/Utilities';
import StudPic from '../../../assets/GrimmStudioPics/BallSide.jpg'
import { msTheme } from '../../../styles/Theme';
import { ButtonCTA } from '../../01_atom/ButtonCTA';


export class AboutSection extends Component {
    render() {
        return (
            <FullHeightSection>
                <GridContainer gTC="1fr 1fr" gridGap="90px" gridGapL="20px" gTCM="1fr">
                    <FlexboxOrganism>
                        <div>
                            <h2 style={{ color: msTheme.colors.primary }}>About</h2>
                            <p style={{ fontFamily: msTheme.font.headerFont }}>Grimm Forest Music and Sound is the studio of composer Alex Nye offering custom music and sound design for movies and games.</p>
                            <WidthWrapper width="200px" margin="0px">
                                <ButtonCTA to="/about" text="Read More" color="black"></ButtonCTA>
                            </WidthWrapper>
                            {/* <p>Grimm Forest Music and Sound is the studio of composer Alex Nye offering custom music and sound design for movies and games.</p> */}
                        </div>
                    </FlexboxOrganism>
                    <ResponsivePhoto src={StudPic} borderRadius="230px" border={`3px solid ${msTheme.colors.primary}`} />
                </GridContainer>
            </FullHeightSection>
        )
    }
}
