const scoutController = (Scout) => {
  const getAll = (req, res) => {
    const query = Scout.find();

    query.exec((err, results) => {
      if (err) { res.status(422).send(err); }
      res.status(200).json(results);
    });
  };

  const addScout = (req, res) => {
    console.log(req.user);
    req.body.data.owner = req.user._id;
    const scout = new Scout(req.body.data);

    scout.save((err) => {
      if (err) {
        res.status(422).send(err);
      } else {
        res.status(201).json(scout);
      }
    });
  };


  const updateScout = (req, res) => {
    Scout.findById(req.params.id, (err, scout) => {
      if (err) { res.send(err); }
      const updateData = req.body.data;

      for (const prop in updateData) {
        if (prop !== '_id') {
          scout[prop] = updateData[prop];
        }
      }

      scout.save((error) => {
        if (error) {
          res.status(422).send(error);
        } else {
          res.status(201).json(scout);
        }
      });
    });
  };

  const findById = (req, res) => {
    Scout.findById(req.params.id, (err, scout) => {
      if (err) { res.status(422).send(err); }
      res.status(200).json(scout);
    });
  };

  const removeById = (req, res) => {
    const query = Scout.find({ _id: req.params.id });

    query.remove((err, results) => {
      if (err) { res.status(422).send(err); }
      res.status(200).json(results);
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
