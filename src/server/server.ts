//importando o framework express
import  express  from 'express';
import {router} from './routes/routes';
import 'dotenv/config';

//inserindo o express dentro de uma constante
const server = express();

server.use(router);

//exporta o servidor
export {server};