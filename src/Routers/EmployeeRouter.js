import express from "express";
import { deleteEmployee, fetchAllEmployees, fetchEmployeeById, fetchEmployeeByPhone, saveEmployee, updateEmployee } from "../Controllers/EmployeeController.js";

const employeeRouter = express.Router();

employeeRouter.post('/employees', saveEmployee);
employeeRouter.get('/employees', fetchAllEmployees);
employeeRouter.get('/employees/:id', fetchEmployeeById);
employeeRouter.get('/employees/phone/:phone', fetchEmployeeByPhone);
employeeRouter.delete('/employees/:id', deleteEmployee);
employeeRouter.put('/employees/:id', updateEmployee);

export default employeeRouter;