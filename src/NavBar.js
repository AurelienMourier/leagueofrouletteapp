import React, { Component } from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

import logoLoL from "./imgs/logo_LoL.png";

export default class Navbar extends Component 
{
    // Constructeur permet d'utiliser les state
    constructor(props) 
    {
        super(props)
        
        this.state = {
            anchorElNav: null,
            anchorElUser: null,
            pages: ['Accueil', 'Boites', 'Wiki', 'A propos de moi'],
            links: ['/home', '/boxes', '/wiki', '/about-us'],
            connectAccounts: ["Se connecter", "S'inscrire"],
            settings: ['Profile', 'Sac à dos', 'Paramètres', 'Se déconnecter'],
            userIcon: "/favicon.ico",
            toggleDrawer: false,
            openedMenu: false,
        }
    }

    isLoggedIn() {
        return localStorage.getItem("access_token");
    }

    openMenu = (open) => (event) => {      
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
        
        this.setState ({
            openedMenu: open
        })
    };

    handleOpenNavDrawer = (open) => (event) => {      
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
        
        this.setState ({
            toggleDrawer: open
        })
    };

    disconect = () => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        this.setState({openMenu: false});
        localStorage.clear();
    }

    render = () => 
    (
        <div className="Navbar">
            <AppBar className="appbar" position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        
                        {/* Affichage du logo en grand écran */}
                        <img sx={{ display: { xs: 'none', md: 'flex' }, m:1 }} wrap='true' className="logoNavBar" src={logoLoL} alt="logoLoL" />


                        {/* Affichage de l'icon du drawer pour le menu en xs */}

                        <Box className="menuIcon" sx={{ display: { xs: 'flex', md: 'none' } }}>
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

                        {/* Affichage du menu en long en haut */}

                        <Box sx={{ flexGrow: 1, justifyContent: 'space-evenly', display: { xs: 'none', md: 'flex' } }}>
                            {this.state.pages.map((page, index) => (
                                <Button component={Link} to={this.state.links[index]} key={page} onClick={this.handleCloseNavMenu} 
                                className="buttonNav"
                                >
                                    {page}
                                </Button>
                            ))}
                        </Box>

                        <Box>
                            <IconButton
                                size="large"
                                aria-label="User account"
                                aria-haspopup="true"
                                onClick={this.openMenu(true)}
                            >
                                <AccountCircle fontSize="large" sx={{ color: "#c6983a"}}/>
                            </IconButton>

                            <Menu
                                id="menu-appbar"
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={this.state.openedMenu}
                                onClose={this.openMenu(false)}
                            >
                                { this.isLoggedIn() ?
                                    <Box>
                                        <MenuItem component={Link} onClick={this.openMenu(false)} to="/myaccount">Mon compte</MenuItem>
                                        <MenuItem component={Link} onClick={this.disconect()} to="/login">Se déconnecter</MenuItem>
                                    </Box>
                                :
                                    <Box>
                                        <MenuItem component={Link} onClick={this.openMenu(false)} to="/login">Se connecter</MenuItem>
                                        <MenuItem component={Link} onClick={this.openMenu(false)} to="/register">S'inscrire</MenuItem>
                                    </Box>
                                }
                            </Menu>
                        </Box>

                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    );
}