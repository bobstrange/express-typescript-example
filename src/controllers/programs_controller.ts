import { Request, Response, NextFunction } from 'express'
import * as OnsenWrapper from '../apis/onsen'

const errorHandler = (res: Response) => {
  return (error: any) => res.json({ error })
}

export const list = async (req: Request, res: Response) => {
  const list = await OnsenWrapper.fetchPrograms().catch(errorHandler(res))
  res.json(list)
}

export const show = async (req: Request, res: Response) => {
  const name = req.params.name as string;
  const program = await OnsenWrapper.fetch(name).catch(errorHandler(res))
  res.json(program)
}
