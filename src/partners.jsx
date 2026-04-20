// For Partners page - adapted for Start Lausanne
const PartnersPage = () => {
  const [faqOpen, setFaqOpen] = React.useState(-1);
  const [galleryIdx, setGalleryIdx] = React.useState(0);
  const m = useIsMobile();

  const partners = [
    "Amazon Web Services", "UNIL Hub", "EPFL Innovation Park", "QoQa",
    "Infomaniak", "Venturelab", "HEC Lausanne", "Innovaud",
    "PostFinance", "Credit Suisse", "Nestlé", "Rolex Learning Center",
    "Logitech", "SICPA", "Nexthink", "Swissquote"
  ];

  const whyPartner = [
    { icon: "◉", title: "Academic Excellence", desc: "Direct access to the Lemanic region's top universities. Our network spans UNIL, EPFL, HEC Lausanne, and IMD — connecting your organization with outstanding talent across engineering, business, design, and research." },
    { icon: "◆", title: "Thought Leadership", desc: "Share your expertise through workshops, fireside chats, masterclasses, and panels. START gives your team a credible stage in front of Switzerland's most ambitious students, builders, and future founders." },
    { icon: "◢", title: "Brand Visibility", desc: "Sustained visibility across our flagship events, communication channels, and partner activations. Your brand shows up in a context that feels relevant, high-signal, and community-driven." },
    { icon: "◈", title: "Ecosystem Access", desc: "Plug into the Lemanic innovation ecosystem. Beyond single events, we create long-term relationships between your team, our alumni founders, and the next generation of Swiss talent." },
  ];

  const engagement = [
    { icon: "◉", title: "Event Sponsorship", desc: "Back flagship formats — START Contest, START Hack, RtSS — to gain visibility among 500+ participants and thousands of online followers." },
    { icon: "◆", title: "Recruit Top Talent", desc: "Get curated access to our highly motivated member base through hiring events, a consent-based CV database, and exclusive postings." },
    { icon: "◢", title: "Host Workshops", desc: "Share your expertise through hands-on workshops, technical masterclasses, or industry talks relevant to our founders and builders." },
    { icon: "◈", title: "Company Visits", desc: "Invite our members to your offices for tours, info sessions, and networking — build relationships with future hires, partners and customers." },
  ];

  const galleryImages = [
    { src: "https://cdn.prod.website-files.com/639832a06215ce13af0dfe47/69d2d19ff49caa7d35d283f0_DJI_0034.jpg", label: "START Contest · Finale" },
    { src: "https://cdn.prod.website-files.com/639832a06215ce13af0dfe47/674ca5e5d3dd1eefa2cf9a80_20241120_95956_1060%E2%80%AFPM.jpeg", label: "START Hack · Day 2" },
    { src: "https://cdn.prod.website-files.com/639832a06215ce13af0dfe47/69d2d19ff49caa7d35d283f0_DJI_0034.jpg", label: "RtSS · Station F, Paris" },
    { src: "https://cdn.prod.website-files.com/639832a06215ce13af0dfe47/674ca5e5d3dd1eefa2cf9a80_20241120_95956_1060%E2%80%AFPM.jpeg", label: "Fireside · UNIL" },
    { src: "https://cdn.prod.website-files.com/639832a06215ce13af0dfe47/69d2d19ff49caa7d35d283f0_DJI_0034.jpg", label: "Partner Dinner · Lausanne" },
    { src: "https://cdn.prod.website-files.com/639832a06215ce13af0dfe47/674ca5e5d3dd1eefa2cf9a80_20241120_95956_1060%E2%80%AFPM.jpeg", label: "Workshop · EPFL" },
  ];

  const faqs = [
    { q: "How long is the timeline to collaboration?", a: "We move fast — some partnerships launch within days. Check our event calendar first. If you want to join a specific event, reach out as early as possible so we can plan it with you." },
    { q: "How can we recruit START members?", a: "Partners get exclusive access to our talent pool through dedicated recruiting events, curated CV database access of consenting members, and priority placement on our internal job board. You can also host office tours and info sessions on EPFL or UNIL campus." },
    { q: "What events can partners sponsor?", a: "Partners can sponsor flagship formats — START Contest, START Hack, Road to the Startup Summit — plus workshops, networking nights, and custom formats. Reach out and we'll find or build the right format together." },
    { q: "What is the partnership duration?", a: "Depending on your goals, partnerships can be event-specific or long-term — one semester, a full academic year, or multi-year strategic partnerships." },
    { q: "How do we get started?", a: "Send us a message anytime. We'll set up a short intro call to understand your goals and propose the next steps. Most intro calls happen within a week." },
  ];

  return (
    <>
      {/* HERO */}
      <section style={{
        position: "relative", minHeight: "85vh", paddingTop: 96, paddingBottom: 80,
        display: "flex", flexDirection: "column", justifyContent: "center",
        overflow: "hidden"
      }} className="grid-bg">
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "url(https://cdn.prod.website-files.com/639832a06215ce13af0dfe47/69d2d19ff49caa7d35d283f0_DJI_0034.jpg)",
          backgroundSize: "cover", backgroundPosition: "center",
          opacity: 0.18
        }} />
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(180deg, rgba(0,0,44,0.86) 0%, rgba(0,0,24,0.96) 100%)"
        }} />
        <div style={{
          position: "absolute", top: "30%", left: "10%",
          width: 500, height: 500, borderRadius: "50%",
          background: "radial-gradient(circle, var(--accent-glow) 0%, transparent 60%)",
          filter: "blur(80px)", pointerEvents: "none"
        }} />

        <div className="container" style={{ position: "relative", zIndex: 2, color: "#fff" }}>
          <Eyebrow>For partners</Eyebrow>
          <h1 className="h-display" style={{ marginTop: 32, maxWidth: "14ch", color: "#fff" }}>
            Partner with <span className="accent">Switzerland's</span><br/><span className="outline-invert">next founders</span>.
          </h1>
          <p className="lead" style={{ marginTop: 40, fontSize: 22, maxWidth: "60ch", color: "rgba(255,255,255,0.78)" }}>
            Join the Lemanic region's leading student entrepreneurship community
            and shape the future of Swiss innovation — alongside 500+ builders from
            UNIL, EPFL, HEC and IMD.
          </p>
          <div style={{ display: "flex", gap: 12, marginTop: 40, flexWrap: "wrap" }}>
            <Btn primary href="mailto:partners@startlausanne.ch?subject=Partnership%20inquiry">Get in touch</Btn>
          </div>
        </div>
      </section>

      {/* Contact card (head of partnerships) */}
      <section style={{ padding: "40px 0" }}>
        <div className="container">
          <div className="card card-glass" style={{ padding: m ? 20 : 32, display: "grid", gridTemplateColumns: m ? "1fr" : "120px 1fr auto", gap: m ? 20 : 32, alignItems: "center" }}>
            <div style={{
              width: m ? 80 : 120, height: m ? 80 : 120, borderRadius: 12,
              backgroundImage: "url(https://cdn.prod.website-files.com/639832a06215ce13af0dfe47/698c93981450fcfb0784502b_K75A8205_centered.jpg)",
              backgroundSize: "cover", backgroundPosition: "center",
              border: "1px solid var(--border-strong)"
            }} />
            <div>
              <div className="mono-label" style={{ color: "var(--accent)", marginBottom: 12 }}>Your point of contact</div>
              <h3 className="h-lg" style={{ marginBottom: 6 }}>Riad Mehmeti</h3>
              <div className="mono-label">President · Head of Partnerships</div>
              <div style={{ color: "var(--text-dim)", marginTop: 8, fontSize: 14 }}>president@startlausanne.ch · +41 76 381 59 58</div>
            </div>
            <Btn primary href="mailto:president@startlausanne.ch?subject=Partnership%20inquiry">Get in touch</Btn>
          </div>
        </div>
      </section>

      {/* Partners grid */}
      <section className="section" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="container">
          <SectionLabel num="01" label="Partners & collaborators" />
          <div className="split" style={{ marginBottom: 64, alignItems: "end" }}>
            <h2 className="h-xl">
              Who we<br/>
              <span className="accent">work with<span style={{color:"var(--text)"}}>.</span></span>
            </h2>
            <p className="lead">
              Trusted by Switzerland's leading companies, universities, and innovation hubs.
              From global cloud providers to regional champions — we build partnerships that outlast single events.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: m ? "repeat(2, 1fr)" : "repeat(4, 1fr)", gap: 1, background: "var(--border)", border: "1px solid var(--border)", borderRadius: 12, overflow: "hidden" }}>
            {partners.map((p, i) => (
              <div key={i} style={{
                background: "var(--bg-elev)", padding: "48px 20px", minHeight: 140,
                display: "grid", placeItems: "center",
                fontFamily: "var(--display)", fontSize: 16, fontWeight: 500,
                color: "var(--text-dim)", textAlign: "center",
                transition: "all 0.3s", cursor: "pointer"
              }}
              onMouseEnter={e => { e.currentTarget.style.color = "var(--accent)"; e.currentTarget.style.background = "var(--accent-soft)"; }}
              onMouseLeave={e => { e.currentTarget.style.color = "var(--text-dim)"; e.currentTarget.style.background = "var(--bg-elev)"; }}>
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why partner */}
      <section className="section" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="container">
          <SectionLabel num="02" label="Why partner with START" />
          <div className="split" style={{ marginBottom: 64, alignItems: "end" }}>
            <h2 className="h-xl">
              A practical<br/>
              <span style={{ fontStyle: "italic", fontWeight: 300 }}>partnership</span><br/>
              <span className="accent">model<span style={{color:"var(--text)"}}>.</span></span>
            </h2>
            <p className="lead">
              Built around academic excellence, thought leadership, branding,
              and strong network effects across the Lemanic region.
            </p>
          </div>

          {/* Academic institutions strip */}
          <div style={{ display: "flex", gap: 24, marginBottom: 48, flexWrap: "wrap" }}>
            {["UNIL", "EPFL", "HEC Lausanne", "IMD", "ECAL"].map(u => (
              <div key={u} style={{
                padding: "14px 28px", border: "1.5px solid var(--text)", borderRadius: 999,
                fontFamily: "var(--display)", fontSize: 15, fontWeight: 700,
                color: "var(--text)", background: "transparent",
                letterSpacing: "-0.01em",
                transition: "all 0.2s", cursor: "default"
              }}
              onMouseEnter={e => { e.currentTarget.style.background = "var(--text)"; e.currentTarget.style.color = "var(--bg)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--text)"; }}>{u}</div>
            ))}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: m ? "1fr" : "repeat(2, 1fr)", gap: 1, background: "var(--border)", border: "1px solid var(--border)", borderRadius: 16, overflow: "hidden" }}>
            {whyPartner.map((w, i) => (
              <Reveal key={i} delay={i * 100}>
                <div style={{ background: "var(--bg-elev)", padding: m ? 24 : 40, minHeight: m ? "auto" : 240 }}>
                  <div style={{ fontSize: 32, color: "var(--accent)", marginBottom: 20 }}>{w.icon}</div>
                  <h3 className="h-md" style={{ marginBottom: 12 }}>{w.title}</h3>
                  <p style={{ color: "var(--text-dim)", fontSize: 15, lineHeight: 1.7 }}>{w.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What partners can do */}
      <section className="section" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="container">
          <SectionLabel num="03" label="Collaborate" />
          <div className="split" style={{ marginBottom: 64, alignItems: "end" }}>
            <h2 className="h-xl">
              What partners<br/>
              can <span className="accent">do with us.</span>
            </h2>
            <p className="lead">
              Multiple ways to engage with our entrepreneurial community —
              pick one, combine several, or co-design a new format.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: m ? "1fr" : "repeat(2, 1fr)", gap: 16 }}>
            {engagement.map((e, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="card" style={{ minHeight: 280, display: "flex", flexDirection: "column" }}>
                  <div style={{ fontSize: 28, color: "var(--accent)", marginBottom: 24 }}>{e.icon}</div>
                  <h3 className="h-md" style={{ marginBottom: 12, fontSize: 22 }}>{e.title}</h3>
                  <p style={{ color: "var(--text-dim)", fontSize: 14, lineHeight: 1.65, flex: 1 }}>{e.desc}</p>
                  <div className="mono-label" style={{ marginTop: 20, color: "var(--accent)" }}>→ Learn more</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery - expanding panels / accordion style */}
      <section className="section" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="container">
          <SectionLabel num="04" label="Gallery" />
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", marginBottom: 48, flexWrap: "wrap", gap: 24 }}>
            <h2 className="h-xl" style={{ maxWidth: "16ch" }}>
              Partners at<br/>our <span className="accent">events.</span>
            </h2>
            <p className="mono-label" style={{ maxWidth: 280 }}>Hover or tap a panel to expand · {galleryImages.length} moments captured</p>
          </div>

          {/* Expanding panels — hover-to-expand, no nav arrows */}
          <div className="gallery-panels" style={{ display: "flex", flexDirection: m ? "column" : "row", gap: 12, height: m ? "auto" : 480, width: "100%" }}>
            {galleryImages.map((img, i) => (
              <div key={i}
                   onMouseEnter={() => setGalleryIdx(i)}
                   onClick={() => setGalleryIdx(i)}
                   className="gallery-panel"
                   style={{
                     flex: m ? "none" : (galleryIdx === i ? "6 1 0" : "1 1 0"),
                     height: m ? (galleryIdx === i ? 280 : 60) : undefined,
                     backgroundImage: `url(${img.src})`,
                     backgroundSize: "cover", backgroundPosition: "center",
                     borderRadius: 16, border: "1px solid " + (galleryIdx === i ? "var(--accent)" : "var(--border)"),
                     position: "relative", cursor: "pointer",
                     transition: "all 0.6s cubic-bezier(0.65, 0, 0.35, 1)",
                     overflow: "hidden", minWidth: m ? undefined : 60
                   }}>
                <div style={{
                  position: "absolute", inset: 0,
                  background: galleryIdx === i
                    ? "linear-gradient(180deg, transparent 50%, rgba(0,0,44,0.9) 100%)"
                    : "linear-gradient(180deg, rgba(0,0,44,0.4), rgba(0,0,44,0.82))",
                  transition: "background 0.4s"
                }} />
                {/* Collapsed vertical label */}
                {galleryIdx !== i && (
                  <div style={{
                    position: m ? "relative" : "absolute", left: m ? 16 : "50%", top: m ? 20 : "50%",
                    transform: m ? "none" : "translate(-50%, -50%) rotate(-90deg)",
                    whiteSpace: "nowrap",
                    fontFamily: "var(--body)", fontSize: 10, color: "rgba(255,255,255,0.82)", fontWeight: 600,
                    textTransform: "uppercase", letterSpacing: "0.16em"
                  }}>{String(i + 1).padStart(2, "0")} · {img.label}</div>
                )}
                {/* Expanded label */}
                {galleryIdx === i && (
                  <div style={{
                    position: "absolute", left: 28, bottom: 28, right: 28,
                    display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 16
                  }}>
                    <div>
                      <div className="mono-label" style={{ color: "var(--accent)", marginBottom: 8 }}>
                        {String(i + 1).padStart(2, "0")} / {String(galleryImages.length).padStart(2, "0")}
                      </div>
                      <div style={{ fontFamily: "var(--display)", fontSize: 24, fontWeight: 500, color: "var(--text)" }}>
                        {img.label}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Progress indicator */}
          <div style={{ display: "flex", gap: 6, marginTop: 24, justifyContent: "center" }}>
            {galleryImages.map((_, i) => (
              <button key={i} onClick={() => setGalleryIdx(i)} style={{
                width: 40, height: 3, background: i === galleryIdx ? "var(--accent)" : "var(--border)",
                border: "none", borderRadius: 2, cursor: "pointer", padding: 0, transition: "background 0.3s"
              }} aria-label={`Show ${galleryImages[i].label}`} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="container">
          <SectionLabel num="05" label="Have questions?" />
          <div className="split" style={{ alignItems: "start" }}>
            <div style={{ position: m ? "static" : "sticky", top: 100 }}>
              <h2 className="h-xl" style={{ marginBottom: 32 }}>
                Frequently<br/>asked<br/><span className="accent">questions<span style={{color:"var(--text)"}}>.</span></span>
              </h2>
              <p className="lead">Everything you need to know about partnering with START Lausanne.</p>
            </div>
            <div>
              {faqs.map((f, i) => (
                <div key={i}
                     onClick={() => setFaqOpen(faqOpen === i ? -1 : i)}
                     style={{
                       borderTop: "1px solid var(--border)",
                       borderBottom: i === faqs.length - 1 ? "1px solid var(--border)" : "none",
                       padding: "24px 0", cursor: "pointer"
                     }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: m ? 12 : 24 }}>
                    <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
                      <span className="mono-label" style={{ color: "var(--accent)" }}>0{i+1}</span>
                      <span style={{ fontFamily: "var(--display)", fontWeight: 400, fontSize: m ? 16 : "clamp(20px, 2.2vw, 32px)", lineHeight: 1.15 }}>{f.q}</span>
                    </div>
                    <span style={{
                      width: 32, height: 32, borderRadius: "50%", border: "1px solid var(--border-strong)",
                      display: "grid", placeItems: "center", flexShrink: 0, transition: "all 0.3s",
                      background: faqOpen === i ? "var(--accent)" : "transparent",
                      color: faqOpen === i ? "var(--bg)" : "var(--text)",
                      transform: faqOpen === i ? "rotate(45deg)" : "none"
                    }}>+</span>
                  </div>
                  <div style={{
                    maxHeight: faqOpen === i ? 400 : 0, overflow: "hidden",
                    transition: "all 0.4s ease", color: "var(--text-dim)",
                    paddingLeft: 44, paddingTop: faqOpen === i ? 16 : 0, fontSize: 15, lineHeight: 1.7
                  }}>
                    {f.a}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="card card-glass" style={{ padding: m ? "40px 20px" : "80px 48px", textAlign: "center", position: "relative", overflow: "hidden" }}>
            <div style={{
              position: "absolute", inset: 0,
              background: "radial-gradient(ellipse at center, var(--accent-glow) 0%, transparent 70%)",
              opacity: 0.4, pointerEvents: "none"
            }} />
            <div style={{ position: "relative", zIndex: 2 }}>
              <Eyebrow>Let's connect</Eyebrow>
              <h2 className="h-display" style={{ marginTop: 32, marginBottom: 32 }}>
                Ready to<br/><span className="accent">partner?</span>
              </h2>
              <p className="lead" style={{ margin: "0 auto 40px", maxWidth: "60ch" }}>
                Join our network of leading companies and get in touch with ambitious
                students from UNIL, EPFL, HEC Lausanne and IMD.
              </p>
              <div style={{ display: "inline-flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
                <Btn primary href="mailto:president@startlausanne.ch?subject=Partnership%20inquiry">Get in touch</Btn>
                <Btn href="mailto:info@startlausanne.ch">Email us</Btn>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

window.PartnersPage = PartnersPage;
