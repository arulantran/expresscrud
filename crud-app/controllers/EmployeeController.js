const Employees = require('../models/Employees');

// Create a new object
exports.createEmployee = async (req, res) => {
  try {
    if (req.body.salary && typeof req.body.salary === 'string') {
      req.body.salary = parseFloat(req.body.salary);
    }
    const employee = new Employees(req.body);
    await employee.save();
    res.status(201).json(employee);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Retrieve objects (with the condition)
exports.getEmployees = async (req, res) => {
  try {
    const employees = await Employees.find(req.query);
    res.status(200).json(employees);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.getEmployeeById = async (req, res) => {
  try {
    const employee = await Employees.findOne({ eid: req.params.id }); 
    if (!employee) { 
      return res.status(404).json({ message: 'Employee not found' }); 
    }
    res.status(200).json(employee);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};


// Update an employee
exports.updateEmployees = async (req, res) => {
  try {
    // Update the employee by eid instead of MongoDB's _id
    const employee = await Employees.findOneAndUpdate({ eid: req.params.id }, req.body, {
      new: true,
      runValidators: true
    });

    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }

    res.status(200).json(employee);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};


// Delete an employee
exports.deleteEmployees = async (req, res) => {
  try {
    // Delete the employee by eid instead of MongoDB's _id
    const employee = await Employees.findOneAndDelete({ eid: req.params.id });

    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }

    res.status(200).json({ message: 'Employee deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};


// Delete all objects
exports.deleteAllEmployees = async (req, res) => {
  try {
    const result = await Employees.deleteMany();
    res.status(200).json({ message: `${result.deletedCount} employees deleted successfully` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Find all objects by condition
exports.findEmployeesByCondition = async (req, res) => {
  try {
    const employees = await Employees.find(req.body);
    res.status(200).json(employees);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};
