import { ApolloServer } from "@apollo/server";
import { resolvers } from "./resolver.js";
import { typeDefs } from "./schema.js";

const server = new ApolloServer({
  //* typeDefs :- Defination of types of Data

  typeDefs,
  resolvers,
});

export default server;
