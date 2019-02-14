import { sendTextMsg, sendQuickReplies } from '../utils/messages'

// interprets dialogflow responses and sends messages
const handleDialogflow = async (res, sender) => {
  if(res.length > 0) {
    const fulfillmentMessages = res[0].queryResult.fulfillmentMessages

    // Only respond with messages for Facebook
    const fbMessages = fulfillmentMessages.filter(msg => msg.platform === 'FACEBOOK')
    for (const fMsg of fbMessages) {

      // check if Quick Reply
      if(fMsg.quickReplies) {
        sendQuickReplies(sender.id, fMsg.quickReplies.title, fMsg.quickReplies.quickReplies)
      } else {
        for (const text of fMsg.text.text) {
          await sendTextMsg(sender.id, text)
        }
      }
    }
  }
}

export default handleDialogflow
