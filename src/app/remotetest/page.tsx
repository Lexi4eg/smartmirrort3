import { revalidatePath } from 'next/cache'
import {PrismaClient} from "@prisma/client";

interface Mode {
    id : number,
    mode : number
}

export const revalidate = 1;

export default async function Page () {


    const prisma = new PrismaClient();

    const mode = await prisma.mode.findUnique({
        where: { id: 1 },
    });


    const text = mode?.mode ?? 1;


    async function update(formData: FormData) {
        "use server";
        const prisma = new PrismaClient();
        const mode = parseInt(formData.get("mode") as string) || 1;


        await prisma.mode.update({
            where: { id: 1 },
            data: {
                mode: mode as number,
            },
        });
        //update all open pages in different tabs
        revalidatePath('/remotetest')



        
        console.log("revalidating")
        revalidatePath('/')

    }


    return (
        <>
            <div className="w-screen h-screen overflow-hidden overflow-y-hidden bg-[#1B1D1D] text-[#E4E1DC]">
                <div className="p-3 text-3xl flex justify-center ">
                    Mobile Control app
                </div>
                <form action = {update}>

                <input
                    type="text"
                    name="mode"
                    defaultValue={text}
                    className="mb-4"
                />
                <button type={"submit"}>
                    <div className="p-3 text-3xl flex justify-center ">
                        Remote Test
                    </div>
                </button>
                </form>
            </div>
        </>
    )
}