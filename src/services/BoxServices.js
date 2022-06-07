import axios from "axios"
import Utils from "./Utils";

export default class BoxServices
{
    isLoggedIn() {
        return Utils.validToken(localStorage.getItem("access_token"));
    }

    static GetBoxes()
    {
        axios.get(`https://localhost:5001/api/box`).then(response => {
            return(response)
            
        }).catch(error => {
            return(error.response.data)
        })
    }
}