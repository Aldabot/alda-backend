'use strict';
import axios from 'axios'

const fbWebhook = async (event, context, cb) => {
  const entries = JSON.parse(event.body).entry
  for(const entry of entries) {
    const messaging = entry.messaging[0]

    // messages
    if(messaging.message) {
      const sender = messaging.sender
      axios({
        method: 'post',
        url: 'https://graph.facebook.com/v2.6/me/messages?access_token=EAAIgFrVSjOcBAOHrZBvxGDdNdCrU17GW5UZC9gswziHskRS2nvF9xUam0wLXRNKPLMV0BuQdZAJjVYZCIEdoggEckhZAZAtuBo01YCQwaMDAZCYR6QjTGLieGpTcI6oi4JnHZA1QN9fk9OdTtfuINQgJvndFTZAfnydCYlCrdNMOKmwZDZD',
        data: {
          messaging_type: 'RESPONSE',
          recipient: sender,
          message: { text: "hello, world!" }
        }
      }).then(() => ({
          statusCode: 200
      })).catch(err => {
        console.error(err.response)
        return { statusCode: 200 }
      })
    }
  }

};

export default fbWebhook;
