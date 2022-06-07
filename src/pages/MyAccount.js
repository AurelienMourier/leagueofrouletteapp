import React, { Component } from "react";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import Tabs from './../MyTabs';
import MyAccountProperties from './MyAccountComponent/MyAccountProperties';
import MyAccountBackpack from './MyAccountComponent/MyAccountBackpack';

import "./style/MyAccount.css";

export default class MyAccount extends Component 
{
    constructor(props) 
    {
        super(props)

        this.state = {
            tabs: [
                {
                    label: "Paramètre",
                    Component: <MyAccountProperties />
                },
                {
                    label: "Mon sac à dos",
                    Component: <MyAccountBackpack />
                }
            ]
        }
    }

    render = () => (
        <div className="MyAccount">
            <Container maxWidth="xl">
                <Box className="content">
                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                        <p className="MyAccountTitle">Mon compte</p>
                    </Box>
                    <Box>
                        <Tabs className="myAccountTabs" tabs={this.state.tabs} />
                    </Box>
                </Box>
            </Container>
        </div>
    );
}