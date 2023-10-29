
import WelcomeWidget from "~/app/_components/WelcomeWidget";
import ClockWidget from "~/app/_components/Clocks/ClockWidget";
import IPWidget from "~/app/_components/IPWidget";
import Weather from "~/app/_components/Weather";
import WeatherWidget from "~/app/_components/Weather";
import Link from "next/link";
import Clock2 from "~/app/_components/Clocks/Clock2";
import NasaWidget from "~/app/_components/NasaWidget";
import DailyQuoteWidget from "~/app/_components/DailyQuoteWidget";
import Wordclock from "~/app/_components/Clocks/Wordclock";
// @ts-ignore
import MillionClock from "~/app/_components/MillionClock/MillionClock";
import {getServerAuthSession} from "~/server/auth";


export default  async function Dashboard() {

    const now = new Date();
    const session = await getServerAuthSession();
    let nightmode = "daymode";


    if(now.getHours() >= 17 || now.getHours() <= 6){
        nightmode = "nightmode";
    }

    return (
        <div>
            <div className='grid grid-cols-16 overflow-hidden grid-rows-6 gap-4 h-screen w-screen'>


                <div className='col-span-3 row-span-2 rounded-xl  ' style={{backdropFilter: "blur(10px)"}}>
                    <WelcomeWidget username={session?.user.name ?? ""} style={nightmode} />
                </div>
                <div className='col-span-2 row-span-2 rounded-xl  flex items-center justify-center  '
                     style={{backdropFilter: "blur(10px)"}}>
                    <ClockWidget time={now.getTime()}/>
                </div>

                <div className='col-span-1 row-span-1  rounded-xl ' style={{backdropFilter: "blur(10px)"}}>

                </div>


                <div className='col-span-2 row-span-2 ' style={{backdropFilter: "blur(10px)"}}>
                    <Clock2 time={4}/>
                </div>

                <div className='col-span-4 row-span-2 ' style={{backdropFilter: "blur(10px)"}}>
                    <MillionClock/>
                </div>

                <div className='col-span-3 row-span-2 ' style={{backdropFilter: "blur(10px)"}}>
                    <DailyQuoteWidget/>
                </div>
                <div className='col-span-1 row-span-1 rounded-xl flex justify-center items-center'
                     style={{backdropFilter: "blur(10px)"}}>
                    <Link
                        href="/api/auth/signout"
                        className="rounded-full bg-white/10 px-5 py-3  font-semibold no-underline transition hover:bg-white/20"
                    >
                        Sign Out
                    </Link>

                </div>
                <div className='col-span-4 row-span-3 ' style={{backdropFilter: "blur(10px)"}}>
                    <Wordclock time={now.getTime()}/>
                </div>

            </div>
        </div>
    );
}
