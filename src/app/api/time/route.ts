import { type NextApiRequest, type NextApiResponse } from 'next';
import {NextRequest} from "next/server";

type Data = {
    time: string,
}

const  handler = (
    req: NextApiRequest ,
    res: NextApiResponse<Data>
) =>{
   return new Response(new Date().toISOString());
}

export { handler as GET, handler as POST };
