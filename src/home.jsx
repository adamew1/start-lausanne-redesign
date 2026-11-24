// Home page
const HERO_VERBS = ["Connecting", "Creating", "Empowering", "Inspiring", "Uniting"];
const HERO_BG = "/src/images/team-fun.webp";

const NETWORK_CITIES = ["Lausanne", "St. Gallen", "Nuremberg", "Helsinki", "Stuttgart", "Vaduz", "Munich", "Berlin", "Barcelona", "Lisbon", "Hamburg", "Maastricht", "Paris", "Vienna", "Mexico City", "São Paulo", "Lima", "Quito", "Bogotá", "London", "Milan", "Warsaw", "Innsbruck"];

const HomePage = () => {
  const m = useIsMobile();
  const [verbIdx, setVerbIdx] = React.useState(0);

  React.useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setVerbIdx(i => (i + 1) % HERO_VERBS.length), 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      {/* HERO */}
      <section style={{
        position: "relative", minHeight: "100svh",
        display: "flex", flexDirection: "column", justifyContent: "center",
        overflow: "hidden"
      }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `url(${HERO_BG})`, backgroundSize: "cover", backgroundPosition: "center",
        }} />
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(180deg, rgba(0,16,55,0.42) 0%, rgba(0,16,55,0.62) 55%, rgba(0,30,98,0.96) 100%)"
        }} />

        <div className="container" style={{ position: "relative", width: "100%", zIndex: 2, paddingTop: m ? 96 : 140, paddingBottom: 60, textAlign: "center" }}>
          <h1 style={{ margin: 0 }}>
            <span style={{ display: "block", overflow: "hidden" }}>
              <span key={verbIdx} className="hero-word-cycle" style={{
                display: "block",
                fontSize: "clamp(1.5rem, 9vw, 9rem)", lineHeight: 0.95, letterSpacing: "-0.03em",
                color: "rgba(255,255,255,0.9)"
              }}>{HERO_VERBS[verbIdx]}</span>
            </span>
            <span style={{
              display: "block",
              fontSize: "clamp(1.25rem, 7.4vw, 7.5rem)", lineHeight: 0.95, letterSpacing: "-0.03em",
              color: "#fff", marginTop: m ? 4 : 8
            }}>Entrepreneurs</span>
          </h1>

          <p className="lead" style={{ margin: (m ? 32 : 48) + "px auto 0", maxWidth: "56ch", textAlign: "center" }}>
            Join Lausanne's most dynamic entrepreneurship community and connect with like-minded innovators, mentors, and industry leaders.
          </p>

          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginTop: 40, justifyContent: "center" }}>
            <Btn accent href="/events">Explore Events</Btn>
            <Btn href="/about">Learn More</Btn>
          </div>
        </div>

      </section>

      {/* Sponsors */}
      <section className="section-sm" aria-labelledby="home-sponsors-title" style={{
        borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)",
        background: "var(--bg-elev)"
      }}>
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", flexWrap: "wrap", gap: 24, marginBottom: m ? 28 : 40 }}>
            <div>
              <h2 id="home-sponsors-title" className="h-lg">Our Partners</h2>
            </div>
            <Btn href="/partners">Meet our partners</Btn>
          </div>
          <SponsorGrid compact />
        </div>
      </section>

      <section className="section section-dark" aria-labelledby="network-title">
        <div className="container">
          <div className="network-intro">
            <Img src="/src/images/contest.jpeg" ratio="2048/1435" label="START Contest 2025–2026" />
            <div>
              <span className="mono-eyebrow">Global community</span>
              <h2 className="h-lg" id="network-title">Part of the <span className="accent">START Network</span></h2>
              <p className="lead">START Lausanne is part of the international START Network. Founded in St. Gallen in 1996, the network connects student entrepreneurs across 23 cities in 17 countries. Members meet at cross-chapter events and collaborate with students around the world.</p>
              <dl className="network-stats">
                <div><dt>Chapters</dt><dd>23</dd></div>
                <div><dt>Countries</dt><dd>17</dd></div>
                <div><dt>Members</dt><dd>600+</dd></div>
              </dl>
              <a className="u-link" href="https://www.startglobal.org/" target="_blank" rel="noopener">Visit START Global ↗</a>
            </div>
          </div>
          <ul className="network-cities" aria-label="START chapter cities">
            {NETWORK_CITIES.map(city => <li key={city}>{city}</li>)}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ textAlign: "center" }}>
        <div className="container">
          <h2 style={{
            fontFamily: "var(--display)", fontWeight: 900, letterSpacing: "-0.02em",
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
