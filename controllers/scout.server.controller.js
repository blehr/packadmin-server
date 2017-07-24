const fieldsToValidate = [
  "pack",
  "scoutFirstName",
  "scoutLastName",
  "scoutStreetAddress",
  "scoutMailAddress",
  "scoutCity",
  "scoutState",
  "scoutZipCode",
  "birthday",
  "grade",
  "schoolDistrict",
  "den",
  "picturesAllowed",
  "dues",
  "book",
  "boat",
  "car",
  "notes",
  "parent1FirstName",
  "parent1LastName",
  "parent1RelationToScout",
  "parent1AddressSameAsScout",
  "parent1StreetAddress",
  "parent1MailAddress",
  "parent1City",
  "parent1State",
  "parent1ZipCode",
  "parent1PhoneNumberMobile",
  "parent1PhoneNumberHome",
  "parent1PhoneNumberWork",
  "parent1Email",
  "parent1Notes",
  "parent2FirstName",
  "parent2LastName",
  "parent2RelationToScout",
  "parent2AddressSameAsScout",
  "parent2StreetAddress",
  "parent2MailAddress",
  "parent2City",
  "parent2State",
  "parent2ZipCode",
  "parent2PhoneNumberMobile",
  "parent2PhoneNumberHome",
  "parent2PhoneNumberWork",
  "parent2Email",
  "parent2Notes"
];

function validateScout(req, arrayOfFields) {
  arrayOfFields.forEach(field => {
    if (req.body.data[field]) {
      req.sanitizeBody(`data.${field}`).trim();
      req.sanitizeBody(`data.${field}`).escape();
    } else {
      return;
    }
  });
}

const scoutController = Scout => {
  const getAll = (req, res) => {
    const query = Scout.find({ owner: req.user._id });
    query.exec((err, results) => {
      if (err) {
        res.status(422).send(err);
      }

      res.status(200).json({ scouts: results });
    });
  };

  const addScout = (req, res) => {

    validateScout(req, fieldsToValidate);

    const scout = new Scout(req.body.data);
    scout.owner = req.user._id;
    scout.pack = req.user.packNumber;

    scout.save(err => {
      if (err) {
        res.status(422).send(err);
      } else {
        res.status(201).json(scout);
      }
    });
  };

  const updateScout = (req, res) => {

    validateScout(req, fieldsToValidate);
    
    const options = {
      new: true,
      upsert: true
    };

    Scout.findByIdAndUpdate(
      req.params.id,
      req.body.data,
      options,
      (err, scout) => {
        if (err) {
          res.status(422).send(err);
        }
        res.status(201).json(scout);
      }
    );
  };

  const findById = (req, res) => {
    Scout.findById(req.params.id, (err, scout) => {
      if (err) {
        res.status(422).send(err);
      }
      res.status(200).json(scout);
    });
  };

  const removeById = (req, res) => {
    Scout.findByIdAndRemove(req.params.id, (err, scout) => {
      if (err) {
        res.status(422).send(err);
      }
      res.status(201).json(scout);
    });
  };

  return {
    getAll,
    addScout,
    updateScout,
    findById,
    removeById
  };
};

module.exports = scoutController;
