import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Get all menu items - Implementation required' });
});

router.get('/:id', (req, res) => {
  res.json({ message: 'Get single menu item - Implementation required' });
});

router.post('/', (req, res) => {
  res.json({ message: 'Create menu item - Implementation required' });
});

router.put('/:id', (req, res) => {
  res.json({ message: 'Update menu item - Implementation required' });
});

router.delete('/:id', (req, res) => {
  res.json({ message: 'Delete menu item - Implementation required' });
});

export default router;
