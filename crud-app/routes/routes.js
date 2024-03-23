const express = require('express');
const router = express.Router();
const employeesController = require('../controllers/EmployeeController');

// Create a new employee
router.post('/employees', employeesController.createEmployee);

// Retrieve all employees
router.get('/employees', employeesController.getEmployees);

// Retrieve a single employee
router.get('/employees/:id', employeesController.getEmployeeById);

// Update a employee
router.put('/employees/:id', employeesController.updateEmployees);

// Delete a employee
router.delete('/employees/:id', employeesController.deleteEmployees);

// Delete all employees
router.delete('/employees', employeesController.deleteAllEmployees);

// Find employees by condition
router.post('/employees/search', employeesController.findEmployeesByCondition);

module.exports = router;
