import { gql } from 'apollo-server-express';
import userSchema from './schema/user.schema';
import productSchema from './schema/product.schema';

const rootSchema = gql`
  type Query {
    _: Boolean
  }
`;

export default [rootSchema, userSchema, productSchema];
