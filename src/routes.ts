import { Router, Request, Response } from 'express'


export const router = Router();


router.get('/test', (req:Request, res: Response) => {
  throw new Error('Erro ao fazer essa requisição')
})
