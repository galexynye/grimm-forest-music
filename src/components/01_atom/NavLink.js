import React from 'react'
import { Link, navigate } from 'gatsby'
import styled from 'styled-components'
import { msTheme } from '../../styles/Theme'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { ButtonCTA } from '../01_atom/ButtonCTA'

// If wasn't using ButtonCTA to style links I could style them here

export class NavLink extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { to, name, linkType, img, bgImg, bgImgHover } = this.props

        // NOTE. This is only test for what type of link is returned
        const linkTypeTest = (linkType, to, name, img) => {
            if (linkType === 'scroll') {
                return <AnchorLink href={to}><ButtonCTA text={name} img={img ? img : false} bgImg={bgImg ? bgImg : false} bgImgHover={bgImgHover ? bgImgHover : false} /></AnchorLink>
            }
            if (linkType === 'external') {
                return <ButtonCTA text={name} href={to} img={img ? img : false} bgImgHover={bgImgHover ? bgImgHover : false} />
            }
            return <ButtonCTA text={name} to={to} img={img ? img : false} bgImgHover={bgImgHover ? bgImgHover : false} />
        }

        const TheNavLink = linkTypeTest(linkType, to, name, img);


        return (
            // <StandardLinkStyle>
            <React.Fragment>
                {TheNavLink}
            </React.Fragment>
        )

    }
}




// NOTE: This is imported into the <NavLinks> component to style the "Snow" button
// export const StandardLinkStyle = styled.button`
//     font-size: 100%;
//     font-family: inherit;
//     border: 0;
//     padding: 0;
//     /* background-color: ${msTheme.colors.bgColor}; */
//     background-color: inherit;
//     color: ${msTheme.colors.text};
//     font-family: ${msTheme.font.headerFont}; 
//       &:hover{
//                 text-decoration: none;
//                 color: ${msTheme.colors.primary};
//                 cursor: pointer;
//             }   
//        a{
//            /* font-size: 25px; */               
//             color: ${msTheme.colors.text};
//              /* color: #998C00; */

//             font-family: ${msTheme.font.headerFont}; 
//             font-weight: 300;    
//             &:hover{
//                 text-decoration: none;
//                 color: ${msTheme.colors.primary};
//             }   
//         }
// `

// const AltLinkStyle = styled.button` 
//     font-size: 100%;
//     font-family: inherit;
//     border: 0;
//     padding: 0;
//     background-color: inherit;

//     a{
//         /* border-radius: 50px; */
//         font-family: ${msTheme.font.headerFont};    
//         padding: 3px 20px;
//         /* color: ${msTheme.colors.text};         */
//         color: white;        
//         background-color: ${msTheme.colors.primary};        
//               /* background-color: ${msTheme.colors.primayhighlighter}; */
//         &:hover{
//                 text-decoration: none; 
//                 /* border-radius: 20px; */
//                 /* color:black; */
//                 /* background-color: ${msTheme.colors.primarylightest};   */
//             } 
//     }
// `