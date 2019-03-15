import React from 'react'
import { GridContainer, GridItem, WidthWrapper } from '../00_utilities/Utilities';
import { msTheme } from '../../styles/Theme'
import { ButtonCTA } from '../01_atom/ButtonCTA'
import LogicScreen from '../../assets/ServicesPortfolio/ForAllIknowOriginalMusic.png'
import Apollo from '../../assets/GrimmStudioPics/ApolloCool.jpg'
import Bass from '../../assets/GrimmStudioPics/Bass.jpg'

export function ServicesOffered() {
    return (
        <div>
            <GridContainer gTC="1fr 1fr" gridGap="140px 80px" gridGapM="40px" gTCM="1fr" margin="30px auto">
                <GridItem orderM="2" alignSelf="center">
                    <img src={LogicScreen} style={{ maxWidth: "100%", borderRadius: "40px" }} />
                </GridItem>
                <GridItem orderM="1" alignSelf="center">

                    <div className="center" >
                        <h2>Original Music</h2>
                        <p>Music written and fully produced with your direction and input. Add emotional depth to your project through musical story telling.</p>
                        <WidthWrapper width="250px" widthSmall="250px">
                            <ButtonCTA to="/listen" text="Listen" bgColor={msTheme.colors.primary} />
                        </WidthWrapper>
                    </div>

                </GridItem>

                <GridItem orderM="3" alignSelf="center">


                    <div className="center">
                        <h2>Mixing & Mastering</h2>
                        <p>Music creatively molded for impact anywhere it's played. You'll get back a stereo audio file that translates anywhere from a hi-fi system to a phone speaker.</p>
                    </div>

                    {/* </FlexboxOrganism> */}
                </GridItem>
                <GridItem orderM="4" alignSelf="center">
                    <img src={Apollo} style={{ maxWidth: "100%", borderRadius: "40px" }} />
                </GridItem>



                <GridItem orderM="6" alignSelf="center">
                    <img src={Bass} style={{ maxWidth: "100%", borderRadius: "40px" }} />
                </GridItem>

                <GridItem orderM="5" alignSelf="center">


                    <div className="center">
                        <h2>Producing</h2>
                        <p>Bring your project to life from a concept or demo to a master production. My goal is to take a band or artist's raw vision and make sure it shines through on a recording.</p>
                        <WidthWrapper width="250px" widthSmall="250px">
                            {/* <ButtonCTA text="Music Services" bgColor={msTheme.colors.primary} /> */}
                        </WidthWrapper>
                    </div>


                </GridItem>

                {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2669.5148620284517!2d7.85202231586921!3d48.00376206845021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47911c845da56c13%3A0x669f9aa373e8d76d!2sTennenbacher+Str.+3%2C+79106+Freiburg+im+Breisgau!5e0!3m2!1sen!2sde!4v1552392983047" width="600" height="450" frameborder="0" allowfullscreen></iframe> */}

            </GridContainer>

        </div>
    )
}
