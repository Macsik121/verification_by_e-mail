import React from 'react';
import './Pages.css'
import {Link} from 'react-router-dom';
import morgenal from '../images/morgenal.jpg';
import slavamarlow from '../images/slavamarlow.jpeg';
import dio from '../images/dio.jpeg';

const verificationCode = Math.floor(Math.random() * 1000000).toString();

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
            <div className="registration">
                <div className="shortcuts">
                    <h2>Shortcuts for the PC</h2>
                    <div className="focus_on_email">
                        <span>Shortcut for focus email writing: Enter</span>
                        <span>Confirm verification code(when you are focusing the email): Enter</span>
                        <span>Stop focusing on email writing: Esc</span>
                    </div>
                </div>
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
                    <button className="waves-effect waves-light btn submit-btn" id="submit" type="submit">
                        Confirm verification code
                    </button>
                </form>
            </div>
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
            <div className="verifCode">
                <div className="shortcuts">
                    <h2>Shortcuts for the PC</h2>
                    <div className="focus_on_email">
                        <span>Shortcut for focus email writing: Enter</span>
                        <span>Confirm verification code(when you are focusing the email): Enter</span>
                        <span>Stop focusing on email writing: Esc</span>
                    </div>
                </div>
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
            </div>
        )
    }
}


class Finished extends React.Component {
    constructor() {
        super();
        window.onkeyup = function() {};
    }
    render() {
        return (
            <div className="finishing">
                <h2>You're done!</h2>
                <p>You've passed the verification!</p>
                <Link className="chat-link" to="/chat">Come back to the page with chating</Link>
                <label>(I made this verification like in telegram, therefore here is the text like this)</label>
            </div>
        )
    }
}

class Chat extends React.Component {
    constructor() {
        super();
        window.onkeyup = function(e) {
            const input = document.getElementById('send');
            if (e.keyCode === 13) {
                input.focus();
            } else if (e.keyCode === 27) {
                input.blur();
            }
        };
    }
    render() {
        return (
            <div className="chat">
                <div className="chats">
                    <div className="person-card">
                        <img className="img" src={morgenal} alt="person_img" />
                        <div className="info">
                            <span className="person_name">Morgenshtern</span>
                            <span className="last_message">Message: Да, я богатый уёбок</span>
                        </div>
                    </div>
                    <div className="person-card">
                        <img className="img" src={slavamarlow} alt="person_img" />
                        <div className="info">
                            <span className="person_name">Slava Marlow</span>
                            <span className="last_message">Message: Снова я напиваюсь...</span>
                        </div>
                    </div>
                    <div className="person-card">
                        <img className="img" src={dio} alt="person_img" />
                        <div className="info">
                            <span className="person_name">DIO</span>
                            <span className="last_message">Message: MUDAMUDAMUDAMUDAMUDAMUDAMUDAMUDA</span>
                        </div>
                    </div>
                </div>
                <div className="chating">
                    <input
                        type="text"
                        id="send"
                        placeholder="Send some message(now doesn't work)"
                    />
                </div>
            </div>
        )
    }
}

export {Registration, Verification, Finished, Chat};