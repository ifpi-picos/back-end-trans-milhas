import Express from 'express';

const router = Express.Router();

router.get('/', (req, res) => {
  res.send('Get pagamentos.');
});

router.post('/', (req, res) => {
  res.send('Post pagamento!');
});
router.put('/:id', (req, res) => {
  res.send('Put pagamento!');
});
router.delete('/:id', (req, res) => {
  res.send('Delete pagamento!');
});

export default router;
