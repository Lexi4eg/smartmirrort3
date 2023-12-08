import { getServerAuthSession } from "~/server/auth";
import Dashboard from "./(dashboards)/Dashboard";
import AuthenticationPage from "../../components/authform/authpage";
import WorkClockDashboard from "~/app/(dashboards)/WorkClockDashboard";
import MillionTimesDashboard from "~/app/(dashboards)/MillionTimesDashboard";
import Dashboard3 from "~/app/(dashboards)/Dashboard3";
import FlipDotClock from "~/app/(dashboards)/FlipDotClock/FlipDotClock";
import SolarSystemWallpaper from "~/app/(dashboards)/solarSystem/solarSystemWallpaper";
import ClockClock24FDashboard from "~/app/(dashboards)/ClockClock24F";
import useRouter from "next/navigation";
import { PrismaClient } from "@prisma/client";

import { revalidatePath } from 'next/cache'

export default async function Home() {
    const session = await getServerAuthSession();
    const prisma = new PrismaClient();

    let selectedOption: number = 1;

    // Fetch the mode with id 0 from the server
    const mode = await prisma.mode.findUnique({
        where: { id: 1 },
    });

    // If the mode exists, set it as the selectedOption
    if (mode) {
        selectedOption = mode.mode;
    }

    const now = new Date();
    let style: string = "daymode";

    if(now.getHours() >= 18 || now.getHours() <= 6){
        style = "nightmode";
    }
    return (
        <>
            {session ? (
                <>

                    <div className="flex bg-cover max-w-screen min-h-screen bg-center  flex-col items-center justify-center text-white  bg-[#191a1b] ">
                        {selectedOption === 1 && <Dashboard style={style} />}
                        {selectedOption === 2 && <WorkClockDashboard style={style} />}
                        {selectedOption === 3 && <MillionTimesDashboard style={style} />}
                        {selectedOption === 4 && <Dashboard3 style={style} />}
                        {selectedOption === 5 && <FlipDotClock style={style} />}
                        {selectedOption === 6 && <SolarSystemWallpaper style={style }/>}
                        {selectedOption === 7 && <ClockClock24FDashboard style={style }/>}
                    </div>
                </>
            ) : (
                <AuthenticationPage />
            )}
        </>
    );
};