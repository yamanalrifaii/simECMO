const express = require('express');
const router = express.Router();
const SimECMOData = require('../models/Data');

// Route to fetch the initial data for ECMO simulation
router.get('/init', async (req, res) => {
  try {
    const initialData = await SimECMOData.findOne();  // Fetch initial data
    if (!initialData) {
      return res.status(404).json({ message: 'No data found' });
    }
    res.json(initialData);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Route to update data based on user interaction in simulations
router.put('/update/:id', async (req, res) => {
    try {
      const updatedData = await SimECMOData.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      if (!updatedData) {
        return res.status(404).json({ message: 'Data not found' });
      }
      res.json(updatedData);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
