import { sendTextMsg, sendBtnMsg } from '../messages'
import { createUser } from '../graphql/mutations'

const messagingPostbacks = async (sender) => {
  await sendTextMsg(sender.id, 'Bienvenido!')
  try {
    await createUser(sender.id)
  }
  catch(e) {
    console.error('create User failed', e)
  }
  await sendBtnMsg(
    sender.id,
    'Hola, podemos chatear en cuando tu cuenta se ha syncronizado 🔒💬',
    'https://7c9eabe2.ngrok.io',
    'Click para syncronizar'
  )
}

export default messagingPostbacks
