import { makeSchema } from "nexus";
import { User, Post } from "./models";
import * as queries from "./queries";
import { context } from "./database/context";

const { ApolloServer } = require('apollo-server');

const schema = makeSchema({
  types: queries
})

const server = new ApolloServer({ schema, context });

// The `listen` method launches a web server.
server.listen().then(({ }): any => {
  console.log(`🚀  Server ready at http://localhost:4000`);
});