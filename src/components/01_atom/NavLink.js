import React from 'react'
import { Link, navigate } from 'gatsby'
import styled from 'styled-components'
import { msTheme } from '../../styles/Theme'




// NOTE: This is imported into the <NavLinks> component to style the "Snow" button
export const StandardLinkStyle = styled.button`
    font-size: 100%;
    font-family: inherit;
    border: 0;
    padding: 0;
    background-color: inherit;
    color: ${msTheme.colors.text};
    font-family: ${msTheme.font.headerFont}; 
      &:hover{
                text-decoration: none;
                color: ${msTheme.colors.primary};
                cursor: pointer;
            }   
       a{
           /* font-size: 25px; */               
            color: ${msTheme.colors.text};
             /* color: #998C00; */
           
            font-family: ${msTheme.font.headerFont}; 
            font-weight: 300;    
            &:hover{
                text-decoration: none;
                color: ${msTheme.colors.primary};
            }   
        }
`




export class NavLink extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { to, name, external, altStyleAllowed, altStyle } = this.props

        const externalTest = (isExternal, to, name) => {
            if (isExternal) {
                return <a href={to}>{name}</a>
            } else {
                return <Link to={to}>{name}</Link>
            }
        }

        const TheNavLink = externalTest(external, to, name);

        if (altStyle && altStyleAllowed) {
            return (
                <AltLinkStyle>
                    {TheNavLink}
                </AltLinkStyle>
            )
        } else {
            return (
                <StandardLinkStyle>
                    {TheNavLink}
                </StandardLinkStyle>
            )
        }
    }
}






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