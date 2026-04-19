// Hackathon page
const HackathonPage = () => {
  const m = useIsMobile();
  const [time, setTime] = React.useState({ h: 48, m: 0, s: 0 });
  React.useEffect(() => {
    const id = setInterval(() => {
      setTime(t => {
        let { h, m, s } = t;
        if (s > 0) s--;
        else if (m > 0) { s = 59; m--; }
        else if (h > 0) { s = 59; m = 59; h--; }
        else { h = 48; m = 0; s = 0; }
        return { h, m, s };
      });
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <section style={{ paddingTop: 160, paddingBottom: 40, position: "relative", overflow: "hidden" }} className="grid-bg">
        <div className="container">
          <Eyebrow>Event · Annual · Since 2022</Eyebrow>
          <h1 className="h-display" style={{ marginTop: 32 }}>START<span className="accent">/</span>Hack<br/><span style={{ fontStyle: "italic", fontWeight: 300, opacity: 0.5 }}>build, ship, repeat.</span></h1>
          <p className="lead" style={{ marginTop: 40, fontSize: m ? 16 : 20, maxWidth: "65ch" }}>48 hours. One hall. 200 students, 6 partner companies, and a caffeine delivery schedule that would make a NOCSAE lab proud. You bring the skills — we bring the brief.</p>
        </div>
      </section>

      {/* Timer */}
      <section style={{ paddingBottom: 80 }}>
        <div className="container">
          <div style={{ border: "1px solid var(--border)", borderRadius: 16, padding: m ? "32px 20px" : "48px 32px", background: "var(--bg-card)", display: "flex", flexDirection: m ? "column" : "row", gap: m ? 16 : 48, alignItems: m ? "flex-start" : "center" }}>
            <div className="mono-label" style={{ color: "var(--accent)", flexShrink: 0 }}>▸ Time left on clock</div>
            <div style={{ display: "flex", gap: m ? 16 : 32, justifyContent: m ? "center" : "flex-end", alignItems: "baseline", fontFamily: "var(--mono)", fontSize: m ? 40 : "clamp(48px, 8vw, 120px)", fontWeight: 300, letterSpacing: "-0.04em", width: "100%" }}>
              <div><span style={{ color: "var(--accent)" }}>{String(time.h).padStart(2,"0")}</span><span className="mono-label" style={{ marginLeft: 8, fontSize: m ? 10 : 14 }}>hrs</span></div>
              <div><span>{String(time.m).padStart(2,"0")}</span><span className="mono-label" style={{ marginLeft: 8, fontSize: m ? 10 : 14 }}>min</span></div>
              <div><span>{String(time.s).padStart(2,"0")}</span><span className="mono-label" style={{ marginLeft: 8, fontSize: m ? 10 : 14 }}>sec</span></div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "40px 0 80px" }}>
        <div className="container">
          <Img src="https://cdn.prod.website-files.com/639832a06215ce13af0dfe47/674ca5e5d3dd1eefa2cf9a80_20241120_95956_1060%E2%80%AFPM.jpeg" ratio={m ? "16/9" : "21/9"} label="Hack 2024 · Day 2, 04:17 AM" />
        </div>
      </section>

      {/* Schedule */}
      <section className="section" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="container">
          <SectionLabel num="01" label="Schedule · 48h" />
          <div>
            {[
              { t: "18:00 FRI", label: "Opening & briefs reveal" },
              { t: "19:30 FRI", label: "Team formation" },
              { t: "20:00 FRI", label: "Hacking starts · Dinner" },
              { t: "09:00 SAT", label: "Partner office hours" },
              { t: "14:00 SAT", label: "Mid-point check-ins" },
              { t: "23:00 SAT", label: "Midnight energy drop" },
              { t: "09:00 SUN", label: "Code freeze approach" },
              { t: "15:00 SUN", label: "Submission deadline" },
              { t: "16:00 SUN", label: "Demo marathon" },
              { t: "18:30 SUN", label: "Winners announced 🏆" },
            ].map((row, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: m ? "1fr" : "160px 1fr", padding: "18px 0", borderTop: "1px solid var(--border)", gap: m ? 4 : 24 }}>
                <div className="mono-label" style={{ color: "var(--accent)" }}>{row.t}</div>
                <div style={{ fontSize: 17 }}>{row.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tracks */}
      <section className="section" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="container">
          <SectionLabel num="02" label="Tracks" />
          <h2 className="h-xl" style={{ marginBottom: m ? 32 : 64 }}>Six briefs. <span className="accent">Pick your fight.</span></h2>
          <div style={{ display: "grid", gridTemplateColumns: m ? "1fr" : "repeat(3, 1fr)", gap: 1, background: "var(--border)", border: "1px solid var(--border)", borderRadius: 12, overflow: "hidden" }}>
            {[
              { k: "01", t: "AI Agents", p: "AWS" },
              { k: "02", t: "FinTech", p: "PostFinance" },
              { k: "03", t: "Climate", p: "Innovaud" },
              { k: "04", t: "Consumer", p: "QoQa" },
              { k: "05", t: "DevTools", p: "Infomaniak" },
              { k: "06", t: "Wildcard", p: "START Lausanne" },
            ].map((t, i) => (
              <div key={i} style={{ background: "var(--bg)", padding: m ? 24 : 32, minHeight: m ? "auto" : 200, display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 16, cursor: "pointer", transition: "background 0.3s" }}
                   onMouseEnter={e => e.currentTarget.style.background = "var(--bg-card)"}
                   onMouseLeave={e => e.currentTarget.style.background = "var(--bg)"}>
                <div>
                  <div className="mono-label" style={{ color: "var(--accent)", marginBottom: 16 }}>TRACK_{t.k}</div>
                  <h3 className="h-lg">{t.t}</h3>
                </div>
                <div className="mono-label">▸ Sponsored by {t.p}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: m ? "repeat(2, 1fr)" : "repeat(4, 1fr)", textAlign: "center" }}>
            {[
              { n: 200, suf: "+", l: "Hackers" },
              { n: 6, suf: "", l: "Tracks" },
              { n: 48, suf: "h", l: "Of pure build" },
              { n: 20, suf: "k€", l: "In prizes" },
            ].map((s, i) => (
              <div key={i} style={{ padding: m ? "24px 12px" : "40px 16px", borderLeft: (m ? i % 2 === 0 : i > 0) ? "1px solid var(--border)" : "none", borderRight: m && i % 2 === 1 ? "1px solid var(--border)" : (!m ? "none" : "none"), borderBottom: m ? "1px solid var(--border)" : "none" }}>
                <div className="h-xl" style={{ color: "var(--accent)" }}><Counter to={s.n} suffix={s.suf} /></div>
                <div className="mono-label" style={{ marginTop: 12 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container card" style={{ padding: m ? 32 : 64, textAlign: "center" }}>
          <Eyebrow>Next edition · Nov 2026</Eyebrow>
          <h2 className="h-xl" style={{ marginTop: 24, marginBottom: 40 }}>Bring your laptop. <span className="accent">Leave with a demo.</span></h2>
          <Btn primary>Register to hack</Btn>
        </div>
      </section>
    </>
  );
};
window.HackathonPage = HackathonPage;
