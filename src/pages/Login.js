import { Button, OutlinedInput, FormControl, InputLabel, FormHelperText, Grid, Typography } from "@mui/material";
import React, { Component } from "react";
import axios from "axios";

export default class Login extends Component 
{
    constructor(props) 
    {
        super(props);

        this.state = {
            email: '',
            password: '',
            loggedIn: false,
            errorMessage: '',
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

        axios.post(`https://localhost:5001/api/auth/signIn`, UserLogin)
        .then(response => {
            localStorage.setItem("access_token", response.data.token);
        }).catch(error => {
            this.setState({errorMessage: error.response.data})
            console.log(error.response);
        })
    }

    render = () => 
    (
        <div className="app">
            <Grid container direction="column" justifyContent="center" alignItems="center" height={400}>
                <Grid>
                    <FormControl>
                        <InputLabel label="Outlined secondary">Email</InputLabel>
                        <OutlinedInput id="component-outlined" name="email" label="email" onChange={ (e) => this.handleChange(e)}/>
                        <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
                    </FormControl>
                    <FormControl>
                        <InputLabel label="Outlined secondary">password</InputLabel>
                        <OutlinedInput id="component-outlined" name="password" label="password" onChange={ (e) => this.handleChange(e)}/>
                        <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
                    </FormControl>
                </Grid>
                <Button variant="contained" onClick={ () => this.Login()}>Submit</Button>
                <Typography variant="h6" color="red">{this.state.errorMessage}</Typography>
            </Grid>
        </div>
    );
}