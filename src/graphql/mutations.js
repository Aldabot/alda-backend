import { request, GraphQLClient } from 'graphql-request'

const client = new GraphQLClient('https://uwl3s322de.execute-api.eu-west-1.amazonaws.com/dev/')

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
