import React from 'react'
import Helmet from 'react-helmet'
import { Location } from '@reach/router';
import { navigate } from "gatsby"
import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'
import { msTheme } from '../../../styles/Theme'
import { reset } from '../../../styles/CSSReset'
import { MainContainer } from './MainContainer'
import { Header } from '../../04_template/Header'
import { Footer } from '../../04_template/Footer'
import { Snow } from '../../01_atom/Snow'

// Nav Menu Imports
import { MainNavData } from '../../../sitedata/navdata'
import { SidebarMobileNav } from '../../03_organism/SideBarMobileNav'
import { NavMain } from '../../03_organism/NavMain'

import favicon from '../../../assets/GrimmGraphics/grimmfavicon180.png'

// Global Styling & Utility Classes

const SiteContainerStyle = styled.div`
    position: relative;
`


const GlobalStyle = createGlobalStyle`

${reset}

body{
    background-color: ${msTheme.colors.bgColor};
    box-sizing: border-box;
    font-family: ${msTheme.font.bodyFont};
    word-wrap: break-word;
}

h1 {
    color: ${msTheme.colors.text};
	font-family: ${msTheme.font.headerFont}, Arial, Helvetica, sans-serif;
	/* font-size: 94px; */
	font-size: 60px;
	font-weight: 100;
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
	font-weight: 100;
	letter-spacing: -1px;
	line-height: 39px;
	margin-bottom: 20px;
    margin-top: 80px;
    max-width: 100vw;
    word-wrap: break-word !important;
	/* text-transform: uppercase; */
    :first-child{
        margin-top: 10px;
    }
    
} 


 @media screen and (max-width: ${msTheme.breakPoints.medium + "px"} ) {
     h2{
         padding-top: 5px;
         font-size: 25px;
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
    /* font-family: ${msTheme.font.headerFont}, Arial, Helvetica, sans-serif; */
	/* font-family:  Arial, Helvetica, sans-serif; */    
	font-size: 19px;
     word-wrap: break-word !important;
	/* font-weight: 100; */
	line-height: 27px;
	margin-bottom: 27px;    
}

 @media screen and (max-width: ${msTheme.breakPoints.medium + "px"} ) {
     p{
         font-size:14px;
         line-height: 18px;
         max-width: 95vw;
     }
     li {
        font-size:14px;
         line-height: 18px;
         max-width: 95vw;
    
}
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
 @media screen and (max-width: ${msTheme.breakPoints.medium + "px"} ) {
li{
    font-size: 14px;
    line-height: 18px;    
}

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

const startingValues = {
    state: {
        german: false,
        snowing: true,
        showHomeTrailer: false,
    },
}

export const SiteContext = React.createContext(startingValues);

// Provider component. Global State

export class SiteProvider extends React.Component {
    constructor(props) {
        super(props)
        this.state = startingValues.state
    }
    render() {
        return (
            <SiteContext.Provider value={{
                state: this.state,
                toggleGerman: (location) => {
                    this.setState({
                        german: !this.state.german,
                    })
                    if (location === "/") {
                        navigate("/de/home")
                    } else if (location === "/de/home") {
                        navigate("/")
                    } else if (location.startsWith("/de")) {
                        let to = location.slice(3)
                        navigate(to)
                    } else {
                        let to = "/de" + location
                        navigate(to)
                    }
                    //starts with /de, navigate to the location with /de sliced from it.
                    // otherwise, we want to add it to it, then navigate to the 
                },
                toggleSnow: () => {
                    this.setState({
                        snowing: !this.state.snowing
                    })
                },
                onloadGerman: (localGerman) => {
                    this.setState({
                        german: localGerman
                    })
                },
                _toggleShowHomeTrailer: () => {
                    this.setState({
                        showHomeTrailer: !this.state.showHomeTrailer
                    })
                }
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
        let german = this.context.state.german
        // console.log(german)
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
        const { children, headerPosition, noGerman } = this.props
        return (
            <React.Fragment>
                <Helmet
                    link={[
                        {
                            rel: 'shortcut icon',
                            type: 'image/png',
                            href: `${favicon}`,
                        },

                    ]}

                >
                    <link href="https://fonts.googleapis.com/css?family=Dosis:300|Khula:300" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css?family=Press+Start+2P&display=swap" rel="stylesheet" />
                </Helmet>
                <GlobalStyle />
                {/* Returns the Menu depending on the Page */}
                <Location>
                    {({ location }) => {
                        // console.log(location)
                        if (location.pathname === '/' || '') {
                            return (<React.Fragment><SidebarMobileNav navData={MainNavData.indexPage} mobileMenuOpen={this.state.mobileMenuOpen} toggleMobileMenu={this._toggleMobileMenu} noGerman={noGerman} /> <NavMain snowButton={true} navData={MainNavData.indexPage} /></React.Fragment>)
                        }
                        else if (location.pathname === '/about/' || '/about') { // this === should be "contains" string instead
                            return (<React.Fragment><SidebarMobileNav navData={MainNavData.aboutPage} mobileMenuOpen={this.state.mobileMenuOpen} toggleMobileMenu={this._toggleMobileMenu} noGerman={noGerman} /> <NavMain snowButton={true} navData={MainNavData.aboutPage} /></React.Fragment>)
                        }

                    }}
                </Location>
                {/* <SiteProvider> */}
                <SiteContext.Consumer>
                    {context => (
                        <React.Fragment>
                            {context.state.snowing && <Snow />}
                        </React.Fragment>

                    )}

                </SiteContext.Consumer>
                <MainContainer mobileMenuOpen={this.state.mobileMenuOpen} toggleMobileMenu={this._toggleMobileMenu}>
                    <Header toggleMobileMenu={this._toggleMobileMenu} headerPosition={headerPosition} noGerman={noGerman}></Header>
                    {children}
                    <Footer></Footer>
                </MainContainer>
                {/* </SiteProvider> */}
            </React.Fragment>
        )
    }
}

SiteContainer.contextType = SiteContext

export default SiteContainer





{/* {!noGerman && <SiteContext.Consumer>
                        {context => (

                            <Location>
                                {({ location }) => {
                                    // console.log(location)
                                    return <GermanToggButton onClick={() => context.toggleGerman(location.pathname)}>EN / DE</GermanToggButton>
                                }}
                            </Location>


                        )}
                    </SiteContext.Consumer>} */}


// const GermanToggButton = styled.button`
//     position: absolute;
//     z-index: 100;
//     top: 38px;
//     right: 38px;
//     background-color: #ffffff00;
//     color: ${msTheme.colors.text};
//     border: none;
//     font-size: 19px;
// 	font-weight: 300;
//     font-family: ${msTheme.font.headerFont};
//     &:hover {
//         cursor: pointer;
//     }
//     ${msTheme.mediaquery().medium}{
//         top: 20px;
//         right: 5px;
//     }
// `