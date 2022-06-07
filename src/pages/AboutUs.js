import React, { Component } from "react";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import carteLol from "./../imgs/carte.jpg";
import "./style/AboutUs.css";

export default class AboutUs extends Component 
{

    render = () => (
        <div className="AboutUs">
            <Container maxWidth="xl">
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                    <p className="HomeTitle">A propos de moi</p>
                </Box>
                <Box className="aboutUsTextBox" sx={{ display: 'flex', flexDirection: 'column' }}>
                    <p className="aboutUsText">Jeune développeur qui joue au jeu League of Legend depuis plus de 5 ans.</p>
                    <p className="aboutUsText">Au cours de ma deuxième année de BTS SIO j'ai pu réaliser ce projet qui est composé de :</p>
                    <ul className="aboutUsText">
                        <li>une application légère : l'application League of Roulette</li>
                        <li>une application lourde : une API en C# sous ASP.NET Core</li>
                    </ul>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                    <p className="HomeTitle">Explication du jeu</p>
                </Box>
                <Box className="aboutUsTextBox" sx={{ display: 'flex', flexDirection: 'column' }}>
                    <p className="aboutUsText">Ce jeu est un jeu d'arène en 5 contre 5 en jouant sur une carte à trois voie :</p>
                    <p className="aboutUsText">Le but étant d'atteindre le noyau (appelé nexus) enemie pour gagner en passant par la destruction de tours mais aussi d'inibiteurs.</p>
                    <img className="imgCarteLol" src={carteLol} alt="carteLol" />
                    <p className="aboutUsText">Des petits monstres apparaissent régulièrement et à intervale identique des deux cotés. Ils permettent d'accéder aux tours enemies sans que celle-ci ne vous fasse de dégats.</p>
                    <p className="aboutUsText">Après avoir atteint la troisième tour, vous pouvez accèder à l'inibiteur enemie, il permet de faire apparaitre, en plus des petits monstres, des gros monstres.</p>
                    <p className="aboutUsText">A partir de là, il ne vous reste plus qu'à tenter de détruire le Nexus de vos adversaires.</p>
                </Box>
            </Container>
        </div>
    );
}