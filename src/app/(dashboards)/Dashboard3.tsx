"use client";
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
