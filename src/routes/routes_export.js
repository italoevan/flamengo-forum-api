const forunsRoutes = require("./home_routes/foruns_route");
const loginRoutes = require('./login_routes/login_routes');

class RoutesExport {
    constructor(expressInstance){
        this.expressInstance = expressInstance;
    }

    callAllRoutes(){
        this.expressInstance.use(forunsRoutes);
        this.expressInstance.use(loginRoutes); 
    }

}

module.exports = RoutesExport;