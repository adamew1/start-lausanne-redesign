// Road to START Summit — event detail page
// Copy reproduced from starthelsinki.com/events/1, Helsinki swapped for Lausanne.
const RtssPage = () => {
  const base = EVENTS.find(e => e.id === "rtss");
  const event = {
    ...base,
    media: [
      {
        type: "photo",
        src: "src/images/rtss2026/1.jpg",
        alt: "Road to START Summit event"
      },
      {
        type: "photo",
        src: "src/images/rtss2026/2.jpg",
        alt: "Road to START Summit event"
      },
      {
        type: "photo",
        src: "src/images/rtss2026/3.jpg",
        alt: "Road to START Summit event"
      },
      {
        type: "photo",
        src: "src/images/rtss2026/4.jpg",
        alt: "Road to START Summit event"
      },
      {
        type: "photo",
        src: "src/images/rtss2026/6.jpg",
        alt: "Road to START Summit event"
      },
      {
        type: "photo",
        src: "src/images/rtss2026/7.jpg",
        alt: "Road to START Summit event"
      },
      {
        type: "photo",
        src: "src/images/rtss2026/8.jpg",
        alt: "Road to START Summit event"
      },
      {
        type: "photo",
        src: "src/images/rtss2026/9.jpg",
        alt: "Road to START Summit event"
      },
      {
        type: "photo",
        src: "src/images/rtss2026/10.jpg",
        alt: "Road to START Summit event"
      },
      {
        type: "photo",
        src: "src/images/rtss2026/5.jpg",
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
  return <EventDetailShell event={event} />;
};
window.RtssPage = RtssPage;
