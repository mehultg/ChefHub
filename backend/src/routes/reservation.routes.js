import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Get reservations - Implementation required' });
});

router.post('/', (req, res) => {
  res.json({ message: 'Create reservation - Implementation required' });
});

router.get('/:id', (req, res) => {
  res.json({ message: 'Get single reservation - Implementation required' });
});

router.patch('/:id', (req, res) => {
  res.json({ message: 'Update reservation - Implementation required' });
});

router.delete('/:id', (req, res) => {
  res.json({ message: 'Cancel reservation - Implementation required' });
});

export default router;
