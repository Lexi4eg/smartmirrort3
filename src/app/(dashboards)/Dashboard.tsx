
<<<<<<< HEAD
import ClockWidget from "~/app/_components/Clocks/ClockWidget";

import Link from "next/link";
import Clock2 from "~/app/_components/Clocks/Clock2";
=======
import AppleClockWidget from "../../../components/Clocks/AppleClockWidget";

import Link from "next/link";
import Clock2 from "../../../components/Clocks/Clock2";
>>>>>>> dce2194 (Small change)



import {getServerAuthSession} from "~/server/auth";
<<<<<<< HEAD
import DailyQuoteWidget from "~/app/_components/WIdgets/DailyQuoteWidget";
import Wordclock from "~/app/_components/Clocks/Wordclock/Wordclock";
import WelcomeWidget from "~/app/_components/WIdgets/WelcomeWidget";
import MillionClock from "~/app/_components/Clocks/MillionClock/MillionClock";
import TickTackToe from "~/app/_components/games/TickTackToe/TickTacToe";

interface Props {
    style?: string;
=======
import DailyQuoteWidget from "../../../components/WIdgets/DailyQuoteWidget";
import Wordclock from "../../../components/Clocks/Wordclock/Wordclock";
import WelcomeWidget from "../../../components/WIdgets/WelcomeWidget";
import MillionClock from "../../../components/Clocks/MillionClock/MillionClock";
import TickTackToe from "../../../components/games/TickTackToe/TickTacToe";
import WeatherWidget from "~/app/_components/WIdgets/Weather";

interface Props {
    style?: string;

>>>>>>> dce2194 (Small change)
}
export default  async function Dashboard(props: Props) {

    const now = new Date();
    const session = await getServerAuthSession();
<<<<<<< HEAD
    let nightmode = props.style ?? "daymode";

    return (
        <div>
            <div className='grid grid-cols-16 overflow-hidden grid-rows-6 gap-4 h-screen w-screen'>
=======
    const nightmode = props.style ?? "daymode";
//test
    return (
        <div>
            <div className='grid grid-cols-8 overflow-hidden grid-rows-6 gap-4 h-screen w-screen'>
>>>>>>> dce2194 (Small change)


                <div className='col-span-3 row-span-2 rounded-xl  ' style={{backdropFilter: "blur(10px)"}}>
                    <WelcomeWidget username={session?.user.name ?? ""} style={nightmode}  time={now.getTime()}/>
                </div>
                <div className='col-span-2 row-span-2 rounded-xl  flex items-center justify-center  '
                     style={{backdropFilter: "blur(10px)"}}>
<<<<<<< HEAD
                    <ClockWidget time={now.getTime()} style={nightmode}/>
=======
                    <AppleClockWidget time={now.getTime()} style={nightmode}/>
>>>>>>> dce2194 (Small change)
                </div>

                <div className='col-span-2 row-span-2 ' style={{backdropFilter: "blur(10px)"}}>
                    <Clock2 time={4} style={nightmode}/>
                </div>

<<<<<<< HEAD
                <div className='col-span-4 row-span-2 ' style={{backdropFilter: "blur(10px)"}}>
                    <MillionClock style={nightmode}/>
                </div>

=======
>>>>>>> dce2194 (Small change)
                <div className='col-span-3 row-span-2 ' style={{backdropFilter: "blur(10px)"}}>
                    <DailyQuoteWidget style={nightmode}/>
                </div>
                <div className='col-span-1 row-span-1 rounded-xl flex justify-center items-center'
                     style={{backdropFilter: "blur(10px)"}}>
                    <Link
                        href="/api/auth/signout"
                        className={`rounded-full bg-white/10 px-5 py-3  font-semibold no-underline transition hover:bg-white/20 ${nightmode === "nightmode" ? "text-nightmode" : ""}`}
                    >
                        Sign Out
                    </Link>

                </div>
                <div className='col-span-4 row-span-3 ' style={{backdropFilter: "blur(10px)"}}>
                    <Wordclock time={now.getTime()} style={nightmode}/>
                </div>
                <div className='col-span-4 row-span-3 p-10  ' style={{backdropFilter: "blur(10px)"}}>
<<<<<<< HEAD
                    <TickTackToe style={nightmode}/>

=======
                    <WeatherWidget style={nightmode}/>
>>>>>>> dce2194 (Small change)
                </div>

            </div>
        </div>
    );
}
