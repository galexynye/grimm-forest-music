import React, { PureComponent } from 'react'
import { msTheme } from '../../styles/Theme'
import { InputString } from "../01_atom/InputString";
import { InputSelect } from "../01_atom/InputSelect";
import { InputTextarea } from "../01_atom/InputTextarea";
import { InputSubmit } from '../01_atom/InputSubmit'



export class FormServices extends PureComponent {

    render() {
        const { _handleInputChange, _handleSubmit, email, name, service, budget, servicesOptions, message, deadline, doneLabel, deadlineLabel, describeLabel } = this.props
        return (
            <form onSubmit={_handleSubmit}>
                <InputString _handleChange={_handleInputChange} value={name} type="text" label="name" labelText="Name*" required={true}></InputString>
                <InputString _handleChange={_handleInputChange} value={email} type="email" label="email" labelText="Email*" required={true}></InputString>
                <InputSelect _handleChange={_handleInputChange} value={service} options={servicesOptions} label="service" labelText={doneLabel} />
                <InputString _handleChange={_handleInputChange} value={deadline} type="date" label="deadline" labelText={deadlineLabel} ></InputString>
                {/* <InputString _handleChange={_handleInputChange} value={budget} type="text" label="budget" labelText="Budget" ></InputString> */}
                <InputTextarea _handleChange={_handleInputChange} value={message} label="message" labelText={describeLabel} required={true} />
                <InputSubmit margin="0px 0px 20px 0px" _handleSubmit={_handleSubmit} value="Contact" bgColor={msTheme.colors.primary} color="white" />
            </form>
        )
    }
}
