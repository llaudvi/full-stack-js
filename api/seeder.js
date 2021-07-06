import productSchema from './src/model/product.model';
import dummyProducts from './dummyProducts';

export default async function seedData() {
  await productSchema.deleteMany({});

  await productSchema.find({}, (error, products) => {
    if (error) throw new Error(error);

    productSchema.insertMany(dummyProducts);
  });
}
