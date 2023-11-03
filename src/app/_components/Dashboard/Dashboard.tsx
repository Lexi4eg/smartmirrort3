
import ClockWidget from "~/app/_components/Clocks/ClockWidget";

import Link from "next/link";
import Clock2 from "~/app/_components/Clocks/Clock2";



import {getServerAuthSession} from "~/server/auth";
import DailyQuoteWidget from "~/app/_components/WIdgets/DailyQuoteWidget";
import Wordclock from "~/app/_components/Clocks/Wordclock/Wordclock";
import WelcomeWidget from "~/app/_components/WIdgets/WelcomeWidget";
import MillionClock from "~/app/_components/Clocks/MillionClock/MillionClock";
import TickTackToe from "~/app/_components/games/TickTackToe/TickTacToe";
import UploadImage from "~/app/_components/uploadImage";

interface Props {
    style?: string;
}
export default  async function Dashboard(props: Props) {

    const now = new Date();
    const session = await getServerAuthSession();
    let nightmode = props.style ?? "daymode";

    return (
        <div>
            <div className='grid grid-cols-16 overflow-hidden grid-rows-6 gap-4 h-screen w-screen'>


                <div className='col-span-3 row-span-2 rounded-xl  ' style={{backdropFilter: "blur(10px)"}}>
                    <WelcomeWidget username={session?.user.name ?? ""} style={nightmode}  time={now.getTime()}/>
                </div>
                <div className='col-span-2 row-span-2 rounded-xl  flex items-center justify-center  '
                     style={{backdropFilter: "blur(10px)"}}>
                    <ClockWidget time={now.getTime()} style={nightmode}/>
                </div>

                <div className='col-span-2 row-span-2 ' style={{backdropFilter: "blur(10px)"}}>
                    <Clock2 time={4} style={nightmode}/>
                </div>

                <div className='col-span-4 row-span-2 ' style={{backdropFilter: "blur(10px)"}}>
                    <MillionClock style={nightmode}/>
                </div>

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
                    <TickTackToe style={nightmode}/>

                </div>


            </div>
        </div>
    );
}
