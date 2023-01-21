import { StatusCodes } from "http-status-codes";
import jwt from "jsonwebtoken";

export function VerifyToken(request, response, next) {
    const authHeader = request.get('Authorization');
    if (authHeader) {
        // authHeader.replace("Bearer ", "");
        const token = authHeader.split(' ')[1];
        jwt.verify(token, "hello1234", (error, payload)=>{
            if (error) {
                response.status(StatusCodes.UNAUTHORIZED).json({message: "Access Denied"});
            } else {
                next();
            }
        })
    } else {
        response.status(StatusCodes.UNAUTHORIZED).json({message: "Access Denied"});
    }
}