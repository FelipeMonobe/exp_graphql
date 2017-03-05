const userTypes = require('./users/types')
const {
  GraphQLObjectType,
  GraphQLSchema,
} = require('graphql')

const query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    user: {
      type: userTypes.user
    }
  }
})

module.exports = new GraphQLSchema({ query })
