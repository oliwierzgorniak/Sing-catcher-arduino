const getLineBreakTransformer = () => {
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

  return lineBreakTransformer;
};

export default getLineBreakTransformer;
