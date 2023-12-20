const asynchandler = (requestHndler) => {
   (req, res, next) => {
    Promise.resolve(requestHndler(req,res,next)).catch((err) => next(err))
   }
}




 
export { asynchandler }

// const asyncHandler = () => {}
// const asyncHandler = (func) => () => {}
// const asyncHandler = (func) => async() => {}

// const asynchandler = (fn) => (req, res, next) => {
//   try {
//     await fn(req,res, next)

//   } catch (error){
//     res.status(err.code || 500).json({
//       sucess: false,
//       message: err.message
//     })
//   }
// }