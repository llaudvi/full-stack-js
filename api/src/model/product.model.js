import mongoose from 'mongoose';
import defaultColumns from './default-columns';

const { Schema } = mongoose;

const productSchema = new Schema({
  name: String,
  description: String,
  price: Number,
  image: String,
  category: String,
  shortDescription: String,
  ...defaultColumns,
});

export default mongoose.model('Product', productSchema);
