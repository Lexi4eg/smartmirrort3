import Link from "next/link";
export default function AuthenticationPage (){
    return(
        <div className={"w-full min-w-screen flex flex-row min-h-screen h-full "}>
            <div className={"w-screen justify-center items-center flex h-screen"}>
                <Link
                    href="/api/auth/signin"
                    className="rounded-full p-10 border border-black bg-black w-full px-10 py-3 "
                >
                    Sign In
                </Link>
            </div>
        </div>
    )
}