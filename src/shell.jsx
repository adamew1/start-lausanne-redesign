// Shell: nav, footer, router, shared components
const { useState, useEffect, useRef, useCallback } = React;

const APPLY_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdcO7pHHQ0QWZKtnIXbW19YEbrD8XMyV6MfgVqRewz5N5yX8Q/viewform?usp=dialog";

// Responsive hook
function useIsMobile(breakpoint = 768) {
  const [mobile, setMobile] = React.useState(window.innerWidth <= breakpoint);
  React.useEffect(() => {
    const h = () => setMobile(window.innerWidth <= breakpoint);
    window.addEventListener("resize", h);
    return () => window.removeEventListener("resize", h);
  }, [breakpoint]);
  return mobile;
}

// ============ Logo mark (recreated START-network style badge, not Helsinki's actual file) ============
function LogoMark({ size = 30 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" className="nav-logo-mark" aria-hidden="true">
      <circle cx="32" cy="32" r="29" fill="var(--bg-dark)" stroke="var(--accent)" strokeWidth="3" />
      <path d="M19 41 L32 17 L45 41" stroke="var(--accent)" strokeWidth="4.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ============ Navigation ============
function Nav({ route, setRoute }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const links = [
    { id: "home", label: "Home" },
    { id: "events", label: "Events" },
    { id: "about", label: "About" },
    { id: "partners", label: "Partners" },
  ];
  const activeIds = { home: "home", events: "events", rtss: "events", contest: "events", about: "about", partners: "partners" };
  return (
    <nav className={"nav " + (mobileOpen ? "mobile-open" : "")}>
      <div className="nav-inner">
        <div className="nav-logo" onClick={() => { setRoute("home"); setMobileOpen(false); }}>
          <LogoMark />
          <div className="nav-logo-divider" />
          <div className="nav-logo-word">
            <b>START</b>
            <span>LAUSANNE</span>
          </div>
        </div>
        <div className="nav-links">
          {links.map(l => (
            <div key={l.id}
                 className={"nav-link " + (activeIds[route] === l.id ? "active" : "")}
                 onClick={() => { setRoute(l.id); setMobileOpen(false); }}>
              {l.label}
            </div>
          ))}
        </div>
        <button className="nav-cta" onClick={() => window.open(APPLY_URL, "_blank")}>
          Apply now ↗
        </button>
        <button className="nav-burger" onClick={() => setMobileOpen(v => !v)}>
          {mobileOpen ? "Close" : "Menu"}
        </button>
      </div>
    </nav>
  );
}

// ============ Footer ============
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <h4 style={{ color: "#fff", fontSize: 17, textTransform: "none", letterSpacing: "-0.01em", marginBottom: 16 }}>START LAUSANNE</h4>
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 14, lineHeight: 1.7, maxWidth: 260 }}>
              Connecting the next generation of entrepreneurs across the global START Network.
            </p>
          </div>
          <div className="footer-col">
            <h4>Connect</h4>
            <span style={{ display: "block", color: "rgba(255,255,255,0.4)", padding: "6px 0", fontSize: 14, fontWeight: 500 }}>Instagram</span>
            <span style={{ display: "block", color: "rgba(255,255,255,0.4)", padding: "6px 0", fontSize: 14, fontWeight: 500 }}>LinkedIn</span>
            <span style={{ display: "block", color: "rgba(255,255,255,0.4)", padding: "6px 0", fontSize: 14, fontWeight: 500 }}>YouTube</span>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <a href="mailto:info@startlausanne.ch">info@startlausanne.ch</a>
            <a href="mailto:partnerships@startlausanne.ch">partnerships@startlausanne.ch</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ============ Shared components ============
function Eyebrow({ children }) {
  return (
    <span className="badge-pill">
      <span className="dot" />
      {children}
    </span>
  );
}

function GradBar({ style }) {
  return <div className="grad-bar" style={{ marginBottom: 32, ...style }} />;
}

function GlowOrb({ top, left, right, bottom, size = 500, color = "var(--accent)", opacity = 0.2 }) {
  return (
    <div className="glow-orb" style={{
      top, left, right, bottom, width: size, height: size,
      background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
      opacity
    }} />
  );
}

function Tag({ children, accent }) {
  return <span className={"tag " + (accent ? "tag-accent" : "")}>{children}</span>;
}

