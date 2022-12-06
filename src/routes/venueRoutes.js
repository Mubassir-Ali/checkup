const express = require("express");
const {
  getVenuById,
  getVenu,
  addVenu,
  updateVenu,
  deleteVenu,
} = require("../controllers/venueController");

const router = express.Router();

router.route("/").get(getVenu);
router.route("/").post(addVenu);

router.route("/:id").get(getVenuById);
router.route("/:id").delete(deleteVenu);
router.route("/:id").put(updateVenu);

module.exports = router;
