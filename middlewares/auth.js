// import { User } from "../models/userSchema.js";
// import { catchAsyncErrors } from "./catchAsyncErrors.js";
// import ErrorHandler from "./error.js";
// import jwt from "jsonwebtoken";

// export const isAuthenticated = catchAsyncErrors(async (req, res, next) => {
//   let { token } = req.cookies;
  
//   if (!token) {
//      token = req.header.authorization.split(' ')[1]
//     if(!token){
//         return next(new ErrorHandler("User not Authenticated!", 400));
//     }
//   }
//   const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
//   req.user = await User.findById(decoded.id);
//   next();
// });
import { User } from "../models/userSchema.js";
import { catchAsyncErrors } from "./catchAsyncErrors.js";
import ErrorHandler from "./error.js";
import jwt from "jsonwebtoken";

export const isAuthenticated = catchAsyncErrors(async (req, res, next) => {
  let token = req.cookies.token;

  // If token not found in cookies, try headers
  if (!token && req.headers.authorization && req.headers.authorization.startsWith("Bearer ")) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return next(new ErrorHandler("User not Authenticated!", 401));
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

  const user = await User.findById(decoded.id);
  if (!user) {
    return next(new ErrorHandler("User no longer exists!", 401));
  }

  req.user = user;
  next();
});
