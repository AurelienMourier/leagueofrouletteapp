import { Button, OutlinedInput, FormControl, InputLabel, Typography } from "@mui/material";
import React, { Component } from "react";
import axios from "axios";
import { Navigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";

import "./style/Register.css";

export default class Register extends Component 
{
    constructor(props) 
    {
        super(props);

        this.state = {
            email: '',
            firstname: '',
            lastname: '',
            password: '',
            loggedIn: false,
            errorMessage: ''
        }
    }

    handleChange(e)
    {
        this.setState({[e.target.name]: e.target.value});
    }

    Register() 
    {
        const UserLogin = {
            email: this.state.email,
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            password: this.state.password,
        }

        axios.post(`https://leagueofroulette.azurewebsites.net/api/auth/signUp`, UserLogin)
        .then(response => {
            localStorage.setItem("access_token", response.data.token);

            this.setState({
                loggedIn: true
            })
            
        }).catch(error => {
            console.log(error)
            this.setState({errorMessage: error.response.data.detail})
        })
    }
    
    isLoggedIn() {
        return localStorage.getItem("access_token");
    }

    render = () => 
    (
        !this.isLoggedIn() ? 
        (
        <div className="register">
            <p className="registerTitle">S'INSCRIRE</p>
            <Box className="registerbtnsLogin" sx={{ display: 'flex', flexDirection: 'row'}}>
                <Button className="registerBtnLogin" disabled="true" variant="contained">S'inscrire</Button>
                <Link to="/login"><Button className="registerBtnLogin" variant="contained">Se connecter</Button></Link>
            </Box>
            <Box className="registerFormBox">
                <FormControl className="registerFormControl">
                    <InputLabel className="registerFormInputLabel" label="Outlined secondary">Firstname</InputLabel>
                    <OutlinedInput className="registerFormInput" id="component-outlined" name="firstname" label="firstname" onChange={ (e) => this.handleChange(e)}/>
                </FormControl>
                <FormControl className="registerFormControl">
                    <InputLabel className="registerFormInputLabel" label="Outlined secondary">Lastname</InputLabel>
                    <OutlinedInput className="registerFormInput" id="component-outlined" name="lastname" label="lastname" onChange={ (e) => this.handleChange(e)}/>
                </FormControl>
                <FormControl className="registerFormControl">
                    <InputLabel className="registerFormInputLabel" label="Outlined secondary">Email</InputLabel>
                    <OutlinedInput className="registerFormInput" id="component-outlined" name="email" label="email" onChange={ (e) => this.handleChange(e)}/>
                </FormControl>
                <FormControl className="registerFormControl">
                    <InputLabel className="registerFormInputLabel" label="Outlined secondary">Password</InputLabel>
                    <OutlinedInput className="registerFormInput" type="password" id="component-outlined" name="password" label="password" onChange={ (e) => this.handleChange(e)}/>
                </FormControl>
                <Box className="registerFormButton">
                    <Button className="registerBtnSubmit" variant="contained" onClick={ () => this.Register()}>Inscription</Button>
                    <Typography className="registerErrorMessage">{this.state.errorMessage}</Typography>
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