const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const leaderSchema = new Schema({
  owner: { type: Schema.Types.ObjectId, required: true },
  firstName: String,
  lastName: String,
  birthday: Date,
  streetAddress: String,
  mailAddress: String,
  city: String,
  state: String,
  zipCode: String,
  mobilePhone: String,
  homePhone: String,
  workPhone: String,
  driversLicense: String,
  email: String,
  youthProtection: Date,
  position: String,
  notes: String,
});

module.exports = mongoose.model('Leaders', leaderSchema);
