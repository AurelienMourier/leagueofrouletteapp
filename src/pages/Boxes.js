import React, { Component } from "react";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Modal from '@mui/material/Modal';

import Carousel from 'react-material-ui-carousel'
import './style/Boxes.css';

import coffre from "../imgs/chest.png";
import CardBox from "./MyAccountComponent/CardBox";
import { Button } from '@mui/material';
import axios from 'axios';

export default class Boxes extends Component 
{
    constructor(props) 
    {
        super(props);

        this.state = {
            openedBox : {},
            openedBoxCard: [],
            boxes: [{"id": 1, "name": "Coffre d'hiver", "description": "Coffre sur la saison hivernale", "price": 250, "Level": 4, "StateBox": "Ouvert", "cards": [
                {"cardId": 1, "description": "Archère du givre", "imageUrl": "https://i.ibb.co/XbVVSnV/Ashe.jpg", "name": "Ashe", "rarityCard": "Commun", "statCard": {"ad": 10, "ap": 0, "as": 10, "ar": 10, "mr": 0, "ms": 10}, "typeCard": "Tirreur"},
                {"cardId": 2, "description": "Forgeur d'étoiles", "imageUrl": "https://i.ibb.co/M8SjtxY/aurelion-sol.jpg", "name": "Aurelion Sol", "rarityCard": "Legendaire", "statCard": {"ad": 100, "ap": 0, "as": 100, "ar": 100, "mr": 0, "ms": 100}, "typeCard": "Tirreur"}
            ]},
            {"id": 2, "name": "Coffre de sang", "description": "Un coffre sanglant...", "price": 300, "Level": 12, "StateBox": "Fermé", "cards": [
                {"cardId": 1, "description": "Bouffon des ténébres", "imageUrl": "https://i.ibb.co/BV2g6qk/Shaco.jpg", "name": "Shaco", "rarityCard": "Super rare", "statCard": {"ad": 50, "ap": 0, "as": 50, "ar": 50, "mr": 0, "ms": 50}, "typeCard": "Support"},
                {"cardId": 2, "description": "Rédemptrice", "imageUrl": "https://i.ibb.co/NLRtYDx/background.jpg", "name": "Senna", "rarityCard": "Legendaire", "statCard": {"ad": 0, "ap": 100, "as": 100, "ar": 0, "mr": 100, "ms": 100}, "typeCard": "Tirreur"}
            ]}, 
            {"id": 3, "name": "Coffre du printemp", "description": "Coffre sur la saison printanière", "price": 250, "Level": 3, "StateBox": "Saboté", "cards": [
                {"cardId": 1, "description": "Scout de Bantam", "imageUrl": "https://i.ibb.co/XybmC1b/Teemo.jpg", "name": "Teemo", "rarityCard": "Rare", "statCard": {"ad": 0, "ap": 20, "as": 20, "ar": 0, "mr": 20, "ms": 20}, "typeCard": "Tirreur"},
                {"cardId": 2, "description": "Manipulatrice", "imageUrl": "https://i.ibb.co/TTY57Rq/Leblanc.jpg", "name": "LeBlanc", "rarityCard": "Super rare", "statCard": {"ad": 0, "ap": 50, "as": 50, "ar": 0, "mr": 50, "ms": 50}, "typeCard": "Mage"}
            ]}, 
            {"id": 4, "name": "Coffre obscure", "description": "Des ombres sortent de ce coffre...", "price": 350, "Level": 18, "StateBox": "Fermé", "cards": [
                {"cardId": 1, "description": "Bouffon des ténébres", "imageUrl": "https://i.ibb.co/BV2g6qk/Shaco.jpg", "name": "Shaco", "rarityCard": "Super rare", "statCard": {"ad": 50, "ap": 0, "as": 50, "ar": 50, "mr": 0, "ms": 50}, "typeCard": "Support"},
                {"cardId": 2, "description": "Fille du néant", "imageUrl": "https://i.ibb.co/72cQVY5/kaisa.jpg", "name": "Kai'Sa", "rarityCard": "Rare", "statCard": {"ad": 0, "ap": 20, "as": 20, "ar": 0, "mr": 20, "ms": 20}, "typeCard": "Tirreur"}
            ]}, 
            {"id": 5, "name": "Coffre lumineux", "description": "La lumière est aveuglante", "price": 350, "Level": 12, "StateBox": "Fermé", "cards": [
                {"cardId": 1, "description": "Virtuose de la harpe", "imageUrl": "https://i.ibb.co/QHZrFNM/sona.jpg", "name": "Sona", "rarityCard": "Rare", "statCard": {"ad": 0, "ap": 20, "as": 20, "ar": 0, "mr": 20, "ms": 20}, "typeCard": "Support"},
                {"cardId": 2, "description": "Enfant des étoiles", "imageUrl": "https://i.ibb.co/99T6CS6/Soraka.jpg", "name": "Soraka", "rarityCard": "Commun", "statCard": {"ad": 0, "ap": 10, "as": 10, "ar": 0, "mr": 10, "ms": 10}, "typeCard": "Support"}
            ]}, 
            {"id": 6, "name": "Coffre d'automne", "description": "Coffre sur la saison automnale", "price": 250, "Level": 2, "StateBox": "Ouvert", "cards": [
                {"cardId": 1, "description": "Shérif de Piltover", "imageUrl": "https://i.ibb.co/2nxZNF8/Caitlyn.jpg", "name": "Caitlyn", "rarityCard": "Rare", "statCard": {"ad": 20, "ap": 0, "as": 20, "ar": 20, "mr": 0, "ms": 20}, "typeCard": "Tirreur"},
                {"cardId": 2, "description": "La force de Demacia", "imageUrl": "https://i.ibb.co/X3fSg3y/garen.png", "name": "Garen", "rarityCard": "Commun", "statCard": {"ad": 10, "ap": 0, "as": 10, "ar": 10, "mr": 0, "ms": 10}, "typeCard": "Guerrier"},
            ]}, 
            {"id": 7, "name": "Coffre de feu", "description": "Il sort tout droit des enfers...", "price": 350, "Level": 7, "StateBox": "Saboté", "cards": [
                {"cardId": 1, "description": "Main de Noxus", "imageUrl": "https://i.ibb.co/V3j5cq8/Darius.jpg", "name": "Darius", "rarityCard": "Commun", "statCard": {"ad": 10, "ap": 0, "as": 10, "ar": 10, "mr": 0, "ms": 10}, "typeCard": "Guerrier"},
                {"cardId": 2, "description": "Scout de Bantam", "imageUrl": "https://i.ibb.co/XybmC1b/Teemo.jpg", "name": "Teemo", "rarityCard": "Rare", "statCard": {"ad": 0, "ap": 20, "as": 20, "ar": 0, "mr": 20, "ms": 20}, "typeCard": "Tirreur"},
            ]}],
            openedModal: false,
            userLevel: 10,
            errorMessage: "",
            openedErrorModal: false,
        }
    }

    sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    }

    componentDidMount() {
        this.setState({
            boxes: this.state.boxes.sort((a, b) => (a.Level > b.Level) ? 1 : -1)
        })
        
        axios.get(`https://leagueofroulette.azurewebsites.net/api/user/level`, )
        .then(response => {
            this.setState({
                userLevel: response.data.level
            })
            
        }).catch(error => {
            this.setState({errorMessage: error.response.data})
        })
    }

    handleCloseModal() {
        this.setState({ 
            openedModal: false,
            openedErrorModal: false,
        })
    }

    cardClicked(box) {
        this.sleep(1).then(r => {
            if (this.state.userLevel >= box.Level)
            {
                this.setState({ 
                    openedBox: box,
                    openedBoxCard: box.cards
                })
                this.setState({ openedModal: true })
                
            } else
            {
                this.setState({ openedErrorModal: true })
            }
        })  
    }

    render = () => (
        <div className="Accueil">
            <Container maxWidth="xl">
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                    <p className="BoxTitle">Boites</p>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'start', p:1, m:1, flexWrap: "wrap"}}>
                    {this.state.boxes.map((box) => (
                        <Box className="cardBoxs" key={box.id}>
                            <Card className="cardBox" onClick={() => this.cardClicked(box)}>
                                <CardHeader className="BoxesCardHeader" title={box.name} subheader={box.description} />
                                <CardMedia
                                    component="img"
                                    height="150"
                                    image={coffre}
                                    alt="img_Test1"
                                />
                                <CardContent className="BocesCardBottom">
                                    <p className="boxLevelBox">Niveau {box.Level}</p>
                                    <p className="boxStateBox">Etat : {box.StateBox}</p>
                                    <p className='Buybox'>{box.price} EB</p>
                                </CardContent>
                            </Card>
                        </Box>
                    ))}

                    <Modal
                        open={ this.state.openedModal }
                        onClose={() => this.handleCloseModal()}
                        aria-labelledby="parent-modal-title"
                        aria-describedby="parent-modal-description"
                    >
                        <Box className="BoxesModal">
                            <h2 className="modalTitle" id="parent-modal-title">Contenu du coffre : {this.state.openedBox.name}</h2>
                            <p className="modalDescription" id="parent-modal-description">{this.state.openedBox.description}</p>
                            <Button className="modalPurchaseBtn" variant="contained">Acheter : {this.state.openedBox.price}</Button>
                            <Carousel className="carouselCardView"
                                fullHeightHover={false} animation="slide" navButtonsAlwaysVisible={true}
                            >
                                {this.state.openedBoxCard.map((card, key) => (
                                    <Box className="carouselBoxView">
                                        <CardBox className="carouselCardBox" key={key} name={card.name} description={card.description} imageUrl={card.imageUrl} stat={card.statCard} rarity={card.rarityCard} />
                                    </Box>
                                ))}
                            </Carousel>
                        </Box>
                    </Modal>

                    <Modal
                        open={ this.state.openedErrorModal }
                        onClose={() => this.handleCloseModal()}
                        aria-labelledby="parent-modal-title"
                        aria-describedby="parent-modal-description"
                    >
                        <Box className="BoxesModalError">
                            <h2 className="modalErrorTitle" id="parent-modal-title">Erreur lors de l'ouverture du coffre !</h2>
                            <p className="modalErrorDescription" id="parent-modal-description">Vous n'avez malheureusement pas le bon niveau pour accéder à ce coffre</p>
                        </Box>
                    </Modal>
                </Box>
            </Container>
        </div>
    );
}