import mongoose from 'mongoose';

const restaurantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  cuisine: [String],
  address: {
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: String,
    zipCode: String,
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true }
  },
  contactEmail: { type: String, required: true },
  contactPhone: { type: String, required: true },
  logo: String,
  bannerImage: String,
  totalTables: { type: Number, default: 10 },
  rating: { type: Number, min: 0, max: 5, default: 0 },
  totalReviews: { type: Number, default: 0 },
  isActive: { type: Boolean, default: true },
  features: {
    delivery: { type: Boolean, default: true },
    dineIn: { type: Boolean, default: true },
    takeout: { type: Boolean, default: true },
    reservation: { type: Boolean, default: true }
  },
  adminId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

export default mongoose.model('Restaurant', restaurantSchema);
