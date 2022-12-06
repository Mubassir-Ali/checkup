const EmployeeSlot = require('../model/employeeSlotModel');

// ---------- get all employee Slot ----------
const getSlots = async (req, res) => {
  try {
    const empSlot = await EmployeeSlot.find();
    return res.status(200).json({
      status: "success",
      data: empSlot
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};


// ---------- get employee slot by id ----------
const getSlotById = async (req, res) => {
  try {
    const empSlot = await EmployeeSlot.findById(req.params.id);
    return res.status(200).json({
      status: "success",
      data: empSlot,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};


// ---------- add new employee slot ----------
const addSlot = async (req, res) => {
  const { venueId, employeeId, scheduleAt, status } = req.body;
  const statusArrat = "ALLOCATED COMPLETE CANCELLED"
  try {
    const empSlot = await EmployeeSlot.create({ venueId, employeeId, scheduleAt, status })
    res.status(200).json({
      status: 'success',
      result: empSlot.length,
      data: empSlot

    })

  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error.message
    })
  }
};


// ---------- update employee stot by id ----------
const updateSlot = async (req, res) => {
  try {
    const empSlot = await EmployeeSlot.updateOne({_id: req.params.id}, req.body, { runValidators: true });

    res.status(200).json({
      status: 'success',
      data: empSlot
    })
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error
    })
  }
};


// ---------- delete employee by id ----------
const deleteSlot = async (req, res) => {
  try {
    await EmployeeSlot.findOneAndRemove({ '_id': req.params.id });
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
  getSlots,
  getSlotById,
  addSlot,
  updateSlot,
  deleteSlot,
};
