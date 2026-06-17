import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Get all restaurants - Implementation required' });
});

router.get('/:id', (req, res) => {
  res.json({ message: 'Get single restaurant - Implementation required' });
});

router.post('/', (req, res) => {
  res.json({ message: 'Create restaurant - Implementation required' });
});

router.put('/:id', (req, res) => {
  res.json({ message: 'Update restaurant - Implementation required' });
});

export default router;