function Btn({ children, primary, accent, onClick, href }) {
  const cls = "btn " + (primary ? "btn-primary " : "") + (accent ? "btn-outline-accent " : "");
  const content = <>{children}<span className="arrow" /></>;
  if (href) return <a className={cls} href={href} target="_blank" rel="noopener">{content}</a>;
  return <button className={cls} onClick={onClick}>{content}</button>;
}

// Reveal on scroll
function Reveal({ children, delay = 0, style }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          setTimeout(() => el.classList.add("in"), delay);
          obs.unobserve(el);
        }
      });
    }, { threshold: 0.12 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  return <div ref={ref} className="reveal" style={style}>{children}</div>;
}

// Animated counter
function Counter({ to, prefix = "", suffix = "", duration = 1800 }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const start = performance.now();
          const tick = (t) => {
            const p = Math.min(1, (t - start) / duration);
            const eased = 1 - Math.pow(1 - p, 3);
            setVal(Math.floor(to * eased));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          obs.unobserve(el);
        }
      });
    }, { threshold: 0.4 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [to, duration]);
  return <span ref={ref}>{prefix}{val.toLocaleString()}{suffix && <span style={{ color: "var(--accent)" }}>{suffix}</span>}</span>;
}

// Section heading with label + counter
function SectionLabel({ num, label }) {
  return (
    <div style={{
      display: "flex", alignItems: "center", gap: 18,
      fontFamily: "var(--body)", fontSize: 11, color: "var(--text-mute)",
      textTransform: "uppercase", letterSpacing: "0.14em", marginBottom: 36, fontWeight: 600
    }}>
      <span style={{ color: "var(--accent)", fontWeight: 700 }}>— {num}</span>
      <span style={{ flex: 1, height: 1, background: "var(--border)" }} />
      <span>{label}</span>
    </div>
  );
}

// Marquee row
function Marquee({ items, speed = 40 }) {
  const copies = [...items, ...items, ...items];
  return (
    <div className="marquee">
      <div className="marquee-track" style={{ animationDuration: `${speed}s` }}>
        {copies.map((it, i) => <div key={`mq-${i}`}>{it}</div>)}
      </div>
    </div>
  );
}

// Vertical auto-scrolling ticker (used for the network city list)
function MarqueeVertical({ items, speed = 22 }) {
  const copies = [...items, ...items, ...items];
  return (
    <div className="marquee-v">
      <div className="marquee-v-track" style={{ animationDuration: `${speed}s` }}>
        {copies.map((it, i) => <div key={`mqv-${i}`} className="marquee-v-item">{it}</div>)}
      </div>
    </div>
  );
}

// Image with optional label
function Img({ src, label, style, ratio = "4/3", position = "center" }) {
  return (
    <div className="img-placeholder" style={{ backgroundImage: `url(${src})`, aspectRatio: ratio, backgroundPosition: position, ...style }}>
      {label && (
        <div style={{
          position: "absolute", left: 16, bottom: 16, zIndex: 2,
          fontFamily: "var(--body)", fontSize: 11, color: "#fff", fontWeight: 600,
          textTransform: "uppercase", letterSpacing: "0.12em",
          background: "rgba(8,8,10,0.86)", backdropFilter: "blur(10px)",
          padding: "7px 12px", borderRadius: 999, border: "1px solid rgba(255,255,255,0.18)"
        }}>{label}</div>
      )}
    </div>
  );
}

// ============ Shared event-detail template (mirrors starthelsinki.com/events/:id) ============
function DetailIcon({ type, size = 16 }) {
  const paths = {
    calendar: <><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></>,
    clock: <><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></>,
    pin: <><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></>,
    check: <polyline points="20 6 9 17 4 12" />,
    people: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></>,
    globe: <><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></>,
    briefcase: <><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></>,
    heart: <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.8 1-1a5.5 5.5 0 0 0 0-7.6Z" />,
    book: <><path d="M2 4h6a4 4 0 0 1 4 4v12a3 3 0 0 0-3-3H2Z" /><path d="M22 4h-6a4 4 0 0 0-4 4v12a3 3 0 0 1 3-3h7Z" /></>,
    rocket: <><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09Z" /><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2Z" /><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" /><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" /></>,
    award: <><circle cx="12" cy="8" r="6" /><path d="M15.5 13.5 17 22l-5-3-5 3 1.5-8.5" /></>,
    target: <><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></>,
    building: <><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" /><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" /><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" /><path d="M10 6h4" /><path d="M10 10h4" /><path d="M10 14h4" /><path d="M10 18h4" /></>,
  };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {paths[type]}
    </svg>
  );
}

