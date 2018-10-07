'use strict';
// import axios from 'axios'

module.exports.fbWebhook = async (event, context) => {
  const entries = JSON.parse(event.body).entry
  for(const entry of entries) {
    const messaging = entry.messaging[0]

    // messages
    if(messaging.message) {
      console.log(messaging.message)
      // axios({
      //   method: 'post',
      //   url: 'https://graph.facebook.com/v2.6/me/messages?access_token=EAAIgFrVSjOcBAOHrZBvxGDdNdCrU17GW5UZC9gswziHskRS2nvF9xUam0wLXRNKPLMV0BuQdZAJjVYZCIEdoggEckhZAZAtuBo01YCQwaMDAZCYR6QjTGLieGpTcI6oi4JnHZA1QN9fk9OdTtfuINQgJvndFTZAfnydCYlCrdNMOKmwZDZD',
      //   data: {
      //     messaging_type: 'RESPONSE',
      //     recipient: { id: '123'}
      //   }
      // });
    }
  }

  return {
     statusCode: 200,
     body: 'cool'
  };
};

module.exports.fbWebhookVerify = async (event, context) => {
  // comment in to verify
  console.log('test', event)
  return {
    statusCode: 200,
    body: event.queryStringParameters['hub.challenge']
  };
};
