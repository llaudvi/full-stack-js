import { getAllProducts, getProduct } from '../../repository/product.repository';

export default {
  Query: {
    // Get all products
    async allProducts() {
      const products = await getAllProducts();

      return products.map(item => ({
        id: item._id, // eslint-disable-line
        name: item.name,
        description: item.description,
        shortDescription: item.shortDescription,
        price: item.price,
        image: item.image,
        category: item.category,
      }));
    },
    // Get Specific Product Item...
    async getProduct(_, { id }) {
      const product = await getProduct(id);
      return product;
    },
  },
};
