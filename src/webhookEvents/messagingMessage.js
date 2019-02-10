import fulfillment from 'alda-dialogflow'
import handleDialogflow from '../utils/handleDialogflow'
import { sendTextMsg, sendBtnMsg } from '../utils/messages'

const messagingMessage = async (sender) => {
  try {
    const res = await fulfillment("hola", "1")
    handleDialogflow(res, sender)

    await sendTextMsg(sender.id, 'hello')
    await sendBtnMsg(
      sender.id,
      'Hola, podemos chatear en cuando tu cuenta se ha syncronizado 🔒💬',
      'https://e041a916.ngrok.io',
      'Click para syncronizar'
    )
  }
  catch(e) {
    console.log(e)
    throw e
  }
}

export default messagingMessage
