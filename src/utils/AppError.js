class AppError extends Error {

    constructor(message, statusCode) {
        super(message)
        this.statusCode = statusCode
        this.status =  `${statusCode}`.startsWith('4') ?  "fail" : "error"
        // status code 4xx - "fail" - client side error
        // status code 5xx - "error" - server side error

        // string * 1 -> number
        // number + "" -> string
        // `${number}` -> string
    }


}

module.exports = AppError;
