const TextSplitColor = ({ text }: any) => {
  return (
    <div>
      {text?.split(" ").map((word: any, index: any, array: any) => {
        if (array.length === 2 && index === array.length - 1) {
          return (
            <span key={index} className="text-secondary">
              {word}
            </span>
          );
        } else if (array.length === 3 && index >= array.length - 2) {
          return (
            <span key={index} className="text-secondary">
              {word}{" "}
            </span>
          );
        } else if (array.length > 3 && index >= array.length - 3) {
          return (
            <span key={index} className="text-secondary">
              {word}{" "}
            </span>
          );
        } else {
          return word + " ";
        }
      })}
    </div>
  );
};

export default TextSplitColor;
