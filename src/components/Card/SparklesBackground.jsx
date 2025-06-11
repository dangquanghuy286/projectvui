export default function SparklesBackground({ sparkleAnimation }) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className={`absolute text-yellow-300 text-opacity-20 animate-pulse ${
            sparkleAnimation ? "animate-bounce" : ""
          }`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
            fontSize: `${Math.random() * 0.6 + 0.4}rem`,
          }}
        >
          ✨
        </div>
      ))}
    </div>
  );
}
