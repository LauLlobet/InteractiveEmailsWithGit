
var chai = require('chai');
var expect = chai.expect; // we are using the "expect" style of Chai
var SendGridSendEmail = require('./../../src/SendGridSendEmail');

describe('Send Grid Send Email test', function() {
      it('SendGridEmailSend should send email.', function(done) {    
        this.timeout(10000); 
        var sendGridSendEmail = SendGridSendEmail("<h1>Hola!</h1>","Subject","coco@coco.com","lau.llobet@gmail.com", function() {
              done();
          });
      });
});