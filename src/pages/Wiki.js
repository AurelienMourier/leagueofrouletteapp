import React, { Component } from "react";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import CardBox from './MyAccountComponent/CardBox';

import "./style/Wiki.css";
import EB from "../imgs/EB.png";

export default class Wiki extends Component 
{
    constructor(props) 
    {
        super(props);

        this.state = {
            exampleCard: {"cardId": 1, "description": "Archère du givre", "imageUrl": "https://i.ibb.co/XbVVSnV/Ashe.jpg", "name": "Ashe", "rarityCard": "Commun", "statCard": {"ad": 10, "ap": 0, "as": 10, "ar": 10, "mr": 0, "ms": 10}, "typeCard": "Tirreur"}
        }
    }

    render = () => (
        <div className="Wiki">
            <Container maxWidth="xl">
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                    <p className="HomeTitle">Wiki</p>
                </Box>
                <Box className="wikiTextBox" sx={{ display: 'flex', flexDirection: 'column' }}>
                    <p>Cette application vous permet d'ouvrir des coffres, en échange d'essence bleu, e td'avoir un gain aléatoire.</p>
                    <p>Vous pouvez obtenir différentes carte qui reprennent les personnages du jeu League of Legend comme celle-ci :</p>
                        
                    <Box>
                        <CardBox name={this.state.exampleCard.name} description={this.state.exampleCard.description} imageUrl={this.state.exampleCard.imageUrl} stat={this.state.exampleCard.statCard} rarity={this.state.exampleCard.rarityCard} />
                    </Box>
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                    <p className="HomeTitle">Comment gagner de l'essence bleu ?</p>
                </Box>
                <Box className="wikiTextBox" sx={{ display: 'flex', flexDirection: 'column' }}>
                    <p>Ces gains peuvent être visualisé dans le sac à dos de votre compte.</p>
                    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                        <p>Vous devrez dépenser de l'argent virtuel : l'essence bleu</p>
                        <img className="wikiImgEb" alt="EB" src={EB} />
                    </Box>
                    <p>Pour gagner de l'essence bleu, vous pouvez vendre des cartes obtenus en plusieurs exemplaires ou celles uniques.</p>
                </Box>
                
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                    <p className="HomeTitle">Etes-vous prêt ?</p>
                </Box>
                <Box className="wikiTextBox" sx={{ display: 'flex', flexDirection: 'column' }}>
                    <p>Admirez-les tant que vous le pouvez !!</p>
                    <p>Et soyez la première personne à avoir toutes les cartes disponibles !</p>
                </Box>
            </Container>
        </div>
    );
}