import React from 'react'
import styled from 'styled-components'
import { Location } from '@reach/router'
import { msTheme } from '../../styles/Theme'
import { NavLink } from '../01_atom/NavLink'
import { SiteContext } from '../05_page/Layout/SiteContainer'
import { ButtonCTA, ButtonCTAStyle } from '../01_atom/ButtonCTA'
import SnowFlakeBlack from '../../assets/GrimmGraphics/snowflake_black_100px.png'
import Snowflake from '../../assets/GrimmGraphics/snowflake_white_svg.svg'

/*
Component Notes

-Recieves an array of Links as props - returns a list of NavLink components
- NOT USED FOR THE MOBILE MENUS

*/

const SnowItem = styled.li`
    ${msTheme.mediaquery().medium}{
        display: none;
    }
`


export class NavLinks extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { snowButton } = this.props
        const navList = this.props.links.map(link => <li key={link.name}><NavLink to={link.to} name={link.name} img={link.img} bgImg={link.bgImg} bgImgHover={link.bgImgHover} linkType={link.linkType}></NavLink></li>)
        return (
            <ul>
                {navList}
                {snowButton && <SnowItem>
                    <SiteContext.Consumer>
                        {context => (
                            // <ButtonCTA bgImgHover={SnowFlakeBlack} bgImg={Snowflake} color="black" _handleClick={context.toggleSnow}></ButtonCTA>
                            <ButtonCTA bgImgHover={SnowFlakeBlack} img={Snowflake} color="black" _handleClick={context.toggleSnow}></ButtonCTA>
                        )}
                    </SiteContext.Consumer>
                </SnowItem>
                }
            </ul>
        )
    }
}

