import { getServerAuthSession } from "~/server/auth";
import AuthenticationPage from "../../components/authform/authpage";
import Rootdashboard from "~/app/(dashboards)/Rootdashboard";

export default async function Home() {
  const session = await getServerAuthSession();

  const now = new Date();
  let style: string = "daymode";

  if (now.getHours() >= 18 || now.getHours() <= 6) {
    style = "nightmode";
  }
  return (
    <>
      {session ? (
        <>
          <Rootdashboard session={session} style={style} />
        </>
      ) : (
        <AuthenticationPage />
      )}
    </>
  );
}
