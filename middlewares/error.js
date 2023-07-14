
class ErrorHandler extends Error {
    constructor(message,status){
        super(message);
        this.status=status;
    }
}

export const errorFind =(err,req,res,next)=>{

    err.message = err.message || "internal server error";
    err.status = err.status || 500;

    res.status(err.status).json({
        success: false,
        message: err.message,
      });
}

export default ErrorHandler
