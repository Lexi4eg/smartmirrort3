import Link from "next/link";
import { getServerAuthSession } from "~/server/auth";
import Dashboard from "~/app/_components/Dashboard/Dashboard";
import Dashboard2 from "~/app/_components/Dashboard/Dashboard2";
import AuthenticationPage from "~/app/authform/userauthpage";

const widgets =
[
    {
        "type": "Clock2",
        "colSpan": 2,
        "rowSpan": 2
    },
    {
        "type": "MillionClock",
        "colSpan": 4,
        "rowSpan": 2
    },
    {
        "type": "DailyQuoteWidget",
        "colSpan": 3,
        "rowSpan": 2
    },
    {
        "type": "Wordclock",
        "colSpan": 4,
        "rowSpan": 3
    },
    {
        "type": "NasaWidget",
        "colSpan": 4,
        "rowSpan": 3
    },
    {
        "type": "WeatherWidget",
        "colSpan": 4,
        "rowSpan": 2
    }

]
export default async function Home() {
  const session = await getServerAuthSession();
  const now = new Date();
  let nightmode = "daymode";
    if(now.getHours() >= 18 || now.getHours() <= 6){
        nightmode = "nightmode";
    }
  return (
      <main className="flex bg-cover max-w-screen min-h-screen bg-center flex-col items-center justify-center text-white bg-gradient-to-b from-[#2e026d] to-[#15162c]" style={{ backgroundImage: nightmode === "nightmode" ? "none" : "url('/porsche.jpg')", backgroundColor: nightmode === "nightmode" ? "black" : "" }}>
          {session ? (
            <>
                <Dashboard style = {nightmode} />
            </>

        ) : (

                <AuthenticationPage />

        )}
      </main>
  );
}

