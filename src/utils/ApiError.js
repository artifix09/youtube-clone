class ApiError extends Error{
    constructor(
        statusCode,
        message = "something in happing bad",
        errors = [],
        stack  = "",


    ){
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = false;
        this.errors = errors
         

    }
}


export { ApiError }