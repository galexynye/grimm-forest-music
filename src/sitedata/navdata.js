// linkType : Can be 'scroll', 'external' or nothing is for an internal gatsby link
// NOTE: Navigation is currently setup in the <SiteContainer> needs validated there :(
import GrimmTreeWhite from '../assets/GrimmGraphics/GrimmTree_SVG_white.svg'
import GrimmTreeBlack150 from '../assets/GrimmGraphics/grimmTreeBlack_150px.png'


export const MainNavData = {
    indexPage: [
        { name: 'About', to: '#about', linkType: 'scroll' },
        { name: 'Music', to: '#music', linkType: 'scroll' },
        { name: 'Contact', to: '#contact', linkType: 'scroll' },
        // { name: 'Home', to: '#top', linkType: 'scroll', bgImg: GrimmTreeWhite, bgImgHover: GrimmTreeBlack150, },
        { name: 'Home', to: '#top', linkType: 'scroll', img: GrimmTreeWhite, bgImgHover: GrimmTreeBlack150, },
    ],
    aboutPage: [
        // { name: 'Home', to: '/', },
        { name: 'Philosophy', to: '#philosophy', linkType: 'scroll' },
        { name: 'Now', to: '#now', linkType: 'scroll' },
        { name: 'Bio', to: '#bio', linkType: 'scroll' },
        // { name: 'Home', to: '/', bgImg: GrimmTreeWhite, bgImgHover: GrimmTreeBlack150 },
        { name: 'Home', to: '/', img: GrimmTreeWhite, bgImgHover: GrimmTreeBlack150 },
    ]
}




// Depracted in new version with no German
export const FooterNavLinksData = [
    { name: 'Privacy-Policy', to: '/privacy-policy', external: false },
    { name: 'Contact', to: '/contact', external: false },
]
export const FooterNavLinksDataGerman = [
    { name: 'Privacy-Policy', to: '/privacy-policy', external: false },
    { name: 'Contact', to: '/contact', external: false },
]

export const MainNavLinksDataGerman = [
    // { name: 'Home', to: '/', external: false },
    { name: 'About', to: '/de/about', external: false },
    { name: 'Services', to: '/de/services', external: false },
    { name: 'Listen', to: '/de/listen', external: false },
    { name: 'Contact', to: '/de/contact', external: false },

]
