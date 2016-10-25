const Mongoose = require('mongoose');

const Schema = Mongoose.Schema;

const BobcatSchema = new Schema({
  scout: { type: Schema.Types.ObjectId, ref: 'Scout' },
  scoutOath: Date,
  scoutLaw: Date,
  cubScoutSign: Date,
  cubScoutHandshake: Date,
  cubScoutMotto: Date,
  cubScoutSalute: Date,
  childProtection: Date,
});

module.exports = BobcatSchema;
// module.exports = Mongoose.model('Bobcat', BobcatSchema);
