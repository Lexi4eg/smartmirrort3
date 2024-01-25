"use client";
import React, {useEffect} from "react";

interface Props {
  style?: string;
}

export default function MillionTimesDashboardGlass(props: Props) {
  useEffect(() => {
    // @ts-ignore
    //window.parent.document.body.style["zoom"] = "250%";
    // Add global CSS rule to remove scrollbar
    const style = document.createElement("style");
    style.innerHTML = `
      * {
        overflow: hidden !important;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <>
      <iframe
        src="https://dra1ex.github.io/ClockClock/?theme=glass&bg=windows_light&clock_size=78&clock_margin=10&clock_width=5&clock_hour=29&clock_minute=33&fps=100"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      />
    </>
  );
}
