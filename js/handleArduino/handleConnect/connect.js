import handleDisplayState from "../../handleDisplayState.js";
import { timeoutId } from "../../handleEnd.js";
import { stopSong } from "../../handleSong.js";
import resetGame from "../../resetGame.js";
import { setIsConnected } from "../handleConnect.js";
import {
  activateConnectButton,
  disableConnectButton,
} from "./connect/handleConnectButton.js";
import handleReader from "./connect/handleReader.js";
import handleWriter from "./connect/handleWrtier.js";

const connect = async (port) => {
  setIsConnected(true);

  await port.open({ baudRate: 9600 });

  handleWriter(port);
  handleReader(port);

  disableConnectButton();

  port.addEventListener("disconnect", () => {
    console.log("Disconnected");
    setIsConnected(false);
    handleDisplayState("not-connected");
    resetGame();
    stopSong();
    clearTimeout(timeoutId);
    activateConnectButton();
  });
};

export default connect;
