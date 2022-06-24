const forunsRoutes = require("./home_routes/foruns_route");

class RoutesExport {
    constructor(expressInstance){
        this.expressInstance = expressInstance;
    }

    callAllRoutes(){
        this.expressInstance.use(forunsRoutes);
    }

}

module.exports = RoutesExport;