import { sendTextMsg } from '../utils/messages'

// interprets dialogflow responses and sends messages
const handleDialogflow = async (res, sender) => {
  if(res.length > 0) {
    const fulfillmentMessages = res[0].queryResult.fulfillmentMessages

    // Only respond with messages for Facebook
    const fbMessages = fulfillmentMessages.filter(msg => msg.platform === 'FACEBOOK')
    for (const fMsg of fbMessages) {
      for (const text of fMsg.text.text) {
        await sendTextMsg(sender.id, text)
      }
    }
  }
}

export default handleDialogflow
