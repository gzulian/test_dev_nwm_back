//const magic = require('../../util/magic');
const enum_ = require('../../util/enum');
const ormUser = require('../orm/orm_user_mongodb');
//const { isUuid } = require('uuidv4');


const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config({ path: './.env' });

exports.AuthenticateToken = async (req, res) =>{
    let message='', statusCode=0;
    try{
        const authHeader = req.headers['authorization']
        const token = authHeader && authHeader.split(' ')[1]
        if (token == null)  message = "Token required", statusCode = enum_.CODE_BAD_REQUEST;
        userReq = null;
        jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
          //console.log(err) 
          if (err) { 
             message = "User not found or expired", statusCode = enum_.CODE_NOT_FOUND;
          }else{
            userReq= user
            message = "Success", statusCode = enum_.CODE_OK;
          }
        });
        return res.status(statusCode).send({user:userReq,message:message});
    } catch(err) {
        console.log("err = ", err);
        return res.status(enum_.CODE_INTERNAL_SERVER_ERROR).send({});
    }
}

/*exports.Login = async (req, res) =>{
    let status = 'Success', errorCode ='', message='', data='', statusCode=0, resp={};
    try{
        respOrm = await ormUser.GetAll();
        if(respOrm.err){
            status = 'Failure', errorCode = respOrm.err.code, message = respOrm.err.messsage, statusCode = enum_.CODE_BAD_REQUEST;
        }else{
            message = 'Success Response', data = respOrm, statusCode = data.length > 0 ? enum_.CODE_OK : enum_.CODE_NO_CONTENT;
        }
        resp = await magic.ResponseService(status,errorCode,message,data);
        return res.status(statusCode).send(resp);
    } catch(err) {
        console.log("err = ", err);
        resp = await magic.ResponseService('Failure',enum_.CRASH_LOGIC,err,'');
        return res.status(enum_.CODE_INTERNAL_SERVER_ERROR).send(resp);
    }
}*/
exports.Store = async (req, res) =>{
    let status = 'Success', errorCode ='', message='', data='', statusCode=0, resp={};
    try{
        const Name = "Gabriel";
        const email = "gzuliany@gmail.com";
       
        if( Name && email  ){
            respOrm = await ormUser.Store( Name, email );
            if(respOrm.err){
                status = 'Failure', errorCode = respOrm.err.code, message = respOrm.err.messsage, statusCode = enum_.CODE_BAD_REQUEST;
            }else{
                message = 'User created', statusCode = enum_.CODE_CREATED;
            }
        }else{
            status = 'Failure', errorCode = enum_.ERROR_REQUIRED_FIELD, message = 'All fields are required', statusCode = enum_.CODE_BAD_REQUEST;
        }
        //resp = await magic.ResponseService(status,errorCode,message,data)
        resp = {}
        return res.status(statusCode).send(resp);
    } catch(err) {
        console.log("err = ", err);
        return res.status(enum_.CODE_INTERNAL_SERVER_ERROR).send(await magic.ResponseService('Failure',enum_.CRASH_LOGIC,'err',''));
    }
}
exports.GetById = async (req, res) =>{
    let status = 'Success', errorCode ='', message='', data='', statusCode=0, resp={};
    try{
        const id = req.params.id;
        
        respOrm = await ormUser.GetById(id);
        if(respOrm && respOrm.err){
            status = 'Failure', errorCode = respOrm.err.code, message = respOrm.err.messsage, statusCode = enum_.CODE_BAD_REQUEST;
        }else{
            if (respOrm) {
                message = 'Success Response', data= respOrm, statusCode = enum_.CODE_OK;
            }else{
                status = 'Failure', errorCode = enum_.ID_NOT_FOUND, message = 'ID NOT FOUND', statusCode = enum_.CODE_NOT_FOUND;
            }
        }
        
        resp = {
            status:status,
            errorCode:errorCode,
            message:message,
            statusCode:statusCode,
            data:data
        }
        return res.status(statusCode).send(resp);
    } catch(err) {
        console.log("err = ", err);
        return res.status(enum_.CODE_INTERNAL_SERVER_ERROR).send(await magic.ResponseService('Failure',enum_.CRASH_LOGIC,err,''));
    }
}

exports.UpdateTransfersById = async (req, res) =>{
    let status = 'Success', errorCode ='', message='', data='', statusCode=0, resp={};
    try{
        const id = req.params.id;
        if( id){
            respOrm = await ormUser.UpdateTransfersById(id, req.body.transfers);
            if(respOrm.err){
                status = 'Failure', errorCode = respOrm.err.code, message = respOrm.err.messsage, statusCode = enum_.CODE_BAD_REQUEST;
            }else{
                message = 'User updated', statusCode = enum_.CODE_CREATED;
            }
        }else{
            status = 'Failure', errorCode = enum_.ERROR_REQUIRED_FIELD, message = 'All fields are required', statusCode = enum_.CODE_BAD_REQUEST;
        }
        
        resp = {
            status:status,
            errorCode:errorCode,
            message:message,
            statusCode:statusCode,
            data:data
        }
        return res.status(statusCode).send(resp);
    } catch(err) {
        console.log("err = ", err);
        return res.status(enum_.CODE_INTERNAL_SERVER_ERROR).send(resp);
    }
}


exports.UpdateAddresseesById = async (req, res) =>{
    let status = 'Success', errorCode ='', message='', data='', statusCode=0, resp={};
    try{
        const id = req.params.id;
        if( id){
            respOrm = await ormUser.UpdateAddresseesById(id, req.body.addressees);
            if(respOrm.err){
                status = 'Failure', errorCode = respOrm.err.code, message = respOrm.err.messsage, statusCode = enum_.CODE_BAD_REQUEST;
            }else{
                message = 'User updated', statusCode = enum_.CODE_CREATED;
            }
        }else{
            status = 'Failure', errorCode = enum_.ERROR_REQUIRED_FIELD, message = 'All fields are required', statusCode = enum_.CODE_BAD_REQUEST;
        }
        
        resp = {
            status:status,
            errorCode:errorCode,
            message:message,
            statusCode:statusCode,
            data:data
        }
        return res.status(statusCode).send(resp);
    } catch(err) {
        console.log("err = ", err);
        return res.status(enum_.CODE_INTERNAL_SERVER_ERROR).send(resp);
    }
}