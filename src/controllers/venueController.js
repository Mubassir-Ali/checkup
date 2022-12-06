const Venu = require('../model/venueModel');

// ---------- get all checkup venue ----------
const getVenu = async (req, res) => {
  try {
    const venu = await Venu.find();
    return res.status(200).json({
      status: "success",
      data: venu
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};


// ---------- get checkup venue by id ----------
const getVenuById = async (req, res) => {
  try {
    const venu = await Venu.findById(req.params.id);
    return res.status(200).json({
      status: "success",
      data: venu

    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};


// ---------- add new checkup venue ----------
const addVenu = async (req, res) => {
  const { name, location } = req.body;
  try {
    const venu = await Venu.create({ name, location })
    res.status(200).json({
      status: 'success',
      result: venu.length,
      data: venu

    })

  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error.message
    })
  }
};


// ---------- update checkup venue by id ----------
const updateVenu = async (req, res) => {
  try {
    const venu = await Venu.updateOne({_id: req.params.id}, req.body, { runValidators: true });;

    res.status(200).json({
      status: 'success',
      data: venu

    })
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error
    })
  }
};


// ---------- delete checkup venue by id ----------
const deleteVenu = async (req, res) => {
  try {
    await Venu.findOneAndRemove({'_id':req.params.id});
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
  getVenu,
  getVenuById,
  addVenu,
  updateVenu,
  deleteVenu,
};
