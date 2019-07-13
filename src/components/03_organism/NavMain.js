import React from 'react'
import styled from 'styled-components'
import { NavLinks } from '../02_molecule/NavLinks'
import { MainNavLinksData, MainNavLinksDataGerman } from '../../sitedata/navdata'
import { msTheme } from '../../styles/Theme'
import { SiteContext } from '../05_page/Layout/SiteContainer';

// Passes down Main Nav Data 
// Style for grouping the main nav links
const NavStyle = styled.nav`
    position: fixed;
    bottom: 55px;
    left: calc(50% - 335px);
    ul {        
        display:flex;
        flex-flow: ${props => props.flow ? props.flow : 'row'};
        justify-content: flex-end;
        margin: ${props => props.margin || '0px'};
   
        padding: 0px;
        list-style-type: none;      
        /* All this styling should be moved to the NavLink ... and it Should Come from Button CTA */
        li {
            margin: ${props => props.margin ? props.margin : '0px 0px 0px 45px'};
            
             /* border: 1px solid white;
             border-radius: 2px;
             padding: 10px 10px 3px 14px;     */
                
            ${msTheme.mediaquery().large}{
                    margin: ${props => props.marginSmall ? props.marginSmall : '0px 0px 0px 35px'};
                }
        }
  
    }
    ${msTheme.mediaquery().medium}{
        display: ${props => props.showSmall ? 'block' : 'none'};
        position: static;
    }
    
`


export const NavMain = (props) => {
    return (
        <NavStyle flow={props.flow} margin={props.linksMargin} marginSmall={props.marginSmall} showSmall={props.showSmall}>
            <SiteContext.Consumer>
                {context => (
                    <React.Fragment>
                        {!context.state.german && <NavLinks altStyleAllowed={true} links={MainNavLinksData} toggleMobileMenu={props.toggleMobileMenu} />}
                        {context.state.german && <NavLinks altStyleAllowed={true} links={MainNavLinksDataGerman} toggleMobileMenu={props.toggleMobileMenu} />}
                    </React.Fragment>
                )}
            </SiteContext.Consumer>

        </NavStyle>
    )
}

// export default MainNavLinks