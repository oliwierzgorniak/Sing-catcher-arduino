import handleDisplayState from "../../handleDisplayState.js";
import { setIsConnected } from "../handleConnect.js";
import handleReader from "./connect/handleReader.js";
import handleWriter from "./connect/handleWrtier.js";

const connect = async (port) => {
  setIsConnected(true);

  await port.open({ baudRate: 9600 });

  handleWriter(port);
  handleReader(port);

  port.addEventListener("disconnect", () => {
    console.log("Disconnected");
    setIsConnected(false);
    handleDisplayState("not-connected");
  });
};

export default connect;
