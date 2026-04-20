// Home page
const HomePage = () => {
  const heroRef = React.useRef(null);
  const m = useIsMobile();

  React.useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const handler = (e) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      el.style.setProperty("--mx", x);
      el.style.setProperty("--my", y);
    };
    el.addEventListener("mousemove", handler);
    return () => el.removeEventListener("mousemove", handler);
  }, []);

  const [faqOpen, setFaqOpen] = React.useState(0);
  const faqs = [
    { q: "My background is not in business, can I still join?", a: "Of course, our members come from a variety of fields, not just from business backgrounds." },
    { q: "Do I have to have a startup to join?", a: "No. You should have an intrinsic motivation towards entrepreneurship topics, a hands-on mentality and willingness to learn." },
    { q: "I'm not a student in Lausanne, can I still join?", a: "No, to become a member, you need to be a student enrolled in one of the universities in Lausanne (UNIL, EPFL, HEC Lausanne, etc.). You are, however, very welcome to join one of our public events or collaborate with us." },
    { q: "How active is the community?", a: "We prioritize an active and lively community by organizing over 40 events and community meetups, as well as working in smaller groups on various projects." },
    { q: "How can I benefit from joining?", a: "You will get immersed into the entrepreneurship ecosystem, and find a community of like-minded, highly motivated and inspiring students that quickly become good friends." },
    { q: "What are the tasks I have to do as a member?", a: "You will choose one of our departments to become an active member and take on different projects. By doing this, you will practice proactive project management, and develop new department-specific hard skills." },
  ];

  const cities = ["Barcelona","Lisbon","Maastricht","Nuremberg","Lausanne","Vaduz","Helsinki","Berlin","St. Gallen","Stuttgart","Hamburg","Paris","Bogotá","Quito","Lima"];
  const makeCity = (c, i, prefix) => (
    <span key={`${prefix}-${i}`} style={{
      fontFamily: "var(--display)",
      fontSize: m ? 40 : "clamp(48px, 7vw, 120px)",
      fontWeight: 800,
      letterSpacing: "-0.03em",
      color: i % 3 === 0 ? "#fff" : "transparent",
      WebkitTextStroke: i % 3 === 0 ? "none" : "1.5px rgba(255,255,255,0.55)",
      paddingRight: m ? 40 : 80,
      display: "inline-flex", alignItems: "center", gap: m ? 20 : 40
    }}>
      {c}
      <span style={{ color: "var(--accent)", fontSize: "0.3em", fontWeight: 900 }}>✦</span>
    </span>
  );
  const cityItems = cities.map((c,i) => makeCity(c, i, "a"));

  const testimonials = [
    { name: "Marion Mourot", role: "Vice-President", long: "Joining START meant building a community I now can't imagine my student life without — it's ambitious, supportive and ridiculously fun.", img: "https://cdn.prod.website-files.com/639832a06215ce13af0dfe47/698c93bffa748a37bb0ff510_K75A7927_centered.jpg" },
    { name: "Riad Mehmeti", role: "President", long: "We're here to turn ideas into action. If you've ever wanted to build something real while still a student — this is your place.", img: "https://cdn.prod.website-files.com/639832a06215ce13af0dfe47/698c93981450fcfb0784502b_K75A8205_centered.jpg" },
    { name: "Leïla Benjelloun", role: "Treasurer", long: "Behind every great event is a spreadsheet someone loves. I love the spreadsheets. I love this team more.", img: "https://cdn.prod.website-files.com/639832a06215ce13af0dfe47/698c93d91d461fd7402fdbbe_K75A8008_centered.jpg" },
  ];

  return (
    <>
      {/* HERO */}
      <section ref={heroRef} style={{
        position: "relative", minHeight: "100vh", paddingTop: 96,
        display: "flex", flexDirection: "column", justifyContent: "center",
        overflow: "hidden"
      }} className="grid-bg">
        <div style={{
          position: "absolute", top: "10%", right: "-15%",
          width: 720, height: 720, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(59,130,246,0.35) 0%, transparent 60%)",
          filter: "blur(80px)", pointerEvents: "none",
          transform: "translate(calc(var(--mx,0) * 50px), calc(var(--my,0) * 50px))",
          transition: "transform 0.6s ease-out"
        }} />
        <div style={{
          position: "absolute", bottom: "10%", left: "-12%",
          width: 520, height: 520, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(208,0,111,0.22) 0%, transparent 60%)",
          filter: "blur(80px)", pointerEvents: "none"
        }} />
        <div className="container" style={{ position: "relative", zIndex: 2, paddingTop: 40, paddingBottom: 40 }}>
          <div style={{ marginBottom: 40 }}>
            <Eyebrow>Student association, Lausanne</Eyebrow>
          </div>
          <h1 className="h-display">
            <span style={{ display: "block", color: "var(--text-dim)", fontWeight: 500 }}>building the</span>
            <span style={{ display: "block" }}>future<span className="accent">.</span></span>
            <span style={{ display: "block", fontStyle: "italic", fontWeight: 300, color: "var(--text-dim)" }}>one student</span>
            <span style={{ display: "block" }}>
              <span className="outline">at a time</span><span className="accent">_</span>
            </span>
          </h1>
          <div style={{ display: "flex", flexDirection: m ? "column" : "row", gap: m ? 24 : 48, marginTop: m ? 40 : 80, alignItems: m ? "flex-start" : "end", justifyContent: "space-between" }}>
            <p className="lead" style={{ margin: 0 }}>
              START Lausanne is a student association boosting entrepreneurial spirit across the Lemanic region.
              We help you develop the skills — and launch the startups — that matter.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", flexShrink: 0 }}>
              <Btn primary href="https://noteforms.com/forms/candidatures-recrutement-printemps-2026-td0wt8">Join the 2026 cohort</Btn>
            </div>
          </div>
          <div style={{ height: m ? 60 : 120 }} aria-hidden="true" />
        </div>
        {!m && <div style={{
          position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)",
          fontFamily: "var(--body)", fontSize: 10, color: "var(--text-mute)",
          textTransform: "uppercase", letterSpacing: "0.2em", fontWeight: 600,
          display: "flex", flexDirection: "column", alignItems: "center", gap: 12, pointerEvents: "none"
        }}>
          <div>Scroll</div>
          <div style={{ width: 1, height: 40, background: "var(--border-strong)", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: 0, width: "100%", height: "40%", background: "var(--accent)", animation: "scrollLine 2s ease-in-out infinite" }} />
          </div>
          <style>{`@keyframes scrollLine { 0%,100% { transform: translateY(-100%); } 50% { transform: translateY(300%); } }`}</style>
        </div>}
      </section>

      {/* Sponsor marquee */}
      <section style={{ padding: "48px 0", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", background: "var(--bg-elev)" }}>
        <div style={{ textAlign: "center", marginBottom: 24 }}>
          <span className="mono-label">— Powered by our partners —</span>
        </div>
        <Marquee items={[
          <span style={{ fontFamily: "var(--display)", fontSize: m ? 22 : 34, fontWeight: 700, color: "var(--text-dim)", letterSpacing: "-0.02em" }}>Amazon Web Services</span>,
          <span style={{ fontFamily: "var(--display)", fontSize: m ? 22 : 34, fontWeight: 700, color: "var(--text-dim)", letterSpacing: "-0.02em" }}>UNIL</span>,
          <span style={{ fontFamily: "var(--display)", fontSize: m ? 22 : 34, fontWeight: 700, color: "var(--text-dim)", letterSpacing: "-0.02em" }}>EPFL Innovation Park</span>,
          <span style={{ fontFamily: "var(--display)", fontSize: m ? 22 : 34, fontWeight: 700, color: "var(--accent)", letterSpacing: "-0.02em" }}>QoQa</span>,
          <span style={{ fontFamily: "var(--display)", fontSize: m ? 22 : 34, fontWeight: 700, color: "var(--text-dim)", letterSpacing: "-0.02em" }}>Infomaniak</span>,
          <span style={{ fontFamily: "var(--display)", fontSize: m ? 22 : 34, fontWeight: 700, color: "var(--text-dim)", letterSpacing: "-0.02em" }}>Venturelab</span>,
          <span style={{ fontFamily: "var(--display)", fontSize: m ? 22 : 34, fontWeight: 700, color: "var(--text-dim)", letterSpacing: "-0.02em" }}>HEC Lausanne</span>,
        ]} speed={30} />
      </section>

      {/* Mission */}
      <section className="section">
        <div className="container">
          <SectionLabel num="01" label="Who we are" />
          <div className="split">
            <Reveal>
              <div style={{ marginBottom: 32 }}><Eyebrow>The mission</Eyebrow></div>
              <h2 className="h-xl" style={{ marginBottom: 32 }}>
                A place for the <span style={{ fontStyle: "italic", fontWeight: 400 }}>next gen</span><br/>of <span className="outline">innovators</span><span className="accent">.</span>
              </h2>
              <p className="lead">START Lausanne is a student association focused on boosting entrepreneurial spirit among students in the Lemanic region. We help you develop your entrepreneurial skills and launch promising startups.</p>
              <div style={{ display: "flex", gap: 10, marginTop: 36, flexWrap: "wrap" }}>
                <Tag accent>Entrepreneurship</Tag><Tag>Community</Tag><Tag>Events</Tag><Tag>Startups</Tag>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div style={{ position: "relative" }}>
                <div style={{
                  position: "absolute", top: -16, left: -16, right: 16, bottom: 16,
                  background: "var(--accent)", borderRadius: "var(--rad-lg)", zIndex: 0
                }} />
                <div style={{ position: "relative", zIndex: 1 }}>
                  <Img src="https://cdn.prod.website-files.com/639832a06215ce13af0dfe47/674ca5e5d3dd1eefa2cf9a80_20241120_95956_1060%E2%80%AFPM.jpeg" label="START community · Nov 2024" ratio="1/1" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: "var(--bg-elev)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", padding: m ? "60px 0" : "100px 0" }}>
        <div className="container">
          <SectionLabel num="02" label="By the numbers" />
          <div style={{ display: "grid", gridTemplateColumns: m ? "repeat(2, 1fr)" : "repeat(4, 1fr)", gap: 0, borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
            {[
              { n: 40, suf: "+", label: "events per year" },
              { n: 250, suf: "+", label: "members in Lausanne" },
              { n: 8500, suf: "+", label: "social followers" },
              { n: 1.5, suf: "B€", label: "raised by alumni", custom: true },
            ].map((s, i) => (
              <div key={i} style={{
                padding: m ? "28px 16px" : "48px 32px",
                borderRight: (m ? i % 2 === 0 : i < 3) ? "1px solid var(--border)" : "none",
                borderBottom: (m && i < 2) ? "1px solid var(--border)" : "none"
              }}>
                <div className="h-xl" style={{ color: "var(--accent)", marginBottom: 10, fontWeight: 800 }}>
                  {s.custom ? <>1.5<span style={{ fontSize: "0.48em", fontWeight: 700 }}>B€</span></> : <Counter to={s.n} suffix={s.suf} />}
                </div>
                <div className="mono-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global community — navy contrast section */}
      <section className="section-dark" style={{ padding: m ? "80px 0" : "140px 0", position: "relative", overflow: "hidden" }}>
        <div className="grid-bg-dark" style={{ position: "absolute", inset: 0, opacity: 0.5 }} />
        <div style={{
          position: "absolute", top: "50%", left: "50%", width: 900, height: 900,
          borderRadius: "50%", transform: "translate(-50%,-50%)",
          background: "radial-gradient(circle, rgba(59,130,246,0.28) 0%, transparent 60%)",
          filter: "blur(100px)", pointerEvents: "none"
        }} />
        <div className="container" style={{ position: "relative" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 32, marginBottom: m ? 48 : 72 }}>
            <div>
              <div style={{ marginBottom: 24 }}><Eyebrow>Global community</Eyebrow></div>
              <h2 className="h-xl" style={{ color: "#fff" }}>
                One network<span className="accent">.</span><br/>
                <span style={{ color: "rgba(255,255,255,0.35)" }}>15 cities.</span><br/>
                <span style={{ fontStyle: "italic", fontWeight: 300, color: "rgba(255,255,255,0.6)" }}>11 countries.</span>
              </h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, auto)", gap: m ? 24 : 64 }}>
              {[{n: 25, l: "Cities"}, {n: 11, l: "Countries"}, {n: 500, l: "Members", suf: "+"}].map((s,i) => (
                <div key={i}>
                  <div style={{ fontFamily: "var(--display)", fontWeight: 800, fontSize: m ? 40 : 72, letterSpacing: "-0.03em", color: "var(--accent)", lineHeight: 1 }}>
                    <Counter to={s.n} suffix={s.suf || ""} />
                  </div>
                  <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.14em", color: "rgba(255,255,255,0.5)", fontWeight: 600, marginTop: 10 }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div style={{ overflow: "hidden", borderTop: "1px solid rgba(255,255,255,0.08)", borderBottom: "1px solid rgba(255,255,255,0.08)", padding: m ? "18px 0" : "28px 0" }}>
          <Marquee items={cityItems} speed={50} />
        </div>
        <div style={{ overflow: "hidden", borderBottom: "1px solid rgba(255,255,255,0.08)", padding: m ? "18px 0" : "28px 0" }}>
          <div className="marquee">
            <div className="marquee-track" style={{ animationDirection: "reverse", animationDuration: "60s" }}>
              {cities.map((c,i) => makeCity(c, i, "r1")).concat(cities.map((c,i) => makeCity(c, i, "r2"))).concat(cities.map((c,i) => makeCity(c, i, "r3")))}
            </div>
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="section">
        <div className="container">
          <SectionLabel num="03" label="Flagship events" />
          <h2 className="h-xl" style={{ marginBottom: m ? 40 : 72, maxWidth: 900 }}>
            Three formats<span className="accent">.</span> <span className="outline">Built to move</span> ideas.
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: m ? "1fr" : "repeat(3, 1fr)", gap: 24 }}>
            {[
              { id: "contest", tag: "Competition", title: "Start Contest", desc: "A multi-stage startup competition. Students bring ideas, juries bring rigor, winners bring home cash + mentorship.", img: "https://cdn.prod.website-files.com/639832a06215ce13af0dfe47/69d2d19ff49caa7d35d283f0_DJI_0034.jpg" },
              { id: "hackathon", tag: "Build sprint", title: "START Hack", desc: "48 hours. A hall full of builders. Real-world briefs from partner companies. Ship something that wasn't there before.", img: "https://cdn.prod.website-files.com/639832a06215ce13af0dfe47/674ca5e5d3dd1eefa2cf9a80_20241120_95956_1060%E2%80%AFPM.jpeg" },
              { id: "rtss", tag: "Road trip", title: "RtSS", desc: "Road to the Startup Summit — a journey across Europe's innovation capitals to meet founders, VCs and the people shaping what's next.", img: "https://cdn.prod.website-files.com/639832a06215ce13af0dfe47/69d2d19ff49caa7d35d283f0_DJI_0034.jpg" },
            ].map((e, i) => (
              <Reveal key={e.id} delay={i*100}>
                <a className="card" style={{ display: "block", cursor: "pointer", padding: 0, overflow: "hidden" }} onClick={() => window.__setRoute(e.id)}>
                  <Img src={e.img} ratio="4/3" />
                  <div style={{ padding: m ? 22 : 28 }}>
                    <div className="mono-label" style={{ color: "var(--accent)", marginBottom: 16 }}>{e.tag}</div>
                    <h3 className="h-md" style={{ marginBottom: 12 }}>{e.title}</h3>
                    <p style={{ color: "var(--text-dim)", fontSize: 15, lineHeight: 1.65 }}>{e.desc}</p>
                    <div style={{ marginTop: 22, display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "var(--body)", fontSize: 11, color: "var(--accent)", textTransform: "uppercase", letterSpacing: "0.12em", fontWeight: 700, borderBottom: "1.5px solid var(--accent)", paddingBottom: 2 }}>Learn more →</div>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section" style={{ background: "var(--bg-elev)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <SectionLabel num="04" label="Words of starties" />
          <h2 className="h-xl" style={{ marginBottom: m ? 40 : 72, maxWidth: 900 }}>
            What our <span className="accent">START 2026</span> <span className="outline">board has to say</span>.
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: m ? "1fr" : "repeat(3, 1fr)", gap: 24 }}>
            {testimonials.map((t, i) => (
              <Reveal key={i} delay={i*100}>
                <div className="card" style={{ padding: 0, overflow: "hidden" }}>
                  <Img src={t.img} ratio={m ? "16/9" : "4/5"} />
                  <div style={{ padding: m ? 22 : 28 }}>
                    <div style={{ fontSize: 16, lineHeight: 1.55, marginBottom: 24, color: "var(--text)", fontWeight: 500 }}>"{t.long}"</div>
                    <div style={{ height: 1, background: "var(--border)", marginBottom: 16 }} />
                    <div style={{ fontFamily: "var(--display)", fontWeight: 700, fontSize: 16, color: "var(--text)" }}>{t.name}</div>
                    <div className="mono-label" style={{ marginTop: 4, color: "var(--accent)" }}>{t.role}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container">
          <SectionLabel num="05" label="FAQ" />
          <div className="split" style={{ alignItems: "start" }}>
            <div style={{ position: m ? "static" : "sticky", top: 100 }}>
              <Eyebrow>Wanna learn more?</Eyebrow>
              <h2 className="h-xl" style={{ marginTop: 24, marginBottom: 32 }}>
                Frequently<br/>asked<br/><span className="accent">questions.</span>
              </h2>
              {!m && <p className="lead">Didn't find what you were looking for? <a href="mailto:info@startlausanne.ch" className="u-link">Drop us a line.</a></p>}
            </div>
            <div>
              {faqs.map((f, i) => (
                <div key={i} onClick={() => setFaqOpen(faqOpen === i ? -1 : i)} style={{
                  borderTop: "1px solid var(--border)",
                  borderBottom: i === faqs.length - 1 ? "1px solid var(--border)" : "none",
                  padding: "28px 0", cursor: "pointer",
                  transition: "all 0.3s",
                  background: faqOpen === i ? "var(--bg-tint)" : "transparent",
                  marginLeft: faqOpen === i ? -16 : 0,
                  marginRight: faqOpen === i ? -16 : 0,
                  paddingLeft: faqOpen === i ? 16 : 0,
                  paddingRight: faqOpen === i ? 16 : 0,
                  borderRadius: faqOpen === i ? 12 : 0
                }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: m ? 12 : 24 }}>
                    <div style={{ display: "flex", gap: m ? 14 : 24, alignItems: "center" }}>
                      <span className="mono-label" style={{ color: "var(--accent)" }}>0{i+1}</span>
                      <span style={{ fontFamily: "var(--display)", fontWeight: 600, fontSize: m ? 17 : "clamp(20px, 2.2vw, 30px)", lineHeight: 1.2, letterSpacing: "-0.01em" }}>{f.q}</span>
                    </div>
                    <span style={{
                      width: 38, height: 38, borderRadius: "50%",
                      border: "1.5px solid " + (faqOpen === i ? "var(--accent)" : "var(--border-strong)"),
                      display: "grid", placeItems: "center", flexShrink: 0, transition: "all 0.3s",
                      background: faqOpen === i ? "var(--accent)" : "transparent",
                      color: faqOpen === i ? "#fff" : "var(--text)",
                      transform: faqOpen === i ? "rotate(45deg)" : "none",
                      fontSize: 18, fontWeight: 400
                    }}>+</span>
                  </div>
                  <div style={{ maxHeight: faqOpen === i ? 300 : 0, overflow: "hidden", transition: "all 0.4s ease", color: "var(--text-dim)", paddingLeft: m ? 32 : 52, paddingTop: faqOpen === i ? 18 : 0, fontSize: 15, lineHeight: 1.7 }}>{f.a}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors */}
      <section className="section-sm" style={{ borderTop: "1px solid var(--border)", background: "var(--bg-elev)" }}>
        <div className="container">
          <SectionLabel num="06" label="Sponsors" />
          <div style={{ display: "grid", gridTemplateColumns: m ? "repeat(2, 1fr)" : "repeat(4, 1fr)", gap: 1, background: "var(--border)", border: "1px solid var(--border)", borderRadius: 16, overflow: "hidden" }}>
            {["Amazon Web Services","UNIL Hub","EPFL IP","QoQa","Infomaniak","Venturelab","Innovaud","HEC"].map((s,i) => (
              <div key={i} style={{
                background: "var(--bg-elev)", padding: m ? "28px 16px" : "48px 24px",
                display: "grid", placeItems: "center",
                fontFamily: "var(--display)", fontSize: m ? 15 : 19,
                fontWeight: 700, color: "var(--text-dim)",
                letterSpacing: "-0.01em",
                transition: "all 0.3s", cursor: "pointer"
              }}
              onMouseEnter={e => { e.currentTarget.style.color = "var(--accent)"; e.currentTarget.style.background = "var(--accent-soft)"; }}
              onMouseLeave={e => { e.currentTarget.style.color = "var(--text-dim)"; e.currentTarget.style.background = "var(--bg-elev)"; }}>
                {s}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ padding: m ? "80px 0" : "160px 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <Eyebrow>Ready?</Eyebrow>
          <h2 className="h-display" style={{ marginTop: 32, marginBottom: 56 }}>
            <span className="outline">Build</span><br/>
            <span style={{ fontStyle: "italic", fontWeight: 300, color: "var(--text-dim)" }}>with</span><br/>
            <span className="accent">us.</span>
          </h2>
          <div style={{ display: "inline-flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
            <Btn primary href="https://noteforms.com/forms/candidatures-recrutement-printemps-2026-td0wt8">Apply for Spring 2026</Btn>
            <Btn href="mailto:info@startlausanne.ch">Contact us</Btn>
          </div>
        </div>
      </section>
    </>
  );
};
window.HomePage = HomePage;
