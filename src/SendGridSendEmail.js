var helper = require('sendgrid').mail;
var sg = require('sendgrid')(require("../auths/sengridApiKeyStr.js"));

function SendGridSendEmail(body,subject, fromAddress, toAddress, success, fail){
	
	var fromEmail = new helper.Email(fromAddress);
	var toEmail = new helper.Email(toAddress);
	var subject = subject;
	var content = new helper.Content('text/html', body);
	var mail = new helper.Mail(fromEmail, subject, toEmail, content);

	var request = sg.emptyRequest({
	  method: 'POST',
	  path: '/v3/mail/send',
	  body: mail.toJSON()
	});

	sg.API(request, function (error, response) {
	  if (error) {
	    console.log('Error response received');
	    fail();
	  }
	  success();
	});

}


module.exports = SendGridSendEmail;
