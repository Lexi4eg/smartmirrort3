import WelcomeWidget from "~/app/_components/WIdgets/WelcomeWidget";
import ClockWidget from "~/app/_components/Clocks/ClockWidget";
import IPWidget from "~/app/_components/WIdgets/IPWidget";
import Weather from "~/app/_components/WIdgets/Weather";
import WeatherWidget from "~/app/_components/WIdgets/Weather";
import Link from "next/link";
import Clock2 from "~/app/_components/Clocks/Clock2";
import NasaWidget from "~/app/_components/WIdgets/NasaWidget";
import DailyQuoteWidget from "~/app/_components/WIdgets/DailyQuoteWidget";
import Wordclock from "~/app/_components/Clocks/Wordclock/Wordclock";
import MillionClock from "~/app/_components/Clocks/MillionClock/MillionClock";
import {getServerAuthSession} from "~/server/auth";

interface Props {
    style?: string;
    widgets: {
        type: string;
        colSpan: number;
        rowSpan: number;
    }[];
}

export default async function Dashboard({ style = "", widgets }: Props) {
    const now = new Date();
    const session = await getServerAuthSession();
    const nightmode = style;

    return (
        <div>
            <div className='grid grid-cols-16 overflow-hidden grid-rows-6 gap-4 h-screen w-screen'>
                {widgets.map((widget, index) => (
                    <div key={index} className={`col-span-${widget.colSpan} row-span-${widget.rowSpan} rounded-xl`} style={{ backdropFilter: "blur(10px)" }}>
                        {widget.type === 'WelcomeWidget' && <WelcomeWidget username={session?.user.name ?? ""} style={nightmode} time={now.getTime()} />}
                        {widget.type === 'ClockWidget' && <ClockWidget time={now.getTime()} style={nightmode} />}
                        {widget.type === 'Clock2' && <Clock2 time={4} style={nightmode} />}
                        {widget.type === 'MillionClock' && <MillionClock style={nightmode} />}
                        {widget.type === 'DailyQuoteWidget' && <DailyQuoteWidget style={nightmode} />}
                        {widget.type === 'Wordclock' && <Wordclock time={now.getTime()} style={nightmode} />}
                        {widget.type === 'NasaWidget' && <NasaWidget style={nightmode} />}
                        {widget.type === 'WeatherWidget' && <WeatherWidget style={nightmode} />}
                    </div>
                ))}
            </div>
        </div>
    );
}
