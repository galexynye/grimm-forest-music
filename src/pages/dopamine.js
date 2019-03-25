
import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { findDOMNode } from 'react-dom'
import ReactPlayer from 'react-player'
import { WidthWrapper, GridContainer, ResponsiveIframe, FlexboxOrganism, ResponsivePhoto } from '../components/00_utilities/Utilities'
import SiteContainer from '../components/05_page/Layout/SiteContainer'
import { msTheme } from '../styles/Theme'
import { ArticleContainer } from '../components/05_page/ArticleContainer'
import { servicesPortfolio } from "../sitedata/musicData";
import { ButtonCTA } from '../components/01_atom/ButtonCTA';
import { ButtonNoStyle } from '../components/01_atom/BottonNoStyle';
import { PortfolioCard } from '../components/02_molecule/PortfolioCard';
import { PageTitle } from '../components/01_atom/PageTitle'


const Fixer = styled.div`
    position: fixed ; 
    bottom: 0;
    right: 0;
    width: ${props => props.width || '99vw'};
    z-index: 100000;
    ${msTheme.mediaquery().medium}{
        width: 100vw;
    }
`




// Services Page, contains the State and methods for the React Player 

class Services extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            showReactPlayer: false,
            url: null,
            pip: false,
            playing: false,
            controls: true,
            light: false,
            volume: 0.8,
            muted: false,
            played: 0,
            loaded: 0,
            duration: 0,
            playbackRate: 1.0,
            loop: false
        }
    }

    load = (url, iframe) => {
        this.setState({
            showReactPlayer: true,
            iframe, // hide my Custom Controls if iframe, 
            controls: true,
            url,
            playing: true,
            played: 0,
            loaded: 0,
            pip: false
        })
    }
    playPause = () => {
        this.setState({ playing: !this.state.playing })
    }
    stop = () => {
        this.setState({ url: null, playing: false, showReactPlayer: false })
    }
    setVolume = e => {
        this.setState({ volume: parseFloat(e.target.value) })
    }
    onPlay = () => {
        // console.log('onPlay')
        this.setState({ playing: true })
    }
    onPause = () => {
        // console.log('onPause')
        this.setState({ playing: false })
    }
    onSeekMouseDown = e => {
        // e.preventDefault()
        this.setState({ seeking: true })
    }
    onSeekChange = e => {
        // console.log(e.target.value)
        this.setState({ played: parseFloat(e.target.value) })
    }

    onSeekMouseUp = e => {
        // e.preventDefault()
        this.setState({ seeking: false })
        this.player.seekTo(parseFloat(e.target.value))
    }
    onProgress = state => {
        // console.log('onProgress', state)
        // We only want to update time slider if we are not currently seeking
        if (!this.state.seeking) {
            this.setState(state)
        }
    }
    onEnded = () => {
        // console.log('onEnded')
        this.setState({ playing: this.state.loop })
    }
    onDuration = (duration) => {
        // console.log('onDuration', duration)
        this.setState({ duration })
    }
    onClickFullscreen = () => {
        screenfull.request(findDOMNode(this.player))
    }

    ref = player => {
        this.player = player
    }



    render() {
        const { data } = this.props
        const siteTitle = data.site.siteMetadata.title

        const { url, playing, controls, light, volume, muted, loop, played, loaded, duration, playbackRate, pip, iframe } = this.state

        // Portfolio cards
        const portfolio = servicesPortfolio.map(x =>
            <PortfolioCard key={x.src}>
                <FlexboxOrganism justifyContent="space-between" alignItems="flex-start" height="100%" >
                    <ButtonNoStyle onClick={() => this.load(x.src, x.iframe)}>
                        <ResponsivePhoto src={x.img} />
                    </ButtonNoStyle>
                    <WidthWrapper margin="0px">
                        <h3 className="mT20 altHeader">{x.title}</h3>
                    </WidthWrapper>
                    <p className="altP">{x.credits}</p>
                    {/* Different buttons depending on whether the work is playing state */}
                    {(url != x.src) && <ButtonCTA
                        text={x.watchOrListen}

                        bgColor={msTheme.colors.primary}
                        color="white"
                        _handleClick={() => this.load(x.src, x.iframe)}
                    />}
                    {(url == x.src && playing) && <ButtonCTA
                        text={loaded ? 'Pause' : 'Loading...'}
                        bgColor={msTheme.colors.primarylight}
                        color="white"
                        _handleClick={this.playPause}
                    />}
                    {(url == x.src && !playing) && <ButtonCTA
                        text='Play'
                        bgColor={msTheme.colors.primarylight}
                        color="white"
                        _handleClick={this.playPause}
                    />}
                </FlexboxOrganism>
            </PortfolioCard>)



        // Music Portfolio Section
        const MusicPortfolio =
            <div>
                <WidthWrapper width="100%">
                </WidthWrapper>

                <GridContainer gTC="1fr 1fr 1fr" gTCS="1fr 1fr" gTCM="1fr 1fr 1fr" gTCL="1fr 1fr 1fr" gridGap="60px 60px" gridGapL="10px 20px">
                    {portfolio}
                </GridContainer>
            </div>


        return (
            // <div>
            <SiteContainer>
                <Helmet
                    meta={[{ name: 'description', content: 'Professional producing, mixing, mastering and original music for hire.' }]}
                    title={`Listen | ${siteTitle}`}
                >
                </Helmet>

                <audio controls>
                    <source src="https://s3.amazonaws.com/a-dev-public/ms-services-portfolio/Dopamine_ForDance128k.mp3" type="audio/mpeg" />
                </audio>

                <a href="https://s3.amazonaws.com/a-dev-public/Dopamine_ForDance128k.mp3">DownloadDopamine</a>
                {/* <PageTitle text="Listen" description="A Sampling of Original Musical Works"></PageTitle> */}

                {/* {MusicPortfolio} */}



            </SiteContainer>

            /* <Fixer>
                {this.state.showReactPlayer &&
                    // Article Container restricts the width on mobile playback
                    <ArticleContainer margin="0px auto" padding="0px">
                        <Fixer width={iframe ? '50vw' : '99.5vw'}>
                            <WidthWrapper width="50px" widthSmall="50px" margin="0px 0px 0px auto" className="hideMedium">

                                <ButtonCTA
                                    _handleClick={this.stop}
                                    bgColor={msTheme.colors.primary}
                                    text="x"
                                    color="white"
                                    margin=" 0px"
                                    borderRadius="50%"
                                />
                            </WidthWrapper>

                            <ResponsiveIframe paddingTop={!iframe ? '0px' : false} >
                                <ReactPlayer
                                    ref={this.ref}
                                    url={url}
                                    width='100%'
                                    height={iframe ? '100%' : '42px'}
                                    playing={playing}
                                    controls={controls}
                                    light={light}
                                    loop={loop}
                                    playbackRate={playbackRate}
                                    volume={volume}
                                    muted={muted}
                                    // onReady={() => console.log('onReady')}
                                    // onStart={() => console.log('onStart')}
                                    onPlay={this.onPlay}
                                    onPause={this.onPause}
                                    // onBuffer={() => console.log('onBuffer')}
                                    // onSeek={e => console.log('onSeek', e)}
                                    onEnded={this.onEnded}
                                    // onError={e => console.log('onError', e)}
                                    onProgress={this.onProgress}
                                    onDuration={this.onDuration}
                                />
                            </ResponsiveIframe>
                        </Fixer>
                    </ArticleContainer>
                }
            </Fixer> */
            /* </div> */
        )
    }
}

export default Services

export const pageQuery = graphql`
  query {
   site {
    siteMetadata {
      title    
    }
  }
  

}
`