const leaderController = (Leader) => {
  const getAll = (req, res) => {
    const query = Leader.find({ owner: req.user._id });
    query.exec((err, results) => {
      if (err) { res.status(422).send(err); }

      res.status(200).json({ leaders: results });
    });
  };

  const addLeader = (req, res) => {
    req.body.data.owner = req.user._id;
    const leader = new Leader(req.body.data);

    leader.save((err) => {
      if (err) {
        res.status(422).send(err);
      } else {
        res.status(201).json({ leader });
      }
    });
  };


  const updateLeader = (req, res) => {
    const options = {
      new: true,
      upsert: true,
    };

    Leader.findByIdAndUpdate(req.params.id, req.body.data, options, (err, leader) => {
      if (err) { res.status(422).send(err); }
      res.status(201).json(leader);
    });
  };

  const findById = (req, res) => {
    Leader.findById(req.params.id, (err, leader) => {
      if (err) { res.status(422).send(err); }
      res.status(200).json(leader);
    });
  };

  const removeById = (req, res) => {
    Leader.findByIdAndRemove(req.params.id, (err, leader) => {
      if (err) { res.status(422).send(err); }
      res.status(201).json(leader);
    });
  };

  return {
    getAll,
    addLeader,
    updateLeader,
    findById,
    removeById,
  };
};

module.exports = leaderController;
