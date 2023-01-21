import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
    name: {type: String, required: true},
    phone: {type: String, required: true, unique: true},
    salary: {type: Number, required: true},
    department: {type: String, required: true},
});

export const EmployeeModel = mongoose.model('employee', employeeSchema);
