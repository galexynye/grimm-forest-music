import React, { PureComponent } from 'react'
import styled from 'styled-components'

const FullHeightSectionStyled = styled.div`        
    min-height: 100vh;
    overflow-x: none;
    overflow-y: none;
    display: flex;    
    justify-content: center;
    align-items: center;
`

export class FullHeightSection extends PureComponent {
    render() {
        const { children } = this.props
        return (
            <FullHeightSectionStyled>
                <div>
                    {children}
                </div>
            </FullHeightSectionStyled>
        )
    }
}
