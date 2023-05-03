var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'igymorboe@gmail.com',
    pass: 'rysrwvpdpnpfwzxy'
  }
});

var mailOptions = {
  from: 'igymorboe@gmail.com',
  to: 'igormorenoboenavides@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});