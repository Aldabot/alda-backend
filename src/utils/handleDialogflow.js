import { sendTextMsg } from '../utils/messages'

// interprets dialogflow responses and sends messages
const handleDialogflow = async (res, sender) => {
  const fulfillmentMessages = res[0].queryResult.fulfillmentMessages
  for (const fMsg of fulfillmentMessages) {
    for (const text of fMsg.text.text) {
      await sendTextMsg(sender.id, text)
    }
  }
}

export default handleDialogflow
