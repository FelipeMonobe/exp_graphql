const {
  GraphQLObjectType,
  GraphQLBoolean,
  GraphQLString,
  GraphQLInt,
  GraphQLID,
} = require('graphql')

const user = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQLID },
    username: { type: GraphQLString },
    firstname: { type: GraphQLString },
    lastname: { type: GraphQLString },
    age: { type: GraphQLInt },
    password: { type: GraphQLString },
    salt: { type: GraphQLString },
    role: { type: GraphQLString },
    active: { type: GraphQLBoolean },
  }
})

module.exports = {
  user
}
