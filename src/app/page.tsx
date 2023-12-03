import { getServerAuthSession } from "~/server/auth";
import Dashboard from "./(dashboards)/Dashboard";
import AuthenticationPage from "../../components/authform/authpage";
import WorkClockDashboard from "~/app/(dashboards)/WorkClockDashboard";
import MillionTimesDashboard from "~/app/(dashboards)/MillionTimesDashboard";
import Dashboard3 from "~/app/(dashboards)/Dashboard3";
import FlipDotClock from "~/app/(dashboards)/FlipDotClock/FlipDotClock";
import SolarSystemWallpaper from "~/app/(dashboards)/solarSystem/solarSystemWallpaper";


export default async function Home() {
    const session = await getServerAuthSession();
    const now = new Date();
    let style: string = "daymode";

    let selectedOption: number = 1;
    if(now.getHours() >= 18 || now.getHours() <= 6){
        style = "nightmode";
    }

    return (
        <>
            {session ? (
                <>
                    <div className="flex bg-cover max-w-screen min-h-screen bg-center  flex-col items-center justify-center text-white  bg-[#191a1b] "
                    >
                        {selectedOption === 1 && <Dashboard style={style} />}
                        {selectedOption === 2 && <WorkClockDashboard style={style} />}
                        {selectedOption === 3 && <MillionTimesDashboard style={style} />}
                        {selectedOption === 4 && <Dashboard3 style={style} />}
                        {selectedOption === 5 && <FlipDotClock style={style} />}
                        {selectedOption === 6 && <SolarSystemWallpaper style={style }/>}

                    </div>
                </>
            ) : (
                <AuthenticationPage />
            )}
        </>
    );
};