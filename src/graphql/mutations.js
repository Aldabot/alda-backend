import { request, GraphQLClient } from 'graphql-request'
import client from './client'

const CREATE_USER = `
  mutation ( $psid: String! ) {
    createUser( psid: $psid ) {
      id
    }
  }
`
export const createUser = (psid) => {
  return client.request(CREATE_USER, { psid })
}
