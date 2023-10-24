import Express from 'express';

const router = Express.Router();

router.get('/', (req, res) => {
  res.send('Get viagens.');
});

router.post('/', (req, res) => {
  res.send('Post viagem!');
});
router.put('/:id', (req, res) => {
  res.send('Put viagem!');
});
router.delete('/:id', (req, res) => {
  res.send('Delete viagem!');
});

export default router;
