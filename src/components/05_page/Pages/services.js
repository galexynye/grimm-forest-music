
import React from 'react'
import { WidthWrapper, GridContainer, ResponsiveIframe, FlexboxOrganism, ResponsivePhoto, GridItem } from '../../00_utilities/Utilities'
// import { msTheme } from '../styles/Theme'
import { HeroService } from '../../04_template/HeroServices'
import { ServicesForm } from '../../04_template/ServicesForm'
import { ServicesOffered } from '../../04_template/ServicesOffered'
import { IndustryLogos } from '../../02_molecule/IndustryLogos'
import Frog from '../../../assets/GrimmStudioPics/Frog.jpg'

// Need to pass these down as props from the services.js in the /pages directory, need to pass it down to the 
// components too

const pageData = {
    heroServices: {
        title: "Professional Music Services",
        services: "Original Music | Producing | Mixing & Mastering ",
        buttonText: "Work with Grimm",
        testimonial: '"it sounds great dude! wow, f#$%ing killer mix"',
        person: "-Yony"
    },
    industryLogos: "Heard On",
    servicesOffered: {
        originalMusic: {
            h2: "",
            p: "",
            buttonText: "Listen"
        },
        mixingAndMastering: {
            h2: "Mixing & Mastering",
            p: "Music creatively molded for impact anywhere it's played. You'll get back a stereo audio file that translates anywhere from a hi-fi system to a phone speaker.",
        },
        originalMusic: {
            h2: "Producing",
            p: "Bring your project to life from a concept or demo to a master production. My goal is to take a band or artist's raw vision and make sure it shines through on a recording.",
        },
    },
    servicesForm: {
        servicesOptions: ['--Select--', 'Custom Music', 'Mixing', 'Mastering', 'Producing', 'Licensing', 'Other'],
        needsDone: "What needs done?",
        deadLine: "Deadline (if applicable)",
        describe: "Please describe your project"
    },
    directEmail: {
        h3: "Don't like contact forms?",
        email: "Email directly alex@grimmforestmusic.com",
        greatDay: "Have a great day!"
    }
}



class Services extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
        }
    }


    render() {
        // const { pageData } = this.props


        return (

            <div>
                {/* heroServices */}
                <HeroService />
                {/* Heard On */}
                <IndustryLogos />
                <div className="mT80">
                    {/* ServicesOffered */}
                    <ServicesOffered />
                </div>


                <GridContainer gTC="1fr 1fr" gridGap="140px 80px" gridGapM="40px" gTCM="1fr" margin="30px auto">
                    <div>
                        {/* servicesForm */}
                        <ServicesForm />
                    </div>
                    <GridItem alignSelf="center">
                        {/* directEmail */}
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

