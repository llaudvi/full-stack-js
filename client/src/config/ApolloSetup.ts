import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { createNetworkStatusNotifier } from "react-apollo-network-status";

const { link, useApolloNetworkStatus } = createNetworkStatusNotifier();

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link.concat(createHttpLink({ uri: "http://localhost:3001/graphql" })),
});

export { useApolloNetworkStatus };

export default client;
