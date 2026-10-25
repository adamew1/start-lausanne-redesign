// For Partners page
const PartnersPage = () => {
  const m = useIsMobile();

  const whyPartner = [
    { icon: "target", title: "Access Top Talent", d: "Get direct access to Lausanne's most driven and talented student entrepreneurs." },
    { icon: "rocket", title: "Innovation Pipeline", d: "Stay close to fresh ideas and be the first to spot promising startups and talent." },
    { icon: "people", title: "Brand Visibility", d: "Showcase your brand to a highly engaged community of students and young founders." },
    { icon: "building", title: "Global Network", d: "Connect with the international START Network spanning 22 cities and 17 countries." },
  ];

  return (
    <>
      {/* Hero */}
      <section style={{ position: "relative", paddingTop: 160, paddingBottom: 96, overflow: "hidden" }}>
        <GlowOrb top={-100} left="-8%" size={700} color="var(--accent)" opacity={0.18} />
        <div className="container" style={{ position: "relative", textAlign: "center" }}>
          <h1 className="h-xl" style={{ textTransform: "uppercase", color: "#fff", whiteSpace: m ? "normal" : "nowrap" }}>Partner With Us</h1>
          <p className="lead" style={{ margin: "28px auto 0", textAlign: "center", maxWidth: "60ch" }}>
            Connect your brand with Lausanne's most ambitious student entrepreneurs.
          </p>
        </div>
      </section>

      {/* Why partner */}
      <section className="section" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: m ? 48 : 72 }}>
            <h2 className="h-lg" style={{ textTransform: "uppercase" }}>Why Partner With START Lausanne?</h2>
            <p className="lead" style={{ margin: "20px auto 0" }}>Join leading companies in supporting the next generation of entrepreneurs.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: m ? "1fr" : "repeat(4, 1fr)", gap: 1, background: "var(--border)", border: "1px solid var(--border)", borderRadius: 16, overflow: "hidden" }}>
            {whyPartner.map((w, i) => (
              <Reveal key={w.title} delay={i * 60}>
                <div style={{ background: "var(--bg-elev)", padding: m ? 24 : 32, minHeight: m ? "auto" : 200, height: "100%" }}>
                  <div style={{ width: 52, height: 52, borderRadius: 14, background: "var(--accent-soft)", color: "var(--accent)", display: "grid", placeItems: "center", marginBottom: 18 }}><DetailIcon type={w.icon} size={24} /></div>
                  <h3 style={{ fontFamily: "var(--display)", fontWeight: 800, fontSize: 15, textTransform: "uppercase", letterSpacing: "0.01em", marginBottom: 10 }}>{w.title}</h3>
                  <p style={{ color: "var(--text-dim)", fontSize: 14, lineHeight: 1.6 }}>{w.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our Partners */}
      <section className="section" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: m ? 48 : 72 }}>
            <h2 className="h-lg" style={{ textTransform: "uppercase" }}>Our Partners</h2>
            <p className="lead" style={{ margin: "20px auto 0" }}>Universities, innovation hubs and organizations that support our student entrepreneurs.</p>
          </div>
          <SponsorGrid />
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ borderTop: "1px solid var(--border)", position: "relative", overflow: "hidden" }}>
        <GlowOrb top="-20%" left="50%" size={600} color="var(--accent)" opacity={0.2} />
        <div className="container" style={{ position: "relative", textAlign: "center" }}>
          <h2 className="h-lg" style={{ marginBottom: 24, textTransform: "uppercase" }}>Let's Build Something Together</h2>
          <p className="lead" style={{ margin: "0 auto 40px", textAlign: "center", maxWidth: "60ch" }}>
            Interested in partnering with START Lausanne? We'd love to hear from you. Reach out to discuss how we can create value together.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap", marginBottom: 32 }}>
            <Btn primary href="mailto:partnerships@startlausanne.ch?subject=Partnership%20inquiry">✉ Contact Partnerships</Btn>
            <Btn onClick={() => window.__setRoute("about")}>Learn About Us</Btn>
          </div>
          <div style={{ display: "flex", justifyContent: "center", gap: 28, flexWrap: "wrap", color: "var(--text-dim)", fontSize: 14 }}>
            <a href="mailto:info@startlausanne.ch" style={{ color: "inherit" }}>✉ info@startlausanne.ch</a>
            <a href="mailto:partnerships@startlausanne.ch" style={{ color: "inherit" }}>✉ partnerships@startlausanne.ch</a>
          </div>
        </div>
      </section>
    </>
  );
};

window.PartnersPage = PartnersPage;
