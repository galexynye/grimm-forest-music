import React from 'react'
import styled from 'styled-components'
import { msTheme } from '../../styles/Theme'
import { FlexboxOrganism, ResponsivePhoto } from '../00_utilities/Utilities';
import Fox from '../../assets/IndustryGraphics/20th-century-fox-logo-png-transparent.png'
import Amazon from '../../assets/IndustryGraphics/Amazon_Studios_logo.svg.png'
import MGM from '../../assets/IndustryGraphics/MGM_Holdings_logo.png'
import Sony from '../../assets/IndustryGraphics/Sony-Classical-Logo.svg.png'

const IndustryContainer = styled.div`
    background-color: rgb(255,255,255);
    border-radius: 3px;
    margin-bottom: 30px;
    /* width: 100vw; */
`

const IndustryWrapper = styled.div`
    display: flex;
    max-width: ${msTheme.widths.wide};
    margin: auto;
    flex-flow: row;     
    justify-content: space-around;
    align-items: center;
    height: 70px;
    padding: 5px;

    img {
        padding: 10px;
        width: 50px;
        /* background-color:white; */
        border-radius: 5px;
        /* border-radius: 50%; */
    }
    ${msTheme.mediaquery().medium}{
        height: 50px;
        img{
            width: 50px;
        }
    }

`


export function IndustryLogos() {
    return (
        <IndustryContainer>

            <IndustryWrapper>
                {/* <p className="center headerFont primary" >Heard on</p> */}
                <img src={Amazon} />
                <img src={Fox} />
                <img src={Sony} />
                <img src={MGM} />
            </IndustryWrapper>

        </IndustryContainer>
    )
}
