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
        <div className=' relative justify-center items-center flex  p-4 text-5xl'>
            <div className='welcome-text'>
                {greeting} {session && <span>Logged in as {session.user?.name}</span>}

            </div>
        </div>
    );
}

export default WelcomeWidget;