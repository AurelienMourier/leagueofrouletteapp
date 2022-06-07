import React from "react";
import Utils from "./Utils";

export default class BakcpackServices extends React.Component 
{
    constructor(props)
    {
        super(props)

        this.state = {
            cards: []
        }
    }

    isLoggedIn() {
        return Utils.validToken(localStorage.getItem("access_token"));
    }
}