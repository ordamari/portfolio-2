export function Welcome() {
  const welcomeMessage = "Welcome to my portfolio!";

  return (
    <div className="welcome">
      {welcomeMessage.split("").map((letter, index) => {
        return (
          <span key={index} className="welcome-letter">
            {letter}
          </span>
        );
      })}
    </div>
  );
}
