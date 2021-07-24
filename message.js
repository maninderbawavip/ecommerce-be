const accountSid = 'ACf9f78dd280ba285d4e6f2bf56d4561d8'; 
const authToken = 'b42231dfda3f843005d9d12698079708'; 
const client = require('twilio')(accountSid, authToken); 
 
client.messages 
      .create({ 
         body: 'Your Twilio code is 1238432', 
         from: 'whatsapp:+14155238886',       
         to: 'whatsapp:+918468881281' 
       }) 
      .then(message => console.log(message.sid)) 
      .done();