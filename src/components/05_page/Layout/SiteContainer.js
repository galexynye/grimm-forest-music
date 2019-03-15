import React from 'react'
import Helmet from 'react-helmet'
import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'
import { msTheme } from '../../../styles/Theme'
import { reset } from '../../../styles/CSSReset'
import { MainContainer } from './MainContainer'
import { Header } from '../../04_template/Header'
import { Footer } from '../../04_template/Footer'
import { SidebarMobileNav } from '../../04_template/SideBarMobileNav'

import favicon from '../../../assets/GrimmGraphics/grimmfavicon180.png'

// Global Styling & Utility Classes

const SiteContainerStyle = styled.div`
    position: relative;
`

const Poop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
`
const PoopButton = styled.div`
    position: fixed;
    top: 0;
    left: 50%;
    z-index: 10000000000000000;
`

const GlobalStyle = createGlobalStyle`

${reset}

body{
    background-color: ${msTheme.colors.bgColor};
    box-sizing: border-box;
    font-family: ${msTheme.font.bodyFont};
}

h1 {
    color: ${msTheme.colors.text};
	font-family: ${msTheme.font.headerFont}, Arial, Helvetica, sans-serif;
	/* font-size: 94px; */
	font-size: 60px;
	font-weight: 300;
	letter-spacing: -3px;
	/* line-height: 87px; */
	line-height: 53px;
	margin-bottom: 27px;
	/* text-transform: uppercase; */
     word-wrap: break-word;
}

.h1Big{
    font-size: 94px;
    line-height: 87px;
}

h2 {
    color: ${msTheme.colors.text};
	font-family: ${msTheme.font.headerFont}, Arial, Helvetica, sans-serif;
	font-size: 45px;
	font-weight: 600;
	letter-spacing: -1px;
	line-height: 39px;
	margin-bottom: 20px;
    margin-top: 80px;
	/* text-transform: uppercase; */
    :first-child{
        margin-top: 10px;
    }
    
} 


 @media screen and (max-width: ${msTheme.breakPoints.medium + "px"} ) {
     h2{
         padding-top: 5px;
     }
 }


h3 {
    color: ${msTheme.colors.text};
    font-size: 27px;
    margin-bottom: 14px;
    padding-top: 5px;
}

 h4, h5 {
         color: ${msTheme.colors.text};
    font-size: 22px;
    margin-bottom: 14px;
    padding-top: 5px;
}

p {
    color: ${msTheme.colors.text};
	font-family: ${msTheme.font.bodyFont}, Arial, Helvetica, sans-serif;
	font-size: 19px;
	font-weight: 300;
	line-height: 27px;
	margin-bottom: 27px;
}

ol, ul {
    padding-left: 19px;
    margin-bottom: 22px;
    color: ${msTheme.colors.text};
}

ul {
    list-style-type: circle;
    
}

ol {
    list-style-type: decimal;
    
}

li {
    font-size: 19px;
    line-height: 27px;
    margin: 0px 0px 10px 5px;
}

a {
    text-decoration: none;
    color: ${msTheme.colors.primary};
    &:hover{
        text-decoration: underline
    }
}


.colorPrimary {
    color: ${msTheme.colors.primary}
}

.center {
    text-align: center;
}

.noMargin{
    margin:0px;
}

.mT20{
    margin-top: 20px; 
}

.mL20{
    margin-left: 20px;
}

.mT40{
    margin-top: 40px
    ${msTheme.mediaquery().medium}{
        margin-top: 20px;
    }
}
.mT60{
    margin-top: 60px
}

.mT80{
    margin-top: 80px;
}

.mB20{
    margin-bottom: 20px;
}

.mB0{
    margin-bottom: 0px;
}


.mB40 {
    margin-bottom: 40px;
}
.mB60 {
    margin-bottom: 60px;
}

.pB40{
    padding-bottom: 40px;
}

.pT20{
    padding-top: 20px;
}

.pT40{
    padding-top: 40px;
}



.hideMobile {
    @media screen and (max-width: ${msTheme.breakPoints.small}) {
        display: none;
    }
}

.hideMedium {
    @media screen and (min-width: ${msTheme.breakPoints.medium}) {
        display: none;
    }
}

.hide{
    display: none;
}

.headerFont{
    font-family: ${msTheme.font.headerFont};
}

.altHeader{
    font-weight: 600;
    font-family: ${msTheme.font.headerFont};
    font-size: 20px;
}

.altP{
    font-family: ${msTheme.font.headerFont};
    font-size: 16px;
    line-height: 20px;
}

.lSTN{
    list-style-type:none;
}

.bold{
    font-weight: bold;
}

.tDNone{
    text-decoration:none;
    &:hover{
        text-decoration:none;
    }
}

.primary {
    color: ${msTheme.colors.primary}
}

.fS25{
    font-size: 25px;
}

`

// Context Api Context

const SiteContext = React.createContext();

// Provider component. Global State

class SiteProvider extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            german: false,
            bob: "Bob is meah"
        }
    }
    render() {
        return (
            <SiteContext.Provider value={{
                state: this.state,
                toggleGerman: () => this.setState({
                    german: !this.state.german
                })
            }}>
                {this.props.children}
            </SiteContext.Provider>
        )
    }

}


class SiteContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            mobileMenuOpen: false,

            windowWidth: 0, // initially set to 0 because 
        }
    }
    componentDidMount() {
        this._handleWindowSizeChange()
        window.addEventListener('resize', this._handleWindowSizeChange)
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this._handleWindowSizeChange)
    }
    _toggleMobileMenu = () => {
        this.setState({
            mobileMenuOpen: !this.state.mobileMenuOpen,
        })
    }

    _handleWindowSizeChange = () => {
        this.setState({
            windowWidth: window.innerWidth
        })
        if (this.state.windowWidth > msTheme.breakPoints.medium) {
            this.setState({
                mobileMenuOpen: false
            })
        }
    }
    render() {
        const { children, headerPosition } = this.props
        return (
            // From The SiteContext
            <SiteProvider>
                <Helmet
                    meta={[
                        {
                            name: 'google-site-verification',
                            content: 'ApEgiydr2XV738hMqiDL6JyWjg0Cq5ybbWmQrnDHq9c',
                        },
                    ]}
                    link={[
                        {
                            rel: 'shortcut icon',
                            type: 'image/png',
                            href: `${favicon}`,
                        },

                    ]}
                >
                    <link href="https://fonts.googleapis.com/css?family=Reenie+Beanie|Ubuntu" rel="stylesheet" />
                </Helmet>
                <GlobalStyle />

                {/* {!this.state.german && <Poop><p>Poop</p></Poop>}
                {this.state.german && <Poop><p>Das Poop</p></Poop>}
                <PoopButton><p onClick={this._toggleGerman}>Toggle Poop</p></PoopButton> */}
                <SidebarMobileNav mobileMenuOpen={this.state.mobileMenuOpen} toggleMobileMenu={this._toggleMobileMenu} />
                <MainContainer mobileMenuOpen={this.state.mobileMenuOpen} toggleMobileMenu={this._toggleMobileMenu}>
                    <Header toggleMobileMenu={this._toggleMobileMenu} headerPosition={headerPosition}></Header>
                    {children}
                    <Footer></Footer>
                </MainContainer>
            </SiteProvider>
        )
    }
}

export default SiteContainer

