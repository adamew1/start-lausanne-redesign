// Both pages use this directory, including supporters of individual events.
const PARTNER_GROUPS = [
  {
    title: "Entrepreneurship partners",
    description: "We organise activities and events together.",
    partners: [
      { name: "HEC Lausanne", logo: "hec-lausanne.png", url: "https://www.unil.ch/hec" },
      { name: "EPFL", logo: "epfl.png", url: "https://www.epfl.ch/" },
      { name: "HUB Entrepreneuriat et Innovation", logo: "hub.png", url: "https://ucreate.ch/" },
      { name: "EHL Innovation Hub", logo: "ehl-innovation-hub.svg", url: "https://innovationhub.ehl.edu/" },
      { name: "Venturelab", logo: "venturelab.svg", url: "https://www.venturelab.swiss/" },
      { name: "Génération Entrepreneurs", logo: "generation-entrepreneurs.png", url: "https://www.generation-entrepreneurs.com/", dark: true },
    ],
  },
  {
    title: "Sponsors and supporters",
    description: "These organisations have contributed funding, prizes or services to our events.",
    partners: [
      { name: "QoQa", logo: "qoqa.png", url: "https://www.qoqa.ch/" },
      { name: "Walder Wyss", logo: "walderwyss-logo.png", url: "https://www.walderwyss.com/" },
      { name: "GENILEM", logo: "genilem.png", url: "https://genilem.ch/" },
      { name: "Infomaniak", logo: "infomaniak.webp", url: "https://www.infomaniak.com/" },
      { name: "BluePoint Distribution", logo: "bluepoint.svg", url: "https://bluepointdistribution.com/", event: "START Contest 2024–25" },
      { name: "FOCUSWATER", logo: "focuswater.svg", url: "https://focuswater.ch/", event: "START Contest 2024–25" },
      { name: "Forum EPFL", logo: "forum-epfl.png", url: "https://forum-epfl.ch/" },
      { name: "IMD MBA students", url: "https://www.imd.org/degree/mba/", event: "Provided the Audience Award for START Contest 2025–26" },
    ],
  },
];

function SponsorGrid({ compact = false }) {
  return PARTNER_GROUPS.map(group => (
    <section className="partner-group" key={group.title} aria-label={group.title}>
      <h3 className="h-md">{group.title}</h3>
      <p>{group.description}</p>
      <ul className={"sponsor-grid" + (compact ? " sponsor-grid--compact" : "")}>
        {group.partners.map(partner => (
          <li key={partner.name}>
            <a className={"sponsor-card" + (partner.dark ? " sponsor-card--dark" : "")}
               href={partner.url} target="_blank" rel="noopener noreferrer">
              {partner.logo && (
                <span className="sponsor-card-logo">
                  <img src={"/src/images/partners/" + partner.logo} alt="" loading="lazy" decoding="async" />
                </span>
              )}
              <span className="sponsor-card-name">{partner.name}{partner.event && <small>{partner.event}</small>}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  ));
}

// The fixed banner uses the artwork and destinations from the site's sponsor strip.
const PARTNER_BANNERS = [
  { name: "FAE", image: "fae.webp", url: "https://fae-unil.ch/" },
  { name: "FiduConsult", image: "fiduconsult.webp", url: "https://fiduconsult.ch/" },
  { name: "Brands for Students", image: "brands-for-students.webp", url: "https://brandsforstudents.ch/" },
  { name: "Afiro", image: "afiro.webp", url: "https://www.afiro.ch/" },
  { name: "Peace Tea", image: "peace-tea.webp", url: "https://www.coca-cola.com/ch/fr/offerings/peacetea" },
  { name: "ScoreStudies", image: "scorestudies.webp", url: "https://scorestudies.ch/" },
];

function PartnerBanner() {
  const viewport = React.useRef(null);
  const resumeAfter = React.useRef(0);
  const [paused, setPaused] = React.useState(false);

  React.useEffect(() => {
    if (paused) return;
    const strip = viewport.current;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const hover = window.matchMedia("(hover: hover)");
    let frame, previous, remainder = 0;

    function advance(now) {
      const elapsed = Math.min(now - (previous ?? now), 64);
      previous = now;
      if (now > resumeAfter.current && !(hover.matches && strip.matches(":hover")) && !strip.querySelector(":focus-visible")) {
        const distance = remainder + elapsed * 0.045;
        const pixels = Math.floor(distance);
        remainder = distance - pixels;
        // Both copies have the same width. Crossing the seam keeps the next frame continuous.
        strip.scrollLeft = (strip.scrollLeft + pixels) % strip.firstElementChild.offsetWidth;
      }
      frame = requestAnimationFrame(advance);
    }
    function syncMotion() {
      cancelAnimationFrame(frame);
      previous = undefined;
      if (!motion.matches && !document.hidden) frame = requestAnimationFrame(advance);
    }
    syncMotion();
    motion.addEventListener("change", syncMotion);
    document.addEventListener("visibilitychange", syncMotion);
    return () => {
      cancelAnimationFrame(frame);
      motion.removeEventListener("change", syncMotion);
      document.removeEventListener("visibilitychange", syncMotion);
    };
  }, [paused]);

  function allowManualScroll() { resumeAfter.current = performance.now() + 2000; }

  return (
    <aside className="partner-banner" aria-labelledby="partner-banner-title">
      <div className="partner-banner-header">
        <h2 id="partner-banner-title">Our Partners</h2>
        <button type="button" className="partner-banner-toggle" onClick={() => setPaused(!paused)}>
          {paused ? "Resume scrolling" : "Pause scrolling"}
        </button>
      </div>
      <div className="partner-banner-strip" ref={viewport} onTouchMove={allowManualScroll} onTouchEnd={allowManualScroll} onWheel={allowManualScroll}>
        {[false, true].map(copy => (
          <div className="partner-banner-set" key={String(copy)} aria-hidden={copy || undefined}>
            {PARTNER_BANNERS.map(partner => (
              <a key={partner.name} href={partner.url} target="_blank" rel="noopener noreferrer" tabIndex={copy ? -1 : undefined}>
                <img src={"/src/images/partners/banners/" + partner.image} alt={partner.name} width="1200" height="200" />
              </a>
            ))}
          </div>
        ))}
      </div>
    </aside>
  );
}
