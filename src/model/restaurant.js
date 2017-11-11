import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let restaurantSchema = new Schema({
  name: String
});

module.exports = mongoose.model('Restaurant', restaurantSchema);