'use strict';
import messagingMessage from './webhookEvents/messagingMessage'
import messagingPostbacks from './webhookEvents/messagingPostbacks'

const fbWebhook = async (event, context) => {
  // verify FB webhook
  if(needsVerify(event))
    return {
      statusCode: 200,
      body: event.queryStringParameters['hub.challenge']
    }

  const body = JSON.parse(event.body)
  const entries = body.entry

  for(const entry of entries) {
    const messaging = entry.messaging[0]

    const sender = messaging.sender
    const message = messaging.message

    // messages
    try {
      if(messaging.message)
        await messagingMessage(sender, message)

      if(messaging.postback)
        await messagingPostbacks(sender)

      return {
        statusCode: 200,
        body: JSON.stringify({})
      }
    }

    catch(e) {
      console.error(e.response.data)
      return {
        statusCode: 200,
        body: JSON.stringify()
      }
    }
  }
}

const needsVerify = (event) => {
  if(event.queryStringParameters && event.queryStringParameters['hub.mode'])
    return true
  return false
}


export default fbWebhook;
