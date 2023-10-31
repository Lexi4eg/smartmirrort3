import Link from "next/link";
import { getServerAuthSession } from "~/server/auth";
import Dashboard from "~/app/_components/Dashboard/Dashboard";
import Dashboard2 from "~/app/_components/Dashboard/Dashboard2";

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
  let nightmode = "nightmode";
    if(now.getHours() >= 18 || now.getHours() <= 6){
        nightmode = "nightmode";
    }
  return (
      <main className="flex bg-cover max-w-screen min-h-screen bg-center flex-col items-center justify-center text-white bg-gradient-to-b from-[#2e026d] to-[#15162c]" style={{ backgroundImage: nightmode === "nightmode" ? "none" : "url('/porsche.jpg')", backgroundColor: nightmode === "nightmode" ? "black" : "" }}>
          {session ? (
            <>
                <Dashboard style = {nightmode} widgets={widgets}/>
            </>

        ) : (
            <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
              <p className="text-2xl text-white">Please log in to access the dashboard.</p>
              <Link
                  href="/api/auth/signin"
                  className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
              >
                Sign in
              </Link>
            </div>
        )}
      </main>
  );
}

