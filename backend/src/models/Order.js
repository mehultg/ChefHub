import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  orderId: { type: String, unique: true, required: true },
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  restaurantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant', required: true },
  items: [{
    menuItemId: { type: mongoose.Schema.Types.ObjectId, ref: 'MenuItem' },
    name: String,
    price: Number,
    quantity: Number,
    customizations: mongoose.Schema.Types.Mixed,
    subtotal: Number
  }],
  orderType: {
    type: String,
    enum: ['dine_in', 'takeout', 'delivery'],
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'preparing', 'ready', 'out_for_delivery', 'delivered', 'cancelled'],
    default: 'pending'
  },
  totalAmount: { type: Number, required: true },
  subtotal: Number,
  tax: Number,
  deliveryFee: { type: Number, default: 0 },
  discount: { type: Number, default: 0 },
  paymentMethod: { type: String, enum: ['cash', 'card', 'digital_wallet', 'online'] },
  paymentStatus: { type: String, enum: ['pending', 'completed', 'failed'], default: 'pending' },
  deliveryPartner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  tableNumber: { type: Number },
  rating: { type: Number, min: 0, max: 5 },
  review: String,
  notes: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

export default mongoose.model('Order', orderSchema);
