import express from "express";
import { login, saveAdmin } from "../Controllers/AdminController.js";

const adminRouter = express.Router();

adminRouter.post('/admins', saveAdmin);
adminRouter.post('/admins/login', login);
export default adminRouter;