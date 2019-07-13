import React from 'react'
import styled from 'styled-components'
import { msTheme } from '../../styles/Theme'
import { NavLink } from '../01_atom/NavLink'
import { SiteContext } from '../05_page/Layout/SiteContainer'
import { ButtonCTA } from '../01_atom/ButtonCTA'

/*
Component Notes

-Recieves an array of Links as props - returns a list of NavLink components
-Props REQUIRED as Input is an array of Nav Links as "links"
-Props REQUIRED to PASS into NavLink component are "to", "name", "external". (or check link data in the Organism used in)
-Styles for different types of NavLinks (when necessary)

*/

import { StandardLinkStyle } from '../01_atom/NavLink'

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
        const { toggleMobileMenu, altStyleAllowed } = this.props
        const navList = this.props.links.map(link => <li key={link.name}><ButtonCTA to={link.to} text={link.name} color="black" external={link.external} altStyle={link.altStyle} altStyleAllowed={altStyleAllowed} /></li>)
        return (
            <ul onClick={toggleMobileMenu}>
                {navList}
                <SnowItem>
                    <SiteContext.Consumer>
                        {context => (
                            <ButtonCTA text="Snow" color="black" _handleClick={context.toggleSnow}></ButtonCTA>
                        )}
                    </SiteContext.Consumer>
                </SnowItem>
            </ul>
        )
    }
}

