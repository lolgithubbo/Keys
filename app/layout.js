import "./global.css";

export const metadata = {
  title: "Key Generator",
  description: "Generiert Codes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>
        {/* Schneeflocken-Container */}
        <div className="snow">
          {/* 50 Schneeflocken (realistisch, 3D) */}
          {Array.from({ length: 50 }).map((_, i) => {
            const x = Math.random() * 100;         // Position X
            const z = Math.random() * -600;        // Tiefe
            const size = 6 + Math.random() * 8;    // Größe
            const blur = Math.random() * 3;        // Unschärfe
            const opacity = 0.4 + Math.random() * 0.6;
            const delay = -Math.random() * 8;      // Delay
            const drift = 3 + Math.random() * 5;   // Schweben

            return (
              <div
                key={i}
                className="snowflake"
                style={{
                  "--x": `${x}vw`,
                  "--z": `${z}px`,
                  "--size": `${size}px`,
                  "--blur": `${blur}px`,
                  "--opacity": opacity,
                  "--delay": `${delay}s`,
                  "--drift": `${drift}s`,
                }}
              >
                •
              </div>
            );
          })}
        </div>

        {children}
      </body>
    </html>
  
);
}
