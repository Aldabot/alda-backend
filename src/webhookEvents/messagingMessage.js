import { sendTextMsg, sendBtnMsg } from '../messages'

const messagingMessage = async (sender) => {
  try {
    await sendTextMsg(sender.id, 'hello')
    await sendBtnMsg(
      sender.id,
      'Hola, podemos chatear en cuando tu cuenta se ha syncronizado 🔒💬',
      'https://6fcd19de.ngrok.io',
      'Click para syncronizar'
    )
  }
  catch(e) {
    throw e
  }
}

export default messagingMessage
