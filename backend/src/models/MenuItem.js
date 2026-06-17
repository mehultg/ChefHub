import mongoose from 'mongoose';

const menuItemSchema = new mongoose.Schema({
  restaurantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant', required: true },
  name: { type: String, required: true },
  description: String,
  category: { type: String, required: true },
  price: { type: Number, required: true },
  discountedPrice: Number,
  image: String,
  preparationTime: { type: Number, default: 15 },
  calories: Number,
  isVegetarian: { type: Boolean, default: false },
  isSpicy: { type: Boolean, default: false },
  spiceLevel: { type: String, enum: ['mild', 'medium', 'spicy', 'extra_spicy'] },
  isAvailable: { type: Boolean, default: true },
  rating: { type: Number, min: 0, max: 5, default: 0 },
  totalOrders: { type: Number, default: 0 },
  customizations: [{
    name: String,
    options: [{ name: String, price: Number }]
  }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

export default mongoose.model('MenuItem', menuItemSchema);
