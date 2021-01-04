const notFound = (Request, Response, next) => {
  const error = new Error(`Not Found- ${Request.originalUrl}`)
  Response.status(404)
  next(error)
}



const errorHandler = (error, Request, Response, next) => {
  const statusCode = Response.statusCode === 200 ? 500 : Response.statusCode
  Response.status(statusCode)
  Response.json({
    message: error.message,
    stack: process.env.NODE_ENV === 'production' ? null : error.stack,
  })
}



export  { notFound, errorHandler }