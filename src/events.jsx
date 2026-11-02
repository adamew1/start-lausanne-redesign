// Events listing page
const EventsPage = () => {
  const m = useIsMobile();
  const displayedEvents = EVENTS.filter(e => e.id !== "contest");
  return (
    <>
      <section style={{ position: "relative", paddingTop: 160, paddingBottom: 96, overflow: "hidden" }}>
        <GlowOrb bottom={-160} left={-160} size={700} color="var(--accent)" opacity={0.16} />
        <div className="container" style={{ position: "relative", textAlign: "center" }}>
          <h1 style={{ fontFamily: "var(--display)", fontWeight: 800, letterSpacing: "-0.02em", fontSize: "clamp(44px, 6vw, 96px)", color: "#fff", maxWidth: "16ch", margin: "0 auto" }}>Our Events</h1>
          <p className="lead" style={{ margin: "28px auto 0", textAlign: "center", maxWidth: "58ch", color: "var(--text-dim)" }}>
            Discover signature programs designed to accelerate your entrepreneurial journey.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: m ? "1fr" : "repeat(3, 1fr)", gap: 24 }}>
            {displayedEvents.map((e, i) => {
              const card = (
                <div className="card-glass" style={{ borderRadius: "var(--rad-lg)", padding: 0, overflow: "hidden", height: "100%", minHeight: 480, display: "flex", flexDirection: "column", cursor: e.clickable ? "pointer" : "default" }}>
                  <div style={{ position: "relative" }}>
                    <Img src={e.image} ratio="4/3" position={e.imagePosition} />
                    <div style={{
                      position: "absolute", top: 14, left: 14, width: 44, height: 44, borderRadius: 12,
                      background: "rgba(8,8,10,0.72)", backdropFilter: "blur(10px)",
                      display: "grid", placeItems: "center", fontSize: 20
                    }}>{e.icon}</div>
                    {!e.clickable && (
                      <div style={{
                        position: "absolute", top: 18, right: 14, color: "#fff",
                        fontFamily: "var(--body)", fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.14em",
                        background: "rgba(8,8,10,0.72)", backdropFilter: "blur(10px)",
                        padding: "6px 12px", borderRadius: 999, border: "1px solid rgba(255,255,255,0.15)"
                      }}>Coming up</div>
                    )}
                  </div>
                  <div style={{ padding: m ? 22 : 26, display: "flex", flexDirection: "column", flex: 1 }}>
                    <h3 style={{ fontFamily: "var(--display)", fontWeight: 700, fontSize: 20, color: "#fff", marginBottom: 10 }}>{e.title}</h3>
                    <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 14, lineHeight: 1.65, flex: 1 }}>{e.shortDescription}</p>
                    <div style={{ marginTop: 18, fontFamily: "var(--body)", fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.14em", color: "#fff" }}>{e.details.duration} · {e.details.location}</div>
                    {e.clickable && (
                      <div style={{ marginTop: 16, display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "var(--body)", fontSize: 11, color: "#fff", textTransform: "uppercase", letterSpacing: "0.12em", fontWeight: 700 }}>Learn more →</div>
                    )}
                  </div>
                </div>
              );
              const centerLast = !m && displayedEvents.length % 3 === 1 && i === displayedEvents.length - 1;
              return (
                <Reveal key={e.id} delay={i * 80} style={centerLast ? { gridColumn: "2 / 3" } : undefined}>
                  {e.clickable
                    ? <a onClick={() => window.__setRoute(e.id)} style={{ display: "block", height: "100%" }}>{card}</a>
                    : <div style={{ height: "100%" }}>{card}</div>}
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section" style={{ textAlign: "center" }}>
        <div className="container">
          <h2 style={{ fontFamily: "var(--display)", fontWeight: 800, letterSpacing: "-0.01em", fontSize: "clamp(28px, 3.6vw, 52px)", color: "#fff", margin: 0 }}>
            Ready to Join an Event?
          </h2>
          <p className="lead" style={{ margin: "24px auto 0", textAlign: "center", maxWidth: "56ch", color: "var(--text-dim)" }}>
            Become a START Lausanne member to get exclusive access to all our events and programs.
          </p>
          <div style={{ display: "flex", justifyContent: "center", marginTop: 36 }}>
            <Btn href={APPLY_URL}>Apply to JOIN</Btn>
          </div>
        </div>
      </section>
    </>
  );
};
window.EventsPage = EventsPage;
