import { getServerAuthSession } from "~/server/auth";
import Dashboard from "./(dashboards)/Dashboard";
import AuthenticationPage from "../../components/authform/authpage";
import WorkClockDashboard from "~/app/(dashboards)/WorkClockDashboard";
import MillionTimesDashboard from "~/app/(dashboards)/MillionTimesDashboard";

const optionsData = [
    { id: 1, text: 'MillionTimesF' },
    { id: 2, text: 'WordClockF' },
    { id: 3, text: 'Dashboard1' },
    { id: 4, text: 'Dashboard2' },
];


export default async function Home() {
    const session = await getServerAuthSession();
    const now = new Date();
    let style = "nightmode";

    const selectedOption:number = 1;

    if(now.getHours() >= 18 || now.getHours() <= 6){
        style = "nightmode";
    }

    return (
        <>
            {session ? (
                <>
                    <div className="flex bg-cover max-w-screen min-h-screen bg-center bg-black flex-col items-center justify-center text-white bg-gradient-to-b from-[#2e026d] to-[#15162c]"
                         style={{
                             backgroundImage: (selectedOption === 1 && style === "daymode") ? "url('/porsche.jpg')" : "none"
                    }}
                    >
                        {selectedOption === 1 && <Dashboard style={style} />}
                        {selectedOption === 2 && <WorkClockDashboard style={style} />}
                        {selectedOption === 3 && <MillionTimesDashboard style={style} />}
                    </div>
                </>
            ) : (
                <AuthenticationPage />
            )}
        </>
    );
};