type PrivateProps = {
  text: string;
};

export function AnimatedText({ text }: PrivateProps) {
  return (
    <>
      {text.split("").map((letter, index) => {
        if (letter === " ") {
          return <span key={index}>&nbsp;</span>;
        }
        return (
          <span key={index} className="animated-letter">
            {letter}
          </span>
        );
      })}
    </>
  );
}
