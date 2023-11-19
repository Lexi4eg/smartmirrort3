import { getServerAuthSession } from "~/server/auth";
import Dashboard from "./(dashboards)/Dashboard";
import AuthenticationPage from "../../components/authform/authpage";
import Dashboard2 from "~/app/(dashboards)/Dashboard2";



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
            <div className="flex bg-cover max-w-screen min-h-screen bg-center flex-col items-center justify-center text-white bg-gradient-to-b from-[#2e026d] to-[#15162c]" style={{ backgroundImage: nightmode === "nightmode" ? "none" : "url('/porsche.jpg')", backgroundColor: nightmode === "nightmode" ? "black" : "" }}>

                 <Dashboard style = {nightmode} />
            </div>
            </>


        ) : (

                <AuthenticationPage />

        )}
      </>
  );
}

