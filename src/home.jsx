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
      fontFamily: "var(--display)", fontSize: m ? 32 : "clamp(40px, 6vw, 96px)",
      fontWeight: 500, letterSpacing: "-0.03em", color: i % 3 === 0 ? "var(--accent)" : "var(--text)",
      paddingRight: m ? 40 : 80
    }}>{c} <span style={{ color: "var(--text-mute)", fontSize: "0.4em", verticalAlign: "middle" }}>✦</span></span>
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
          position: "absolute", top: "20%", right: "-10%",
          width: 600, height: 600, borderRadius: "50%",
          background: "radial-gradient(circle, var(--accent-glow) 0%, transparent 60%)",
          filter: "blur(60px)", pointerEvents: "none",
          transform: "translate(calc(var(--mx,0) * 40px), calc(var(--my,0) * 40px))",
          transition: "transform 0.4s ease-out"
        }} />
        <div className="container" style={{ position: "relative", zIndex: 2, paddingTop: 40, paddingBottom: 40 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 32, flexWrap: "wrap", gap: 16 }}>
            <Eyebrow>START Lausanne · Est. 2019 · Cohort 2025/26</Eyebrow>
            {!m && <div className="mono-label">Lat 46.521° · Long 6.569°</div>}
          </div>
          <h1 className="h-display">
            <span style={{ display: "block", opacity: 0.3 }}>building the</span>
            <span style={{ display: "block" }}>future<span className="accent">.</span></span>
            <span style={{ display: "block", fontStyle: "italic", fontWeight: 300 }}>one student</span>
            <span style={{ display: "block" }}>at a time<span className="accent">_</span></span>
          </h1>
          <div style={{ display: "flex", flexDirection: m ? "column" : "row", gap: m ? 24 : 48, marginTop: m ? 32 : 64, alignItems: m ? "flex-start" : "end" }}>
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
          fontFamily: "var(--mono)", fontSize: 10, color: "var(--text-mute)",
          textTransform: "uppercase", letterSpacing: "0.2em",
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
      <section style={{ padding: "40px 0", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div style={{ textAlign: "center", marginBottom: 20 }}>
          <span className="mono-label">— Powered by our partners —</span>
        </div>
        <Marquee items={[
          <span style={{ fontFamily: "var(--display)", fontSize: m ? 20 : 32, fontWeight: 500, color: "var(--text-dim)", opacity: 0.7 }}>Amazon Web Services</span>,
          <span style={{ fontFamily: "var(--display)", fontSize: m ? 20 : 32, fontWeight: 500, color: "var(--text-dim)", opacity: 0.7 }}>UNIL</span>,
          <span style={{ fontFamily: "var(--display)", fontSize: m ? 20 : 32, fontWeight: 500, color: "var(--text-dim)", opacity: 0.7 }}>EPFL Innovation Park</span>,
          <span style={{ fontFamily: "var(--display)", fontSize: m ? 20 : 32, fontWeight: 500, color: "var(--text-dim)", opacity: 0.7 }}>QoQa</span>,
          <span style={{ fontFamily: "var(--display)", fontSize: m ? 20 : 32, fontWeight: 500, color: "var(--text-dim)", opacity: 0.7 }}>Infomaniak</span>,
          <span style={{ fontFamily: "var(--display)", fontSize: m ? 20 : 32, fontWeight: 500, color: "var(--text-dim)", opacity: 0.7 }}>Venturelab</span>,
          <span style={{ fontFamily: "var(--display)", fontSize: m ? 20 : 32, fontWeight: 500, color: "var(--text-dim)", opacity: 0.7 }}>HEC Lausanne</span>,
        ]} speed={30} />
      </section>

      {/* Mission */}
      <section className="section">
        <div className="container">
          <SectionLabel num="01" label="Who we are" />
          <div className="split">
            <Reveal>
              <div style={{ marginBottom: 32 }}><Eyebrow>The mission</Eyebrow></div>
              <h2 className="h-xl" style={{ marginBottom: 32 }}>A place for the <span className="accent">next gen</span> of innovators.</h2>
              <p className="lead">START Lausanne is a student association focused on boosting entrepreneurial spirit among students in the Lemanic region. We help you develop your entrepreneurial skills and launch promising startups.</p>
              <div style={{ display: "flex", gap: 10, marginTop: 32, flexWrap: "wrap" }}>
                <Tag accent>Entrepreneurship</Tag><Tag>Community</Tag><Tag>Events</Tag><Tag>Startups</Tag>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <Img src="https://cdn.prod.website-files.com/639832a06215ce13af0dfe47/674ca5e5d3dd1eefa2cf9a80_20241120_95956_1060%E2%80%AFPM.jpeg" label="START community · Nov 2024" ratio="1/1" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section" style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", padding: "80px 0" }}>
        <div className="container">
          <SectionLabel num="02" label="By the numbers" />
          <div style={{ display: "grid", gridTemplateColumns: m ? "repeat(2, 1fr)" : "repeat(4, 1fr)", gap: 0 }}>
            {[
              { n: 40, suf: "+", label: "events per year" },
              { n: 250, suf: "+", label: "members in Lausanne" },
              { n: 8500, suf: "+", label: "social followers" },
              { n: 1.5, suf: "B€", label: "raised by alumni", custom: true },
            ].map((s, i) => (
              <div key={i} style={{ padding: m ? "24px 16px" : "40px 24px", borderLeft: (m ? i % 2 === 0 : i === 0) ? "1px solid var(--border)" : "none", borderRight: "1px solid var(--border)", borderBottom: m ? "1px solid var(--border)" : "none" }}>
                <div className="h-xl" style={{ color: "var(--accent)", marginBottom: 8 }}>
                  {s.custom ? <>1.5<span style={{fontSize:"0.5em"}}>B€</span></> : <Counter to={s.n} suffix={s.suf} />}
                </div>
                <div className="mono-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global community */}
      <section className="section">
        <div className="container">
          <SectionLabel num="03" label="Global community" />
          <div style={{ maxWidth: 720, marginBottom: 64 }}>
            <Reveal>
              <h2 className="h-xl">One network<span className="accent">.</span><br/><span style={{ opacity: 0.3 }}>15 cities.</span><br/><span style={{ fontStyle: "italic", fontWeight: 300 }}>11 countries.</span></h2>
            </Reveal>
          </div>
        </div>
        <div style={{ overflow: "hidden" }}><Marquee items={cityItems} speed={50} /></div>
        <div style={{ overflow: "hidden", marginTop: 24 }}>
          <div className="marquee">
            <div className="marquee-track" style={{ animationDirection: "reverse", animationDuration: "60s" }}>
              {cities.map((c,i) => makeCity(c, i, "r1")).concat(cities.map((c,i) => makeCity(c, i, "r2"))).concat(cities.map((c,i) => makeCity(c, i, "r3")))}
            </div>
          </div>
        </div>
        <div className="container" style={{ marginTop: 64 }}>
          <div style={{ display: "grid", gridTemplateColumns: m ? "1fr" : "repeat(3, 1fr)", gap: 24 }}>
            {[{n: 25, l: "Cities"}, {n: 11, l: "Countries"}, {n: 500, l: "Members globally", suf: "+"}].map((s,i) => (
              <Reveal key={i} delay={i*120}>
                <div className="card card-glass">
                  <div className="h-lg" style={{ color: "var(--accent)" }}><Counter to={s.n} suffix={s.suf || ""} /></div>
                  <div className="mono-label" style={{ marginTop: 8 }}>{s.l}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="section" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="container">
          <SectionLabel num="04" label="Flagship events" />
          <h2 className="h-xl" style={{ marginBottom: m ? 32 : 64, maxWidth: 900 }}>Three formats<span className="accent">.</span> Built to move ideas.</h2>
          <div style={{ display: "grid", gridTemplateColumns: m ? "1fr" : "repeat(3, 1fr)", gap: 24 }}>
            {[
              { id: "contest", tag: "01 / Competition", title: "Start Contest", desc: "A multi-stage startup competition. Students bring ideas, juries bring rigor, winners bring home cash + mentorship.", img: "https://cdn.prod.website-files.com/639832a06215ce13af0dfe47/69d2d19ff49caa7d35d283f0_DJI_0034.jpg" },
              { id: "hackathon", tag: "02 / Build Sprint", title: "START Hack", desc: "48 hours. A hall full of builders. Real-world briefs from partner companies. Ship something that wasn't there before.", img: "https://cdn.prod.website-files.com/639832a06215ce13af0dfe47/674ca5e5d3dd1eefa2cf9a80_20241120_95956_1060%E2%80%AFPM.jpeg" },
              { id: "rtss", tag: "03 / Road Trip", title: "RtSS", desc: "Road to the Startup Summit — a journey across Europe's innovation capitals to meet founders, VCs and the people shaping what's next.", img: "https://cdn.prod.website-files.com/639832a06215ce13af0dfe47/69d2d19ff49caa7d35d283f0_DJI_0034.jpg" },
            ].map((e, i) => (
              <Reveal key={e.id} delay={i*100}>
                <a className="card" style={{ display: "block", cursor: "pointer", padding: 0, overflow: "hidden" }} onClick={() => window.__setRoute(e.id)}>
                  <Img src={e.img} ratio="4/3" />
                  <div style={{ padding: m ? 20 : 24 }}>
                    <div className="mono-label" style={{ color: "var(--accent)", marginBottom: 16 }}>{e.tag}</div>
                    <h3 className="h-md" style={{ marginBottom: 12 }}>{e.title}</h3>
                    <p style={{ color: "var(--text-dim)", fontSize: 15, lineHeight: 1.6 }}>{e.desc}</p>
                    <div style={{ marginTop: 20, display: "flex", alignItems: "center", gap: 8, fontFamily: "var(--mono)", fontSize: 12, color: "var(--accent)", textTransform: "uppercase", letterSpacing: "0.08em" }}>Learn more →</div>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container">
          <SectionLabel num="05" label="Words of starties" />
          <h2 className="h-xl" style={{ marginBottom: m ? 32 : 64, maxWidth: 900 }}>What our <span className="accent">START/2026</span> board has to say.</h2>
          <div style={{ display: "grid", gridTemplateColumns: m ? "1fr" : "repeat(3, 1fr)", gap: 24 }}>
            {testimonials.map((t, i) => (
              <Reveal key={i} delay={i*100}>
                <div className="card" style={{ padding: 0, overflow: "hidden" }}>
                  <Img src={t.img} ratio={m ? "16/9" : "4/5"} />
                  <div style={{ padding: m ? 20 : 24 }}>
                    <div style={{ fontSize: 16, lineHeight: 1.5, marginBottom: 20, color: "var(--text)" }}>"{t.long}"</div>
                    <div className="mono-label" style={{ color: "var(--accent)" }}>{t.name}</div>
                    <div className="mono-label" style={{ marginTop: 4 }}>{t.role}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="container">
          <SectionLabel num="06" label="FAQ" />
          <div className="split" style={{ alignItems: "start" }}>
            <div style={{ position: m ? "static" : "sticky", top: 100 }}>
              <Eyebrow>Wanna learn more?</Eyebrow>
              <h2 className="h-xl" style={{ marginTop: 24, marginBottom: 32 }}>Frequently<br/>asked<br/><span className="accent">questions.</span></h2>
              {!m && <p className="lead">Didn't find what you were looking for? <a href="mailto:info@startlausanne.ch" style={{color:"var(--accent)", borderBottom:"1px solid var(--accent)"}}>Drop us a line.</a></p>}
            </div>
            <div>
              {faqs.map((f, i) => (
                <div key={i} onClick={() => setFaqOpen(faqOpen === i ? -1 : i)} style={{ borderTop: "1px solid var(--border)", borderBottom: i === faqs.length - 1 ? "1px solid var(--border)" : "none", padding: "24px 0", cursor: "pointer" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: m ? 12 : 24 }}>
                    <div style={{ display: "flex", gap: m ? 12 : 20, alignItems: "center" }}>
                      <span className="mono-label" style={{ color: "var(--accent)" }}>0{i+1}</span>
                      <span style={{ fontFamily: "var(--display)", fontWeight: 400, fontSize: m ? 16 : "clamp(20px, 2.2vw, 32px)", lineHeight: 1.15 }}>{f.q}</span>
                    </div>
                    <span style={{ width: 32, height: 32, borderRadius: "50%", border: "1px solid var(--border-strong)", display: "grid", placeItems: "center", flexShrink: 0, transition: "all 0.3s", background: faqOpen === i ? "var(--accent)" : "transparent", color: faqOpen === i ? "var(--bg)" : "var(--text)", transform: faqOpen === i ? "rotate(45deg)" : "none" }}>+</span>
                  </div>
                  <div style={{ maxHeight: faqOpen === i ? 300 : 0, overflow: "hidden", transition: "all 0.4s ease", color: "var(--text-dim)", paddingLeft: m ? 32 : 44, paddingTop: faqOpen === i ? 16 : 0 }}>{f.a}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors */}
      <section className="section-sm" style={{ borderTop: "1px solid var(--border)", padding: "80px 0" }}>
        <div className="container">
          <SectionLabel num="07" label="Sponsors" />
          <div style={{ display: "grid", gridTemplateColumns: m ? "repeat(2, 1fr)" : "repeat(4, 1fr)", gap: 1, background: "var(--border)", border: "1px solid var(--border)", borderRadius: 12, overflow: "hidden" }}>
            {["Amazon Web Services","UNIL Hub","EPFL IP","QoQa","Infomaniak","Venturelab","Innovaud","HEC"].map((s,i) => (
              <div key={i} style={{ background: "var(--bg)", padding: m ? "24px 16px" : "40px 24px", display: "grid", placeItems: "center", fontFamily: "var(--display)", fontSize: m ? 14 : 18, fontWeight: 500, color: "var(--text-dim)", transition: "all 0.3s", cursor: "pointer" }}
              onMouseEnter={e => { e.currentTarget.style.color = "var(--accent)"; e.currentTarget.style.background = "var(--bg-card)"; }}
              onMouseLeave={e => { e.currentTarget.style.color = "var(--text-dim)"; e.currentTarget.style.background = "var(--bg)"; }}>
                {s}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ padding: m ? "80px 0" : "140px 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <Eyebrow>Ready?</Eyebrow>
          <h2 className="h-display" style={{ marginTop: 32, marginBottom: 48 }}>Build<br/><span style={{ fontStyle: "italic", fontWeight: 300, opacity: 0.4 }}>with</span><br/><span className="accent">us.</span></h2>
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
