// Team page
const TeamPage = () => {
  const [activeBoard, setActiveBoard] = React.useState(0);
  const m = useIsMobile();

  const board = [
    { name: "Henrik Gruber", role: "President", email: "henrik.gruber@startlausanne.ch", linkedin: "https://www.linkedin.com/in/gruber-henrik/", img: "src/images/698c9eea964638801cf6dbd0_K75A8116_topcrop.jpg", quote: "" },
    { name: "Mattia La Gennusa", role: "Vice-President", email: "mattia.lagennusa@startlausanne.ch", linkedin: "https://www.linkedin.com/in/mattia-la-gennusa-162704372/", img: "src/images/698c98514d9f897ef22e42b7_K75A7907_centered.jpg", quote: "" },
    { name: "Cedric Mercado", role: "Treasurer", email: "cedric.mercado@startlausanne.ch", linkedin: "https://www.linkedin.com/in/cedric-mercado-308879217/", img: "src/images/698c971d2b78df61f2b31ccb_K75A8143_centered.jpg", quote: "" },
  ];

  const teams = [
    {
      name: "Contest Team", code: "01",
      members: [
        { n: "Yasmine Jouini", img: "src/images/698c8fbcfa3181dd37b1def3_K75A7967.jpg", li: "https://www.linkedin.com/in/yasmine-jouini-7a803828a/" },
        { n: "Seyoung Kim", img: "src/images/698c95958af72ad7aab780d7_K75A7850_centered.jpg", li: "https://www.linkedin.com/in/seyoung-kim-22a68a172/" },
      ]
    },
    {
      name: "Coordination Team", code: "02",
      members: [
        { n: "Tariq Azzouz", img: "src/images/tariq-azzouz.jpg", li: "#" },
        { n: "Rayhana Bentahir", img: "src/images/rayhana-bentahir.jpg", li: "#" },
      ]
    },
    {
      name: "Event Team", code: "03",
      members: [
        { n: "Athish Sinnandy", img: "src/images/start-logo.png", li: "#" },
        { n: "Omman Hashemi", img: "src/images/start-logo.png", li: "#" },
        { n: "Dhia Eddine Naffati", img: "src/images/698c96dd4b1384bc81cf1e6f_K75A7817_centered.jpg", li: "https://www.linkedin.com/in/dhia-naffati-01b95b336/" },
        { n: "Ghalia Bennani", img: "src/images/ghalia-bennani.jpg", li: "#" },
      ]
    },
    {
      name: "Finance Team", code: "04",
      members: [
        { n: "Aurelia Marchese", img: "src/images/aurelia-marchese.jpg", li: "#" },
        { n: "Lena Sieber", img: "src/images/lena-sieber.jpg", li: "#" },
        { n: "Pablo Suarez", img: "src/images/start-logo.png", li: "#" },
        { n: "Stephan Ferrieri", img: "src/images/stephan-ferrieri.jpg", li: "#" },
      ]
    },
    {
      name: "Marketing Team", code: "05",
      members: [
        { n: "Elena Bachos", img: "src/images/start-logo.png", li: "#" },
        { n: "Amélie Ruggeri", img: "src/images/start-logo.png", li: "#" },
        { n: "Lina Boubeker", img: "src/images/start-logo.png", li: "#" },
        { n: "Ludivine Berger", img: "src/images/ludivine-berger.jpg", li: "#" },
      ]
    },
    {
      name: "IT Team", code: "06",
      members: [
        { n: "Rim Abkari", img: "src/images/698c981d20f8f525a4d08705_K75A7972_centered.jpg", li: "#" },
        { n: "Adam Lahchimi", img: "src/images/adam-lahchimi.jpg", li: "#" },
        { n: "Ayman Bouzaid", img: "src/images/ayman-bouzaid.png", li: "#" },
      ]
    },
    {
      name: "Intern Team", code: "07",
      members: [
        { n: "Arianna Nepomuceno", img: "src/images/arianna-nepomuceno.jpg", li: "#" },
      ]
    },
  ];

  const totalMembers = board.length + teams.reduce((s, t) => s + t.members.length, 0);

  return (
    <>
      <section style={{ paddingTop: 160, paddingBottom: 80 }} className="grid-bg">
        <div className="container">
          <Eyebrow>The team</Eyebrow>
          <h1 className="h-display" style={{ marginTop: 32 }}>
            Diverse skills<span className="accent">.</span><br/>
            <span style={{ fontStyle: "italic", fontWeight: 300 }}>United</span><br/>
            <span style={{ opacity: 0.4 }}>vision.</span>
          </h1>
          <div style={{ display: "flex", gap: m ? 24 : 48, marginTop: m ? 32 : 48, flexWrap: "wrap" }}>
            <div><div className="h-lg" style={{ color: "var(--accent)" }}><Counter to={totalMembers} /></div><div className="mono-label" style={{ marginTop: 8 }}>Active members</div></div>
            <div><div className="h-lg" style={{ color: "var(--accent)" }}>7</div><div className="mono-label" style={{ marginTop: 8 }}>Departments</div></div>
            <div><div className="h-lg" style={{ color: "var(--accent)" }}>3</div><div className="mono-label" style={{ marginTop: 8 }}>Board members</div></div>
          </div>
        </div>
      </section>

      {/* Board */}
      <section className="section" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="container">
          <SectionLabel num="01" label="The board" />

          <div className="split" style={{ gap: 48, alignItems: "stretch" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {board.map((bm, i) => (
                <div key={i} onClick={() => setActiveBoard(i)}
                     style={{
                       display: "grid", gridTemplateColumns: m ? "60px 1fr" : "80px 1fr auto", gap: m ? 12 : 20, alignItems: "center",
                       padding: 16, borderRadius: 14, cursor: "pointer",
                       background: activeBoard === i ? "var(--accent-soft)" : "var(--bg-elev)",
                       border: "1px solid " + (activeBoard === i ? "var(--accent)" : "var(--border)"),
                       boxShadow: activeBoard === i ? "0 4px 20px -8px rgba(59,130,246,0.4)" : "none",
                       transition: "all 0.25s"
                     }}>
                  <div style={{
                    width: m ? 60 : 80, height: m ? 60 : 80, borderRadius: 8, backgroundImage: `url(${bm.img})`,
                    backgroundSize: "cover", backgroundPosition: "center"
                  }} />
                  <div>
                    <div style={{ fontSize: 18, fontFamily: "var(--display)", fontWeight: 500 }}>{bm.name}</div>
                    <div className="mono-label" style={{ marginTop: 4 }}>{bm.role}</div>
                  </div>
                  {!m && <div style={{ color: activeBoard === i ? "var(--accent)" : "var(--text-mute)", fontSize: 24 }}>→</div>}
                </div>
              ))}
            </div>

            <div style={{ position: "relative" }}>
              <div style={{ position: "relative", borderRadius: 16, overflow: "hidden" }}>
                <Img src={board[activeBoard].img} ratio="4/5" />
              </div>
              <div style={{ marginTop: 24, padding: 28, border: "1px solid var(--border)", borderRadius: 16, background: "var(--bg-elev)", boxShadow: "var(--shadow-sm)" }}>
                <div className="mono-label" style={{ color: "var(--accent)", marginBottom: 12 }}>{board[activeBoard].role}</div>
                {board[activeBoard].quote && (
                  <p style={{ fontSize: 20, lineHeight: 1.5, fontFamily: "var(--display)", fontWeight: 400, margin: 0 }}>
                    "{board[activeBoard].quote}"
                  </p>
                )}
                <div style={{ marginTop: 20, display: "flex", gap: 10, flexWrap: "wrap" }}>
                  <a className="btn" href={`mailto:${board[activeBoard].email}`} style={{ padding: "10px 16px", fontSize: 11 }}>✉ Email</a>
                  <a className="btn" href={board[activeBoard].linkedin} target="_blank" rel="noopener" style={{ padding: "10px 16px", fontSize: 11 }}>↗ LinkedIn</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team rosters (real members) */}
      {teams.map((t, ti) => (
        <section key={t.code} className="section" style={{ borderTop: "1px solid var(--border)", paddingTop: 80, paddingBottom: 80 }}>
          <div className="container">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 48, flexWrap: "wrap", gap: 16 }}>
              <h2 className="h-xl">{t.name}</h2>
              <span className="mono-label">{t.members.length} member{t.members.length > 1 ? "s" : ""}</span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: m ? "repeat(2, 1fr)" : "repeat(auto-fill, minmax(220px, 1fr))", gap: m ? 12 : 24 }}>
              {t.members.map((m, i) => (
                <Reveal key={i} delay={i * 50}>
                  <div style={{ position: "relative" }}>
                    <div style={{
                      borderRadius: 12, overflow: "hidden", aspectRatio: "4/5",
                      backgroundImage: `url(${m.img})`, backgroundSize: "cover", backgroundPosition: "center",
                      border: "1px solid var(--border)", position: "relative", cursor: "pointer",
                      transition: "all 0.3s"
                    }}
                    onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.borderColor = "var(--accent)"; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.borderColor = "var(--border)"; }}>
                      <div style={{
                        position: "absolute", inset: 0,
                        background: "linear-gradient(180deg, transparent 45%, rgba(0,0,44,0.94) 100%)"
                      }} />
                      <div style={{
                        position: "absolute", left: 16, right: 16, bottom: 16,
                        display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 8
                      }}>
                        <div style={{ fontFamily: "var(--display)", fontSize: 17, fontWeight: 500, color: "var(--text)", lineHeight: 1.2 }}>
                          {m.n}
                        </div>
                        {m.li && m.li !== "#" ? (
                          <a href={m.li} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()} style={{
                            width: 34, height: 34, borderRadius: "50%", display: "grid", placeItems: "center",
                            background: "var(--accent)", border: "1px solid var(--accent)",
                            color: "#fff", fontSize: 12, fontWeight: 700, flexShrink: 0,
                            backdropFilter: "blur(10px)"
                          }}>in</a>
                        ) : (
                          <span style={{
                            width: 34, height: 34, borderRadius: "50%", display: "grid", placeItems: "center",
                            background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)",
                            color: "rgba(255,255,255,0.5)", fontSize: 12, flexShrink: 0, backdropFilter: "blur(10px)"
                          }}>in</span>
                        )}
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="section" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="container card card-glass" style={{ padding: m ? 32 : 64, textAlign: "center" }}>
          <Eyebrow>Spring 2026 · Recruiting now</Eyebrow>
          <h2 className="h-xl" style={{ marginTop: 24, marginBottom: 40 }}>
            Want to <span className="accent">join the team?</span>
          </h2>
          <Btn primary href="https://noteforms.com/forms/candidatures-recrutement-printemps-2026-td0wt8">Apply to START</Btn>
        </div>
      </section>
    </>
  );
};

window.TeamPage = TeamPage;
