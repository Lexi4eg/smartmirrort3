import io from "socket.io-client";

const socket = io("localhost:3001"); // Replace with your server URL

interface WidgetPosition {
  id: string;
  widget: string;
  colSpan: number;
  rowSpan: number;
}
export default function sendWidget(widget: WidgetPosition[]) {
  console.log(widget);
  socket.emit("widget", widget);
}
