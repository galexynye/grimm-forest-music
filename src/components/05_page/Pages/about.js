import React from 'react'
import { msTheme } from '../../../styles/Theme'
import { PageTitle } from '../../01_atom/PageTitle'
import { GridContainer, ResponsivePhoto, WidthWrapper, FlexboxOrganism, GridItem } from '../../00_utilities/Utilities';
import Millenia from '../../../assets/GrimmStudioPics/Millenia.jpg'
import Saywell from '../../../assets/SaywellPics/SaywellLookingDown.jpg'
import Footpedal from '../../../assets/GrimmStudioPics/FootPedal.jpg'
import { ButtonCTA } from '../../01_atom/ButtonCTA';


class About extends React.Component {
    render() {
        const { aboutData } = this.props
        return (
            <div>
                <PageTitle text={aboutData.pageTitle.text} description={aboutData.pageTitle.description} ></PageTitle>
                <GridContainer gTC="1fr 1fr" gridGap="140px 80px" gridGapM="40px" gTCM="1fr" margin="30px auto">
                    <GridItem orderM="2" alignSelf="center">
                        {/* <img src={Millenia} style={{ maxWidth: "100%", borderRadius: "40px" }} /> */}
                        <img src={Millenia} style={{ maxWidth: "100%" }} />
                    </GridItem>
                    <GridItem orderM="1" alignSelf="center">

                        <div  >
                            <h2>{aboutData.story.h2}</h2>
                            <p>{aboutData.story.p1}</p>
                            <WidthWrapper width="250px" margin="0px">
                                <ButtonCTA text={aboutData.story.button.text} to={aboutData.story.button.to} bgColor={msTheme.colors.primary} />
                            </WidthWrapper>
                        </div>

                    </GridItem>

                    <GridItem orderM="3" alignSelf="center">


                        <div>
                            <h2>{aboutData.saywell.h2}</h2>
                            <p>{aboutData.saywell.p1}</p>
                        </div>

                        {/* </FlexboxOrganism> */}
                    </GridItem>
                    <GridItem orderM="4" alignSelf="center">
                        {/* <img src={Saywell} style={{ maxWidth: "100%", borderRadius: "40px" }} /> */}
                        <img src={Saywell} style={{ maxWidth: "100%" }} />
                    </GridItem>



                    <GridItem orderM="6" alignSelf="center">
                        {/* <img src={Footpedal} style={{ maxWidth: "100%", borderRadius: "40px" }} /> */}
                        <img src={Footpedal} style={{ maxWidth: "100%" }} />
                    </GridItem>

                    <GridItem orderM="5" alignSelf="center">


                        <div>
                            <h2>{aboutData.offer.h2}</h2>
                            <p>{aboutData.offer.p1}</p>
                            <WidthWrapper width="250px" margin="0px">
                                <ButtonCTA to={aboutData.offer.button.to} text={aboutData.offer.button.text} bgColor={msTheme.colors.primary} />
                            </WidthWrapper>
                        </div>


                    </GridItem>
                    {/* Google map */}
                    {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2669.5148620284517!2d7.85202231586921!3d48.00376206845021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47911c845da56c13%3A0x669f9aa373e8d76d!2sTennenbacher+Str.+3%2C+79106+Freiburg+im+Breisgau!5e0!3m2!1sen!2sde!4v1552392983047" width="600" height="450" frameborder="0" allowfullscreen></iframe> */}

                </GridContainer>
            </div>

        )
    }
}

export default About

