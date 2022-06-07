import { Button, FormControl, Input, Typography } from "@mui/material";
import React, { Component } from "react";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import axios from "axios"

import "./../style/MyAccountProperties.css";

export default class MyAccountProperties extends Component 
{
    constructor(prop) 
    {
        super(prop);

        this.state = {
            firstname: "",
            lastname: "",
            email: "",
            errorMessage: ""
        }
    }

    handleChange(e)
    {
        this.setState({errorMessage: ""})
        this.setState({[e.target.name]: e.target.value});
    }

    ChangepPersonalInformation()
    {
        const UserInformation = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
        }

        axios.post(`https://localhost:5001/api/auth/changeInformation`, UserInformation).then(response => {
            localStorage.setItem("access_token", response.data.token);
            
        }).catch(error => {
            this.setState({errorMessage: error.response.data})
        })
    }

    showPassword() 
    {
        this.setState({showPassword: !this.state.showPassword})
    }

    render = () => (
        <div className="MyAccountProperties">
            <Container maxWidth="xl">
                <Box className="PropertiesBoxCenter">
                    <Box className="PropertiesContent">
                        <Box className="PropertiesBoxInfos">
                            <p>Nom :</p>
                            <FormControl className="PropertiesFormControl">
                                <Input className="PropertiesFormInput" id="component-outlined" name="lastname" label="lastname" defaultValue={this.state.lastname} onChange={ (e) => this.handleChange(e)}/>
                            </FormControl>
                        </Box>
                        <Box className="PropertiesBoxInfos">
                            <p>Prénom :</p>
                            <FormControl className="PropertiesFormControl">
                                <Input className="PropertiesFormInput" id="component-outlined" name="firstname" label="firstname" defaultValue={this.state.firstname} onChange={ (e) => this.handleChange(e)}/>
                            </FormControl>
                        </Box>
                        <Box className="PropertiesBoxInfos">
                            <p>Email :</p>
                            <FormControl className="PropertiesFormControl">
                                <Input className="PropertiesFormInput" id="component-outlined" name="email" label="email" defaultValue={this.state.email} onChange={ (e) => this.handleChange(e)}/>
                            </FormControl>
                        </Box>
                        <Box className="loginFormButton">
                            <Button className="btnSubmit" variant="contained" onClick={ () => this.ChangepPersonalInformation()}>Modifier</Button>
                            <Typography className="loginErrorMessage">{this.state.errorMessage}</Typography>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </div>
    );
}