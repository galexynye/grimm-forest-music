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
    top: 10px;
       right: 30px;
    /* transform: translate(-50%, 0); */
`

export class OverlayContainer extends Component {
    constructor(props) {
        super(props);
        // console.log(this.props.display);

    }
    escFunction = (event) => {
        if (event.key === "Escape") {
            this.props._toggle
            console.log("escape")
            console.log(this.props.display)
        }
    }

    componentDidMount() {
        document.addEventListener("keypress", (e) => { console.log(e.key) }, false);
    }
    // componentWillUnmount() {
    //     document.removeEventListener("keydown", this.escFunction, false);
    // }
    render() {
        // const { children, _toggle } = this.props
        return (
            <OverlayContainerStyle display={this.props.display ? 'block' : 'none'}>
                <CloseOutWrapper >
                    <ButtonCTA _handleClick={this.props._toggle} text="x" ></ButtonCTA>

                </CloseOutWrapper>
                {this.props.display && this.props.children}
            </OverlayContainerStyle>
        )
    }
}


// escFunction = (event) => {
//     if (event.keyCode === 27) {
//         x()
//     }
// }
// componentDidMount() {
//     document.addEventListener("keydown", this.escFunction, false);
// }
// componentWillUnmount() {
//     document.removeEventListener("keydown", this.escFunction, false);
// }