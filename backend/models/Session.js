const mongoose = require('mongoose');

const SessionSchema = new mongoose.Schema({
  scenarioId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Scenario'
  },
  userData: mongoose.Schema.Types.Mixed,
  actions: [{
    timestamp: Date,
    action: String,
    key: String,
    value: mongoose.Schema.Types.Mixed
  }]
});

module.exports = mongoose.model('Session', SessionSchema);