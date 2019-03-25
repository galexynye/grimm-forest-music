import React from 'react'
import { Link } from 'gatsby'
import { msTheme } from '../../styles/Theme'
import HomeLogo from '../../assets/GrimmGraphics/grimmTreeCircle_White_150x150.png'
import styled from 'styled-components'
import { ResponsiveImage } from '../00_utilities/Utilities'
import { SiteContext } from '../05_page/Layout/SiteContainer';

// const HomeLinkStyle = styled.div`
//   @media (max-width: 900px) {
//     display: ${props => props.displayMobile || 'default'};
//   }
// `

const HomeLinkStyle = styled.div`
  img {
    max-width: 100%;
    height: ${msTheme.heights.header};
    margin-top: 3px;
    ${msTheme.mediaquery().medium}{
        margin-top: 4px;
         height: ${msTheme.heights.headerSmall};
      }
    }
  background-color: ${props => props.bgColor || 'none'};
  padding: ${props => props.padding || '0px'};
  border-radius: ${props => props.borderRadius || '0px'};
`

export const HomeLinkLogo = ({ padding, bgColor, borderRadius }) => {
  return (
    // <HomeLinkStyle displayMobile={props.displayMobile}>
    <HomeLinkStyle padding={padding} bgColor={bgColor} borderRadius={borderRadius} >
      <SiteContext.Consumer>
        {context => (
          <Link to={context.state.german ? "/de/home" : "/"}>
            <img
              src={HomeLogo}
              alt="Home Link Logo pic"
            />

          </Link>
        )}

      </SiteContext.Consumer>

    </HomeLinkStyle>
  )
}


