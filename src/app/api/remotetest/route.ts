import {NextRequest, NextResponse} from "next/server";

const handler = async (req: NextRequest, res: NextResponse)  => {

        if(req.headers.get('Custom-Header') == null){
                return new Response("2");
        }
        else {
        console.log(req.headers.get('Custom-Header'));
        return new Response("3");
        }
}

export { handler as GET, handler as POST };