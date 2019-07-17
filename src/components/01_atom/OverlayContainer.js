import React, { Component } from 'react'
import styled from 'styled-components'
import { ButtonCTA } from './ButtonCTA';

const OverlayContainerStyle = styled.div`
    z-index: 1000;
    position: fixed;
    height: 100vh;
    width:100vw;
    background-color:rgba(12, 12, 12, 0.9);
    top:0px;
    left: 0px;
    display: ${props => props.display || 'none'};
`
export const CloseOutWrapper = styled.div`
    position: absolute;
    bottom: 10px;
       left: 50%;
    transform: translate(-50%, 0);
`

export class OverlayContainer extends Component {
    render() {
        const { children, _toggle } = this.props
        return (
            <OverlayContainerStyle display={this.props.display ? 'block' : 'none'}>
                <CloseOutWrapper>
                    <ButtonCTA _handleClick={_toggle} text="Close"></ButtonCTA>
                </CloseOutWrapper>
                {this.props.display && children}
            </OverlayContainerStyle>
        )
    }
}
