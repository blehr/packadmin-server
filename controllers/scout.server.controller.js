const scoutController = function(Scout) {
    const getAll = function(req, res) {
        var query = Scout.find();
        
        query.exec(function(err, results) {
            if (err) { console.log(err); }
            console.log('getAll ', results);
            res.json(results);
        });
    };
    
    const addScout = function(req, res) {
        
        const scout = new Scout(req.body.data);
        
        scout.save(function(err) {
            if (err) {
                err.errMsg = 'Sorry there was an error saving your Scout. ' + err;
                console.log(err.errMsg);
                res.json(err);
            } else {
                console.log('Scout was saved');
                console.log('addScout ', scout);
                res.Msg = 'Scout was saved successfully';
                res.json(scout);
            }
        });
    };
    
    
    const updateScout = function(req, res) {
        
        Scout.findById(req.params.id, function(err, scout) {
            if (err) {res.send(err);}
            const updateData = req.body.data;
            
            for (var prop in updateData) {
                if (prop != '_id') {
                    scout[prop] = updateData[prop];
                }
               
            }
            
            
            scout.save(function(err) {
                if (err) {
                    err.errMsg = 'Sorry there was an error saving your Scout. ' + err;
                    console.log(err.errMsg);
                    console.log(scout);
                    res.json(err);
                } else {
                    console.log('Scout was saved');
                    console.log('updateScout ', scout);
                    res.Msg = 'Scout was saved successfully';
                    res.json(scout);
                }
            });
            
            
        });
        
    };

    
    const findById = function(req, res) {
        Scout.findById(req.params.id, function (err, scout) {
            if (err) { console.log(err); }
            console.log('findById ', scout);
            res.json(scout);
        });
    };
        
        
        
        
        
       
    const removeById = function(req, res) {
        var query = Scout.find({ _id: req.params.id });
        
        query.remove((err, results) => {
            if (err) { console.log(err); }
            console.log('removeById ', results);
            res.json(results);
        });
       
    };
    
    
    
    return {
        getAll: getAll,
        addScout: addScout,
        updateScout: updateScout,
        findById: findById,
        removeById: removeById
    };
    
    
};

module.exports = scoutController;