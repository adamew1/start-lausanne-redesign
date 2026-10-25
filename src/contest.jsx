// Start Contest — event detail page
// All facts sourced from the START Lausanne PDF fact sheet.
const ContestPage = () => {
  const m = useIsMobile();
  const base = EVENTS.find(e => e.id === "contest");
  const event = {
    ...base,
    media: [
      {
        type: "photo",
        src: "src/images/contest2026/2.jpg",
        alt: "Contest event"
      },
      {
        type: "photo",
        src: "src/images/contest2026/3.jpg",
        alt: "Contest event"
      },
      {
        type: "photo",
        src: "src/images/contest2026/1.jpg",
        alt: "Contest event"
      },
      {
        type: "photo",
        src: "src/images/contest2026/6.jpg",
        alt: "Contest event"
      },
      {
        type: "photo",
        src: "src/images/contest2026/7.jpg",
        alt: "Contest event"
      },
      {
        type: "photo",
        src: "src/images/contest2026/8.jpg",
        alt: "Contest event"
      },
      {
        type: "photo",
        src: "src/images/contest2026/9.jpg",
        alt: "Contest event"
      },
      {
        type: "photo",
        src: "src/images/contest2026/10.jpg",
        alt: "Contest event"
      },
      {
        type: "video",
        src: "src/images/contest2026/videos/1V.mp4",
      },
      {
        type: "video",
        src: "src/images/contest2026/videos/2V.mp4",
        muted: true,
      },
    ],
    fullDescription: "The START Contest is START Lausanne's flagship competition, open to Bachelor, Master and PhD students enrolled at any Haute École recognized in Switzerland under the LEHE, primarily across Suisse romande. Over six months — from late October to early May — the contest guides teams from a first idea through a series of workshops and eliminatory evaluation stages to a live grand finale, with mentoring, workshops, networking and access to the entrepreneurial ecosystem all along the way.",
    highlights: [
      "Four structured phases: Preparation, Launch, Coaching & Selection, Grand Finale",
      "Up to CHF 40'000 in total prizes across three laureates",
      "Mentoring, workshops and networking throughout the program",
    ],
    whatYouGet: ["Mentoring", "Workshops", "Networking", "Ecosystem access"],
  };

  const stages = [
    { n: "01", t: "Elevator Pitch", d: "Evaluating the clarity and coherence of the idea." },
    { n: "02", t: "Value Proposition", d: "Validating the relevance of the problem and the solution." },
    { n: "03", t: "Business Model", d: "Analyzing the economic viability of the project." },
    { n: "04", t: "Pitch Deck", d: "Structuring and presenting a complete project." },
  ];

  return (
    <EventDetailShell event={event}>
      <div className="card" style={{ padding: 32 }}>
        <DetailHeading>How the Contest Unfolds</DetailHeading>
        <p style={{ color: "var(--text-dim)", fontSize: 15, lineHeight: 1.7, marginBottom: 28 }}>
          Preparation and Launch open the contest; four eliminatory stages make up Coaching & Selection; the Grand Finale closes it out in front of a jury.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: m ? "1fr 1fr" : "repeat(4, 1fr)", gap: 1, background: "var(--border)", border: "1px solid var(--border)", borderRadius: 16, overflow: "hidden" }}>
          {stages.map((s) => (
            <div key={s.n} style={{ background: "var(--bg-elev)", padding: m ? 18 : 24, minHeight: m ? "auto" : 180 }}>
              <div className="mono-label" style={{ color: "var(--accent)", marginBottom: 14 }}>Stage {s.n}</div>
              <div style={{ fontFamily: "var(--display)", fontWeight: 700, fontSize: 17, marginBottom: 8, color: "#fff" }}>{s.t}</div>
              <p style={{ color: "var(--text-dim)", fontSize: 13, lineHeight: 1.6 }}>{s.d}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="card" style={{ padding: 32 }}>
        <DetailHeading>What You Win</DetailHeading>
        <div style={{ display: "grid", gridTemplateColumns: m ? "1fr" : "repeat(3, 1fr)", gap: 16 }}>
          {[
            { n: "CHF 40'000", l: "total prize pool", d: "Shared between the three laureates, plus additional benefits from our partners." },
            { n: "CHF 20'000", l: "top prize", d: "Awarded to the first-place team at the Grand Finale." },
            { n: "3 teams", l: "walk away with prizes", d: "No strings attached, no equity taken." },
          ].map((p, i) => (
            <div key={i} style={{ background: "var(--bg-elev)", border: "1px solid var(--border)", borderRadius: "var(--rad-md)", padding: 24 }}>
              <div className="h-lg text-gradient" style={{ marginBottom: 8 }}>{p.n}</div>
              <div className="mono-label" style={{ marginBottom: 12 }}>{p.l}</div>
              <p style={{ color: "var(--text-dim)", fontSize: 13, lineHeight: 1.6 }}>{p.d}</p>
            </div>
          ))}
        </div>
      </div>
    </EventDetailShell>
  );
};
window.ContestPage = ContestPage;
