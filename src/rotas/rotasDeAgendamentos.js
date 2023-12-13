import Express from 'express';


const router = Express.Router();

router.get('/', (req, res) => {
  res.send('Get agendamentos.');
});

router.post('/', (req, res) => {
  res.send('Post agendamento!');
});
router.put('/:id', (req, res) => {
  res.send('Put agendamento!');
});
router.delete('/:id', (req, res) => {
  res.send('Delete agendamento!');
});

export default router;
