const RestaurantModel = require("../model/RestaurantModel");
const MenuItemModel = require("../model/MenuItemModel");

const RestaurantController  = {
    getRestaurantListByLocation : async(request,response)=>{
      let  {id} = request.params;
      //console.log(id);
      let result = await RestaurantModel.find({location_id:id},{name:1,locality:1,city:1,image:1});
       response.send({
        call:true,
         result
       })
    },
    getSingleRestaurantDetails:async(request,response)=>{
     let {rest_id} = request.params;
      let result = await RestaurantModel.findOne({_id:rest_id});
      response.send({
       call:true,
        result
      })

    },
    getMenuItems:async(request,response)=>{
      let {r_id} = request.params;
      let result = await MenuItemModel.find({restaurantId:r_id});
      response.send({
       call:true,
        result
      })

    },
   
    //filter starts
      getFilters : async (request, response) => {
      try {
        let {mealtype_id,location_id,sort,lower,higher,limit,cuisine_id}  = request.body;
        // {collection_id:mealtype_id}
        console.log(request.body)
        let filter  = {}
        if(mealtype_id){
          filter = {...filter,collection_id:mealtype_id}
        }
        if(location_id){
          filter = {...filter,location_id:location_id}
        }
       
        if(lower!==undefined && higher!==undefined){
          filter={...filter,min_price:{$gt:lower,$lt:higher}}
        }
       if(cuisine_id.length!==0){
         filter = {...filter,cuisine_id:{$in :cuisine_id}}
       }
        // filter = {...filter,...data}
        // const skip=(page-1)*limit;

        console.log("filter :  ",filter)
        let RestaurantList = await RestaurantModel.find(filter).sort({min_price:sort});
        console.log("result",RestaurantList)
        let sendData = {
          status: RestaurantList.length === 0 ? false : true,
          RestaurantList,
          count: RestaurantList.length,
        };
        response.status(200).send(sendData);
      } catch (error) {
        let errorObj = { status: false, error };
        response.status(500).send(errorObj);
      }
    }
    
   
}


module.exports = RestaurantController;