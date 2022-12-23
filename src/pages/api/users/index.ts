
import type { NextApiRequest, NextApiResponse } from 'next'

const list =  new Array()
export default function handler(req: NextApiRequest,res: NextApiResponse) {
  
  const { method } = req;
  if(method === 'GET') {
    return res.status(200).json(list)
  }
  else if( method  === 'POST') {
    const {name, email} = req.body;
    const user = ({
      name,
      email
    });
    list.push(user)
    return res.status(201).json(user)
  }
}
