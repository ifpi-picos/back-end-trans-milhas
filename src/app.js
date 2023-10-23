import Express from 'express';
import logger from 'morgan';
import rotasDePassageiros from './rotas/rotasDePassageiros.js';
import rotasDeMotoristas from './rotas/rotasDeMotoristas.js';
import rotasDeViagens from './rotas/rotasDeViagens.js';
import rotasDeCompras from './rotas/rotasDeCompras.js';
import rotasDeConversas from './rotas/rotasDeConversas.js';
import rotasDePagamentos from './rotas/rotasDePagamentos.js';
import rotasDeAgendamentos from './rotas/rotasDeAgendamentos.js';

const app = Express();
app.use(logger('dev'));

app.use('/passageiros', rotasDePassageiros);
app.use('/motoristas', rotasDeMotoristas);
app.use('/viagens', rotasDeViagens);
app.use('/compras', rotasDeCompras);
app.use('/conversas', rotasDeConversas);
app.use('/pagamentos', rotasDePagamentos);
app.use('/agendamentos', rotasDeAgendamentos);



app.listen(3000, () => {
  console.log('Server running on port 3000');
});
