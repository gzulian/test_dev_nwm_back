'use strict'

module.exports = (db) => {

    // var addresseesSchema = new db.Schema({
    //     name: String,
    //     rut: String,
    //     email: String,
    //     bank: String,
    //     account: Number,
    // });
    var userSchema = new db.Schema(
        {  
            userId: String,
            //_idx: db.Schema.Types.ObjectId,
            name: String,
            email: String,
            addressees: [],
            transfers: [],
        
        }
        ,
        {
            timestamps: {
                createdAt: 'created_at',
                updatedAt: 'updated_at'
            }
        }
    );
    return db.model('Users', userSchema);
};