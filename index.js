import express from 'express';
import 'dotenv/config';
import { configureDb } from './src/configs/DbConfig.js';
import employeeRouter from './src/Routers/EmployeeRouter.js';
import adminRouter from './src/Routers/AdminRouter.js';
import cors from 'cors';

const app =  express();
app.use(cors());
app.use(express.json());
app.use(employeeRouter);
app.use(adminRouter)
app.listen(process.env.SERVER_PORT, ()=>{
    configureDb();
    console.log(`Server is running on port ${process.env.SERVER_PORT}`);
});