import {NextRequest, NextResponse} from "next/server";

let mode = 1; // This variable will store the mode value

const handler = async (req: NextRequest, res: NextResponse)  => {
        if(req.headers.get('Custom-Header') == null){
                return new Response(mode + "");
        }
        else {
                console.log(req.headers.get('Custom-Header'));
                // @ts-ignore
                mode = parseInt(req.headers.get('Custom-Header')) || 1; // Update the mode value
                console.log(mode);
                return new Response(mode + "");
        }
}

export { handler as GET, handler as POST };