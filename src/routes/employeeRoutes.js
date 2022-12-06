const express = require("express");
const {
  getEmployee,
  getEmployeeById,
  addEmployee,
  updateEmployee,
  deleteEmployee,
} = require("../controllers/employeeController");

const router = express.Router();

router.route("/").get(getEmployee);
router.route("/").post(addEmployee);

router.route("/:id").get(getEmployeeById);
router.route("/:id").delete(deleteEmployee);
router.route("/:id").put(updateEmployee);

module.exports = router;
