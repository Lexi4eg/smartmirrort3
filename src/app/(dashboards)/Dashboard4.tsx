import React from "react";
import WelcomeWidget from "../../../components/WIdgets/WelcomeWidget";
import AppleClockWidget from "../../../components/Clocks/AppleClockWidget";
import Wordclock from "../../../components/Clocks/Wordclock/Wordclock";
import NYTWidget from "../../../components/WIdgets/NYTWidget/NYTWidget";
import Weather from "../../../components/WIdgets/Weather";
import Temperature_Sensor_Dashboard from "../../../components/WIdgets/TemperatureSensorDashboard";
import Humidity_Sensor_Dashboard from "../../../components/WIdgets/Humidity_Sensor_Dashboard";
import NasaWidget from "../../../components/WIdgets/NasaWidget";

interface Props {
  style?: string;
  session: any;
  humidity: number;
  temperature: number;
}
export default async function Dashboard4(props: Props) {
  const now = new Date();
  const session = props.session;
  const nightmode = props.style ?? "daymode";

  return (
    <div>
      <div className="max-w-screen grid h-screen max-h-screen w-screen grid-cols-12 grid-rows-6 gap-4 overflow-hidden">
        <div
          className="col-span-3 row-span-2 items-center justify-center p-3 "
          style={{ backdropFilter: "blur(10px)" }}
        >
          <WelcomeWidget
            username={session?.user.name ?? ""}
            style={nightmode}
            time={now.getTime()}
          />
        </div>
        <div
          className="col-span-4 row-span-3 m-24 items-center justify-center "
          style={{ backdropFilter: "blur(10px)" }}
        >
          <AppleClockWidget time={now.getTime()} style={nightmode} />
        </div>
        <div
          className="col-span-4 row-span-3 items-center justify-center p-3 "
          style={{ backdropFilter: "blur(10px)" }}
        >
          <Wordclock time={now.getTime()} style={nightmode} />
        </div>
        <div
          className="col-span-3 row-span-1 flex items-end justify-center px-3  "
          style={{ backdropFilter: "blur(10px)" }}
        >
          <Weather style={nightmode} />
        </div>
        <div
          className="col-span-3 row-span-3 flex items-center justify-center p-3  "
          style={{ backdropFilter: "blur(10px)" }}
        >
          <NYTWidget style={nightmode} />,
        </div>
        <div
          className="col-span-3 row-span-3 flex items-center justify-center p-3  "
          style={{ backdropFilter: "blur(10px)" }}
        >
          <Temperature_Sensor_Dashboard
            temperature={props.temperature}
            style={nightmode}
          />
        </div>
        <div
          className="col-span-3 row-span-3 flex items-center justify-center p-3  "
          style={{ backdropFilter: "blur(10px)" }}
        >
          <Humidity_Sensor_Dashboard
            humidity={props.humidity}
            style={nightmode}
          />
        </div>
        <div
          className="col-span-3 row-span-3 flex items-center justify-center p-3  "
          style={{ backdropFilter: "blur(10px)" }}
        >
          <NasaWidget style={nightmode} />
        </div>
      </div>
    </div>
  );
}
