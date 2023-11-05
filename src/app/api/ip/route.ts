import { NextRequest } from 'next/server'

const  handler = (req: NextRequest, res: NextRequest) => {
    const detectedIp = req.ip;
    console.log(detectedIp);
}


export { handler as GET, handler as POST };