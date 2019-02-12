import fulfillment from 'alda-dialogflow'
import handleDialogflow from '../utils/handleDialogflow'
import { sendTextMsg, sendBtnMsg } from '../utils/messages'
import { hasValidSaltedgeLogin } from '../graphql/queries'

const messagingMessage = async (sender, message) => {
  try {
    if(!(await hasValidSaltedgeLogin(sender.id))) {
      await sendTextMsg(sender.id, 'hello')
      await sendBtnMsg(
        sender.id,
        'Hola, podemos chatear en cuando tu cuenta se ha syncronizado 🔒💬',
        process.env.WEB_VIEW_URL,
        'Click para syncronizar'
      )
    }

    const res = await fulfillment(message.text, sender.id)
    handleDialogflow(res, sender)

  }
  catch(e) {
    console.log(e)
    throw e
  }
}

export default messagingMessage
