import React from "react";
import { Navigate } from "react-router-dom";

const parseJwt = (token) => {
    var base64Url = token.split(".")[1];
    var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    var jsonPayoad = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayoad);
}

const validToken = (token) => {
    let tokenContent = parseJwt(token);

    if ((+new Date().setHours(new Date().getHours() + 1)) / 1000 <= tokenContent.exp) {
        return true;
    }

    return false;
}

const ProtectedRoute = ({children}) => {
        return(
            localStorage.getItem("access_token") && validToken(localStorage.getItem("access_token")) ?
            children
            : <Navigate to="/login" />
        )
}

export default ProtectedRoute;