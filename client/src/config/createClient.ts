import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { link } from "./NetworkNotifier";

export default function createClient() {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: link.concat(createHttpLink({ uri: "http://localhost:3001/graphql" })),
  });
}
