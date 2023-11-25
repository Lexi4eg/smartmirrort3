import { getServerAuthSession } from "~/server/auth";
import Dashboard from "./(dashboards)/Dashboard";
import AuthenticationPage from "../../components/authform/authpage";
import WorkClockDashboard from "~/app/(dashboards)/WorkClockDashboard";
import MillionTimesDashboard from "~/app/(dashboards)/MillionTimesDashboard";


export default async function Home() {
    const session = await getServerAuthSession();
    const now = new Date();
    let nightmode = "daymode";
    const MODE = "fullscreendasboard";
    if(now.getHours() >= 18 || now.getHours() <= 6){
        nightmode = "nightmode";
    }
    return (
        <>
            {session ? (
                <>
                    <div className="flex bg-cover max-w-screen min-h-screen bg-center bg-black flex-col items-center justify-center text-white bg-gradient-to-b from-[#2e026d] to-[#15162c]"
                         style={{
                             backgroundImage: nightmode === "daymode" && MODE !== "fullscreendasboard" ? "url('/porsche.jpg')" : "none",
                             backgroundColor: nightmode === "nightmode" ? "black" : ""
                         }}
                    >
                        <MillionTimesDashboard style = {nightmode} />
                    </div>
                </>
            ) : (
                <AuthenticationPage />
            )}
        </>
    );
};