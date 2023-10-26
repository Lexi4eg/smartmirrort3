import {getServerAuthSession} from "~/server/auth";

async function WelcomeWidget() {

    const session = await getServerAuthSession();


    const now = new Date();
    const hour = now.getHours();
    let greeting = '';

    if (hour >= 5 && hour < 12) {
        greeting = 'Good morning ';
    } else if (hour >= 12 && hour < 18) {
        greeting = 'Good afternoon';
    } else {
        greeting = 'Good evening';
    }




    return (
        <div className=' relative w-full h-full justify-center items-center flex flex-col text-center  p-4 text-5xl'>
            <div className="">
                <div className='welcome-text'>
                    {greeting}

                </div>
                <div className={"text-6xl"}>{session && <span> {session.user?.name}</span>}</div>
            </div>
        </div>
    );
}

export default WelcomeWidget;