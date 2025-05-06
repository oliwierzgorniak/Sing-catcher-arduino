import { catcher, changeCatcherPosition } from "../../../handleCanvas.js";
import { setNotesMultiplier } from "../../../handleNotes.js";
import getLineBreakTransformer from "../handleReader/getLineBreakTransformer.js";

const handleReader = async (port) => {
  while (port.readable) {
    const decoder = new TextDecoderStream();

    const lineBreakTransformer = new TransformStream({
      transform(chunk, controller) {
        const text = chunk;
        const lines = text.split("\n");
        lines[0] = (this.remainder || "") + lines[0];
        this.remainder = lines.pop();
        lines.forEach((line) => controller.enqueue(line));
      },
      flush(controller) {
        if (this.remainder) {
          controller.enqueue(this.remainder);
        }
      },
    });

    const readableStreamClosed = port.readable.pipeTo(decoder.writable);
    const inputStream = decoder.readable.pipeThrough(lineBreakTransformer);
    const reader = inputStream.getReader();

    try {
      while (true) {
        const { value, done } = await reader.read();
        if (done) {
          // |reader| has been canceled.
          break;
        }
        // Do something with |value|...

        try {
          const json = JSON.parse(value);

          changeCatcherPosition(json.joystick);
          setNotesMultiplier(json.potentiometer);
        } catch (error) {
          console.log(error);
        }
      }
    } catch (error) {
      // Handle |error|...
    } finally {
      reader.releaseLock();
    }
  }

  //   while (port.readable) {
  //     const decoder = new TextDecoderStream();
  //     const lineBreakTransformer = getLineBreakTransformer();
  //     port.readable.pipeTo(decoder.writable);
  //     const inputStream = decoder.readable.pipeThrough(lineBreakTransformer);
  //     const reader = inputStream.getReader();

  //     try {
  //       while (true) {
  //         console.log(reader);
  //         const { value, done } = await reader.read();
  //         console.log(value);
  //         if (done) {
  //           // |reader| has been canceled.
  //           break;
  //         }
  //         // Do something with |value|...

  //         try {
  //           const json = JSON.parse(value);
  //           console.log(json.joystick);
  // //
  //           changeCatcherPosition(json.joystick);
  //         } catch (error) {
  //           console.log(error);
  //         }
  //       }
  //     } catch (error) {
  //       console.error(error);
  //       // Handle |error|...
  //     } finally {
  //       console.log("finally");
  //       reader.releaseLock();
  //     }
  //   }
};

export default handleReader;
