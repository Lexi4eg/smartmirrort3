import React, { useState, useEffect } from "react";
import Image from "next/image";

interface Props {
  date: string;
  copyright: string;
  explanation: string;
  hdurl: string;
  media_type: string;
  service_version: string;
  title: string;
  url: string;
}

interface NasaWidgetProps {
  style?: string;
}

const NasaWidget = ({ style = "" }: NasaWidgetProps) => {
  const [nasaData, setNasaData] = useState<Props>();

  const fetchNasaData = async () => {
    const response = await fetch(
      "https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_API_KEY}",
    );
    const data: Props = await response.json();
    setNasaData(data);
  };

  useEffect(() => {
    fetchNasaData();
  }, []);

  return (
    <div
      className={`flex flex-col items-center justify-center ${
        style === "nightmode" ? "text-nightmode" : "text-white"
      }`}
    >
      {nasaData && (
        <>
          <Image
            src={nasaData.url}
            alt={""}
            width={2000}
            height={2000}
            className={"rounded-xl"}
          />
          <div>{nasaData.title}</div>
        </>
      )}
    </div>
  );
};

export default NasaWidget;
