import React, { PureComponent } from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import SiteContainer from '../components/05_page/Layout/SiteContainer'
import ContactPage from '../components/05_page/Pages/contact'

const pageData = {
    pageTitle: {
        title: "Contact",
        description: "Say hi"
    },
    contactForm: {
        noRobot: "Please confirm you're not a robot.",
        oops: {
            title: "Oops...",
            message: "Something went wrong.",
            reload: "Click to reload Music Services Form"
        },
        success: {
            title: "Success!",
            message: "Thanks for reaching out, a confirmation email should arrive shortly!"
        },
        sending: "Sending...",
        subject: {
            options: ["Let's Work Together!", 'Saying hi!', 'General Questions', 'Website Suggestions', 'Other'],
            label: "Subject"
        },
        messageLabel: "Message*"
    }
}


export default class contact extends PureComponent {

    render() {
        const { data } = this.props
        const siteTitle = data.site.siteMetadata.title


        return (
            <SiteContainer>
                <Helmet
                    meta={[{ name: 'description', content: 'Contact Music Sequencing, make suggestions or hire me' }]}
                    title={`Contact | ${siteTitle}`}
                >
                    {/* <script src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit" async defer></script> */}
                    <script src="https://www.google.com/recaptcha/api.js" async defer></script>
                </Helmet>
                <ContactPage pageData={pageData} />

            </SiteContainer>
        )
    }
}



export const pageQuery = graphql`
  query {
   site {
    siteMetadata {
      title    
    }
  }
  

}
`










































// import React from 'react'
// import Helmet from 'react-helmet'
// import styled from 'styled-components'
// import HomeLink from '../components/HomeLinks/HomeLinkLogo'
// import Menu from '../components/MainNavigation/Menu'
// import Footer from '../components/Footer'
// import Wrapper from '../styles/oldCrap/Wrapper'
// import ContactForm from '../components/ContactForm'
// import { Link } from 'gatsby'
// import Blurb from '../styles/oldCrap/Blurb'


// const HomeLinkWrapper = styled.div`
//   max-width: 500px;
//   margin: auto;
// `

// const Contact = () => {
//   return (
//     <Wrapper>
//       <Helmet
//         htmlAttributes={{ lang: 'en' }}
//         title={
//           `Contact | Music Sequencing` // meta={[{ name: 'description', content: siteDescription }]}
//         }
//       />
//       <Menu sideNav={true} />
//       <HomeLinkWrapper>
//         <HomeLink margin="0px 0px 10px 0px" />
//       </HomeLinkWrapper>
//       <Blurb>
//         <h1>Write Us</h1>
//         <p>
//           If you have any questions or requests we look forward to hearing you!
//           Feel free to email us at{' '}
//           <a href="mailto:contact@musicsequencing.com">
//             contact@musicsequencing.com
//           </a>{' '}
//           or use the contact form below.
//         </p>
//         {/* </p>
//         <p>
//         */}
//         <p>
//           Interested in booking private lessons? Let me know here or checkout the
//           <Link to="/lessons"> lessons page</Link> for more information.
//         </p>
//       </Blurb>
//       <ContactForm subject={true} />
//       <Footer />
//     </Wrapper>
//   )
// }

// export default Contact
