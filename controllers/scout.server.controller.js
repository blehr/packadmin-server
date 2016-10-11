const scoutController = (Scout) => {
  const getAll = (req, res) => {
    const query = Scout.find();

    query.exec((err, results) => {
      if (err) { console.log(err); }
      res.json(results);
    });
  };

  const addScout = (req, res) => {
    const scout = new Scout(req.body.data);

    scout.save((err) => {
      if (err) {
        res.json(err);
      } else {
        res.json(scout);
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
          res.json(error);
        } else {
          res.json(scout);
        }
      });
    });
  };

  const findById = (req, res) => {
    Scout.findById(req.params.id, (err, scout) => {
      if (err) { console.log(err); }
      res.json(scout);
    });
  };

  const removeById = (req, res) => {
    const query = Scout.find({ _id: req.params.id });

    query.remove((err, results) => {
      if (err) { console.log(err); }
      res.json(results);
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
