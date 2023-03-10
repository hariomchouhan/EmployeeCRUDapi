import express from "express";
import { deleteEmployee, fetchAllEmployees, fetchEmployeeById, fetchEmployeeByPhone, saveEmployee, updateEmployee } from "../Controllers/EmployeeController.js";
import { VerifyToken } from "../Middlewares/VerifyToken.js";

const employeeRouter = express.Router();

// employeeRouter.post('/employees', VerifyToken, saveEmployee);
// employeeRouter.get('/employees', VerifyToken, fetchAllEmployees);
// employeeRouter.get('/employees/:id', VerifyToken, fetchEmployeeById);
// employeeRouter.get('/employees/phone/:phone', VerifyToken, fetchEmployeeByPhone);
// employeeRouter.delete('/employees/:id', VerifyToken, deleteEmployee);
// employeeRouter.put('/employees/:id', VerifyToken, updateEmployee);

employeeRouter.post('/employees', saveEmployee);
employeeRouter.get('/employees', fetchAllEmployees);
employeeRouter.get('/employees/:id', fetchEmployeeById);
employeeRouter.get('/employees/phone/:phone', fetchEmployeeByPhone);
employeeRouter.delete('/employees/:id', deleteEmployee);
employeeRouter.put('/employees/:id', updateEmployee);

export default employeeRouter;