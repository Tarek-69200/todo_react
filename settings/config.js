// Définition de la classe Configuration qui permet de stocker les paramètres de configuration de l'application.

class Configuration {
    constructor(myIPLocal, portAPI, apiKEY) {
        this._myIPLocal = myIPLocal;
        this._portAPI = portAPI;
        this._apiKEY = apiKEY;
    }

    // IP REACT NATIVE APP
    getMyIPLocal() {
        return this._myIPLocal;
    }
    setMyIPLocal(string) {
        this._myIPLocal = string;
    }

    // PORT API
    getPortAPI() {
        return this._portAPI;
    }
    setPortAPI(string) {
        this._portAPI = string;
    }

    // API KEY
    getApiKEY() {
        return this._apiKEY;
    }
    setApiKEY(string) {
        this._apiKEY = string;
    }
}

const configSingleton = new Configuration('192.168.1.12', '3000', '');

export default configSingleton;