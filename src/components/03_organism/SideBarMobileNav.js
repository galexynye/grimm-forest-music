import React from 'react'
import styled from 'styled-components'
import { msTheme } from '../../styles/Theme'
import { HomeLinkLogo } from '../01_atom/HomeLinkLogo'
import { ButtonCTA } from '../01_atom/ButtonCTA'

// import {Nav}
// Include the 

const MobileNavContainer = styled.div`
    top: 0;
    display: ${props => props.mobileMenuOpen ? 'block' : 'none'};
    position: relative;
    width: ${msTheme.widths.sidebarMobileMenu};        
    ${msTheme.mediaquery().mediumMin}{
        display: none;
    }
`

const MobileNavStyle = styled.nav`
    ul{
        padding:0px 10px;
        list-style-type: none;
        li{
            margin: auto;
        }
    }
    text-align: center;
    margin: 20px auto;
    /* padding: 20px;  */
`

export const SidebarMobileNav = (props) => {
    //  Theses need to be using standard links as opposed to the AnchorLink component becasue it doesn't actually scroll to it on mobile
    const navListMobile = props.navData.map(link => <li key={link.name}><a href={link.to}><ButtonCTA text={link.name} /></a></li>)
    return (
        <MobileNavContainer mobileMenuOpen={props.mobileMenuOpen} onClick={() => props.toggleMobileMenu()}>
            <MobileNavStyle>
                <HomeLinkLogo height="40px"
                    noGerman={props.noGerman}
                />
                <ul>
                    {navListMobile}
                </ul>
            </MobileNavStyle>
        </MobileNavContainer>
    )
}

// export default MobileNav