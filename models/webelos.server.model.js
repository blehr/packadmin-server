const Mongoose = require('mongoose');

const Schema = Mongoose.Schema;

const WebelosSchema = new Schema({
  scout: { type: Schema.Types.ObjectId, ref: 'Scout' },
  bobcat: Date,
  castIronChef: Date,
  dutyToGodAndYou: Date,
  firstResponder: Date,
  strongerFasterHigher: Date,
  webelosWalkabout: Date,
  buildingABetterWorld: Date,
  camper: Date,
  dutyToGodInAction: Date,
  scoutingAdventure: Date,
  adventuresInScience: Date,
  aquanaut: Date,
  artExplosion: Date,
  awareAndCare: Date,
  buildIt: Date,
  buildMyOwnHero: Date,
  castaway: Date,
  earthRocks: Date,
  engineer: Date,
  fixIt: Date,
  gameDesign: Date,
  intoTheWild: Date,
  intoTheWoods: Date,
  lookingBackLookingForward: Date,
  maestro: Date,
  movieMaking: Date,
  projectFamily: Date,
  sportsman: Date,
  cyberChip: Date,
  childProtection: Date,
});

module.exports = WebelosSchema;
// module.exports = Mongoose.model('Webelos', WebelosSchema);
