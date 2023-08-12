const CuisineModel = require("../model/CuisineModel");

const CuisineController  = {
   
    getCuisineList:async(request,response)=>{
    //   let {rest_id} = request.params;
       let result = await CuisineModel.find({});
       response.send({
        call:true,
         result
       })
 
     },
    }


module.exports = CuisineController;