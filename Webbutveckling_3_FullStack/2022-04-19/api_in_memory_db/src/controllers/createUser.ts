import { users } from '../db'
import { User } from '../models/User';
import { Request, Response} from "express";

export const createUser = ( req:Request,res:Response) => {
    const {id,name} = req.body;
     const obj = new User(id,name);
     users.push(obj)
     res.status(201).send('Item created')
   console.log(req.body);
};