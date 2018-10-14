'use strict';
import axios from 'axios'
import AWS from 'aws-sdk'

// docClient
let docClientOptions = {
  region: 'eu-west-1'
}
if(process.env.IS_OFFLINE) {
  docClientOptions = {
    region: 'localhost',
    endpoint: 'http://localhost:8000'
  }
}
const docClient = new AWS.DynamoDB.DocumentClient(docClientOptions)

const fbWebhook = async (event, context) => {
  // verify FB webhook
  console.log(event)
  if(needsVerify(event))
    return {
      statusCode: 200,
      body: event.queryStringParameters['hub.challenge']
    }

  const entries = JSON.parse(event.body).entry
  for(const entry of entries) {
    const messaging = entry.messaging[0]
    const sender = messaging.sender

    // messages
    if(messaging.message) {
      try {
        await sendTextMsg(sender.id, 'hello')
        await sendBtnMsg(
          sender.id,
          'Hola, podemos chatear en cuando tu cuenta se ha syncronizado 🔒💬',
          'https://f87fbf4c.ngrok.io',
          'Click para syncronizar'
        )

        return {
          statusCode: 200,
          body: JSON.stringify({})
        }
      }
      catch(e) {
        return {
          statusCode: 500,
          body: JSON.stringify(e.response)
        }
      }
    }

    if(messaging.optin) {
      const ref = messaging.optin.ref
      var params = {
        TableName: 'alda-user',
        Item: {
          PSID: sender.id,
          ref
        }
      };

      docClient.put(params, function(err, data) {
        if (err) {
          console.log("Error", err);
          return {
            statusCode: 500,
            body: JSON.stringify(err)
          }
        } else {
          console.log("Success", data);
          return {
            statusCode: 200,
            body: JSON.stringify({})
          }
        }
      });

    }
  }
}

const needsVerify = (event) => {
  if(event.queryStringParameters && event.queryStringParameters['hub.mode'])
    return true
  return false
}

const sendTextMsg = (recipientId, text) => {
  return axios({
    method: 'post',
    url: 'https://graph.facebook.com/v2.6/me/messages?access_token=EAAIgFrVSjOcBAOHrZBvxGDdNdCrU17GW5UZC9gswziHskRS2nvF9xUam0wLXRNKPLMV0BuQdZAJjVYZCIEdoggEckhZAZAtuBo01YCQwaMDAZCYR6QjTGLieGpTcI6oi4JnHZA1QN9fk9OdTtfuINQgJvndFTZAfnydCYlCrdNMOKmwZDZD',
    data: {
      messaging_type: 'RESPONSE',
      recipient: { id: recipientId },
      message: { text }
    }
  })
}

const sendBtnMsg = (recipientId, text, url, title) => {
  return axios({
    method: 'post',
    url: 'https://graph.facebook.com/v2.6/me/messages?access_token=EAAIgFrVSjOcBAOHrZBvxGDdNdCrU17GW5UZC9gswziHskRS2nvF9xUam0wLXRNKPLMV0BuQdZAJjVYZCIEdoggEckhZAZAtuBo01YCQwaMDAZCYR6QjTGLieGpTcI6oi4JnHZA1QN9fk9OdTtfuINQgJvndFTZAfnydCYlCrdNMOKmwZDZD',
    data: {
      messaging_type: 'RESPONSE',
      recipient: { id: recipientId },
      message: {
        attachment: {
          type: 'template',
          payload: {
            template_type: 'button',
            text,
            buttons: [
              {
                type:'web_url',
                url,
                title,
                webview_height_ratio: 'full',
                messenger_extensions: true
              }
            ]
          }
        }
      }
    }
  })
}

export default fbWebhook;