function DetailFactPill({ icon, children }) {
  return (
    <div style={{
      display: "inline-flex", alignItems: "center", gap: 10,
      padding: "12px 20px", borderRadius: 999, border: "1px solid var(--border-strong)",
      color: "var(--text)", fontFamily: "var(--body)", fontSize: 14
    }}>
      <span style={{ color: "var(--accent)", display: "flex" }}><DetailIcon type={icon} /></span>
      {children}
    </div>
  );
}

function DetailCheckList({ items }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      {items.map((it, i) => (
        <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
          <span style={{ width: 20, height: 20, borderRadius: "50%", background: "var(--accent-soft)", color: "var(--accent)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
            <span style={{ transform: "scale(0.7)", display: "flex" }}><DetailIcon type="check" /></span>
          </span>
          <span style={{ color: "var(--text-dim)", fontSize: 14, lineHeight: 1.5 }}>{it}</span>
        </div>
      ))}
    </div>
  );
}

function DetailHeading({ children, size = "md" }) {
  return (
    <h3 style={{
      fontFamily: "var(--display)", fontWeight: 800, textTransform: "uppercase",
      letterSpacing: "-0.01em",
      fontSize: size === "sm" ? "clamp(15px, 1.4vw, 18px)" : "clamp(20px, 2.2vw, 30px)",
      color: "#fff",
      margin: size === "sm" ? "0 0 14px" : "0 0 24px"
    }}>{children}</h3>
  );
}

function DetailVideoBlock({ video }) {
  if (video) {
    return (
      <video controls style={{ width: "100%", aspectRatio: "16/9", borderRadius: "var(--rad-md)", display: "block", background: "#000" }}>
        <source src={video} />
      </video>
    );
  }
  return (
    <div style={{
      position: "relative", aspectRatio: "16/9", borderRadius: "var(--rad-md)",
      background: "var(--bg-elev)", border: "1px solid var(--border)",
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 14
    }}>
      <div style={{ width: 64, height: 64, borderRadius: "50%", border: "2px solid var(--accent)", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ width: 0, height: 0, borderTop: "10px solid transparent", borderBottom: "10px solid transparent", borderLeft: "16px solid var(--accent)", marginLeft: 4 }} />
      </div>
      <span style={{ color: "var(--text-mute)", fontFamily: "var(--body)", fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.14em" }}>Video coming soon</span>
    </div>
  );
}

function EventMediaGallery({ media = [] }) {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = ["all", "photo", "video"];

  const visibleMedia = media.filter(
    (item) => activeFilter === "all" || item.type === activeFilter
  );

  return (
    <div>
      {/* Filter buttons */}
      <div
        style={{
          display: "flex",
          gap: 12,
          marginBottom: 24,
          flexWrap: "wrap",
        }}
      >
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            aria-pressed={activeFilter === filter}
            style={{
              padding: "10px 20px",
              borderRadius: 999,
              cursor: "pointer",
              fontFamily: "var(--body)",
              fontWeight: 600,
              border: "1px solid var(--border-strong)",
              background:
                activeFilter === filter
                  ? "var(--accent)"
                  : "var(--bg-elev)",
              color: activeFilter === filter ? "#fff" : "var(--text)",
            }}
          >
            {filter === "all"
              ? "All"
              : filter === "photo"
              ? "Photos"
              : "Videos"}
          </button>
        ))}
      </div>

      {/* Media grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))",
          gap: 16,
        }}
      >
        {visibleMedia.map((item, index) => (
          <div key={item.src + index}>
            {item.type === "photo" ? (
              <img
                src={item.src}
                alt={item.alt || "Event photo"}
                loading="lazy"
                style={{
                  width: "100%",
                  aspectRatio: "4/3",
                  objectFit: "cover",
                  borderRadius: "var(--rad-md)",
                  display: "block",
                }}
              />
            ) : (
              <video
                src={item.src}
                controls
                muted
                preload="metadata"
                style={{
                  width: "100%",
                  aspectRatio: "4/3",
                  objectFit: "cover",
                  borderRadius: "var(--rad-md)",
                  display: "block",
                  background: "#000",
                }}
              />
            )}
          </div>
        ))}
      </div>

      {visibleMedia.length === 0 && (
        <p style={{ color: "var(--text-mute)", marginTop: 16 }}>
          No media available yet.
        </p>
      )}
    </div>
  );
}

function EventDetailShell({ event, children }) {
  const m = useIsMobile();
  return (
    <>
      <section style={{ position: "relative", paddingTop: 160, paddingBottom: 80, overflow: "hidden" }}>
        <GlowOrb top="-20%" right="-10%" size={700} color="var(--accent)" opacity={0.18} />
        <GlowOrb bottom="-30%" left="-10%" size={600} color="var(--secondary)" opacity={0.14} />
        <div className="container" style={{ position: "relative" }}>
          <div onClick={() => window.__setRoute("events")} style={{ display: "inline-flex", alignItems: "center", gap: 8, cursor: "pointer", color: "var(--text-mute)", marginBottom: 40, fontSize: 13, fontWeight: 600 }}>← Back to Events</div>
          <h1 className="h-display text-gradient" style={{ maxWidth: "18ch" }}>{event.title}</h1>
          <p className="lead" style={{ marginTop: 32, maxWidth: "60ch" }}>{event.shortDescription}</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 32 }}>
            <DetailFactPill icon="calendar">{event.details.date}</DetailFactPill>
            <DetailFactPill icon="clock">{event.details.duration}</DetailFactPill>
            <DetailFactPill icon="pin">{event.details.location}</DetailFactPill>
          </div>
        </div>
      </section>

      <section className="section" style={{ borderTop: "1px solid var(--border)", background: "var(--bg)" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: m ? "1fr" : "2fr 1fr", gap: m ? 48 : 64, alignItems: "start" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
            <div>
              <DetailHeading>About This Event</DetailHeading>
              <p style={{ color: "var(--text-dim)", fontSize: 16, lineHeight: 1.7 }}>{event.fullDescription}</p>
            </div>

            <div>
              <DetailHeading>Event Highlights</DetailHeading>
              <EventMediaGallery media={event.media || []} />
            </div>

            {children}
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16, position: m ? "static" : "sticky", top: 110 }}>
            {event.highlights && (
              <div className="card" style={{ padding: 18 }}>
                <DetailHeading size="sm">Event Highlights</DetailHeading>
                <DetailCheckList items={event.highlights} />
              </div>
            )}

            {event.whatYouGet && (
              <div className="card" style={{ padding: 18 }}>
                <DetailHeading size="sm">What You Get</DetailHeading>
                <DetailCheckList items={event.whatYouGet} />
              </div>
            )}

            <div className="card" style={{ padding: 18, textAlign: "center", borderColor: "var(--accent)" }}>
              <DetailHeading size="sm">Interested?</DetailHeading>
              <p style={{ color: "var(--text-dim)", fontSize: 13, marginBottom: 16 }}>Join START Lausanne to participate in this event.</p>
              <Btn accent href={APPLY_URL}>Apply Now</Btn>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// ============ Shared event data (source: PDF fact sheet + starthelsinki.com/events/1) ============
const EVENTS = [
  {
    id: "rtss", clickable: true, icon: "🚀",
    title: "Road to START Summit",
    shortDescription: "Annual pitch competition connecting early‑stage startups to investors and opportunities.",
    image: "src/images/summit.jpeg",
    imagePosition: "center 88%",
    details: { date: "TBD", duration: "Single day", location: "Lausanne" },
  },
  {
    id: "contest", clickable: true, icon: "🏆",
    title: "Start Contest",
    shortDescription: "A six-month startup competition — develop your idea through elimination stages and compete for CHF 40'000 in prizes.",
    image: "src/images/contest.jpeg",
    details: { date: "Late Oct – Early May", duration: "6 months", location: "Lausanne · UNIL & EPFL" },
  },
  {
    id: "hackathon", clickable: false, icon: "⚡",
    title: "Start Hackathon",
    shortDescription: "An intensive two-day sprint where student teams build innovative solutions to real-world challenges set by our partners.",
    image: "src/images/hack.webp",
    details: { date: "TBD", duration: "2 days", location: "Lausanne" },
  },
  {
    id: "gew", clickable: false, icon: "🌍",
    title: "Start GEW",
    shortDescription: "A week of workshops and conferences dedicated to entrepreneurship and skills development, part of Global Entrepreneurship Week.",
    image: "src/images/gew.jpeg",
    details: { date: "November", duration: "1 week", location: "Lausanne" },
  },
];

// Expose globals
Object.assign(window, { Nav, Footer, LogoMark, Eyebrow, GradBar, GlowOrb, Tag, Btn, Reveal, Counter, SectionLabel, Marquee, MarqueeVertical, Img, useIsMobile, APPLY_URL, EVENTS, EventDetailShell, DetailHeading, DetailCheckList, DetailFactPill, DetailIcon });
