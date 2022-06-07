import React, { Component } from "react";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

import axios from 'axios';

import EB from "../../imgs/EB.png";
import CardBox from "./CardBox.js";

import "../style/MyAccountBackpack.css"

export default class MyAccountBackpack extends Component 
{

    constructor(prop) 
    {
        super(prop);

        this.state = {
            cards: [],
            blueEssence: 438,
            cardAmount: 0,
            cardLoaded: false
        }
    }

    sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    }

    componentDidMount() {
        axios.get(`https://leagueofroulette.azurewebsites.net/api/card`).then(response => {
            this.setState({ cards: response.data })
            this.sleep(800).then(r => {
                this.setState({ cardAmount: response.data.length })
                this.setState({ cardLoaded: true })
            })
        })
    }

    render = () => (
        <div className="MyAccountBackpack">
            <Container maxWidth="xl">
                <Box className="BackpackBoxCenter">
                    <Box className="BackpackContent BackpackContentInfo">
                        <Box className="BackpackTopInfo">
                            <p className="BackpackTextInfo">Nombre totale de cartes:</p>
                            <p className="BackpackNumberInfo">{this.state.cardAmount}</p>
                        </Box>
                        <Box className="BackpackTopInfo">
                            <p className="BackpackTextInfo">Essence bleu:</p>
                            <Box className="BackpackBlueEssance">
                                <p className="BackpackNumberInfo">{this.state.blueEssence}</p>
                                <img className="BackpackImgInfo" alt="BlueEssence" src={EB}></img>
                            </Box>
                        </Box>
                    </Box>
                    <Box className="BackpackContent">
                        {!this.state.cardLoaded ?
                            <CircularProgress className="backpackCircularProgress"/>
                            :
                            this.state.cards.map((card) => (
                                <Box>
                                    <CardBox name={card.name} description={card.description} imageUrl={card.imageUrl} stat={card.statCard} rarity={card.rarityCard} />
                                </Box>
                            ))
                        }
                    </Box>
                </Box>
            </Container>
        </div>
    );
}