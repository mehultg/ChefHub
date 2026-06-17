# ChefHub - Advanced Restaurant Management Platform

![ChefHub Logo](https://img.shields.io/badge/ChefHub-v1.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Node Version](https://img.shields.io/badge/node-%3E%3D16.0-green)
![React](https://img.shields.io/badge/react-18.2-blue)

A comprehensive, full-stack restaurant management and ordering platform with AI-powered features, real-time tracking, and advanced analytics.

## 🌟 Highlights

- **Multi-tenant SaaS Platform** - Support unlimited restaurants
- **Real-time Order Tracking** - Socket.io powered live updates
- **AI-Powered Features** - Smart recommendations & demand forecasting
- **Complete Admin Dashboard** - Full restaurant management
- **Mobile Ready** - React Native app included
- **Payment Integration** - Stripe, Razorpay, Apple Pay, Google Pay
- **Production Ready** - Docker, CI/CD, monitoring included

## 🚀 Quick Start

### Using Docker (Recommended)
```bash
git clone https://github.com/mehultg/ChefHub.git
cd ChefHub
docker-compose up --build
```

### Manual Setup
```bash
# Backend
cd backend
npm install
cp .env.example .env
npm run dev

# Frontend (new terminal)
cd frontend
npm install
cp .env.example .env
npm run dev
```

## 📋 Features

### Customer Features
- AI-Powered Menu Recommendations
- Table Reservations with QR codes
- Live Order Tracking
- Group Ordering & Bill Splitting
- Loyalty Program
- Pre-order System
- Multiple Payment Methods

### Admin Features
- Multi-Location Management
- Kitchen Display System (KDS)
- Inventory Management
- Staff Scheduling
- Demand Forecasting
- Analytics & Reports
- Customer CRM

## 🛠 Tech Stack

**Backend:** Node.js + Express + MongoDB + Redis + Socket.io
**Frontend:** React + TypeScript + Tailwind CSS + Redux
**Mobile:** React Native + Expo
**DevOps:** Docker + Docker Compose
**Payment:** Stripe & Razorpay

## 📊 Project Structure

```
ChefHub/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   └── server.js
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── store/
│   │   └── App.tsx
│   └── package.json
├── docs/
│   ├── API.md
│   ├── DATABASE.md
│   ├── ARCHITECTURE.md
│   └── DEPLOYMENT.md
└── docker-compose.yml
```

## 📚 Documentation

- [API Documentation](docs/API.md)
- [Database Schema](docs/DATABASE.md)
- [Architecture Guide](docs/ARCHITECTURE.md)
- [Deployment Guide](docs/DEPLOYMENT.md)

## 🔐 Environment Variables

See `.env.example` for all required variables.

## 🧪 Testing

```bash
cd backend
npm test

cd frontend
npm test
```

## 🚀 Deployment

### Docker
```bash
docker-compose up --build
```

### Heroku
```bash
heroku create chefhub-app
git push heroku main
```

### AWS
See [Deployment Guide](docs/DEPLOYMENT.md)

## 📄 License

MIT License - See LICENSE file for details

## 🤝 Contributing

Contributions welcome! See CONTRIBUTING.md for guidelines.

## 📞 Support

- Email: support@chefhub.io
- Issues: https://github.com/mehultg/ChefHub/issues

---

**Built with ❤️ for restaurant owners and food lovers**