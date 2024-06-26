//importando o servidor do arquivo server
import {server} from './server/server';

//'listen' abrindo na porta 3333, com a mensagem 'app rodando!'
server.listen(process.env.PORT || 1650 , () => {
     console.log(`App rodando na porta: ${ process.env.PORT || 1650 }`);
});

