export default class Utils {
    parseJwt(token) {
        var base64Url = token.split(".")[1];
        var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
        var jsonPayoad = decodeURIComponent(atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
    
        return JSON.parse(jsonPayoad);
    }
    
    static validToken(token) {
        let tokenContent = this.parseJwt(token);
    
        if ((+new Date().setHours(new Date().getHours() + 1)) / 1000 <= tokenContent.exp) {
            return true;
        }
    
        return false;
    }
}