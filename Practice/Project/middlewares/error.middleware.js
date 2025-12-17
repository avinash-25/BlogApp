export const errorMid = (err, req, res, next) => {
let message = err.message || "somrthing went wrong";

let statusCode = err.statusCode || 500;

    if (err.message == "ValidationError") {
        statusCode = 400;
        message = `${Object.values(err.errors).map((ele) => ele.message)}`
    }

    if (err.code === 11000) {
        statusCode = 409;
        message = `${Object.keys(err.keyValue)[0]} already used`;
    }

    if (err.name === "CastError") {
        statusCode = 400;
        message = "Invalid MongoDB ID";
    }

    if (err.name === "JsonWebTokenError") {
        statusCode = 401;
        message = "Invalid Session, Please login again";
    }
    
    res.status(statusCode).json({ success: false, message, errObj: err });
};