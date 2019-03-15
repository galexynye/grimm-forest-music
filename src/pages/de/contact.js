import React, { PureComponent } from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import SiteContainer from '../../components/05_page/Layout/SiteContainer'
import ContactPage from '../../components/05_page/Pages/contact'

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
