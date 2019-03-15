import React, { PureComponent } from 'react'
import axios from 'axios'
import Recaptcha from 'react-recaptcha'
import { msTheme } from '../../../styles/Theme'
import { ArticleContainer } from "../ArticleContainer";
import { GridContainer, WidthWrapper } from "../../00_utilities/Utilities";
import { PageTitle } from "../../01_atom/PageTitle";
import { InputString } from "../../01_atom/InputString";
import { InputSubmit } from '../../01_atom/InputSubmit';
import { InputTextarea } from '../../01_atom/InputTextarea';
import { InputSelect } from '../../01_atom/InputSelect';
import { Loading } from '../../01_atom/Loading'
import { Message } from '../../01_atom/Message'
import { ButtonCTA } from '../../01_atom/ButtonCTA'

const contactOptions = ["Let's Work Together!", 'Saying hi!', 'General Questions', 'Online Lessons', 'Website Suggestions', 'Other']
const recaptchaKey = process.env.RECAPTCHA_KEY
const contactApi = process.env.GRIMM_API_CONTACT



export default class contact extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            name: '',
            subject: "Let's Work Together!",
            message: '',
            recaptcha: false,
            recaptchaLoaded: false,
            form: true,
            loading: false,
            error: false,
            success: false,
        }
    }

    _handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    _handleSubmit = (event) => {
        event.preventDefault();
        if (!this.state.recaptcha) {
            alert("Please confirm you're not a robot.")
        } else {
            this.setState({
                form: false,
                loading: true
            })
            axios.post(contactApi, {
                email: this.state.email,
                name: this.state.name,
                subject: this.state.subject,
                message: this.state.message,
                origin: 'contactForm', // Very important that this matches the Backend API emails object
                recaptcha: this.state.recaptcha
            }).then((response) => {
                this.setState({
                    success: true,
                    loading: false
                })
                // console.log(response);
            })
                .catch((error) => {
                    this.setState({
                        error: true,
                        loading: false
                    })
                    // console.log(error);
                });
        }
    }

    _recaptchaLoaded = () => {
        console.log("loaded")
        this.setState({
            recaptchaLoaded: true
        })
    }

    _verifyHuman = (response) => {
        console.log(response)
        // let captchaCode = response + ""
        this.setState({
            recaptcha: response
        })
    }

    _resetState = () => {
        this.setState({
            email: '',
            name: '',
            subject: 'General Questions',
            message: '',
            recaptcha: false,
            recaptchaLoaded: false,
            form: true,
            loading: false,
            error: false,
            success: false,
        })
    }

    render() {
        const { pageData } = this.props
        const Oops = <WidthWrapper width="350px">
            <Message title={pageData.contactForm.oops.title} message={pageData.contactForm.oops.message} />
            <ButtonCTA _handleClick={this._resetState} text={pageData.contactForm.oops.reload} bgColor={msTheme.colors.secondarylighter} />
        </WidthWrapper>


        const ContactForm = <div>
            <form onSubmit={this._handleSubmit}>
                <InputString _handleChange={this._handleInputChange} value={this.state.email} type="email" label="email" labelText="Email*" required={true}></InputString>
                <InputString _handleChange={this._handleInputChange} value={this.state.name} type="text" label="name" labelText="Name*" required={true}></InputString>
                <InputSelect _handleChange={this._handleInputChange} value={this.state.subject} options={pageData.contactForm.subject.options} label="subject" labelText={pageData.contactForm.subject.label} />
                <InputTextarea _handleChange={this._handleInputChange} value={this.state.message} label="message" labelText={pageData.contactForm.messageLabel} required={true} />
                <InputSubmit margin="0px 0px 20px 0px" onSubmit={this._handleSubmit} value="Contact Me" bgColor={msTheme.colors.primary} color="white" />
            </form>
            {/* <p className="headerFont">Please verify you are not a robot before contacting.</p> */}
            <Recaptcha
                sitekey={recaptchaKey}
                render="explicit"
                verifyCallback={this._verifyHuman}
                onloadCallback={this._recaptchaLoaded}
            />
        </div>

        return (

            <div>
                <PageTitle text={pageData.pageTitle.title} description={pageData.pageTitle.description} />
                <ArticleContainer margin="-20px auto 30px auto">
                    {this.state.loading && <Loading text={pageData.contactForm.sending} />}
                    {this.state.success && <Message title={pageData.contactForm.success.title} colorHeader={msTheme.colors.primary} message={pageData.contactForm.success.message} />}
                    {this.state.error && Oops}
                    {this.state.form && ContactForm}
                </ArticleContainer>
            </div>

        )
    }
}














































