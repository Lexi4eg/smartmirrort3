import {NextRequest, NextResponse} from "next/server";
import {PrismaClient} from '@prisma/client'


const handler = async (req: NextRequest, res: NextResponse)  => {
   const prisma = new PrismaClient()
    const mode = await prisma.mode.findFirst({
        where: {
            id: 1,
        },
    })
    return new Response(mode?.mode + "");
}

export { handler as GET, handler as POST };