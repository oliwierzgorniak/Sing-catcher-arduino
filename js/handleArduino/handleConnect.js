import handleDisplayState from "../handleDisplayState.js";
import connect from "./handleConnect/connect.js";

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

    if (isArduinoPort(port)) {
      connectedArduinoPorts.push(port);
      if (!isConnected) {
        connect(port);
      }
    }
  });

  const ports = await navigator.serial.getPorts();
  connectedArduinoPorts = ports.filter(isArduinoPort);

  if (connectedArduinoPorts.length > 0) {
    const port = connectedArduinoPorts[0];
    connect(port);
  }
};

export const handleClickConnect = async () => {
  const port = await navigator.serial.requestPort();
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
