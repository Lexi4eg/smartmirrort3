import { getServerAuthSession } from "~/server/auth";
import Dashboard from "./(dashboards)/Dashboard";
import AuthenticationPage from "../../components/authform/authpage";
import WordClockDashboard from "~/app/(dashboards)/WordClockDashboard";


export default async function Home() {
    const session = await getServerAuthSession();
    const now = new Date();
    let nightmode = "daymode";
    if(now.getHours() >= 18 || now.getHours() <= 6){
        nightmode = "nightmode";
    }
    return (
        <>
            {session ? (
                <>
                    <div className="flex bg-cover  min-h-screen  h-full w-full flex-col  text-white bg-gradient-to-b from-[#2e026d] to-[#15162c]" style={{ backgroundImage: nightmode === "nightmode" ? "none" : "url('/porsche.jpg')", backgroundColor: nightmode === "nightmode" ? "black" : "" }}>
                        <WordClockDashboard style = {nightmode} />
                    </div>
                </>
            ) : (
                <AuthenticationPage />
            )}
        </>
    );
};