const Employee = require('../model/employeeModel');

// ---------- get all employee ----------
const getEmployee = async (req, res) => {
  try {
    const emp = await Employee.find();
    return res.status(200).json({
      status: "success",
      data: emp
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};


// ---------- get employee by id ----------
const getEmployeeById = async (req, res) => {
  try {
    const emp = await Employee.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: emp
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};


// ---------- add new employee ----------
const addEmployee = async (req, res) => {
  const { name, age } = req.body;
  try {
    const emp = await Employee.create({ name, age })
    res.status(200).json({
      status: 'success',
      result: emp.length,
      data: emp
    })

  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error.message
    })
  }
};


// ---------- update employee by id ----------
const updateEmployee = async (req, res) => {
  try {
    const emp = await Employee.updateOne({_id: req.params.id}, req.body, { runValidators: true });

    res.status(200).json({
      status: 'success',
      data: emp
    })
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error
    })
  }
};


// ---------- delete employee by id ----------
const deleteEmployee = async (req, res) => {
  try {
    await Employee.findOneAndRemove({'_id':req.params.id});
    res.status(200).json({
      status: 'success',
    })
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error
    })
  }

};

module.exports = {
  getEmployee,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
  addEmployee,
};
