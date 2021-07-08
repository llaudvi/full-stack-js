import { ApolloError } from 'apollo-server-express';
import Product from '../model/product.model';
import { logError } from '../utils';

export async function getAllProducts() {
  try {
    const product = await Product.find({}, (error, products) => {
      if (error) return new ApolloError(error);
      return products;
    });

    return product;
  } catch (error) {
    logError(error);
    throw new ApolloError(error);
  }
}

export async function getProduct(id) {
  try {
    const product = await Product.findById(id, (error, product) => {
      if (error || !product) return new ApolloError(error);
      return { ...product, id: product._id };
    });

    return product;
  } catch (error) {
    logError(error);
    throw new ApolloError(error);
  }
}
