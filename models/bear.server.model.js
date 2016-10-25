const Mongoose = require('mongoose');

const Schema = Mongoose.Schema;

const BearSchema = new Schema({
  scout: { type: Schema.Types.ObjectId, ref: 'Scout' },
  bobcat: Date,
  bearClaws: Date,
  bearNecessities: Date,
  fellowshipAndDutyToGod: Date,
  furFeathersAndFerns: Date,
  grinAndBearIt: Date,
  pawsForAction: Date,
  balooTheBuilder: Date,
  aBearGoesFishing: Date,
  bearPicnicBasket: Date,
  beatOfTheDrum: Date,
  critterCare: Date,
  forensics: Date,
  makeItMove: Date,
  marbleMadness: Date,
  roaringLaughter: Date,
  robotics: Date,
  salmonRun: Date,
  superScience: Date,
  aWorldOfSound: Date,
  cyberChip: Date,
  childProtection: Date,
});

module.exports = BearSchema;
// module.exports = Mongoose.model('Bear', BearSchema);
