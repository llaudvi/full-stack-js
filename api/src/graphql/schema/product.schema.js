import { gql } from 'apollo-server-express';

const product = gql`
  type Product {
    id: ID!
    name: String!
    shortDescription: String
    description: String
    price: Float!
    image: String!
    category: String!
  }

  extend type Query {
    allProducts: [Product!]
    getProduct(id: String!): Product!
  }
`;

export default product;
