import { StatusCodes } from "http-status-codes";
import { AdminModel } from "../models/AdminModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function saveAdmin(request, response) {
    try {
        const newPassword=bcrypt.hashSync(request.body.password, 12);
        request.body["password"]=newPassword;
        const emp = new AdminModel(request.body);
        const savedAdmin = await emp.save();
        response.status(StatusCodes.CREATED).json(savedAdmin);
    } catch (error) {
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).json();
    }
}

export async function login(request, response) {
    try {
        const admin = await AdminModel.findOne({phone: request.body.phone});
        if (admin) {
            if(bcrypt.compareSync(request.body.password, admin.password)){
                const token = jwt.sign({adminId: admin._id}, "hello1234")
                response.status(StatusCodes.OK).json({token: token});
            }
            else{
                response.status(StatusCodes.BAD_REQUEST).json({message: "Invalid password"});
            }
        } else {
            response.status(StatusCodes.BAD_REQUEST).json({message: "Invalid phone number"});
        }
    } catch (error) {
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).json();
    }
}