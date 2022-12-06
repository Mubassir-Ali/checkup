const express = require("express");
const {
  getSlotById,
  getSlots,
  addSlot,
  updateSlot,
  deleteSlot,
} = require("../controllers/employeeStotController");

const router = express.Router();


router.route("/").get(getSlots);
router.route("/").post(addSlot);

router.route("/:id").get(getSlotById);
router.route("/:id").delete(deleteSlot);
router.route("/:id").put(updateSlot);

module.exports = router;
