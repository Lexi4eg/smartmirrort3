import React from "react";
import Clocks from "../../../components/Clocks/MillionClock/MillionClock";
import MillionClock from "../../../components/Clocks/MillionClock/MillionClock";
import Clock2 from "../../../components/Clocks/Clock2";
import DailyQuoteWidget from "../../../components/WIdgets/DailyQuoteWidget";

interface Props {
  style?: string;
  widgets: {
    type: string;
    colSpan: number;
    rowSpan: number;
  }[];
}

export default async function Dashboard2({ style = "", widgets }: Props) {
  const nightmode = style;

  return (
    <div>
      <div className="grid h-screen w-screen grid-cols-10 grid-rows-6 gap-4">
        {widgets.map((widget, index) => (
          <div
            key={index}
            className={`col-span-${widget.colSpan} row-span-${widget.rowSpan}`}
            style={{ backdropFilter: "blur(10px)" }}
          >
            {widget.type === "Clock2" && <Clock2 time={4} style={nightmode} />}
            {widget.type === "MillionClock" && (
              <MillionClock style={nightmode} mode={""} />
            )}
            {widget.type === "DailyQuoteWidget" && (
              <DailyQuoteWidget style={nightmode} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
