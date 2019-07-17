import React from 'react'
import styled from 'styled-components'
import { Input } from "../01_atom/Input";
import { WidthWrapper } from "../00_utilities/Utilities";
import { msTheme } from '../../styles/Theme'
import { Link } from 'gatsby'

// If 'href' props is passed button is an anchor link, if 'to' props is passed, it's a is Gatsby Link, otherwise it's a button that will handle a function

export const ButtonCTAStyle = styled.button`
  margin: ${props => props.margin || "0px 0px 15px 0px"};
  /* padding: ${props => props.bgImg ? "0px" : props.padding || msTheme.utilities().inputAndButtonShare.padding}; */
  padding: ${props => props.padding || msTheme.utilities().inputAndButtonShare.padding};
  border: ${props => props.border || msTheme.utilities().inputAndButtonShare.border};
  border-radius: ${props => props.borderRadius || msTheme.utilities().inputAndButtonShare.borderRadius};
  font-family: ${msTheme.font.buttonFont};
  font-size: 19px;
 
  /* background-image: url(${props => props.bgImg || 'none'});  
  background-size: cover; */
  box-shadow: 0px 0px 2px 0px white;
  img {
    height: 19px;
    margin-bottom: -3px;
  }
  width: 100%; 
  max-width: 100%;
  /* color: ${props => props.color || msTheme.colors.text}; */
  color: ${props => props.color || 'white'};
  align-self: flex-end;

  /* background-color: ${props => props.bgColor || msTheme.colors.primary}; */
  background-color: ${props => props.bgColor || msTheme.colors.bgColor};
  /* background-color: ${props => props.bgColor || 'rgb(255,255,255, .2)'}; */
  ${msTheme.mediaquery().medium}{
    padding: ${props => props.paddingSmall || msTheme.utilities().inputAndButtonShare.paddingSmall};
    display: ${props => props.displayM || 'inline-block'};
  }
  &:hover{
    /* color: white; */
    /* color: black; */
    text-decoration: none;
      
    /* background-image: url(${props => props.bgImgHover || props.bgImage || 'none'});   */
    cursor: pointer;        
    /* background-color: ${msTheme.colors.primary};   */
    /* background-color: ${msTheme.colors.bgColor};   */
    box-shadow: 0px 0px 7px 0px white;
    /* background-color: white;   */
    /* background-color: rgb(255,255,255,.01);   */
  }   
`

const BGImageWrapper = styled.div`
  padding: 12px;
  background-image: url(${props => props.bgImg || 'none'});  
  background-size: cover;
  
  &:hover{
     background-image: url(${props => props.bgImgHover || props.bgImage || 'none'});  
  }
`




// ButtonCTA can return an external link, an internal gatsby link, or call a function

export class ButtonCTA extends React.PureComponent {
  constructor(props) {
    super(props)

  }

  render() {
    const { _handleClick, color, img, bgImg, bgImgHover, bgColor, text, width, margin, padding, href, to, borderRadius, displayM } = this.props

    if (href) {
      return (
        <a href={href}>
          <ButtonCTAStyle bgImgHover={bgImgHover} bgImg={bgImg} bgColor={bgColor} color={color} width={width} margin={margin} padding={padding} borderRadius={borderRadius} displayM={displayM}>
            {/* // eslint-disable-next-line  */}
            {img ? <img src={img} /> : bgImg ? <BGImageWrapper bgImgHover={bgImgHover} bgImg={bgImg} /> : text}
          </ButtonCTAStyle>
        </a>
      )
    }
    if (to) {
      return (
        <Link to={to}>
          <ButtonCTAStyle bgImgHover={bgImgHover} bgImg={bgImg} bgColor={bgColor} color={color} width={width} margin={margin} padding={padding} borderRadius={borderRadius} displayM={displayM}>
            {img ? <img src={img} /> : bgImg ? <BGImageWrapper bgImgHover={bgImgHover} bgImg={bgImg} /> : text}
          </ButtonCTAStyle>
        </Link>
      )
    }
    return (
      <ButtonCTAStyle bgImgHover={bgImgHover} bgImg={bgImg} onClick={_handleClick} bgColor={bgColor} color={color} width={width} margin={margin} padding={padding} borderRadius={borderRadius} displayM={displayM}>
        {img ? <img src={img} /> : bgImg ? <BGImageWrapper bgImgHover={bgImgHover} bgImg={bgImg} /> : text}
      </ButtonCTAStyle>
    )
  }
}


