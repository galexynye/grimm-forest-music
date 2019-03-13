import React from 'react'
import { Link, navigate } from 'gatsby'
import HomeIcon from '../../assets/GrimmGraphics/grimmTreeCircle_White_150x150.png'
import styled from 'styled-components'

const HomeLinkLogoStyle = styled.div`
  img {
   height: ${props => props.height ? props.height : '33px'};
   &:hover{
     cursor: pointer;
   }
  }
`

export const HomeLinkIcon = props => {

  return (
    <HomeLinkLogoStyle height={props.height}>
      <Link to="/" >
        <img
          src={HomeIcon}
          alt="Home Link"
        />
      </Link>
    </HomeLinkLogoStyle>
  )
}




