import { response } from "express";

const notFound = (req,res,next) => {
    const error = new Error(`Not Found - ${req.OriginalUrl}`);
    res.status(400);
    next(error);
}


const errorHandler = (err,req,res,next) => {

    let statusCode = err.statusCode === 200 ? 500 : res.statusCode;
    let errorMessage = err.message;


    //Check for MongoDB bad ObjectId;
    if(err.name === 'CastError' && err.kind === 'ObjectId'){
        message = `Resource not found`;
        statusCode = 404;
    }

    res.status(statusCode).json({message:errorMessage,stack: process.env.NODE_ENV==='production' ? 'Production' :err.stack})

};

export {notFound, errorHandler};