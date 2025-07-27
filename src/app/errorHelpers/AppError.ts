class AppError extends Error{
    public statusCode:number;
    constructor(statusCodes:number, message:string, stack:""){
        super(message)
        this.statusCode=statusCodes;

        if(stack){
            this.stack=stack
        }else{
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

export default AppError;