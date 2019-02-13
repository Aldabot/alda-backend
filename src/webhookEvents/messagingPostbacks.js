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
    process.env.WEB_VIEW_URL,
    'Click para syncronizar'
  )
}

export default messagingPostbacks
