import React, { Component } from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';

import './NavBar.css';

export default class Navbar extends Component 
{
    // Constructeur permet d'utiliser les state
    constructor(props) 
    {
        super(props)
        
        this.state = {
            anchorElNav: null,
            anchorElUser: null,
            pages: ['Accueil', 'Boites', 'Amélioration', 'Wiki', 'A propos de nous'],
            links: ['/home', '/boxes', '/Upgrade', '/Wiki', '/AboutUs'],
            connectAccounts: ["Se connecter", "S'inscrire"],
            settings: ['Profile', 'Sac à dos', 'Paramètres', 'Se déconnecter'],
            isConnected: false,
            userIcon: "/favicon.ico",
            toggleDrawer: false,
        }
    }
    

    componentDidMount()
    {

    }

    handleOpenNavDrawer = (open) => (event) => {      
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
        
        this.setState ({
            toggleDrawer: open
        })
    };

    render = () => 
    (
        <div className="Navbar">
            <AppBar position="static" sx={{backgroundColor: "#1c323f"}}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        
                        {/* Affichage du logo en grand écran */}
                        <Typography
                            variant="h6"
                            wrap='true'
                            component="div"
                            sx={{ flexGrow: 1, mr: 2, justifyContent: 'space-between', display: { xs: 'none', md: 'flex' } }}
                        >
                            LOGO
                        </Typography>


                        {/* Affichage de l'icon du drawer pour le menu en xs */}

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={this.handleOpenNavDrawer(true)}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                        </Box>

                        <Drawer
                            onClose={this.handleOpenNavDrawer(false)}
                            open={this.state.toggleDrawer}
                        >
                            <Box
                                sx={{ display: { xs: 'flex', md: 'none' } }}
                                role="presentation"
                                onClick={this.handleOpenNavDrawer(false)}
                                onKeyDown={this.handleOpenNavDrawer(false)}
                            >
                                <List>
                                    {this.state.pages.map((page, index) => (
                                        <ListItem component={Link} to={this.state.links[index]} button key={page}>
                                            <ListItemText primary={page} />
                                        </ListItem>
                                    ))}
                                </List>
                            </Box>
                        </Drawer>


                        {/* Affichage du logo en petit écran xs */}

                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                        >
                            LOGO
                        </Typography>


                        {/* Affichage du menu en long en haut */}

                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {this.state.pages.map((page, index) => (
                                <Button component={Link} to={this.state.links[index]} key={page} onClick={this.handleCloseNavMenu} 
                                sx={{ m: 2, color: '#c6983a', display: 'block' }} id="buttonNav"
                                >
                                    {page}
                                </Button>
                            ))}
                        </Box>

                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    );
}