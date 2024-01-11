"use client";
import React from "react";
import AppleClockWidget from "../../../components/Clocks/AppleClockWidget";
import Link from "next/link";
import Clock2 from "../../../components/Clocks/Clock2";
import Wordclock from "../../../components/Clocks/Wordclock/Wordclock";
import WelcomeWidget from "../../../components/WIdgets/WelcomeWidget";
import Weather from "../../../components/WIdgets/Weather";
import NYTWidget from "../../../components/WIdgets/NYTWidget/NYTWidget";
import Temperature_Sensor_Dashboard from "../../../components/WIdgets/TemperatureSensorDashboard";
import Humidity_Sensor_Dashboard from "../../../components/WIdgets/Humidity_Sensor_Dashboard";

interface Props {
  style?: string;
  session: any;
}

interface WidgetPosition {
  position: number;
  widget: JSX.Element;
  colSpan: number;
  rowSpan: number;
}

const Dashboard: React.FC<Props> = (props: Props) => {
  const now = new Date();
  const session = props.session;
  const nightmode = props.style ?? "daymode";

  const widgets: WidgetPosition[] = [
    {
      position: 1,
      colSpan: 3,
      rowSpan: 2,
      widget: (
        <WelcomeWidget
          username={session?.user.name ?? ""}
          style={nightmode}
          time={now.getTime()}
        />
      ),
    },
    {
      position: 2,
      colSpan: 2,
      rowSpan: 2,
      widget: <AppleClockWidget time={now.getTime()} style={nightmode} />,
    },
    {
      position: 3,
      colSpan: 2,
      rowSpan: 2,
      widget: <Clock2 time={4} style={nightmode} />,
    },
    {
      position: 4,
      colSpan: 3,
      rowSpan: 2,
      widget: <Weather style={nightmode} />,
    },
    {
      position: 5,
      colSpan: 1,
      rowSpan: 1,
      widget: (
        <Link
          href="/api/auth/signout"
          className={`rounded-full bg-white/10 px-5 py-3  font-semibold no-underline transition hover:bg-white/20 ${
            nightmode === "nightmode" ? "text-nightmode" : ""
          }`}
        >
          Sign Out
        </Link>
      ),
    },
    {
      position: 6,
      colSpan: 3,
      rowSpan: 3,
      widget: <Wordclock time={now.getTime()} style={nightmode} />,
    },
    {
      position: 7,
      colSpan: 3,
      rowSpan: 3,
      widget: <NYTWidget style={nightmode} />,
    },
    {
      position: 8,
      colSpan: 3,
      rowSpan: 3,
      widget: (
        <Temperature_Sensor_Dashboard temperature={20} style={nightmode} />
      ),
    },
    {
      position: 9,
      colSpan: 3,
      rowSpan: 3,
      widget: <Humidity_Sensor_Dashboard humidity={20} style={nightmode} />,
    },
  ];

  widgets.sort((a, b) => a.position - b.position);

  return (
    <div>
      <div className="max-w-screen grid h-screen max-h-screen w-screen grid-cols-12 grid-rows-6 gap-4 overflow-hidden">
        {widgets.map((widget: WidgetPosition, index: number) => (
          <div
            key={index}
            className={`col-span-2 row-span-2 flex items-center justify-center rounded-xl`}
            style={{ backdropFilter: "blur(10px)" }}
          >
            {widget.widget}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
