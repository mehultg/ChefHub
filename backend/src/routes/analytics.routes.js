import express from 'express';

const router = express.Router();

router.get('/dashboard', (req, res) => {
  res.json({ message: 'Get dashboard metrics - Implementation required' });
});

router.get('/sales', (req, res) => {
  res.json({ message: 'Get sales analytics - Implementation required' });
});

router.get('/popular-items', (req, res) => {
  res.json({ message: 'Get popular items - Implementation required' });
});

router.get('/forecasting', (req, res) => {
  res.json({ message: 'Get forecasting - Implementation required' });
});

export default router;
