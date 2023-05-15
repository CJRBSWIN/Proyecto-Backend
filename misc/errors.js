module.exports = {
    400: {
        statusCode: 400,
        error: new Error('all fiels are mandatory'),
    },
    wrong_data: {
        statusCode: 400,
        error: new Error('username or password incorrect'),
    },
    401: {
        statusCode: 401,
        error: new Error('unauthorized')
    },
    404: {
        statusCode: 404,
        error: new Error('Path not found'),
    },
    500: {
        statusCode: 500,
        error: new Error('internal server error'),
    },

}