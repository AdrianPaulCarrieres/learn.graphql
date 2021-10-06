import { makeSchema } from "nexus";
import { User, Node, Post } from "./models";

const { ApolloServer} = require('apollo-server');

const schema = makeSchema({
    types: [User, Node, Post]
})

const server = new ApolloServer({schema})

server.listen(() => `Server is running on http://localhost:4000`)