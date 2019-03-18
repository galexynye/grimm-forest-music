
import React from 'react'
import { GridContainer, GridItem } from '../../00_utilities/Utilities'
// import { msTheme } from '../styles/Theme'
import { HeroService } from '../../04_template/HeroServices'
import { ServicesForm } from '../../04_template/ServicesForm'
import { ServicesOffered } from '../../04_template/ServicesOffered'
import { IndustryLogos } from '../../02_molecule/IndustryLogos'
import Frog from '../../../assets/GrimmStudioPics/Frog.jpg'

class Services extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        const { pageData } = this.props
        return (
            <div>
                <HeroService pageData={pageData} />
                <IndustryLogos />
                <div className="mT80">
                    <ServicesOffered pageData={pageData} />
                </div>
                {/* Contact Part */}
                <GridContainer gTC="1fr 1fr" gridGap="140px 80px" gridGapM="40px" gTCM="1fr" margin="30px auto">
                    <div>
                        <ServicesForm pageData={pageData} />
                    </div>
                    <GridItem alignSelf="center">
                        <h3 className="center">{pageData.directEmail.h3}</h3>
                        <p className="center">{pageData.directEmail.email}</p>
                        <img src={Frog} style={{ maxWidth: "100%" }} />
                        <p className="center mT20">{pageData.directEmail.greatDay}</p>
                    </GridItem>
                </GridContainer>
            </div>
        )
    }
}

export default Services

