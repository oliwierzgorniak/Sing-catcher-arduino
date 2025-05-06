const encoder = new TextEncoder();
let writer;

const handleWriter = (port) => {
  writer = port.writable.getWriter();
};

const sendSignal = async (signal) => {
  await writer.write(encoder.encode(signal + "\n"));
};

export const sendCatchSignal = () => sendSignal("CATCH");
export const sendEndSignal = () => sendSignal("END");
export const sendResetSignal = () => sendSignal("RESET");

export default handleWriter;
