import React from 'react'
import { Link } from 'gatsby'
import { msTheme } from '../../../styles/Theme'

import { PageTitle } from '../../01_atom/PageTitle'
import { GridContainer, ResponsivePhoto, WidthWrapper, FlexboxOrganism, GridItem } from '../../00_utilities/Utilities';
import Millenia from '../../../assets/GrimmStudioPics/Millenia.jpg'
import { FullHeightSection } from '../../01_atom/FullHeightSection'
import { ArticleContainer } from '../ArticleContainer'
import Apollo from '../../../assets/GrimmStudioPics/ApolloCool.jpg'
import BioPic from '../../../assets/SaywellPics/Freelance_Photos.jpg'

class About extends React.Component {
    render() {
        const { pageData } = this.props
        return (
            <React.Fragment>



                {/* <ArticleContainer> */}
                <section>
                    <FullHeightSection>
                        <PageTitle text="About" description={pageData.pageTitle.description}></PageTitle>
                    </FullHeightSection>
                </section>

                <section id="philosophy">
                    <FullHeightSection>

                        <GridContainer gTC="1fr 1fr" gridGap="90px" gridGapL="20px" gTCM="1fr">
                            <FlexboxOrganism margin="30px 0px" marginSmall="0px">
                                <div>
                                    <h2 >Philosophy</h2>
                                    <p>Thanks for checking out Grimm Forest Music and Sound, my name is Alex Nye.</p>
                                    <p>In a word, "cohesion" is what I love and aspire to in creative work.
                                    All the major parts and minor details coming together creating an experience of total immersion.</p>
                                </div>
                            </FlexboxOrganism>

                            <GridItem alignSelf="center">
                                <ResponsivePhoto src={Apollo} />
                            </GridItem>
                        </GridContainer>
                    </FullHeightSection>
                </section>

                <section id="now">
                    <FullHeightSection>
                        <GridContainer gTC="1fr 1fr" gridGap="90px" gridGapL="20px" gTCM="1fr" >
                            {/* <ResponsiveIframe><iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/814433031&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe></ResponsiveIframe> */}
                            <GridItem orderL="2" alignSelf="center">
                                <ResponsivePhoto src={Millenia} />
                            </GridItem>
                            <GridItem orderL="1" alignSelf="center">
                                <FlexboxOrganism>
                                    <div>
                                        <h2 >Now</h2>
                                        <p>Updated: September 6th, 2019</p>
                                        <p>Just got back a couple days ago from a trip to the USA. Feeling recharged and jetlagged.</p>
                                        <p>This fall I will start advising and teaching music production at Macro Media University and the Jazz and Rock Schule in Freiburg. Teaching was something I started getting interested while studying at Berklee and I look forward to giving my perspective and learning from the students.</p>

                                        <p>Currently I'm working on an album of Scary Music and the latest <a href="https://saywell.bandcamp.com/" target="_blank">Saywell</a> song.</p>
                                    </div>
                                    {/* <p>Grimm Forest Music and Sound is the studio of composer Alex Nye offering custom music and sound design for movies and games.</p> */}
                                </FlexboxOrganism>
                            </GridItem>
                        </GridContainer>
                    </FullHeightSection>
                </section>
                <section id="bio">
                    <FullHeightSection>
                        <GridContainer gTC="1fr 1fr" gridGap="40px" gridGapL="20px" gTCM="1fr" margin="20px auto">
                            {/* <ResponsiveIframe><iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/814433031&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe></ResponsiveIframe> */}



                            <FlexboxOrganism>
                                <div>
                                    <h2 >Bio</h2>
                                    <p>Do I like long walks on the beach? No, I love em. Love all types of walking in fact. I'm learning programming for fun and spend a lot of time with my family.</p>
                                    {/* <p>Used to do them all the time when I was living in Los Angeles working on these <a href="https://www.imdb.com/name/nm5637976/" target="_blank">shows and movies.</a></p> */}
                                    <p className="mB0">If you want to know where I come from and where I've been, there's a bulleted run down of my life here to get you up to speed.</p>

                                </div>
                                {/* <p>Grimm Forest Music and Sound is the studio of composer Alex Nye offering custom music and sound design for movies and games.</p> */}
                            </FlexboxOrganism>

                            <GridItem alignSelf='center'>
                                <ResponsivePhoto src={BioPic} borderRadius="0px" margin="0px 0px 20px 0px" maxWidth="300px" />
                                {/* <h3>Contact</h3>
                                <p>Happy to hear from you if you want to say hi or are interested in working together, my contact info is <Link to="/#contact">here</Link>.</p>
                                <h3>Music</h3>

                                <p>If you haven't already you can check out <Link to="/#music">my music here</Link>.</p> */}
                            </GridItem>
                            <GridItem>
                                <h3>Life List</h3>
                                {/* <h3 >Bio List</h3> */}
                                <ul>
                                    <li>1990: Born in Cleveland Ohio</li>
                                    <li>2008: All-American Runner 4x800 and 4xMile</li>
                                    <li>2011: Graduated Berklee College of Music</li>
                                    <li>2012: LA <a href="https://www.imdb.com/name/nm5637976/" target="_blank">Doing Film Music</a> and some producing for <a href="https://output.com/" target="_blank">Output</a></li>
                                    <li>2016: Married a German</li>
                                    <li>2017: Moved to the Black Forest of Germany founded <a href="https://www.musicsequencing.com" target="_blank">MusicSequencing.com</a></li>
                                    <li>2017: Kid Born</li>
                                    <li>2018: Grimm Forest Music Founded</li>
                                    <li>2019: <a href="https://saywell.bandcamp.com/" target="_blank">Saywell Project</a>: Releasing 1 song a Month for the Year</li>
                                </ul>
                            </GridItem>

                            <GridItem>
                                <h3>Contact</h3>
                                <p>Happy to hear from you if you want to say hi or are interested in working together, my contact info is <Link to="/#contact">here</Link>.</p>
                                <h3>Music</h3>
                                <p>If you haven't already you can check out <Link to="/#music">my music here</Link>.</p>
                            </GridItem>

                        </GridContainer>
                    </FullHeightSection>
                </section>



            </React.Fragment>
        )
    }
}

export default About

