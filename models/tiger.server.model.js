const Mongoose = require('mongoose');

const Schema = Mongoose.Schema;

const TigerSchema = new Schema({
  scout: { type: Schema.Types.ObjectId, ref: 'Scout' },
  bobcat: Date,
  backyardJungle: Date,
  gamesTigersPlay: Date,
  myFamilysDutyToGod: Date,
  teamTiger: Date,
  tigerBites: Date,
  tigersInTheWild: Date,
  curiousityIntrigueMagicalMysteries: Date,
  earningYourStripes: Date,
  familyStories: Date,
  floatsAndBoats: Date,
  goodKnights: Date,
  rollingTigers: Date,
  skyIsTheLimit: Date,
  storiesInShapes: Date,
  tigeriffic: Date,
  tigerSafeAndSmart: Date,
  tigerTag: Date,
  tigerTales: Date,
  tigerTheater: Date,
});

module.exports = TigerSchema;
// module.exports = Mongoose.model('Tiger', TigerSchema);
