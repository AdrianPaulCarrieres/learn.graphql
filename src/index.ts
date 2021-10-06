import { makeSchema } from "nexus";
import { User, Post } from "./models";
import { QueriesUser } from "./queries";

const { ApolloServer} = require('apollo-server');

const schema = makeSchema({
    types: [User, Post, QueriesUser]
})

const server = new ApolloServer({ schema });

// The `listen` method launches a web server.
server.listen().then(({ }): any => {
  console.log(`🚀  Server ready at http://localhost:4000`);
});