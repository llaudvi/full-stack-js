import { gql } from 'apollo-server-express';

export default gql`
  type User {
    id: ID!
    email: String!
    name: String!
    address: String!
  }

  extend type Query {
    allUsers: [User!]!
  }
`;
