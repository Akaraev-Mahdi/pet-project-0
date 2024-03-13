class ApiError extends Error {
    constructor(status, message){
        super()
        this.message = message
        this.status = status
    }

    static badreq(message){
        return new ApiError(404, message)
    }

}

module.exports = ApiError