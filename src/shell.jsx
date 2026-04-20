// Shell: nav, footer, router, shared components
const { useState, useEffect, useRef, useCallback } = React;

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

// ============ Navigation ============
function Nav({ route, setRoute }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const links = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "team", label: "Team" },
    { id: "contest", label: "Contest" },
    { id: "hackathon", label: "Hackathon" },
    { id: "rtss", label: "RtSS" },
    { id: "partners", label: "Partners" },
  ];
  return (
    <nav className={"nav " + (mobileOpen ? "mobile-open" : "")}>
      <div className="nav-inner">
        <div className="nav-logo" onClick={() => { setRoute("home"); setMobileOpen(false); }}>
          <span className="nav-logo-mark" />
          <span>START<span className="accent">.</span>lausanne</span>
        </div>
        <div className="nav-links">
          {links.map(l => (
            <div key={l.id}
                 className={"nav-link " + (route === l.id ? "active" : "")}
                 onClick={() => { setRoute(l.id); setMobileOpen(false); }}>
              {l.label}
            </div>
          ))}
        </div>
        <button className="nav-cta" onClick={() => window.open("https://noteforms.com/forms/candidatures-recrutement-printemps-2026-td0wt8", "_blank")}>
          Join us ↗
        </button>
        <button className="nav-burger" onClick={() => setMobileOpen(v => !v)}>
          {mobileOpen ? "Close" : "Menu"}
        </button>
      </div>
    </nav>
  );
}

// ============ Footer ============
function Footer({ setRoute }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-big">START<span style={{ color: "var(--accent)", WebkitTextStroke: "1.5px var(--accent)" }}>.</span></div>
        <div className="footer-grid">
          <div className="footer-col">
            <h4>Contact</h4>
            <div style={{ color: "#fff", fontSize: 15, marginBottom: 8, fontWeight: 600 }}>Riad Mehmeti</div>
            <a href="mailto:president@startlausanne.ch">president@startlausanne.ch</a>
            <a href="tel:+41763815958">+41 76 381 59 58</a>
            <a href="mailto:info@startlausanne.ch">info@startlausanne.ch</a>
          </div>
          <div className="footer-col">
            <h4>Navigate</h4>
            <a onClick={() => setRoute("home")}>Home</a>
            <a onClick={() => setRoute("about")}>About</a>
            <a onClick={() => setRoute("team")}>Team</a>
          </div>
          <div className="footer-col">
            <h4>Events</h4>
            <a onClick={() => setRoute("contest")}>Contest</a>
            <a onClick={() => setRoute("hackathon")}>Hackathon</a>
            <a onClick={() => setRoute("rtss")}>RtSS</a>
            <a onClick={() => setRoute("partners")}>For Partners</a>
          </div>
          <div className="footer-col">
            <h4>Address</h4>
            <div style={{ color: "rgba(255,255,255,0.66)", fontSize: 14, lineHeight: 1.75, fontWeight: 500 }}>
              UNIL · Université de Lausanne<br/>
              Villanova · Quartier Sorge<br/>
              Route Cantonale 16<br/>
              CH-1015 Lausanne
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div>© 2026 START Lausanne · All rights reserved</div>
          <div>Made in Lausanne, Switzerland</div>
        </div>
      </div>
    </footer>
  );
}

// ============ Shared components ============
function Eyebrow({ children }) {
  return <span className="mono-eyebrow">{children}</span>;
}

function Tag({ children, accent }) {
  return <span className={"tag " + (accent ? "tag-accent" : "")}>{children}</span>;
}

function Btn({ children, primary, onClick, href }) {
  const cls = "btn " + (primary ? "btn-primary" : "");
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
  return <span ref={ref}>{prefix}{val.toLocaleString()}{suffix}</span>;
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

// Image with optional label
function Img({ src, label, style, ratio = "4/3" }) {
  return (
    <div className="img-placeholder" style={{ backgroundImage: `url(${src})`, aspectRatio: ratio, ...style }}>
      {label && (
        <div style={{
          position: "absolute", left: 16, bottom: 16, zIndex: 2,
          fontFamily: "var(--body)", fontSize: 11, color: "#fff", fontWeight: 600,
          textTransform: "uppercase", letterSpacing: "0.12em",
          background: "rgba(0,0,44,0.86)", backdropFilter: "blur(10px)",
          padding: "7px 12px", borderRadius: 999, border: "1px solid rgba(255,255,255,0.18)"
        }}>{label}</div>
      )}
    </div>
  );
}

// Expose globals
Object.assign(window, { Nav, Footer, Eyebrow, Tag, Btn, Reveal, Counter, SectionLabel, Marquee, Img, useIsMobile });
