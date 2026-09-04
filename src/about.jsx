// About page — mission, values, network, departments, team
const AboutPage = () => {
  const m = useIsMobile();

  const values = [
    { icon: "people", title: "Community First", d: "We believe in the power of bringing ambitious people together to create meaningful connections." },
    { icon: "globe", title: "Global Mindset", d: "Part of a network spanning 22 cities and 17 countries, we think and act globally." },
    { icon: "briefcase", title: "Action-Oriented", d: "We don't just talk about entrepreneurship — we build, create, and make things happen." },
    { icon: "heart", title: "Inclusive", d: "We welcome every student regardless of background. Diversity drives innovation." },
  ];

  const depts = [
    { icon: "🏆", name: "Contest", d: "Running the START Contest end to end — from applications to the grand finale jury night." },
    { icon: "🧭", name: "Coordination", d: "Keeping the association's projects, calendar and internal operations running smoothly." },
    { icon: "🎪", name: "Event", d: "Planning and executing every event that brings our community together, from workshops to the hackathon." },
    { icon: "📊", name: "Finance", d: "Managing the association's budget, resources, and financial sustainability." },
    { icon: "📣", name: "Marketing", d: "Owning the brand, growing the reach, and designing the campaigns that make START unmissable." },
    { icon: "💻", name: "IT", d: "Building the website, automations and internal tools that let the rest of the team move fast." },
    { icon: "🌱", name: "Intern", d: "Supporting every department while getting a first hands-on taste of student entrepreneurship." },
  ];

  const board = [
    { name: "Henrik Gruber", role: "President" },
    { name: "Mattia La Gennusa", role: "Vice-President" },
    { name: "Cedric Mercado", role: "Treasurer" },
  ];

  const teams = [
    { name: "Contest Team", members: ["Yasmine Jouini", "Seyoung Kim"] },
    { name: "Coordination Team", members: ["Tariq Azzouz", "Rayhana Bentahir"] },
    { name: "Event Team", members: ["Athish Sinnandy", "Omman Hashemi", "Dhia Eddine Naffati", "Ghalia Bennani"] },
    { name: "Finance Team", members: ["Aurelia Marchese", "Lena Sieber", "Pablo Suarez", "Stephan Ferrieri"] },
    { name: "Marketing Team", members: ["Elena Bachos", "Amélie Ruggeri", "Lina Boubeker", "Ludivine Berger"] },
    { name: "IT Team", members: ["Rim Abkari", "Adam Lahchimi", "Ayman Bouzaid"] },
    { name: "Intern Team", members: ["Arianna Nepomuceno"] },
  ];

  const allMembers = [
    ...board.map(b => ({ n: b.name, role: b.role })),
    ...teams.flatMap(t => t.members.map(n => ({ n, role: t.name }))),
  ];

  const networkCities = ["Lausanne","St. Gallen","Nuremberg","Helsinki","Stuttgart","Vaduz","Munich","Berlin","Barcelona","Lisbon","Hamburg","Maastricht","Paris","Vienna","Mexico City","São Paulo","Lima","Quito","Bogotá","London","Milan","Warsaw"];

  return (
    <>
      {/* Hero */}
      <section style={{ position: "relative", minHeight: m ? "70vh" : "88vh", display: "flex", flexDirection: "column", justifyContent: "flex-end", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "url(src/images/about.jpeg)", backgroundSize: "cover", backgroundPosition: "center" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(8,8,10,0.35) 0%, rgba(8,8,10,0.7) 55%, rgba(8,8,10,0.96) 100%)" }} />
        <div className="container" style={{ position: "relative", zIndex: 2, paddingBottom: m ? 56 : 96 }}>
          <h1 style={{ fontFamily: "var(--display)", fontWeight: 800, textTransform: "uppercase", letterSpacing: "-0.03em", fontSize: m ? 54 : "clamp(70px, 10vw, 140px)", lineHeight: 0.95, color: "#fff", margin: 0 }}>About Us</h1>
          <p className="lead" style={{ marginTop: 28, maxWidth: "60ch", color: "rgba(255,255,255,0.82)" }}>
            Connecting the next generation of entrepreneurs in Lausanne and beyond.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="section" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: m ? "1fr" : "1.1fr 0.9fr", gap: 64, alignItems: "center" }}>
          <Reveal>
            <Eyebrow>Our Mission</Eyebrow>
            <h2 className="h-lg" style={{ marginTop: 24, marginBottom: 28, textTransform: "uppercase" }}>Empowering Students to Build the <span className="text-gradient">Future</span></h2>
            <p className="lead" style={{ marginBottom: 20 }}>
              We empower students to take the next step in their entrepreneurial journey so they can build innovation and startups that shape tomorrow. Through events, workshops, and a vibrant community, we provide the resources, connections, and support needed to turn ambitious ideas into concrete, lasting projects.
            </p>
            <p className="lead" style={{ marginBottom: 0 }}>
              As part of the global START Network spanning 22 cities across 17 countries, we connect Lausanne's brightest minds with a worldwide community of entrepreneurs, investors, and industry leaders.
            </p>
          </Reveal>
          <Reveal delay={150}>
            <Img src="src/images/start_generale.jpeg" ratio="3/2" label="START Lausanne" style={{ backgroundSize: "150%", backgroundPosition: "center 32%" }} />
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="section" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: m ? 48 : 72 }}>
            <h2 className="h-lg" style={{ textTransform: "uppercase" }}>Our Values</h2>
            <p className="lead" style={{ margin: "20px auto 0" }}>The principles that guide everything we do.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: m ? "1fr" : "repeat(4, 1fr)", gap: 24 }}>
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 100}>
                <div className="card-glass" style={{ borderRadius: "var(--rad-lg)", padding: 32, textAlign: "center", height: "100%" }}>
                  <div style={{ width: 64, height: 64, margin: "0 auto 20px", borderRadius: 16, background: "var(--accent-soft)", color: "var(--accent)", display: "grid", placeItems: "center" }}><DetailIcon type={v.icon} size={28} /></div>
                  <h3 style={{ fontFamily: "var(--display)", fontWeight: 800, fontSize: 15, textTransform: "uppercase", letterSpacing: "0.01em", marginBottom: 12 }}>{v.title}</h3>
                  <p style={{ color: "var(--text-dim)", fontSize: 14, lineHeight: 1.7 }}>{v.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="section" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: m ? 48 : 72 }}>
            <h2 className="h-lg" style={{ textTransform: "uppercase" }}>Our Departments</h2>
            <p className="lead" style={{ margin: "20px auto 0" }}>Seven teams working together to make START Lausanne exceptional.</p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 1, background: "var(--border)", border: "1px solid var(--border)", borderRadius: 16, overflow: "hidden" }}>
            {depts.map((d, i) => (
              <Reveal key={d.name} delay={i * 60} style={{ flex: m ? "1 1 100%" : "1 1 260px" }}>
                <div style={{ background: "var(--bg-elev)", padding: m ? 24 : 32, minHeight: m ? "auto" : 220, height: "100%" }}>
                  <div style={{ fontSize: 28, marginBottom: 16 }}>{d.icon}</div>
                  <h3 className="h-md" style={{ marginBottom: 10, textTransform: "uppercase", fontSize: 18 }}>{d.name}</h3>
                  <p style={{ color: "var(--text-dim)", fontSize: 14, lineHeight: 1.6 }}>{d.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the team */}
      <section className="section" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: m ? 48 : 72 }}>
            <h2 className="h-lg" style={{ textTransform: "uppercase" }}>Meet the Team</h2>
            <p className="lead" style={{ margin: "20px auto 0" }}>The passionate individuals behind START Lausanne.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: m ? "repeat(2, 1fr)" : "repeat(3, 1fr)", gap: 20 }}>
            {allMembers.map((mem, i) => (
              <Reveal key={i} delay={(i % 12) * 40}>
                <div style={{ border: "1px solid var(--border)", borderRadius: 14, background: "var(--bg-elev)", padding: "28px 20px", textAlign: "center" }}>
                  <div style={{ fontFamily: "var(--display)", fontWeight: 700, fontSize: 17 }}>{mem.n}</div>
                  <div style={{ color: "var(--text-dim)", fontSize: 13, marginTop: 6 }}>{mem.role}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Global network */}
      <section className="section-dark" style={{ padding: m ? "72px 0" : "120px 0", position: "relative", overflow: "hidden" }}>
        <GlowOrb top="30%" left="10%" size={600} color="var(--accent)" opacity={0.22} />
        <div className="container" style={{ position: "relative", display: "grid", gridTemplateColumns: m ? "1fr" : "0.9fr 1.1fr", gap: 48, alignItems: "center" }}>
          <Reveal>
            <Img src="src/images/contest.jpeg" ratio="2048/1435" label="START Contest 2025-2026" />
          </Reveal>
          <Reveal delay={150}>
            <Eyebrow>Global Network</Eyebrow>
            <h2 className="h-lg" style={{ marginTop: 24, marginBottom: 24, color: "#fff", textTransform: "uppercase" }}>Part of the <span className="text-gradient">START Network</span></h2>
            <p className="lead" style={{ color: "rgba(255,255,255,0.72)", marginBottom: 32 }}>
              START Lausanne is a proud chapter of the global START Network — founded in St. Gallen in 1996 and connecting student entrepreneurs across more than 22 cities in 17 countries. This gives our members access to an international community, cross-chapter events, and opportunities to collaborate with ambitious students worldwide.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24 }}>
              {[{ n: 22, suf: "+", l: "Cities" }, { n: 17, suf: "", l: "Countries" }].map((s, i) => (
                <div key={i} className="card-glass" style={{ borderRadius: "var(--rad-lg)", padding: 24, textAlign: "center" }}>
                  <div style={{ fontFamily: "var(--display)", fontWeight: 800, fontSize: m ? 32 : 44, color: "var(--accent)" }}>
                    <Counter to={s.n} suffix={s.suf} />
                  </div>
                  <div className="mono-label" style={{ marginTop: 8, color: "rgba(255,255,255,0.55)" }}>{s.l}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
        <div style={{ overflow: "hidden", borderTop: "1px solid rgba(255,255,255,0.08)", marginTop: m ? 20 : 28, padding: "4px 0" }}>
          <Marquee items={networkCities.map((c, i) => (
            <span key={i} style={{ fontFamily: "var(--display)", fontSize: m ? 20 : 28, fontWeight: 700, color: "rgba(255,255,255,0.4)", paddingRight: 56, letterSpacing: "-0.01em" }}>{c} <span style={{ color: "var(--accent)" }}>✦</span></span>
          ))} speed={45} />
        </div>
      </section>
    </>
  );
};
window.AboutPage = AboutPage;
