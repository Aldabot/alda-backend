import fulfillment from 'alda-dialogflow'
import handleDialogflow from '../utils/handleDialogflow'
import { sendTextMsg, sendBtnMsg } from '../utils/messages'
import { hasValidSaltedgeLogin } from '../graphql/queries'

console.log(process.env.WEB_VIEW_URL)
const messagingMessage = async (sender, message) => {
  try {
    if(!(await hasValidSaltedgeLogin(sender.id))) {
      await sendBtnMsg(
        sender.id,
        'Hola, podemos chatear en cuando tu cuenta se ha syncronizado 🔒💬',
        process.env.WEB_VIEW_URL,
        'Click para syncronizar'
      )

      return
    }

    const res = await fulfillment(message.text, sender.id)
    console.log(res[0].queryResult)
    handleDialogflow(res, sender)
  }
  catch(e) {
    console.log(e)
    throw e
  }
}

export default messagingMessage
