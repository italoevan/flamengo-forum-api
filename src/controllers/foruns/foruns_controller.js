const foruns =  require("../../models/sequelize_models/foruns");

async function getAllForuns(){
    var response = await foruns.findAll();
    return response;
}

module.exports = {getAllForuns};