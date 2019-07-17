import React from 'react'
import styled from 'styled-components'
import { NavLinks } from '../02_molecule/NavLinks'
import { MainNavLinksData, MainNavLinksDataGerman } from '../../sitedata/navdata'
import { msTheme } from '../../styles/Theme'
import { SiteContext } from '../05_page/Layout/SiteContainer';


// Style for grouping the main nav links
// In Grimm Forest, every page has it's own separate fixed menu at the bottom to navigate the page itself.
// All pages that are not the index page need a "Home Button" (it's already in the mobile sidebare)
// The styling and setup for the SidebarMobile nav is in the "SideBarMobileNav" component
export const NavStyle = styled.nav`
    position: fixed;
    bottom: 25px;
    left: 50%;
    transform: translate(-50%, 0);
    z-index: 1;
    ul {        
        display:flex;
        flex-flow: ${props => props.flow ? props.flow : 'row'};
        justify-content: flex-end;
        margin: ${props => props.margin || '0px'};        
        padding: 0px;
        list-style-type: none;
        li{
            margin: 0px 15px;
        }
        /* & + & {
            margin: 0px 0px 0px 45px;                                 
        }              */
        /* li {
            margin: 0px;
            padding: 0px;
        } */
  
    }
    ${msTheme.mediaquery().medium}{
        display: ${props => props.showSmall ? 'block' : 'none'};
        position: static;
    }
    
`

export const NavMain = (props) => {
    return (
        <NavStyle navData={props.navData} flow={props.flow} margin={props.linksMargin} marginSmall={props.marginSmall} showSmall={props.showSmall}>
            <SiteContext.Consumer>
                {context => (
                    <React.Fragment>
                        {!context.state.german && <NavLinks links={props.navData} snowButton={props.snowButton} altStyleAllowed={true} toggleMobileMenu={props.toggleMobileMenu} />}
                        {context.state.german && <NavLinks altStyleAllowed={true} links={props.navDataGerman} toggleMobileMenu={props.toggleMobileMenu} />}
                    </React.Fragment>
                )}
            </SiteContext.Consumer>

        </NavStyle>
    )
}

// export default MainNavLinks