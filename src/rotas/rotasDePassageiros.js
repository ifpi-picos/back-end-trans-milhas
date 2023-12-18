import { PrismaClient } from '@prisma/client';
import Express from 'express';
import { criptografaSenha } from '../servicos/senha.js';

const router = Express.Router();
const prisma = new PrismaClient();

router.get('/', async (req, res) => {
  const usuarios = await prisma.usuario.findMany({});
  res.send(usuarios);
});



router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { nome } = req.body;
  await prisma.usuario.update({
    where: { id: parseInt(id) },
    data: { nome: nome },
  });
  res.send('Usuário alterado com sucesso!');
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await prisma.usuario.delete({
    where: { id: parseInt(id) },
  });
  res.send('Usuário removido com sucesso!');
});

export default router;
