import Express from 'express';

const router = Express.Router();

router.get('/', (req, res) => {
  res.send('Get conversas.');
});

router.post('/', (req, res) => {
  res.send('Post conversa!');
});
router.put('/:id', (req, res) => {
  res.send('Put conversa!');
});
router.delete('/:id', (req, res) => {
  res.send('Delete conversa!');
});

export default router;
