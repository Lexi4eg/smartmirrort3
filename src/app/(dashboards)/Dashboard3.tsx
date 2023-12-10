"use client";
import AppleClockWidget from "../../../components/Clocks/AppleClockWidget";

import Link from "next/link";
import Clock2 from "../../../components/Clocks/Clock2";

import { getServerAuthSession } from "~/server/auth";
import DailyQuoteWidget from "../../../components/WIdgets/DailyQuoteWidget";
import Wordclock from "../../../components/Clocks/Wordclock/Wordclock";
import WelcomeWidget from "../../../components/WIdgets/WelcomeWidget";
import MillionClock from "../../../components/Clocks/MillionClock/MillionClock";
import TickTackToe from "../../../components/games/TickTackToe/TickTacToe";
import Weather from "../../../components/WIdgets/Weather";
import NYTWidget from "../../../components/WIdgets/NYTWidget/NYTWidget";
import StockWidget from "../../../components/WIdgets/StockWidget";

interface Props {
  style?: string;
}
export default async function Dashboard3(props: Props) {
  const nightmode = props.style ?? "daymode";

  return (
    <div>
      <div className="max-w-screen grid h-screen max-h-screen w-screen grid-cols-12 grid-rows-6 gap-4 overflow-hidden">
        <div
          className="col-span-4 row-span-4 p-3 "
          style={{ backdropFilter: "blur(10px)" }}
        >
          <StockWidget style={nightmode} />
        </div>
      </div>
    </div>
  );
}
