// Contest page
const ContestPage = () => {
  const m = useIsMobile();
  const stages = [
    { n: "01", t: "Ideation", d: "Submit a pitch. Any idea, any discipline. Our venture team screens every entry within a week.", when: "Oct – Nov" },
    { n: "02", t: "Semi-finals", d: "Selected teams present to a jury of founders, VCs and operators. Top 10 move on.", when: "Feb" },
    { n: "03", t: "Bootcamp", d: "Two weeks of intensive mentorship, deck reviews, and customer validation with our partners.", when: "Mar" },
    { n: "04", t: "Grand Finale", d: "Live finale at EPFL. Prize pool, press coverage, and the start of something real.", when: "Apr" },
  ];

  return (
    <>
      <section style={{ paddingTop: 160, paddingBottom: 80, position: "relative", overflow: "hidden" }} className="grid-bg">
        <div className="container">
          <Eyebrow>Event · Annual · Since 2020</Eyebrow>
          <div style={{ display: "grid", gridTemplateColumns: m ? "1fr" : "1fr 1fr", gap: m ? 24 : 48, alignItems: "end", marginTop: 32 }}>
            <h1 className="h-display" style={{ margin: 0 }}>START<br/><span className="accent">Contest.</span></h1>
            <div>
              <p className="lead" style={{ fontSize: m ? 16 : 20 }}>Four stages. Four months. The most ambitious student startup competition in the Lemanic region.</p>
              <div style={{ display: "flex", gap: 10, marginTop: 24, flexWrap: "wrap" }}>
                <Tag accent>Edition 2026</Tag><Tag>CHF 30,000 prize pool</Tag><Tag>Open to all universities</Tag>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Img src="https://cdn.prod.website-files.com/639832a06215ce13af0dfe47/69d2d19ff49caa7d35d283f0_DJI_0034.jpg" ratio={m ? "16/9" : "21/9"} label="Grand Finale · UNIL Anthropole" />
        </div>
      </section>

      {/* Stages */}
      <section className="section" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="container">
          <SectionLabel num="01" label="The four stages" />
          <div style={{ display: "grid", gridTemplateColumns: m ? "1fr" : "repeat(4, 1fr)", gap: m ? 24 : 0 }}>
            {stages.map((s, i) => (
              <Reveal key={s.n} delay={i * 100}>
                <div style={{ padding: m ? "24px 0" : "32px 24px 32px 24px", borderLeft: m ? "none" : "1px solid var(--border)", borderTop: m ? "1px solid var(--border)" : "none", position: "relative", minHeight: m ? "auto" : 360 }}>
                  {!m && <div style={{ position: "absolute", left: -6, top: 40, width: 11, height: 11, borderRadius: "50%", background: "var(--accent)", boxShadow: "0 0 14px var(--accent-glow)" }} />}
                  <div className="mono-label" style={{ color: "var(--accent)", marginBottom: 24 }}>STAGE_{s.n}</div>
                  <h3 className="h-lg" style={{ marginBottom: 16 }}>{s.t}</h3>
                  <p style={{ color: "var(--text-dim)", fontSize: 14, lineHeight: 1.7, marginBottom: 24 }}>{s.d}</p>
                  <span className="tag">{s.when}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Prizes */}
      <section className="section" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="container">
          <SectionLabel num="02" label="What you win" />
          <div style={{ display: "grid", gridTemplateColumns: m ? "1fr" : "repeat(3, 1fr)", gap: 24 }}>
            {[
              { n: "CHF 30K+", l: "in cash prizes", d: "Distributed across top teams — no strings, no equity taken." },
              { n: "6 months", l: "of mentorship", d: "With founders from our alumni network and partner companies." },
              { n: "Direct intros", l: "to VCs & angels", d: "Winners get warm intros to our network of early-stage investors." },
            ].map((p, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="card card-glass" style={{ minHeight: m ? "auto" : 240 }}>
                  <div className="h-xl" style={{ color: "var(--accent)", marginBottom: 8 }}>{p.n}</div>
                  <div className="mono-label" style={{ marginBottom: 16 }}>{p.l}</div>
                  <p style={{ color: "var(--text-dim)", fontSize: 14, lineHeight: 1.7 }}>{p.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Past winners */}
      <section className="section" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="container">
          <SectionLabel num="03" label="Past winners" />
          <h2 className="h-xl" style={{ marginBottom: m ? 32 : 64 }}>Alumni who went on to <span className="accent">raise real money.</span></h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 1, background: "var(--border)", border: "1px solid var(--border)", borderRadius: 12, overflow: "hidden" }}>
            {[
              { y: "2024", name: "Helvetia Labs", cat: "DeepTech · EPFL", raise: "€4.2M Seed" },
              { y: "2023", name: "Noctua Health", cat: "HealthTech · HEC/CHUV", raise: "€2.8M Pre-seed" },
              { y: "2022", name: "Fondant", cat: "Consumer · UNIL", raise: "€1.1M Angel" },
              { y: "2021", name: "Rivière.io", cat: "Climate · EPFL", raise: "€6M Series A" },
            ].map((w, i) => (
              <div key={i} style={{
                background: "var(--bg)", padding: m ? "20px 16px" : "28px 32px",
                display: m ? "flex" : "grid",
                flexDirection: m ? "column" : undefined,
                gap: m ? 8 : 32,
                gridTemplateColumns: m ? undefined : "80px 1fr 1fr 160px 40px",
                alignItems: m ? undefined : "center",
                cursor: "pointer", transition: "background 0.2s"
              }}
              onMouseEnter={e => e.currentTarget.style.background = "var(--bg-card)"}
              onMouseLeave={e => e.currentTarget.style.background = "var(--bg)"}>
                <div className="mono-label" style={{ color: "var(--accent)" }}>{w.y}</div>
                <div className="h-md" style={{ fontWeight: 500 }}>{w.name}</div>
                <div className="mono-label">{w.cat}</div>
                <div className="mono-label" style={{ color: "var(--text)" }}>{w.raise}</div>
                {!m && <div style={{ textAlign: "right", color: "var(--text-mute)" }}>→</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container card" style={{ padding: m ? 32 : 64, textAlign: "center" }}>
          <Eyebrow>Applications open · Oct 2026</Eyebrow>
          <h2 className="h-xl" style={{ marginTop: 24, marginBottom: 40 }}>Have an idea? <span className="accent">Bring it.</span></h2>
          <Btn primary>Register your team</Btn>
        </div>
      </section>
    </>
  );
};
window.ContestPage = ContestPage;
