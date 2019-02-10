import { createUser } from '../graphql/mutations'
import { sendTextMsg, sendBtnMsg } from '../utils/messages'

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
    'https://d103ecdb.ngrok.io',
    'Click para syncronizar'
  )
}

export default messagingPostbacks
