import React from 'react'
import styled from 'styled-components'
import { msTheme } from '../../styles/Theme'
import { FlexboxOrganism, ResponsivePhoto } from '../00_utilities/Utilities';
import Fox from '../../assets/IndustryGraphics/20th-century-fox-logo-png-transparent.png'
import Amazon from '../../assets/IndustryGraphics/Amazon_Studios_logo.svg.png'
import MGM from '../../assets/IndustryGraphics/MGM_Holdings_logo.png'
import Sony from '../../assets/IndustryGraphics/Sony-Classical-Logo.svg.png'

const IndustryContainer = styled.div`
    background-color: white;
`

const IndustryWrapper = styled.div`
    display: flex;
    max-width: ${msTheme.widths.wide};
    margin: auto;
    flex-flow: row; 
    background-color: white;
    justify-content: space-around;
    align-items: center;
    height: 110px;
    padding-bottom: 20px;
    img {
        /* max-height: 100px; */
        width: 100px;
    }
    ${msTheme.mediaquery().medium}{
        height: 100px;
        img{
            width: 50px;
        }
    }

`


export function IndustryLogos() {
    return (
        <IndustryContainer>
            <p className="center mB0 headerFont primary pT20" >Heard on</p>
            <IndustryWrapper>
                <img src={Amazon} />
                <img src={Fox} />
                <img src={Sony} />
                <img src={MGM} />
            </IndustryWrapper>
        </IndustryContainer>
    )
}
