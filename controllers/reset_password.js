const jwt = require('jwt-simple');
const config = require('../config');
const nodemailer = require('nodemailer');
const mg = require('nodemailer-mailgun-transport');

const auth = {
  auth: {
    api_key: 'key-bac967c5a973acbd6815cc35599173e1',
    domain: 'packadmin.com'
  }
};

const nodemailerMailgun = nodemailer.createTransport(mg(auth));

const resetPasswordController = (User) => {
  
  // create a token
  const createToken = (user) => {
    const timestamp = new Date().getTime();
    return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
  };

  const initiateReset = (req, res, next) => {
    const email = req.body.data.email;
    
    User.findOne({ email }, (err, user) => {
      if (err) { return next(err); }

      if (!user) {
        return res.status(422).send({ error: 'No account with that email address exists.' });
      }

      user.resetToken = createToken(user);

      user.save((error) => {
        if (error) { return next(error); }
        
        nodemailerMailgun.sendMail({
          from: 'admin@packadmin.com',
          to: user.email,
          subject: 'Pack Admin password reset',
          html: `<h1>The Pack Admin</h1>
            <h3>The Cub Master's Secret</h3><br>
            <p>To reset your your password, just click the link below to enter your new password.</p>
            <p>This link will be valid for 1 hour.</p>
            <a href="http://express-project-brandonl.c9users.io:8081/reset/${user.resetToken}" >Reset Password</a>
            <h4>Thank You for using the Pack Admin!</h4>
            <p>For managing Pinewood Derby and Rain Gutter Regatta Races, checkout <a href="http://pinewoodraceday.com">PinewoodRaceDay.com</a></p>`,
        }, function (err, info) {
          if (err) {
            console.log('Error: ' + err);
            res.status(500).send('false');
          }
          else {
            console.log('Response: ' + info);
            res.status(201).send('true');
          }
        });
        
      });
    });
  };
  
  const isExpired = (token) => {
    const currentTime = new Date().getTime();
    const diff = currentTime - token;
    if (diff < 3600000) {
      return false;
    }
    return true;
  };
  
  const checkAndSave = (req, res, next) => {
    const token = req.params.token;
    const decoded = jwt.decode(token, config.secret);
    const createdAt = decoded.iat;
    console.log(createdAt);
    
    User.findOne({ resetToken: token }, (err, user) => {
       if (err) { return next(err); }
       
       if (isExpired(token) || !user) {
         res.json({ success: false, msg: "invalid token"});
       }
       
       res.send("Awesome");
       
       console.log(user);
    });
  };


  return {
    initiateReset,
    checkAndSave,
  };
};

module.exports = resetPasswordController;
