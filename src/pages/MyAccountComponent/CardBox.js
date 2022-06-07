import React, { Component } from "react";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import "../style/MyAccountBackpack.css"
import Box from '@mui/material/Box';
import { CardContent } from "@mui/material";

import AD from "../../imgs/AD.png";
import AP from "../../imgs/AP.png";
import AS from "../../imgs/AS.png";
import AR from "../../imgs/AR.png";
import MR from "../../imgs/MR.png";
import MS from "../../imgs/MS.png";

export default class CardBox extends Component 
{

    constructor(prop) 
    {
        super(prop);

        this.state = {
            name: prop.name,
            description: prop.description,
            imageUrl: prop.imageUrl,
            stat: prop.stat,
            rarity: prop.rarity
        }
    }

    render = () => (
        <div className="CardBox">
            <Box className="BackpackCardBoxs">
                <Card className="BackpackCardBox">
                    <CardHeader title={this.state.name} subheader={this.state.description} />
                    <CardMedia
                        component="img"
                        height="200"
                        image={this.state.imageUrl}
                        alt={this.state.name}
                    />
                    <CardContent>
                        <Box>
                            <p className="cardBoxTextRarity">{this.state.rarity}</p>
                            <List className="cardBoxList">
                                <ListItem className="cardBoxListItem">
                                    <img src={AD} className="cardBoxImage" alt="AD" />
                                    <ListItemText primary={this.state.stat.ad} />
                                </ListItem>
                                <ListItem className="cardBoxListItem">
                                    <img src={AP} className="cardBoxImage" alt="AP" />
                                    <ListItemText primary={this.state.stat.ap} />
                                </ListItem>
                                <ListItem className="cardBoxListItem">
                                    <img src={AS} className="cardBoxImage" alt="AS" />
                                    <ListItemText primary={this.state.stat.as} />
                                </ListItem>
                            </List>
                            <List className="cardBoxList">
                                <ListItem className="cardBoxListItem">
                                    <img src={AR} className="cardBoxImage" alt="AR" />
                                    <ListItemText primary={this.state.stat.ad} />
                                </ListItem>
                                <ListItem className="cardBoxListItem">
                                    <img src={MR} className="cardBoxImage" alt="MR" />
                                    <ListItemText primary={this.state.stat.ap} />
                                </ListItem>
                                <ListItem className="cardBoxListItem">
                                    <img src={MS} className="cardBoxImage" alt="MS" />
                                    <ListItemText primary={this.state.stat.as} />
                                </ListItem>
                            </List>
                        </Box>
                    </CardContent>
                </Card>
            </Box>
        </div>
    );
}