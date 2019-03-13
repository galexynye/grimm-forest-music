import React, { Component } from 'react'
import styled from "styled-components";
import { WidthWrapper, FlexboxOrganism } from '../00_utilities/Utilities'
import { msTheme } from '../../styles/Theme'
import bgImage2 from '../../assets/Backgrounds/blackAndWhiteFaders.jpg'
import { ButtonCTA } from "../01_atom/ButtonCTA";
import { Title } from '../02_molecule/Title'
import Yony from '../../assets/ServicesPortfolio/YonyBW.jpg'

const HeroHomeStyle = styled.div`
    margin: ${props => props.margin || "0px"};
    background-position: center;
    height: 100vh;
    background-image:linear-gradient(rgba(100, 100, 100, 0.8), rgba(0, 0, 0, 0.6)), url(${bgImage2});    
    background-size: cover;
    position: relative;
    transition: height 1000000s ease;
`

const HeroHomeElementCenter = styled.div`
    position: absolute;
    left: calc(50% + 100px);
    top: 24%;
    color: white;
    transform: translateX(-50%);
   
    h1{
        color: white;
        margin-bottom: 20px;
        font-size: 80px;
        line-height: 75px;
        text-transform: none;
    }
    /* margin: 0px 15px; */
    ${msTheme.mediaquery().medium}{
        top: 30%;
        left: 50%;
        h1{
            font-size: 45px;
            line-height: 45px;
            font-weight: 600;
            
        }
    }
     ${msTheme.mediaquery().smallHeight}{
        top: 13%;
    }
`

export const ReadMore = styled.div`
    position: absolute;
    bottom: 0;
    left: 48%;
`

export const TestimonialPic = styled.img`
    border-radius: 50%;
    height: 80px;
`


export class HeroService extends Component {
    render() {
        return (
            <HeroHomeStyle margin={this.props.margin}>
                <HeroHomeElementCenter>
                    <WidthWrapper width="600px" >


                        <h1>Professional Music Services</h1>

                        <p className="hideMedium">Original Music | Producing | Mixing & Mastering </p>
                        <WidthWrapper width="350px" margin="0px">
                            <ButtonCTA text="Work With Me" href="#requestBooking" color={msTheme.colors.bgColor} bgColor={msTheme.colors.primary} />
                        </WidthWrapper>

                        <FlexboxOrganism justifyContent="flex-start" alignItems="center" margin="20px 0px">
                            <TestimonialPic src={Yony} />
                            <div>
                                <p className="mL20 mB0 headerFont">"it sounds great dude! wow, f#$%ing killer mix"</p>
                                <p className="center headerFont">-Yony</p>
                            </div>
                        </FlexboxOrganism>
                    </WidthWrapper>
                </HeroHomeElementCenter>
                <ReadMore>
                    <p className="headerFont">Read More &#8595;</p>
                </ReadMore>
            </HeroHomeStyle>
        )
    }
}
