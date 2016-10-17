const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const scoutSchema = new Schema({
  owner: { type: Schema.Types.ObjectId, required: true },
  scoutFirstName: { type: String, required: true },
  scoutLastName: { type: String, required: true },
  scoutStreetAddress: { type: String },
  scoutMailAddress: { type: String },
  scoutCity: { type: String },
  scoutState: { type: String },
  scoutZipCode: { type: Number },
  birthday: { type: Date },
  grade: { type: String },
  schoolDistrict: { type: String },
  den: { type: String },
  picturesAllowed: { type: Boolean, default: false },
  dues: { type: Boolean, default: false },
  book: { type: Boolean, default: false },
  boat: { type: Boolean, default: false },
  car: { type: Boolean, default: false },
  notes: { type: String },
  parent1FirstName: { type: String, required: true },
  parent1LastName: { type: String, required: true },
  parent1RelationToScout: { type: String, required: true },
  parent1AddressSameAsScout: { type: Boolean, default: false },
  parent1StreetAddress: { type: String },
  parent1MailAddress: { type: String },
  parent1City: { type: String },
  parent1State: { type: String },
  parent1ZipCode: { type: Number },
  parent1PhoneNumberMobile: { type: String },
  parent1PhoneNumberHome: { type: String },
  parent1PhoneNumberWork: { type: String },
  parent1Notes: { type: String },
  parent2FirstName: { type: String },
  parent2LastName: { type: String },
  parent2RelationToScout: { type: String },
  parent2AddressSameAsScout: { type: Boolean, default: false },
  parent2StreetAddress: { type: String },
  parent2MailAddress: { type: String },
  parent2City: { type: String },
  parent2State: { type: String },
  parent2ZipCode: { type: Number },
  parent2PhoneNumberMobile: { type: String },
  parent2PhoneNumberHome: { type: String },
  parent2PhoneNumberWork: { type: String },
  parent2Notes: { type: String },
});

// post hook calc age from bday


module.exports = mongoose.model('Scout', scoutSchema);
