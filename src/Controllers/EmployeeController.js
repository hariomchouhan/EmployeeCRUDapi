import { StatusCodes } from "http-status-codes";
import { EmployeeModel } from "../models/EmployeeModel.js"

export async function saveEmployee(request, response) {
    try {
        const emp = new EmployeeModel(request.body);
        const e = await emp.save();
        response.status(StatusCodes.CREATED).json(e);
    } catch (error) {
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).json();
    }
}

export async function fetchAllEmployees(request, response) {
    try {
        const employees = await EmployeeModel.find();
        response.status(StatusCodes.OK).json(employees);
    } catch (error) {
        console.log(error);
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).json();
    }
}

export async function fetchEmployeeById(request, response) {
    try {
        const employee =  await EmployeeModel.findById(request.params.id);
        if (employee) {
            response.status(StatusCodes.OK).json(employee);
        } else {
            response.status(StatusCodes.NOT_FOUND).json({message: 'Employee not found'});
        }
    } catch (error) {
        console.log(error);
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).json();
    }
}

export async function fetchEmployeeByPhone(request, response) {
    try {
        const employee = await EmployeeModel.findOne({phone: request.params.phone})
        if (employee) {
            response.status(StatusCodes.OK).json(employee);
        } else {
            response.status(StatusCodes.NOT_FOUND).json({message: 'Employee not found'});
        }
    } catch (error) {
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).json();
    }
}

export async function deleteEmployee(request, response) {
    try {
        const employee = await EmployeeModel.findByIdAndDelete(request.params.id);
        response.status(StatusCodes.NO_CONTENT).json();
    } catch (error) {
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).json();
    }
}

export async function updateEmployee(request, response) {
    try {
        await EmployeeModel.findByIdAndUpdate(request.params.id, request.body);
    } catch (error) {
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).json();
    }
}