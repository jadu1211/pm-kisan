// controllers/detailsController.js

const User         = require('../models/User');
const SuccessData  = require('../models/SuccessData');
const Card         = require('../models/Card');

exports.getAllDetails = async (req, res) => {
  try {
    const { uniqueid } = req.params;

    if (!uniqueid) {
      return res.status(400).json({
        success: false,
        message: 'Missing uniqueid in URL'
      });
    }

    // Fetch user entries array
    const userDoc = await User.findOne({ uniqueid }).lean();
    // Fetch the single-record success data
    const successDoc = await SuccessData.findOne({ uniqueid }).lean();
    // Fetch the card entries array
    const cardDoc = await Card.findOne({ uniqueid }).lean();

    // If no data at all, optional: 404
    if (!userDoc && !successDoc && !cardDoc) {
      return res.status(404).json({
        success: false,
        message: 'No records found for this uniqueid'
      });
    }

    return res.status(200).json({
      success: true,
      message: 'All data fetched successfully',
      data: {
        userEntries:   userDoc   ? userDoc.entries   : [],
        successData:   successDoc || {},
        cardEntries:   cardDoc   ? cardDoc.entries   : []
      }
    });
  } catch (error) {
    console.error('Error in getAllDetails:', error);
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error',
      error: error.message
    });
  }
};
