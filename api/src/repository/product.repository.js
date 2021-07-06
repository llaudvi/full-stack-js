import { ApolloError } from 'apollo-server-express';
import Product from '../model/product.model';

export async function getAllProducts() {
  const product = await Product.find({}, (error, products) => {
    if (error) return new ApolloError(error);
    return products;
  });

  return product;
}

export async function getProduct(id) {
  const product = await Product.findById(id, (error, product) => {
    if (error || !product) return new ApolloError(error);
    return { ...product, id: product._id };
  });

  return product;
}
