import handleDisplayState from "../handleDisplayState.js";
import connect from "./handleConnect/connect.js";
import handleReader from "./handleConnect/connect/handleReader.js";
import handleWriter from "./handleConnect/connect/handleWrtier.js";

const hasWebSerial = "serial" in navigator;
export let isConnected = false;
const arduinoInfo = {
  usbProductId: 32823,
  usbVendorId: 9025,
};
let connectedArduinoPorts = [];

const handleConnect = async () => {
  if (!hasWebSerial) {
    handleDisplayState("not-connected");
    return;
  }

  navigator.serial.addEventListener("connect", (e) => {
    const port = e.target;
    console.log(port);

    if (isArduinoPort(port)) {
      connectedArduinoPorts.push(port);
      if (!isConnected) {
        connect(port);
        console.log("handleConnect");
      }
    }
  });

  const ports = await navigator.serial.getPorts();
  connectedArduinoPorts = ports.filter(isArduinoPort);

  console.log("Ports");
  ports.forEach((port) => {
    const info = port.getInfo();
    console.log(info);
  });
  console.log("Connected Arduino ports");

  if (connectedArduinoPorts.length > 0) {
    const port = connectedArduinoPorts[0];
    connect(port);
  }
};

export const handleClickConnect = async () => {
  const port = await navigator.serial.requestPort();
  console.log(port);
  const info = port.getInfo();
  console.log(info);
  await connect(port);
};

const isArduinoPort = (port) => {
  const info = port.getInfo();
  return (
    info.usbProductId === arduinoInfo.usbProductId &&
    info.usbVendorId === arduinoInfo.usbVendorId
  );
};

export const setIsConnected = (value) => (isConnected = value);

export default handleConnect;
