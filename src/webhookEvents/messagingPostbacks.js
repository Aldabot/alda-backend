import { sendTextMsg, sendBtnMsg } from '../messages'
import { createUser } from '../graphql/mutations'

const messagingPostbacks = async (sender) => {
  await sendTextMsg(sender.id, 'Bienvenido!')
  await createUser(sender.id).catch(err => console.error(err)) // if user exists handle error
  await sendBtnMsg(
    sender.id,
    'Hola, podemos chatear en cuando tu cuenta se ha syncronizado 🔒💬',
    'https://b3e53abc.ngrok.io',
    'Click para syncronizar'
  )
}

export default messagingPostbacks
