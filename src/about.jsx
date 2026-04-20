// About page
const AboutPage = () => {
  const m = useIsMobile();
  const depts = [
    { name: "Events", desc: "Plan, run and deliver 40+ events a year — from intimate founder fireside chats to multi-day competitions.", skills: ["Production", "Logistics", "Community"] },
    { name: "Partners", desc: "Acquire, manage and grow relationships with the sponsors and companies that fuel our mission.", skills: ["B2B Sales", "Negotiation", "CRM"] },
    { name: "Marketing", desc: "Own the brand. Grow the reach. Design the campaigns that make START unmissable.", skills: ["Content", "Social", "Brand"] },
    { name: "Tech", desc: "Build the automations, site, and internal tools that let the rest of the team move at startup speed.", skills: ["Web", "Automations", "Data"] },
    { name: "Venture", desc: "Source, scout and support student-founded ventures through our pipeline of programs and competitions.", skills: ["Scouting", "Due Diligence", "Mentorship"] },
    { name: "People", desc: "Recruit, onboard and grow the community that makes START more than an association.", skills: ["Recruiting", "Culture", "Ops"] },
  ];

  const timeline = [
    { year: "2019", title: "Founded at UNIL", desc: "A small group of HEC students decides Lausanne deserves its own student-run entrepreneurship hub." },
    { year: "2020", title: "First Contest", desc: "We run our inaugural startup competition — 12 teams, 1 winner, 0 sleep." },
    { year: "2022", title: "START Hack launches", desc: "The hackathon goes live and becomes one of Switzerland's largest student build sprints." },
    { year: "2023", title: "RtSS begins", desc: "Road to the Startup Summit kicks off — a cross-Europe startup road trip for our members." },
    { year: "2024", title: "Global network", desc: "START Lausanne joins a federation of 25 chapters across 11 countries." },
    { year: "2026", title: "Where you come in", desc: "The next cohort. Maybe you're reading this because you're about to build it with us." },
  ];

  return (
    <>
      <section style={{ paddingTop: 160, paddingBottom: 80, position: "relative" }} className="grid-bg">
        <div className="container">
          <Eyebrow>About</Eyebrow>
          <h1 className="h-display" style={{ marginTop: 32, maxWidth: "14ch" }}>We're a <span className="accent">student-run</span> launchpad.</h1>
          <p className="lead" style={{ marginTop: 40, fontSize: m ? 18 : 22 }}>Not a club. Not a think tank. START Lausanne is a working association of students who plan real events, sign real partners, and build real things — so the next generation of founders has somewhere to begin.</p>
        </div>
      </section>

      {/* Principles */}
      <section className="section" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="container">
          <SectionLabel num="01" label="Operating principles" />
          <div style={{ display: "grid", gridTemplateColumns: m ? "1fr" : "repeat(3, 1fr)", gap: 32 }}>
            {[
              { t: "Do the thing.", d: "We value shipping over strategizing. Events happen because people book the rooms. Startups exist because someone writes the first line." },
              { t: "Room for non-experts.", d: "Half of what you know you learned last month. Our best members come from law, physics, design — not just business." },
              { t: "Community compounds.", d: "The people you build with now will be your cofounders, investors and first hires. We take that seriously." },
            ].map((p, i) => (
              <Reveal key={i} delay={i * 120}>
                <div style={{ borderTop: "1px solid var(--accent)", paddingTop: 24 }}>
                  <h3 className="h-lg" style={{ marginBottom: 16 }}>{p.t}</h3>
                  <p style={{ color: "var(--text-dim)", fontSize: 15, lineHeight: 1.7 }}>{p.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "0 0 120px" }}>
        <div className="container">
          <Img src="https://cdn.prod.website-files.com/639832a06215ce13af0dfe47/69d2d19ff49caa7d35d283f0_DJI_0034.jpg" ratio={m ? "16/9" : "21/9"} label="START Contest · UNIL" />
        </div>
      </section>

      {/* Departments */}
      <section className="section" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="container">
          <SectionLabel num="02" label="Departments" />
          <div className="split" style={{ marginBottom: 64, alignItems: "end" }}>
            <h2 className="h-xl">Six teams<span className="accent">.</span><br/><span style={{ opacity: 0.4 }}>One association.</span></h2>
            {!m && <p className="lead">When you join, you'll pick a department. That's where you'll do real work with real ownership — and where you'll practice the muscle you want to build.</p>}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: m ? "1fr" : "repeat(2, 1fr)", gap: 1, background: "var(--border)", border: "1px solid var(--border)", borderRadius: 16, overflow: "hidden" }}>
            {depts.map((d, i) => (
              <Reveal key={d.name} delay={i * 80}>
                <div style={{ background: "var(--bg-elev)", padding: m ? 24 : 36, minHeight: m ? "auto" : 280, cursor: "pointer", transition: "background 0.3s" }}
                     onMouseEnter={e => e.currentTarget.style.background = "var(--accent-soft)"}
                     onMouseLeave={e => e.currentTarget.style.background = "var(--bg-elev)"}>
                  <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: m ? 16 : 32 }}>
                    <span className="mono-label" style={{ color: "var(--accent)" }}>⟶</span>
                  </div>
                  <h3 className="h-lg" style={{ marginBottom: 12 }}>{d.name}</h3>
                  <p style={{ color: "var(--text-dim)", fontSize: 15, lineHeight: 1.6, marginBottom: 20 }}>{d.desc}</p>
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>{d.skills.map(s => <Tag key={s}>{s}</Tag>)}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="container">
          <SectionLabel num="03" label="Timeline" />
          <h2 className="h-xl" style={{ marginBottom: m ? 48 : 80 }}>From 2019 <span className="accent">→</span> today.</h2>
          <div style={{ position: "relative" }}>
            {!m && <div style={{ position: "absolute", left: 120, top: 0, bottom: 0, width: 1, background: "var(--border)" }} />}
            {m && <div style={{ position: "absolute", left: 4, top: 0, bottom: 0, width: 1, background: "var(--border)" }} />}
            {timeline.map((t, i) => (
              <Reveal key={i} delay={i * 80}>
                <div style={{ display: "grid", gridTemplateColumns: m ? "1fr" : "120px 1fr", gap: m ? 8 : 48, paddingBottom: m ? 32 : 56, paddingLeft: m ? 24 : 0, position: "relative" }}>
                  <div className="h-md" style={{ color: "var(--accent)", fontFamily: "var(--mono)", fontWeight: 500 }}>{t.year}</div>
                  <div style={{ position: "relative" }}>
                    {!m && <span style={{ position: "absolute", left: -48 - 4, top: 12, width: 9, height: 9, borderRadius: "50%", background: "var(--accent)", boxShadow: "0 0 20px var(--accent-glow)" }} />}
                    {m && <span style={{ position: "absolute", left: -24, top: 6, width: 9, height: 9, borderRadius: "50%", background: "var(--accent)", boxShadow: "0 0 20px var(--accent-glow)" }} />}
                    <h3 className="h-md" style={{ marginBottom: 8 }}>{t.title}</h3>
                    <p style={{ color: "var(--text-dim)", fontSize: 15, lineHeight: 1.7, maxWidth: 560 }}>{t.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container card card-glass" style={{ padding: m ? 32 : 64, textAlign: "center" }}>
          <Eyebrow>Spring 2026 · Now recruiting</Eyebrow>
          <h2 className="h-xl" style={{ marginTop: 24, marginBottom: 40 }}>Pick a department. <span className="accent">Start building.</span></h2>
          <Btn primary href="https://noteforms.com/forms/candidatures-recrutement-printemps-2026-td0wt8">Open application</Btn>
        </div>
      </section>
    </>
  );
};
window.AboutPage = AboutPage;
