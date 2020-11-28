import React, { Component } from 'react';

export class GoogleAuth extends Component {
    state = {isSignedIn:null}
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '630304967492-4o1skj2ldbrv6b7gl7m71jrv87b3ndaq.apps.googleusercontent.com',
                scope: 'email'
            }).then(()=>{
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({isSignedIn: this.auth.isSignedIn.get()});
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    onAuthChange = () => {
        this.setState({
            isSignedIn: this.auth.isSignedIn.get()
        })
    };

    renderAuthButton(){
        if(this.state.isSignedIn === null){
            return <div>I dont know if we are signed in</div>
        } else if (this.state.isSignedIn){
            return <div>i am signed in</div>
        } else {
            return <div>I am not signed in</div>
        }
    }

    render() {
        return (
            <div>
                {this.renderAuthButton()}
            </div>
        )
    };
};

export default GoogleAuth;
