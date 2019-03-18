import React from 'react'
import { GridContainer, GridItem, WidthWrapper } from '../00_utilities/Utilities';
import { msTheme } from '../../styles/Theme'
import { ButtonCTA } from '../01_atom/ButtonCTA'
import LogicScreen from '../../assets/ServicesPortfolio/ForAllIknowOriginalMusic.png'
import Apollo from '../../assets/GrimmStudioPics/ApolloCool.jpg'
import Bass from '../../assets/GrimmStudioPics/Bass.jpg'

export const ServicesOffered = ({ pageData: { servicesOffered: { originalMusic, mixingAndMastering, producing } } }) => {
    return (
        <div>
            <GridContainer gTC="1fr 1fr" gridGap="140px 80px" gridGapM="20px" gTCM="1fr" margin="30px auto">
                <GridItem orderM="2" alignSelf="center">
                    <img src={LogicScreen} style={{ maxWidth: "100%", borderRadius: "5px" }} />
                </GridItem>
                <GridItem orderM="1" alignSelf="center">

                    <div >
                        <h2>{originalMusic.h2}</h2>
                        <p>{originalMusic.p}</p>
                        <WidthWrapper width="250px" margin="0px">
                            <ButtonCTA to={originalMusic.buttonLink} text={originalMusic.buttonText} bgColor={msTheme.colors.primary} />
                        </WidthWrapper>
                    </div>

                </GridItem>

                <GridItem orderM="3" alignSelf="center">


                    <div>
                        <h2>{mixingAndMastering.h2}</h2>
                        <p>{mixingAndMastering.p}</p>
                    </div>

                    {/* </FlexboxOrganism> */}
                </GridItem>
                <GridItem orderM="4" alignSelf="center">
                    <img src={Apollo} style={{ maxWidth: "100%", borderRadius: "5px" }} />
                </GridItem>



                <GridItem orderM="6" alignSelf="center">
                    <img src={Bass} style={{ maxWidth: "100%", borderRadius: "5px" }} />
                </GridItem>

                <GridItem orderM="5" alignSelf="center">


                    <div>
                        <h2>{producing.h2}</h2>
                        <p>{producing.p}</p>
                    </div>


                </GridItem>

                {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2669.5148620284517!2d7.85202231586921!3d48.00376206845021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47911c845da56c13%3A0x669f9aa373e8d76d!2sTennenbacher+Str.+3%2C+79106+Freiburg+im+Breisgau!5e0!3m2!1sen!2sde!4v1552392983047" width="600" height="450" frameborder="0" allowfullscreen></iframe> */}

            </GridContainer>

        </div>
    )
}
