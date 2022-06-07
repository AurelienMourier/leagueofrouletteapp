import React, { Component } from "react";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { Button } from '@mui/material';
import { Link } from "react-router-dom";

import './style/Home.css';
import coffre from "../imgs/chest.png";
import champ from "../imgs/garen.png";

export default class Home extends Component 
{
    constructor(props) 
    {
        super(props);

        this.state = {
            daylyBox: {id: 0, name: "Coffre d'hiver", description: "Coffre sur la saison hivernale", price: 250},
            daylyCard: {id: 0, name: "Garen", description: "Champion avec une grosse épée"},
        }
    }

    cardClicked(box) {

    }

    isLoggedIn() {
        return localStorage.getItem("access_token");
    }

    render = () => (
        <div className="Home">
            <Container maxWidth="xl">
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                    <p className="HomeTitle">Bienvenue sur League Of Roulette !</p>
                </Box>
                <Box className="homePresBox" sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Card className="homePresCard">
                        <CardContent>
                            <p>
                                Sur ce site vous aurez l'ocasion de gagner vos champions préférer et des objets de toute beauté !
                            </p>
                            <p>
                                Pour pouvoir ouvrir un coffre et commencer dès à présent de collectionner des cartes, veuillez d'abord vous créer un compte ou vous connecter pour continuer votre quête !
                            </p>
                            {!this.isLoggedIn() ?
                                <Box className="btnsLogin" sx={{ display: 'flex', flexDirection: 'row'}}>
                                    <Link to="/register"><Button className="homeBtnLogin" variant="contained">S'inscrire</Button></Link>
                                    <Link to="/login"><Button className="homeBtnLogin" variant="contained">Se connecter</Button></Link>
                                </Box>
                                :
                                <Box></Box>
                            }
                        </CardContent>
                    </Card>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Box className="homeCards" >
                        <Card className="homeCard">
                            <CardHeader title='Boites du jours' subheader="Ci-dessous la boite la plus rentable." />
                            <CardContent sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                                <Box className="homeCardBoxs">
                                    <Card className="homeCardBox" onClick={() => this.cardClicked(this.state.daylyBox)}>
                                        <CardHeader title={this.state.daylyBox.name} subheader={this.state.daylyBox.description} />
                                        <CardMedia
                                            component="img"
                                            height="200"
                                            image={coffre}
                                            alt="img_Test1"
                                        />
                                        <CardContent>
                                            <p className='homeBuybox'>{this.state.daylyBox.price} EB</p>
                                        </CardContent>
                                    </Card>
                                </Box>
                            </CardContent>
                        </Card>
                    </Box>
                    <Box className="homeCards">
                        <Card className="homeCard">
                            <CardHeader title='Cartes du jour' subheader="Ci-dessous la carte la mieux classées." />
                            <CardContent sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                                <Box className="homeCardBoxs">
                                    <Card className="homeCardBox">
                                        <CardHeader title={this.state.daylyCard.name} subheader={this.state.daylyCard.description} />
                                        <CardMedia
                                            component="img"
                                            height="300"
                                            image={champ}
                                            alt="img_Test1"
                                        />
                                    </Card>
                                </Box>
                            </CardContent>
                        </Card>
                    </Box>
                </Box>
            </Container>
        </div>
    );
}