import React from 'react';
import './Pages.css'
import {Link} from 'react-router-dom';

const verificationCode = Math.floor(Math.random() * 1000000).toString();

class Finished extends React.Component {
    constructor() {
        super();
        window.onkeyup = function() {};
    }
    render() {
        return (
            <div>This was an amazing experience working with materialize css</div>
        )
    }
}

class Verification extends React.Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        window.onkeyup = function(e) {
            const form = document.forms.verifCode;
            const input = form.codeInput;
            if (e.keyCode === 13) {
                input.focus();
            } else if (e.keyCode === 27) {
                input.blur();
            }
        };
    }
    handleChange(e) {
        if (e.target.value === verificationCode) {
            setTimeout(() => e.target.value = '', 100);
            setTimeout(() => {
                return this.props.history.push('/registration/finished');
            }, 250);
        } else if (e.target.value.length === 6 && e.target.value !== verificationCode) {
            alert('This is a wrong code, repeat');
        }
    }
    render() {
        return (
            <form name="verifCode" className="form_registration">
                <span>Now please, write your the code that we sent to your email you wrote in the previous section</span>
                <span>*Just write here {verificationCode}</span>
                <div className="input-field col s12">
                    <input
                        onChange={this.handleChange}
                        id="verifCode"
                        type="text"
                        className="validate"
                        name="codeInput"
                    />
                    <label htmlFor="verifCode">Verification code</label>
                </div>
                <Link to="/registration">Return back to fill in another e-mail</Link>
            </form>
        )
    }
}

class Registration extends React.Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        window.onkeyup = function(e) {
            const form = document.forms.registration;
            const input = form.email;
            if (e.keyCode === 13) {
                input.focus();
            } else if (e.keyCode === 27) {
                input.blur();
            }
        };
    }
    handleSubmit(e) {
        e.preventDefault();
        localStorage.setItem('isEmailWrote', true)
        this.props.history.push('/registration/verif');
    }
    render() {
        return (
            <form
                name="registration"
                className="form_registration"
                onSubmit={this.handleSubmit}
            >
                <span>Enter your e-mail here</span>
                <span>We need to make sure that you are you</span>
                <div className="input-field col s12 email">
                    <input name="email" id="email" type="email" className="validate" required/>
                    <label htmlFor="email">Email</label>
                </div>
                <button className="waves-effect waves-light btn" id="submit" type="submit">
                    Confirm verification code
                </button>
            </form>
        )
    }
}

export {Registration, Verification, Finished};