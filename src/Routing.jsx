import {Switch, Route, Redirect, Link} from 'react-router-dom';
import React from 'react';
import {
    Registration,
    Verification,
    Finished,
    Chat
} from './Page/Pages';

class NotFoundPage extends React.Component {
    render() {
        return (
            <div className="notFound">
                <h2>This page has not found</h2>
                <Link to="/">Return to the home page</Link>
            </div>
        )
    }
}

class Routing extends React.Component {
    constructor() {
        super();
        this.state = {
            isEmailWrote: JSON.parse(localStorage.getItem('isEmailWrote')),
            isVerified: JSON.parse(localStorage.getItem('isVerified'))
        };
    }
    render() {
        console.log(this.state);
        return (
            <Switch>
                <Route exact path="/registration" component={Registration} />
                <Route exact path="/registration/finished" component={Finished} />
                <Route exact path="/registration/verif" component={Verification} />
                <Route exact path="/chat" component={Chat} />
                {/* {
                    this.state.isEmailWrote
                    &&
                    <Route exact path="/registration/finished" component={Finished} />
                }
                {
                    this.state.isVerified
                    &&
                    <Route exact path="/registration/verif" component={Verification} />
                } */}
                <Redirect exact from="/registration/finished" to="registration" />
                <Redirect exact from="/" to="registration" />
                <Route component={NotFoundPage} />
            </Switch>
        )
    }
}

export default Routing;