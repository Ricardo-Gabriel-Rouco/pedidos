import { Request, Response, NextFunction } from 'express';

const catchedAsync = (fn: (req: Request, res: Response) => Promise<any>) => {
  return (req: Request, res: Response, next: NextFunction) => {
    fn(req, res).catch((err) => next(err));
  };
};

export default catchedAsync;
