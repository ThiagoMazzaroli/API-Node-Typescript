import { Router } from "express";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {StatusCodes} from 'http-status-codes';
import {CidadesController} from '../controllers'



CidadesController.create
    
const router = Router();

router.get('/', (req, res) =>{
    return res.send('ola, DEV!');
   });
   
router.post('/cidades', CidadesController.create);

export {router};