const {generateOAuthToken} = require('./generateOAuthToken');
// let OAuthToken = generateOAuthToken();
generateOAuthToken();

// above two lines code step by step & replace headers.Authorization with new OAuthToken

function createSubscription() {
  var data = JSON.stringify({});
  var axios = require('axios');
  var config = {
    method: 'post',
    url: 'https://tapi.telstra.com/v2/messages/provisioning/subscriptions',
    headers: { 
      'Accept': 'application/json', 
      'Content-Type': 'application/json', 
      'Authorization': 'Bearer LC1kKMMBLYqWXspisOAKVJYqDhBg'
    },
    data : data
  };

  axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
    console.log(config.headers.Authorization)
  })
  .catch(function (error) {
    console.log(error);
  });
}

module.exports = { createSubscription };