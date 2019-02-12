import { request, GraphQLClient } from 'graphql-request'
import client from './client'

const HAS_VALID_SALTEDGE_LOGIN = `
  query ( $psid: String! ) {
    hasValidSaltedgeLogin( psid: $psid )
  }
`

export const hasValidSaltedgeLogin = async (psid) => {
  const { hasValidSaltedgeLogin } = await client.request(HAS_VALID_SALTEDGE_LOGIN, { psid })
  return hasValidSaltedgeLogin
}
