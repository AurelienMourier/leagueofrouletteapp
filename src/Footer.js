import React, { Component } from "react";
import Box from '@mui/material/Box';

import "./pages/style/Footer.css";

export default class Footer extends Component 
{

    render = () => (
        <div className="Footer">
            <Box className="footerBox">
                <p className="footerText">All rights not reserved</p>
                <p className="footerText footerWebsiteTitle">League Of Roulette</p>
                <p className="footerText">2022-2022</p>
            </Box>
        </div>
    );
}