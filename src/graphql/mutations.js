import { request, GraphQLClient } from 'graphql-request'

const client = new GraphQLClient('http://localhost:4000/graphqlServer')

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
