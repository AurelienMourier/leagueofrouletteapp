import { Button, OutlinedInput, FormControl, InputLabel, FormHelperText, Typography } from "@mui/material";
import React, { Component } from "react";
import axios from "axios";
import { Navigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";

import "./style/Login.css";

export default class Login extends Component 
{
    constructor(props) 
    {
        super(props);

        this.state = {
            email: '',
            password: '',
            errorMessage: ''
        }
    }

    handleChange(e)
    {
        this.setState({errorMessage: ""})
        this.setState({[e.target.name]: e.target.value});
    }

    Login() 
    {
        const UserLogin = {
            email: this.state.email,
            password: this.state.password,
        }

        axios.post(`https://leagueofroulette.azurewebsites.net/api/auth/signIn`, UserLogin)
        .then(response => {
            localStorage.setItem("access_token", response.data.token);
            this.setState({
                loggedIn: true
            })
            
        }).catch(error => {
            this.setState({errorMessage: error.response.data})
        })
    }
    
    isLoggedIn() {
        return localStorage.getItem("access_token");
    }

    render = () => 
    (
        !this.isLoggedIn() ? 
        (
        <div className="login">
            <p className="loginTitle">SE CONNECTER</p>
            <Box className="LoginbtnsLogin" sx={{ display: 'flex', flexDirection: 'row'}}>
                <Link to="/register"><Button className="LoginBtnLogin" variant="contained">S'inscrire</Button></Link>
                <Button className="LoginBtnLogin" disabled="true" variant="contained">Se connecter</Button>
            </Box>
            <Box className="loginFormBox">
                <FormControl className="loginFormControl">
                    <InputLabel className="loginFormInputLabel" label="Outlined secondary">Email</InputLabel>
                    <OutlinedInput className="loginFormInput" id="component-outlined" name="email" label="email" onChange={ (e) => this.handleChange(e)}/>
                    <FormHelperText className="loginFormHelperText" id="my-helper-text">We'll never share your email.</FormHelperText>
                </FormControl>
                <FormControl className="loginFormControl">
                    <InputLabel className="loginFormInputLabel" label="Outlined secondary">Password</InputLabel>
                    <OutlinedInput className="loginFormInput" type="password" id="component-outlined" name="password" label="password" onChange={ (e) => this.handleChange(e)}/>
                    <FormHelperText className="loginFormHelperText" id="my-helper-text">We'll never share your password.</FormHelperText>
                </FormControl>
                <Box className="loginFormButton">
                    <Button className="btnSubmit" variant="contained" onClick={ () => this.Login()}>Connexion</Button>
                    <Typography className="loginErrorMessage">{this.state.errorMessage}</Typography>
                </Box>
            </Box>
        </div>
        )
        :
        (
            <Navigate to="/home" />
        )
    );
}