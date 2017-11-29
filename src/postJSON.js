var request = require('request');

function postJSON(json, url,headersVal){
    request.post({
        headers: {
          'Content-Type': 'application/json',
          'Authorization' : headersVal
        },
        uri: url,
        body: json,
        method: 'POST'
        },
        function (error, response, body) {
                console.log(body);
            
            console.log("enviado"+ error);
        }
    );
}
module.exports = postJSON;
