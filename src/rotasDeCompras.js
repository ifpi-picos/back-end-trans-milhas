import Express from 'express';

const router = Express.Router();

router.get('/', (req, res) => {
  res.send('Get compras.');
});

router.post('/', (req, res) => {
  res.send('Post compra!');
});
router.put('/:id', (req, res) => {
  res.send('Put compra!');
});
router.delete('/:id', (req, res) => {
  res.send('Delete compra!');
});

export default router;
