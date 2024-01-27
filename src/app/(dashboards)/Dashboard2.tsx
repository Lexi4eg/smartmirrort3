"use client";
import AppleClockWidget from "../../../components/Clocks/AppleClockWidget";

import Link from "next/link";
import Clock2 from "../../../components/Clocks/Clock2";
import Wordclock from "../../../components/Clocks/Wordclock/Wordclock";
import WelcomeWidget from "../../../components/WIdgets/WelcomeWidget";
import Weather from "../../../components/WIdgets/Weather";
import NYTWidget from "../../../components/WIdgets/NYTWidget/NYTWidget";

interface Props {
  style?: string;
  session: any;
}

interface WidgetPosition {
  position: number;
  widget: any;
  colSpan: number;
  rowSpan: number;
}

export default async function Dashboard2(props: Props) {
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
      colSpan: 2,
      rowSpan: 2,
      widget: <Wordclock time={now.getTime()} style={nightmode} />,
    },
    {
      position: 7,
      colSpan: 3,
      rowSpan: 3,
      widget: <NYTWidget style={nightmode} />,
    },
  ];

  widgets.sort((a, b) => a.position - b.position);

  return (
    <div>
      <div className="max-w-screen grid h-screen max-h-screen w-screen grid-cols-12 grid-rows-6 gap-4 overflow-hidden">
        {widgets.map((widget: WidgetPosition, index: number) => (
          <div
            key={index}
            className={`col-span-${widget.colSpan} row-span-${widget.rowSpan} rounded-xl`}
            style={{ backdropFilter: "blur(10px)" }}
          >
            {widget.widget}
          </div>
        ))}
      </div>
    </div>
  );
}
