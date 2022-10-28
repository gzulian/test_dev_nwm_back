const conn = require('../../repositories/repository_mongo');



//MYSQL
// exports.Login = async () =>{
//     try{
//         return await conn.db.User.find({email: "gzuliany@gmail.com",password:"123"});
//     }catch(err){
//         console.log(" err orm-user.GetAll = ", err);
//         return await {err:{code: 123, messsage: err}}
//     }
// }

exports.GetById = async ( Id ) =>{
    try{
        return await conn.db.connMongo.User.findOne({ userId: Id });
    }catch(err){
        console.log(" err orm-user.GetById = ", err);
        return await {err:{code: 404, messsage: err}}
    }
}
exports.Store = async ( Name, email ) =>{
    try{
        const datacenter = await new conn.db.connMongo.User({
            userId: 1,
            name: Name,
            email: email,
            addressees:[],
            transfers:[]
           
        });
        datacenter.save();
        return true
    }catch(err){
        console.log(" err orm-user.Store = ", err);
        return await {err:{code: 500, messsage: err}}
    }
}

exports.UpdateTransfersById = async ( Id,transfers,addressees ) =>{
    try{
        await conn.db.connMongo.User.findOneAndUpdate(
            {
                userId: Id
            },{ 
               '$push':{ 'transfers':transfers},
         })
        return true
    }catch(err){
        console.log(" err orm-user.Store = ", err);
        return await {err:{code: 500, messsage: err}}
    }
}

exports.UpdateAddresseesById = async ( Id,addressees ) =>{
    try{
        await conn.db.connMongo.User.findOneAndUpdate(
            {
                userId: Id
            },{ 
               '$push':{ 'addressees':addressees}
         })
        return true
    }catch(err){
        console.log(" err orm-user.Store = ", err);
        return await {err:{code: 500, messsage: err}}
    }
}
