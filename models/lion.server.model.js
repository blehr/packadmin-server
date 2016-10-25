const Mongoose = require('mongoose');

const Schema = Mongoose.Schema;

const LionSchema = new Schema({
  scout: { type: Schema.Types.ObjectId, ref: 'Scout' },
  bobcat: Date,
  lionsHonor: Date,
  funOnTheRun: Date,
  animalKingdom: Date,
  moutainLion: Date,
  kingOfTheJungle: Date,
  illDoItMyself: Date,
  pickMyPath: Date,
  gizmosAndGadgets: Date,
  onYourtMark: Date,
  buildItUpKnockItDown: Date,
  rumbleInTheJungle: Date,
  readySetGrow: Date,
});

module.exports = LionSchema;

// module.exports = Mongoose.model('Lion', LionSchema);
