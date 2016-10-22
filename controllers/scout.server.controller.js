const scoutController = (Scout) => {
  const getAll = (req, res) => {
    const query = Scout.find({ owner: req.user._id });
    query.exec((err, results) => {
      if (err) { res.status(422).send(err); }

      res.status(200).json({ scouts: results });
    });
  };

  const addScout = (req, res) => {
    req.body.data.owner = req.user._id;
    const scout = new Scout(req.body.data);

    scout.save((err) => {
      if (err) {
        res.status(422).send(err);
      } else {
        res.status(201).json({ scout });
      }
    });
  };


  const updateScout = (req, res) => {
    const options = {
      new: true,
      upsert: true,
    };

    Scout.findByIdAndUpdate(req.params.id, req.body.data, options, (err, scout) => {
      if (err) { res.status(422).send(err); }
      res.status(201).json(scout);
    });
  };

  const findById = (req, res) => {
    Scout.findById(req.params.id, (err, scout) => {
      if (err) { res.status(422).send(err); }
      res.status(200).json(scout);
    });
  };

  const removeById = (req, res) => {
    Scout.findByIdAndRemove(req.params.id, (err, scout) => {
      if (err) { res.status(422).send(err); }
      res.status(201).json(scout);
    });
  };

  return {
    getAll,
    addScout,
    updateScout,
    findById,
    removeById,
  };
};

module.exports = scoutController;
