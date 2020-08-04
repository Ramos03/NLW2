import express from 'express';
import routes from './routes';
import cors from 'cors';

const app = express();

// Route params: Identificar qual recurso quer atualizar;
// Query params:

app.use(express.json());
app.use(routes);

app.listen(3333);