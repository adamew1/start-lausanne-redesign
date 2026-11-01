// Road to START Summit — event detail page
// Copy reproduced from starthelsinki.com/events/1, Helsinki swapped for Lausanne.
const RTSS_STARTUP_LOGOS = [1, 2, 3, 4, 5, 6, 7, 8].map(n => `src/images/rtss2026/startups/startup-${n}.jpg`);
// Orbi registration link — the "Register Now" button does nothing until this is filled in.
const RTSS_REGISTER_URL = "https://orbi.io/l/YZdJIn0dme19vUZQ";

// Continuous logo strip: arrows step one logo and pause it, scrolling resumes shortly after the last click.
function StartupLogoCarousel({ logos, speed = 40, resumeDelay = 1500 }) {
  const m = useIsMobile();
  const tileWidth = m ? 280 : 320;
  const gap = 24;
  const step = tileWidth + gap;
  const loop = logos.length * step;
  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const offset = useRef(loop);
  const target = useRef(loop);
  const paused = useRef(false);
  const resumeTimer = useRef(null);

  useEffect(() => {
    offset.current = target.current = loop;
    let frame, last = performance.now();
    const tick = (now) => {
      const dt = Math.min(now - last, 100) / 1000;
      last = now;
      if (paused.current) offset.current += (target.current - offset.current) * Math.min(1, dt * 10);
      else target.current = offset.current += speed * dt;
      // Keep the visible window on the middle copy so the loop stays seamless in both directions.
      const shift = offset.current >= 2 * loop ? -loop : offset.current < loop ? loop : 0;
      offset.current += shift;
      target.current += shift;
      if (trackRef.current) trackRef.current.style.transform = `translateX(${-offset.current}px)`;
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(frame); clearTimeout(resumeTimer.current); };
  }, [loop, speed]);

  const move = (dir) => {
    if (!paused.current) { paused.current = true; target.current = offset.current; }
    clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => { paused.current = false; }, resumeDelay);
    // On mobile, land with one logo centred in the strip; on desktop, align a logo with the left edge.
    const align = m && viewportRef.current ? (viewportRef.current.clientWidth - tileWidth) / 2 : 0;
    target.current = (Math.round((target.current + align) / step) + dir) * step - align;
  };

  const arrow = (dir) => (
    <button type="button" aria-label={dir < 0 ? "Previous startups" : "Next startups"} onClick={() => move(dir)} style={{
      position: "absolute", top: "50%", [dir < 0 ? "left" : "right"]: 0, transform: "translateY(-50%)", zIndex: 2,
      width: m ? 32 : 40, height: m ? 32 : 40, borderRadius: 999, border: "1px solid var(--border)", background: "rgba(8,8,10,0.75)",
      color: "#fff", fontSize: 22, lineHeight: 1, cursor: "pointer", display: "grid", placeItems: "center"
    }}>{dir < 0 ? "‹" : "›"}</button>
  );

  return (
    <div style={{ position: "relative" }}>
      <div ref={viewportRef} style={{
        overflow: "hidden",
        maskImage: "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
        WebkitMaskImage: "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)"
      }}>
        <div ref={trackRef} style={{ display: "flex", gap, width: "max-content", willChange: "transform" }}>
          {[...logos, ...logos, ...logos].map((src, i) => (
            <div key={i} style={{ flexShrink: 0, width: tileWidth, aspectRatio: "16/9", borderRadius: 12, overflow: "hidden", border: "1px solid var(--border)" }}>
              <img src={src} alt="Participating startup logo" loading="lazy" decoding="async"
                   style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </div>
          ))}
        </div>
      </div>
      {arrow(-1)}
      {arrow(1)}
    </div>
  );
}

const RtssPage = () => {
  const base = EVENTS.find(e => e.id === "rtss");
  const event = {
    ...base,
    media: [
      {
        type: "photo",
        src: "src/images/rtss2026/1.JPG",
        alt: "Road to START Summit event"
      },
      {
        type: "photo",
        src: "src/images/rtss2026/2.JPG",
        alt: "Road to START Summit event"
      },
      {
        type: "photo",
        src: "src/images/rtss2026/3.JPG",
        alt: "Road to START Summit event"
      },
      {
        type: "photo",
        src: "src/images/rtss2026/4.JPG",
        alt: "Road to START Summit event"
      },
      {
        type: "photo",
        src: "src/images/rtss2026/6.JPG",
        alt: "Road to START Summit event"
      },
      {
        type: "photo",
        src: "src/images/rtss2026/7.JPG",
        alt: "Road to START Summit event"
      },
      {
        type: "photo",
        src: "src/images/rtss2026/8.JPG",
        alt: "Road to START Summit event"
      },
      {
        type: "photo",
        src: "src/images/rtss2026/9.JPG",
        alt: "Road to START Summit event"
      },
      {
        type: "photo",
        src: "src/images/rtss2026/10.JPG",
        alt: "Road to START Summit event"
      },
      {
        type: "photo",
        src: "src/images/rtss2026/5.JPG",
        alt: "Road to START Summit event"
      },
    ],
    fullDescription: "The Road to START Summit is a series of pitching events for early‑stage startups — compete for prizes and earn a chance to pitch at the START Summit with international founders and investors. Expect deep networking, expert feedback, and opportunities to grow your startup.",
    highlights: [
      "Pitch in front of investors and ecosystem partners",
      "Win prizes and opportunities for growth",
      "Connect with fellow founders",
    ],
    whatYouGet: ["Investor feedback", "Networking opportunities", "Experience pitching"],
  };
  return (
    <EventDetailShell event={event}>
      <div style={{ width: 0, minWidth: "100%" }}>
        <DetailHeading>Participating Startups</DetailHeading>
        <StartupLogoCarousel logos={RTSS_STARTUP_LOGOS} />
      </div>
      <div>
        <DetailHeading>Join the Adventure</DetailHeading>
        <p style={{ color: "var(--text-dim)", fontSize: 16, lineHeight: 1.7, marginBottom: 24 }}>
          Want to be part of the Road to START Summit? Seats are limited — save yours now by registering below.
        </p>
        <Btn accent href={RTSS_REGISTER_URL}>Register Now</Btn>
      </div>
    </EventDetailShell>
  );
};
window.RtssPage = RtssPage;
