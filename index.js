const schema = require('./modules/root.schema')
const { graphql } = require('graphql')

const query = '{ user { username } }'

const main = () =>
    graphql(schema, query)
    .then(res => console.log(res))

main()
