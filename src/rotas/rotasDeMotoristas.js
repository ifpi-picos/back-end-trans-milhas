import Express from 'express';

const router = Express.Router();

router.get('/', (req, res) => {
  res.send('Get motoristas.');
});

router.post('/', (req, res) => {
  res.send('Post motorista!');
});
router.put('/:id', (req, res) => {
  res.send('Put motorista!');
});
router.delete('/:id', (req, res) => {
  res.send('Delete motorista!');
});

export default router;
