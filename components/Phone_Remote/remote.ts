import io from "socket.io-client";

const socket = io("localhost:3001"); // Replace with your server URL

export default function sendMessage(mode: number) {
  console.log(mode);
  socket.emit("mode", mode);
}
