import React from 'react'
import styled from 'styled-components'
import { NavMain } from '../03_organism/NavMain'
import { HomeLinkLogo } from '../01_atom/HomeLinkLogo'
import { MobileToggle } from '../01_atom/MobileToggle'
import { msTheme } from '../../styles/Theme'

const HeaderContainer = styled.header`
    
    position: ${props => props.headerPosition || 'static'};
    color: white;
    width: 100%;
    z-index: 10;
    ${msTheme.mediaquery().medium}{
        margin: 0px;
        /* padding: 0px 15px; */
    }
`

const HeaderStyle = styled.div`
    position: relative;
    display: flex;
    height: ${msTheme.heights.header};
    justify-content: flex-start;
    align-items: center;
    margin: 10px auto;
    padding: 0px 10px;
    ${msTheme.mediaquery().medium}{
         height: ${msTheme.heights.headerSmall};  
        margin: 5px auto;
        padding: 0px;
    }

`

const HomeLinkLogoWrapper = styled.div`
   max-width: 250px;
   height: ${msTheme.heights.header};
   margin-left: 10px;
    /* ${msTheme.utilities().hideMedium} */
     ${msTheme.mediaquery().medium}{
        max-width: 250px;      
        height: ${msTheme.heights.headerSmall};  
        position: absolute;
        left: 50%;
        margin-left: -25px;
    }
`


export class Header extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        const { noGerman } = this.props
        return (
            <HeaderContainer headerPosition={this.props.headerPosition}>
                <HeaderStyle>
                    <MobileToggle toggleMobileMenu={this.props.toggleMobileMenu} />
                    <HomeLinkLogoWrapper>
                        <HomeLinkLogo noGerman={noGerman} />
                    </HomeLinkLogoWrapper>

                    <NavMain margin="0px 20px" linkMargin="0px 0px 0px 30px" />
                </HeaderStyle>
            </HeaderContainer>
        )
    }
}

export default Header



/*
On Desktop
-Words Logo Homelink
-Nav Organism

On Mobile
-Logo HomoLink
-Hamburger
*/