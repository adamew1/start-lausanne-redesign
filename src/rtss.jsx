// RtSS page
const RtssPage = () => {
  const m = useIsMobile();
  const stops = [
    { city: "Lausanne", country: "CH", d: "Day 01", note: "Kick-off at EPFL Innovation Park" },
    { city: "Zürich", country: "CH", d: "Day 02", note: "F10, Impact Hub, meetup with Swiss VCs" },
    { city: "München", country: "DE", d: "Day 04", note: "UnternehmerTUM + Wayra portfolio visits" },
    { city: "Berlin", country: "DE", d: "Day 06", note: "Founders dinner · Factory Berlin" },
    { city: "Amsterdam", country: "NL", d: "Day 08", note: "Startupbootcamp + TNW roundtable" },
    { city: "Paris", country: "FR", d: "Day 10", note: "Station F tour · Finale" },
  ];

  return (
    <>
      <section style={{ paddingTop: 160, paddingBottom: 40, position: "relative", overflow: "hidden" }} className="grid-bg">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: m ? "1fr" : "1fr 1fr", gap: m ? 24 : 48, alignItems: "end" }}>
            <div>
              <Eyebrow>Annual trip · Since 2023</Eyebrow>
              <h1 className="h-display" style={{ marginTop: 32 }}>RtSS<br/><span style={{ fontStyle: "italic", fontWeight: 300, fontSize: "0.55em", opacity: 0.7 }}>Road to the</span><br/><span className="accent">Startup Summit.</span></h1>
            </div>
            <div>
              <p className="lead" style={{ fontSize: m ? 16 : 20 }}>A 10-day expedition across Europe's most important startup ecosystems. 20 students. 6 cities. Dozens of founders, VCs and operators who actually answer our calls.</p>
              <div style={{ display: "flex", gap: 10, marginTop: 24, flexWrap: "wrap" }}>
                <Tag accent>Edition 2027</Tag><Tag>Selection-based</Tag><Tag>20 spots</Tag>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "40px 0 80px" }}>
        <div className="container">
          <Img src="https://cdn.prod.website-files.com/639832a06215ce13af0dfe47/69d2d19ff49caa7d35d283f0_DJI_0034.jpg" ratio={m ? "16/9" : "21/9"} label="RtSS 2025 · Station F · Paris" />
        </div>
      </section>

      {/* Itinerary */}
      <section className="section" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="container">
          <SectionLabel num="01" label="Itinerary" />
          <h2 className="h-xl" style={{ marginBottom: m ? 32 : 64, maxWidth: 900 }}>Six cities<span className="accent">.</span> <span style={{opacity:0.5}}>Ten days.</span> One moving classroom.</h2>
          <div style={{ position: "relative" }}>
            {stops.map((s, i) => (
              <Reveal key={i} delay={i * 100}>
                <div style={{ display: "grid", gridTemplateColumns: m ? "1fr" : "80px 40px 1fr", gap: m ? 8 : 24, alignItems: m ? "flex-start" : "center", padding: m ? "20px 0" : "28px 0", borderTop: i === 0 ? "none" : "1px solid var(--border)" }}>
                  <div className="mono-label" style={{ color: "var(--accent)" }}>{s.d}</div>
                  {!m && <div style={{ display: "flex", justifyContent: "center" }}>
                    <div style={{ width: 12, height: 12, borderRadius: "50%", border: "2px solid var(--accent)", background: "var(--bg)", position: "relative" }}>
                      <div style={{ position: "absolute", inset: 2, borderRadius: "50%", background: "var(--accent)" }} />
                    </div>
                  </div>}
                  <div>
                    <h3 className="h-md" style={{ fontWeight: 500 }}>{s.city} <span className="mono-label" style={{ marginLeft: 8, color: "var(--text-mute)" }}>· {s.country}</span></h3>
                    <p style={{ color: "var(--text-dim)", fontSize: 15, marginTop: 4 }}>{s.note}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="section" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="container">
          <SectionLabel num="02" label="What's included" />
          <div style={{ display: "grid", gridTemplateColumns: m ? "1fr" : "repeat(2, 1fr)", gap: 1, background: "var(--border)", border: "1px solid var(--border)", borderRadius: 16, overflow: "hidden" }}>
            {[
              { t: "20+ startup & VC visits", d: "Curated meetings with founders, operators, and investors across six ecosystems." },
              { t: "Private founder dinners", d: "Small-group dinners with founders who've built and sold — candid, off the record." },
              { t: "Workshop sessions", d: "Hands-on sessions on fundraising, GTM, hiring, and product with operators." },
              { t: "Partial funding", d: "Costs partially covered via our sponsor program — selected students pay a subsidized fee." },
            ].map((c, i) => (
              <div key={i} style={{ background: "var(--bg)", padding: m ? 24 : 40, minHeight: m ? "auto" : 180 }}>
                <div className="mono-label" style={{ color: "var(--accent)", marginBottom: 16 }}>◆ INCLUDED_{String(i+1).padStart(2,"0")}</div>
                <h3 className="h-md" style={{ marginBottom: 12 }}>{c.t}</h3>
                <p style={{ color: "var(--text-dim)", fontSize: 14, lineHeight: 1.7 }}>{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="container" style={{ maxWidth: 1000 }}>
          <Eyebrow>From last year's cohort</Eyebrow>
          <blockquote style={{
            fontFamily: "var(--display)", fontWeight: 400, fontSize: m ? 24 : "clamp(28px, 3.2vw, 48px)",
            lineHeight: 1.2, letterSpacing: "-0.02em", margin: "32px 0", padding: 0
          }}>
            "RtSS compressed a year of startup learning into ten days. I came back with a <span className="accent">co-founder</span>, two intros to our future lead investor, and a much clearer idea of the company I actually wanted to build."
          </blockquote>
          <div className="mono-label">— Cohort 2025 participant · now building in Berlin</div>
        </div>
      </section>

      <section className="section">
        <div className="container card" style={{ padding: m ? 32 : 64, textAlign: "center" }}>
          <Eyebrow>Applications · Sep 2026</Eyebrow>
          <h2 className="h-xl" style={{ marginTop: 24, marginBottom: 40 }}>20 seats<span className="accent">.</span> <span style={{opacity:0.5}}>Apply early.</span></h2>
          <Btn primary href="https://www.startglobal.org/start-summit">Request info pack</Btn>
        </div>
      </section>
    </>
  );
};
window.RtssPage = RtssPage;
