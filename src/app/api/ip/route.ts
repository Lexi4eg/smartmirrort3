import {NextApiRequest, NextApiResponse} from "next";

const  handler = (
    req: NextApiRequest ,
    res: NextApiResponse
) => {
    //const detectedIp = req.ip;
    //console.log(detectedIp);
    return new Response("hi this does not work yet");
}


export { handler as GET, handler as POST };