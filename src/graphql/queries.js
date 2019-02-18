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

const GET_USER = `
  query ($psid: String!) {
    getUser(psid: $psid) {
      id
    }
  }
`
export const getUser = async (psid) => {
  const { getUser } = await client.request(GET_USER, { psid })
  return getUser
}

