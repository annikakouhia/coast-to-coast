import React, { Component } from 'react';
import { Map } from 'immutable';
import PollComponent from './PollComponent';
import fire from './config/Fire.js';
import {withRouter} from 'react-router-dom';

class SignUp extends Component{
    constructor(props){
        super(props);
        this.state = {email: "", password: ""}

        //bind methods 
        this.inputEmail = this.inputEmail.bind(this);
        this.inputPassword = this.inputPassword.bind(this);
        this.signUp = this.signUp.bind(this);
        

    }
    inputPassword = (event) => {
        this.setState({password: event.target.value})
    }
    inputEmail = (event) => {
        this.setState({email: event.target.value})
    }

    signUp(e){
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).catch((error) =>{
            console.log(error);
        })
        if(fire.auth().currentUser){
            this.props.history.push("/Home");
        }
    }

    render(){
        var passwordBox = null;
        var emailBox = null;
       
        passwordBox = (
            <div>
                <input value = {this.state.password} onChange ={this.inputPassword} />
            </div>
        )
        emailBox = (
            <div>
                <input value = {this.state.email} onChange ={this.inputEmail} />
            </div>
        )
        var userDisplay = (
                <div>
                    <h1> DartPoll</h1>
                    <p>Create a new account</p>
                    {emailBox}
                    {passwordBox}
                    <button onClick = {this.signUp}> Create</button>
                </div>
            )
        return(
            <div>
                 {userDisplay}
            </div>
        );
    }
}

export default SignUp;