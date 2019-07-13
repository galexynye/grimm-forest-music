import React from 'react'
import styled from 'styled-components'
import { msTheme } from '../../styles/Theme'
import { NavFooter } from '../03_organism/NavFooter'
import { FlexboxOrganism, WidthWrapper, GridContainer, GridItem, PaddingWrapper } from '../00_utilities/Utilities'

import { ButtonCTA } from '../01_atom/ButtonCTA';




export const FooterStyle = styled.footer`
    /* background-color: ${msTheme.colors.text}; */
    padding: 20px 0px;
    background-color: #070707;
    p{        
        margin:0px 0px 15px 0px;
        color: ${msTheme.colors.textlight};
        font-size: 14px;
        font-family: ${msTheme.font.headerFont}
    }

`

export const Copyright = styled.div``



export const Footer = props => {
    return (
        <FooterStyle>
            <FlexboxOrganism><p >© 2019 Grimm Forest Music</p></FlexboxOrganism>


        </FooterStyle >
    )
}

