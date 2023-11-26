import Link from "next/link";
import Image from "next/image";
export default function AuthenticationPage (){
    return(
        <div className={"w-full min-w-screen flex flex-row min-h-screen h-full "}>
           <div className="w-1/3 flex-col  h-screen justify-center items-center flex">
               <div className=" h-2/3 bg-cyan-900 p-5  flex  flex-col rounded-xl">
               <div className="p-10 text-4xl text-white ">
                   Welcome to the Smart Mirror V1
               </div>
               <div className="bg-blue-950 my-auto flex justify-center items-center px-20 py-4 rounded-xl text-white">
                   <Link
                       href="/api/auth/signin"
                       className=""
                         >
                         Sign In
                    </Link>
                    </div>
                 </div>
           </div>
            <div className="w-2/3 relative h-screen">
                    <Image
                        src="/ai-login.jpg"
                        alt=""

                       layout={"fill"}
                        objectFit={"cover"}
                    />

            </div>
        </div>
    )
}