const logos = [
  "Venice.",
  "Cairo",
  "Italic",
  "Metro",
  "Shift",
  "Venice.",
  "Cairo",
  "Italic",
  "Metro",
  "Shift",
];

const LogoTicker = () => {
  return (
    <div className="py-8 border-y border-border overflow-hidden">
      <div className="flex animate-marquee">
        {[...logos, ...logos].map((logo, idx) => (
          <span
            key={idx}
            className="flex-shrink-0 mx-12 text-muted-foreground text-lg font-medium whitespace-nowrap"
          >
            {logo}
          </span>
        ))}
      </div>
    </div>
  );
};

export default LogoTicker;
