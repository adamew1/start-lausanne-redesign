// Team page
const TeamPage = () => {
  const [activeBoard, setActiveBoard] = React.useState(0);
  const m = useIsMobile();

  const board = [
    { name: "Riad Mehmeti", role: "President", email: "president@startlausanne.ch", linkedin: "https://www.linkedin.com/in/riad-mehmeti-7170b0330/", img: "https://cdn.prod.website-files.com/639832a06215ce13af0dfe47/698c93981450fcfb0784502b_K75A8205_centered.jpg", quote: "Hello there! My name is Riad Mehmeti and I'm the President of START Lausanne 2025-2026!" },
    { name: "Marion Mourot", role: "Vice-President", email: "marion.mourot@startlausanne.ch", linkedin: "https://www.linkedin.com/in/marion-mourot-1a3070336/", img: "https://cdn.prod.website-files.com/639832a06215ce13af0dfe47/698c93bffa748a37bb0ff510_K75A7927_centered.jpg", quote: "Hey! I'm Marion Mourot and I'm the Vice-President." },
    { name: "Leïla Benjelloun", role: "Treasurer", email: "leila.benjelloun@startlausanne.ch", linkedin: "https://www.linkedin.com/in/le%C3%AFla-benjelloun-807a53156/", img: "https://cdn.prod.website-files.com/639832a06215ce13af0dfe47/698c93d91d461fd7402fdbbe_K75A8008_centered.jpg", quote: "And I'm Leïla, the treasurer :) Let us introduce you to the rest of the team!" },
  ];

  const teams = [
    {
      name: "Contest Team", code: "01",
      members: [
        { n: "Adelet Tesfay", img: "https://cdn.prod.website-files.com/639832a06215ce13af0dfe47/673a2158cbb5b04bc740219c_2024_Start%20%2813%29.jpg", li: "https://ch.linkedin.com/in/adelet-tesfay-481762252" },
        { n: "Imane Lahrichi", img: "https://cdn.prod.website-files.com/639832a06215ce13af0dfe47/698c949f680371da71dab205_K75A7892_centered.jpg", li: "https://www.linkedin.com/in/imane-lahrichi/" },
        { n: "Siham Mikou", img: "https://cdn.prod.website-files.com/639832a06215ce13af0dfe47/690dc030b5718afbd9423667_1729269042790.jpg", li: "https://www.linkedin.com/in/siham-mikou-94b833277/" },
        { n: "Romain Darioli", img: "https://cdn.prod.website-files.com/639832a06215ce13af0dfe47/698c9c4181cba9dd8dfb5d53_K75A8030_centered.jpg", li: "https://www.linkedin.com/in/romain-darioli/" },
        { n: "Seyoung Kim", img: "https://cdn.prod.website-files.com/639832a06215ce13af0dfe47/698c95958af72ad7aab780d7_K75A7850_centered.jpg", li: "https://www.linkedin.com/in/seyoung-kim-22a68a172/" },
        { n: "Mohamed Houssaini", img: "https://cdn.prod.website-files.com/639832a06215ce13af0dfe47/698c95b2d00bb4ebcd03ccba_4-K75A7795_topcrop.jpg", li: "https://www.linkedin.com/in/mohamed-iraqi-houssaini-584963388/" },
      ]
    },
    {
      name: "Events Team", code: "02",
      members: [
        { n: "Esteban Voituret", img: "https://cdn.prod.website-files.com/639832a06215ce13af0dfe47/690dc001e96f74b50758cfeb_1753907384414.jpg", li: "https://www.linkedin.com/in/esteban-voituret-0874b1251/" },
        { n: "Livia Camplese", img: "https://cdn.prod.website-files.com/639832a06215ce13af0dfe47/698c9f2f130c2878d38e976d_K75A7991_centered.jpg", li: "https://www.linkedin.com/in/livia-c-454282335/" },
        { n: "Yassine Becha", img: "https://cdn.prod.website-files.com/639832a06215ce13af0dfe47/673a21598783fc08bef12204_2024_Start%20%2823%29.jpg", li: "https://www.linkedin.com/in/yassine-becha-2095a3248/" },
        { n: "Dhia Eddine Naffati", img: "https://cdn.prod.website-files.com/639832a06215ce13af0dfe47/698c96dd4b1384bc81cf1e6f_K75A7817_centered.jpg", li: "https://www.linkedin.com/in/dhia-naffati-01b95b336/" },
        { n: "Henrik Gruber", img: "https://cdn.prod.website-files.com/639832a06215ce13af0dfe47/698c9eea964638801cf6dbd0_K75A8116_topcrop.jpg", li: "https://www.linkedin.com/in/gruber-henrik/" },
        { n: "Roman Guillemin", img: "https://cdn.prod.website-files.com/639832a06215ce13af0dfe47/698c96efe0386c8d458aff7d_K75A7874_topcrop.jpg", li: "https://www.linkedin.com/in/roman-guillemin-baa844351/" },
        { n: "Elisa Schroth", img: "https://cdn.prod.website-files.com/639832a06215ce13af0dfe47/698c9f0f9d917d61c1c42ae2_K75A8099_centered.jpg", li: "https://www.linkedin.com/in/elisa-schroth-7b15b737a/" },
        { n: "Julia Kannengieser", img: "https://cdn.prod.website-files.com/639832a06215ce13af0dfe47/690dbf9ea56b486d220fe987_1733221537269.jpg", li: "https://www.linkedin.com/in/julia-kannengieser-b8382b2b9/" },
      ]
    },
    {
      name: "Coordination Team", code: "03",
      members: [
        { n: "Rania Hatrouhou", img: "https://cdn.prod.website-files.com/639832a06215ce13af0dfe47/698c973eac558976b3f43ad3_K75A8046_centered.jpg", li: "https://www.linkedin.com/in/rania-hatrouhou-389a07238/" },
        { n: "Cedric Mercado", img: "https://cdn.prod.website-files.com/639832a06215ce13af0dfe47/698c971d2b78df61f2b31ccb_K75A8143_centered.jpg", li: "https://www.linkedin.com/in/cedric-mercado-308879217/" },
        { n: "Givar Maley", img: "https://cdn.prod.website-files.com/639832a06215ce13af0dfe47/698c919189fbd9b11ec6e137_3-K75A7787.jpg", li: "https://www.linkedin.com/in/givar-maley-542794331/" },
        { n: "Yasmine Jouini", img: "https://cdn.prod.website-files.com/639832a06215ce13af0dfe47/698c8fbcfa3181dd37b1def3_K75A7967.jpg", li: "https://www.linkedin.com/in/yasmine-jouini-7a803828a/" },
      ]
    },
    {
      name: "Marketing Team", code: "04",
      members: [
        { n: "Mayuri Tribukait", img: "https://cdn.prod.website-files.com/639832a06215ce13af0dfe47/698c97706fcd945b5168f3c4_K75A8074_centered.jpg", li: "https://www.linkedin.com/in/mayuri-tribukait-b5a103325/" },
        { n: "Daniele Parini", img: "https://cdn.prod.website-files.com/639832a06215ce13af0dfe47/698c97a26792a508dfb974ef_K75A8131_centered.jpg", li: "https://www.linkedin.com/in/giulia-flocchini" },
        { n: "Lylia Fadouach", img: "https://cdn.prod.website-files.com/639832a06215ce13af0dfe47/690dbf6b70a043105c4bb91f_1742500559305.jpg", li: "https://www.linkedin.com/in/lylia-fadouach-87776b331/" },
        { n: "Enya Schmid", img: "https://cdn.prod.website-files.com/639832a06215ce13af0dfe47/698c9ec1e6edd2b6a0054722_K75A7878_topcrop.jpg", li: "https://www.linkedin.com/in/enya-schmid-41a89b388/" },
      ]
    },
    {
      name: "Partnership Team", code: "05",
      members: [
        { n: "Edgard Lacava", img: "https://cdn.prod.website-files.com/639832a06215ce13af0dfe47/690dbf0fdc4be8c780ec0c3c_1761774182283.jpg", li: "https://www.linkedin.com/in/edgar-lacava/" },
        { n: "Gabriele Azzini", img: "https://cdn.prod.website-files.com/639832a06215ce13af0dfe47/673a2159e68327d58bd48f01_2024_Start%20%2874%29.jpg", li: "https://www.linkedin.com/in/gabriele-azzini/" },
        { n: "Leïla Benjelloun", img: "https://cdn.prod.website-files.com/639832a06215ce13af0dfe47/698c93d91d461fd7402fdbbe_K75A8008_centered.jpg", li: "https://www.linkedin.com/in/le%C3%AFla-benjelloun-807a53156/" },
        { n: "Kenza Taghrest", img: "https://cdn.prod.website-files.com/639832a06215ce13af0dfe47/698c9e924beb9de881ea9658_K75A8087_centered.jpg", li: "https://www.linkedin.com/in/kenza-taghrest-826223332/" },
        { n: "Francesco Maiolatesi", img: "https://cdn.prod.website-files.com/639832a06215ce13af0dfe47/690dbeef0c1cb28b0f9205d3_1761769124830.jpg", li: "https://www.linkedin.com/in/francesco-maiolatesi-6976ba367/" },
        { n: "Ilias Jari", img: "https://cdn.prod.website-files.com/639832a06215ce13af0dfe47/698c97d667794a258a1a2b6c_5-K75A7813_topcrop.jpg", li: "https://www.linkedin.com/in/mohamed-ilias-jari/" },
      ]
    },
    {
      name: "IT Team", code: "06",
      members: [
        { n: "Hassan Baddour", img: "https://cdn.prod.website-files.com/639832a06215ce13af0dfe47/698c98095ed710c98ac67c28_K75A8152_topcrop.jpg", li: "https://www.linkedin.com/in/hassan-baddour-1b4992231/" },
        { n: "Rim Abkari", img: "https://cdn.prod.website-files.com/639832a06215ce13af0dfe47/698c981d20f8f525a4d08705_K75A7972_centered.jpg", li: "#" },
        { n: "Ayman Bouzaid", img: "https://cdn.prod.website-files.com/639832a06215ce13af0dfe47/698c9834d943e112c8c450de_K75A8216_centered.jpg", li: "#" },
      ]
    },
    {
      name: "Intern Team", code: "07",
      members: [
        { n: "Marion Mourot", img: "https://cdn.prod.website-files.com/639832a06215ce13af0dfe47/698c93bffa748a37bb0ff510_K75A7927_centered.jpg", li: "https://www.linkedin.com/in/marion-mourot-1a3070336/" },
        { n: "Sophia Draper", img: "https://cdn.prod.website-files.com/639832a06215ce13af0dfe47/698c9e636c48c06a834e0eef_K75A7836_centered.jpg", li: "https://www.linkedin.com/in/sophia-draper-983a8b327/" },
        { n: "Mattia Lagennusa", img: "https://cdn.prod.website-files.com/639832a06215ce13af0dfe47/698c98514d9f897ef22e42b7_K75A7907_centered.jpg", li: "https://www.linkedin.com/in/mattia-la-gennusa-162704372/" },
      ]
    },
  ];

  const totalMembers = board.length + teams.reduce((s, t) => s + t.members.length, 0);

  return (
    <>
      <section style={{ paddingTop: 160, paddingBottom: 80 }} className="grid-bg">
        <div className="container">
          <Eyebrow>The Dream Team · Cohort 2025/26</Eyebrow>
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
                       padding: 16, borderRadius: 12, cursor: "pointer",
                       background: activeBoard === i ? "var(--bg-card)" : "transparent",
                       border: "1px solid " + (activeBoard === i ? "var(--border-strong)" : "var(--border)"),
                       transition: "all 0.2s"
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
              <div style={{ marginTop: 24, padding: 24, border: "1px solid var(--border)", borderRadius: 12, background: "var(--bg-card)" }}>
                <div className="mono-label" style={{ color: "var(--accent)", marginBottom: 12 }}>▸ {board[activeBoard].role}</div>
                <p style={{ fontSize: 20, lineHeight: 1.5, fontFamily: "var(--display)", fontWeight: 400, margin: 0 }}>
                  "{board[activeBoard].quote}"
                </p>
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
              <div>
                <span className="mono-label" style={{ color: "var(--accent)" }}>TEAM_{t.code}</span>
                <h2 className="h-xl" style={{ marginTop: 12 }}>{t.name}</h2>
              </div>
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
                        background: "linear-gradient(180deg, transparent 50%, rgba(10,11,13,0.85) 100%)"
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
                            width: 32, height: 32, borderRadius: "50%", display: "grid", placeItems: "center",
                            background: "rgba(61,139,255,0.15)", border: "1px solid var(--accent)",
                            color: "var(--accent)", fontSize: 12, flexShrink: 0, backdropFilter: "blur(10px)"
                          }}>in</a>
                        ) : (
                          <span style={{
                            width: 32, height: 32, borderRadius: "50%", display: "grid", placeItems: "center",
                            background: "rgba(255,255,255,0.05)", border: "1px solid var(--border)",
                            color: "var(--text-mute)", fontSize: 12, flexShrink: 0, opacity: 0.4
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
