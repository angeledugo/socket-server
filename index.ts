import Server from './class/server';
import { router } from './routes/router';
import { SERVER_PORT } from './global/environment';
import bodyParser  from 'body-parser';
import cors from 'cors';

const server = new Server();


server.app.use(bodyParser.urlencoded({extended:true}));
server.app.use(bodyParser.json());

// cors 
server.app.use( cors({ origin: true, credentials: true}));
// rutas de  servicios
server.app.use('/', router);

server.start( () => {
    console.log( `servidor corriendo ${ SERVER_PORT }`);
});