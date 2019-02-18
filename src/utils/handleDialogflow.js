import { sendTextMsg, sendQuickReplies, sendCards } from '../utils/messages'

// interprets dialogflow responses and sends messages
const handleDialogflow = async (res, sender) => {
  if(res.length > 0) {
    const fulfillmentMessages = res[0].queryResult.fulfillmentMessages
    var cards = []

    for (const fMsg of fulfillmentMessages) {
      // chk if Card
      if(fMsg.card)  {
        console.log(fMsg.card)
        cards.push(fMsg.card)
        continue
      }

      // if last msg was card
      if(cards.length > 0) {
        await sendCards(sender.id, cards)
      }

      // chk if Text
      if(fMsg.text)  {
        for (const text of fMsg.text.text) {
          await sendTextMsg(sender.id, text)
        }
      }

      // check if Quick Reply
      if(fMsg.quickReplies) {
        await sendQuickReplies(sender.id, fMsg.quickReplies.title, fMsg.quickReplies.quickReplies)
      }
    }

    // if cards left
    if(cards.length > 0) {
      await sendCards(sender.id, cards)
    }

  }
}

export default handleDialogflow
