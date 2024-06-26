import { Request, Response } from "express";


interface ICidade{
  nome: string;
};

// eslint-disable-next-line @typescript-eslint/ban-types
export const create = (req:Request<{}, {}, ICidade>, res:Response) => {

    const data = req.body.nome;

    console.log(data);

    return res.send('create!!');
};


