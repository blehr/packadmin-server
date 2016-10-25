const Mongoose = require('mongoose');

const Schema = Mongoose.Schema;

const WolfSchema = new Schema({
  scout: { type: Schema.Types.ObjectId, ref: 'Scout' },
  bobcat: Date,
  callOfTheWild: Date,
  councilFire: Date,
  dutyToGodFootstep: Date,
  howlingAtTheMoon: Date,
  pawsOnThePath: Date,
  runningWithThePack: Date,
  adventuresInCoins: Date,
  airOfTheWolf: Date,
  codeOfTheWolf: Date,
  collectionsAndHobbies: Date,
  cubsWhoCare: Date,
  diggingInThePast: Date,
  findingYourWay: Date,
  germsAlive: Date,
  growSomething: Date,
  homeTownHeroes: Date,
  motorAway: Date,
  pawsOfSkill: Date,
  spiritOfTheWater: Date,
  cyberChip: Date,
  childProtection: Date,
});

module.exports = WolfSchema;
// module.exports = Mongoose.model('Wolf', WolfSchema);
