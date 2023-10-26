import { NextRequest } from 'next/server'

export default function handler(req: NextRequest, res: NextRequest) {
    const detectedIp = req.ip;
    console.log(detectedIp);
}