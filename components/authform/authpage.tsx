import Link from "next/link";
import Image from "next/image";
import {Roboto} from "next/font/google";

const roboto = Roboto({
    weight: '500',
    subsets: ['latin-ext'],
    style: 'normal'
})
export default function AuthenticationPage (){
    return(
        <div className={"w-full min-w-screen bg-[#1B1D1D] overflow-hidden overflow-y-hidden max-h-screen text-[#E4E1DC] flex flex-col min-h-screen h-full"}>
            <div className="w-full  flex-row flex px-5 py-3 justify-between">
                <div className="">
                    Smart Mirror UI
                </div>
                <div className="">
                    . . .
                </div>
            </div>
            <div className="flex w-screen h-screen justify-center ">
                <div className="w-1/3 flex justify-center  h-1/2 bg-[#191A1B] rounded-3xl shadow-md">
                   <div className="flex justify-center flex-col items-center">
                       <Image src={"/applelogin.png"} alt={""}  width={200} height={200}></Image>
                       <div className="text-center text-4xl p-10">
                           Smart Mirror UI
                       </div>
                       <Link href={"/api/auth/signin"}>
                            <button className="bg-[#191A1B] shadow  rounded-lg p-3 text-xl">
                                <div className={roboto.className}>
                                 Sign In
                                </div>
                            </button>
                       </Link>

                   </div>
                </div>
            </div>
        </div>
    )
}