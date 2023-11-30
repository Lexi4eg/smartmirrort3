
import AppleClockWidget from "../../../components/Clocks/AppleClockWidget";

import Link from "next/link";
import Clock2 from "../../../components/Clocks/Clock2";



import {getServerAuthSession} from "~/server/auth";
import DailyQuoteWidget from "../../../components/WIdgets/DailyQuoteWidget";
import Wordclock from "../../../components/Clocks/Wordclock/Wordclock";
import WelcomeWidget from "../../../components/WIdgets/WelcomeWidget";
import MillionClock from "../../../components/Clocks/MillionClock/MillionClock";
import TickTackToe from "../../../components/games/TickTackToe/TickTacToe";
import Weather from "../../../components/WIdgets/Weather";
import NYTWidget from "../../../components/WIdgets/NYTWidget/NYTWidget";

interface Props {
    style?: string;
}
export default  async function Dashboard3(props: Props) {

    const now = new Date();
    const session = await getServerAuthSession();
    const nightmode = props.style ?? "daymode";

    return (
        <div>
            <div className='grid grid-cols-12 overflow-hidden grid-rows-6 gap-4 h-screen max-w-screen max-h-screen w-screen'>

                <div className='col-span-4 row-span-6 p-10  ' style={{backdropFilter: "blur(10px)"}}>
                    <NYTWidget style={nightmode}/>
                </div>

            </div>
        </div>
    );
}
