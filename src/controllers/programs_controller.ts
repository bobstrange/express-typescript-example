import { Request, Response, NextFunction } from 'express'
import * as OnsenWrapper from '../apis/onsen'

export const list = (req: Request, res: Response) => {
  OnsenWrapper.fetchList().then(list => {
    res.json(list)
  })
}
