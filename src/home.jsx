// Home page
const HERO_VERBS = ["Connecting", "Creating", "Empowering", "Inspiring", "Uniting"];
const HERO_BG = "https://cdn.prod.website-files.com/639832a06215ce13af0dfe47/674ca5e5d3dd1eefa2cf9a80_20241120_95956_1060%E2%80%AFPM.jpeg";

const NETWORK_CITIES = ["Lausanne", "St. Gallen", "Nuremberg", "Helsinki", "Stuttgart", "Vaduz", "Munich", "Berlin", "Barcelona", "Lisbon", "Hamburg", "Maastricht", "Paris", "Vienna", "Mexico City", "São Paulo", "Lima", "Quito", "Bogotá", "London", "Milan", "Warsaw"];

const HomePage = () => {
  const m = useIsMobile();
  const [verbIdx, setVerbIdx] = React.useState(0);

  React.useEffect(() => {
    const id = setInterval(() => setVerbIdx(i => (i + 1) % HERO_VERBS.length), 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      {/* HERO */}
      <section style={{
        position: "relative", minHeight: "100vh",
        display: "flex", flexDirection: "column", justifyContent: "center",
        overflow: "hidden"
      }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `url(${HERO_BG})`, backgroundSize: "cover", backgroundPosition: "center",
        }} />
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(180deg, rgba(8,8,10,0.55) 0%, rgba(8,8,10,0.75) 55%, rgba(8,8,10,0.95) 100%)"
        }} />

        <div className="container" style={{ position: "relative", zIndex: 2, paddingTop: 140, paddingBottom: 60, textAlign: "center" }}>
          <h1 style={{ margin: 0 }}>
            <span style={{ display: "block", overflow: "hidden" }}>
              <span key={verbIdx} className="hero-word-cycle" style={{
                display: "block",
                fontFamily: "var(--display)", fontWeight: 800, textTransform: "uppercase",
                fontSize: m ? 54 : "clamp(70px, 10vw, 160px)", lineHeight: 0.95, letterSpacing: "-0.03em",
                color: "rgba(255,255,255,0.9)"
              }}>{HERO_VERBS[verbIdx]}</span>
            </span>
            <span style={{
              display: "block",
              fontFamily: "var(--display)", fontWeight: 800, textTransform: "uppercase",
              fontSize: m ? 40 : "clamp(50px, 7.4vw, 120px)", lineHeight: 0.95, letterSpacing: "-0.03em",
              color: "#fff", marginTop: m ? 4 : 8
            }}>Entrepreneurs</span>
          </h1>

          <p className="lead" style={{ margin: (m ? 32 : 48) + "px auto 0", maxWidth: "56ch", textAlign: "center" }}>
            Join Lausanne's most dynamic entrepreneurship community and connect with like-minded innovators, mentors, and industry leaders.
          </p>

          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginTop: 40, justifyContent: "center" }}>
            <Btn accent onClick={() => window.__setRoute("events")}>Explore Events</Btn>
            <Btn onClick={() => window.__setRoute("about")}>Learn More</Btn>
          </div>
        </div>

        {!m && <div style={{ position: "absolute", bottom: 40, left: "50%", transform: "translateX(-50%)", zIndex: 2 }}>
          <div className="scroll-mouse"><div className="dot" /></div>
        </div>}
      </section>

      {/* Global Community Statistics */}
      <section className="section" aria-label="Global Community Statistics">
        <div className="container" style={{ display: "grid", gridTemplateColumns: m ? "1fr" : "1.25fr 1fr", gap: m ? 48 : 64, alignItems: "center" }}>
          <div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
              {[
                { n: 22, suf: "", label: "Cities" },
                { n: 17, suf: "", label: "Countries" },
                { n: 500, suf: "+", label: "Members" },
              ].map((s, i) => (
                <div key={i} style={{ background: "var(--bg-elev)", border: "1px solid var(--border)", borderRadius: "var(--rad-md)", aspectRatio: "1/1", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
                  <div style={{ fontFamily: "var(--display)", fontWeight: 800, fontSize: m ? 40 : 64, color: "#fff", lineHeight: 1 }}>
                    <Counter to={s.n} suffix={s.suf} />
                  </div>
                  <div style={{ marginTop: 14, fontFamily: "var(--body)", fontSize: 13, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.14em", color: "#fff" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div style={{ marginBottom: 28, textAlign: m ? "left" : "right", fontFamily: "var(--body)", fontSize: 13, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.14em", color: "#fff" }}>Global Community</div>
            <MarqueeVertical items={NETWORK_CITIES} speed={26} />
            <div style={{ textAlign: m ? "left" : "right", marginTop: 28 }}>
              <a href="https://startglobal.org" target="_blank" rel="noopener" className="mono-label" style={{ color: "var(--accent)" }}>startglobal.org →</a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ textAlign: "center" }}>
        <div className="container">
          <h2 style={{
            fontFamily: "var(--display)", fontWeight: 800, letterSpacing: "-0.02em",
            fontSize: "clamp(30px, 4.6vw, 72px)", lineHeight: 1.05,
            maxWidth: "18ch", margin: "0 auto"
          }}>
            Ready to Start Your <span className="text-gradient">Journey?</span>
          </h2>
          <p className="lead" style={{ margin: "32px auto 0", textAlign: "center", maxWidth: "58ch" }}>
            Join Lausanne's most dynamic entrepreneurship community and connect with like-minded innovators, mentors, and industry leaders.
          </p>
          <div style={{ display: "flex", justifyContent: "center", marginTop: 40 }}>
            <Btn accent href={APPLY_URL}>Become a Member</Btn>
          </div>
        </div>
      </section>
    </>
  );
};
window.HomePage = HomePage;
