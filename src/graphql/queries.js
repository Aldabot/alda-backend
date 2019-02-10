import { request, GraphQLClient } from 'graphql-request'
const client = new GraphQLClient('http://localhost:4000/graphqlServer')

const HAS_VALID_SALTEDGE_LOGIN = `
  query ( $psid: String! ) {
    hasValidSaltedgeLogin( psid: $psid )
  }
`

export const hasValidSaltedgeLogin = async (psid) => {
  const { hasValidSaltedgeLogin } = await client.request(HAS_VALID_SALTEDGE_LOGIN, { psid })
  return hasValidSaltedgeLogin
}
