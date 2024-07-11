/* eslint-disable @typescript-eslint/ban-types */
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from 'yup';

interface ICidade {
  nome: string;
  estado: string;
}

const UserValidation: yup.Schema<ICidade> = yup.object({
  nome: yup.string().required().min(3),
  estado: yup.string().required().min(3)
});

export const create = async (req: Request<{}, {}, ICidade>, res: Response) => {
   let validatedData: ICidade | undefined;
  try {
    validatedData = await UserValidation.validate(req.body, { abortEarly: false }) as ICidade;
  } catch (error) {
    const yupError = error as yup.ValidationError;
    const validateError: Record<string, string> = {};
    
    yupError.inner.forEach(error => {
      if(error.path === undefined) return;

      validateError[error.path] = error.message;
    }) 

    return res.status(StatusCodes.UNAUTHORIZED).json({
      errors: validateError,
    });
  }

  console.log(validatedData);

};
