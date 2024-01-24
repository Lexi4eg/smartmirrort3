import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const handler = async (req: NextRequest, res: NextResponse) => {
  return new Response("Not in Use");
};

export { handler as GET, handler as POST };
