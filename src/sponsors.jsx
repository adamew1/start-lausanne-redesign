// Shared sponsor list and logo grid for the home and partners pages.
const SPONSORS = [
  { name: "UNIL", logo: "src/images/partners/unil-university.svg" },
  { name: "EPFL", logo: "src/images/partners/epfl.png" },
  { name: "HUB de l'UNIL", logo: "src/images/partners/unil_hub.png", maxHeight: 80 },
  { name: "EHL Innovation Hub", logo: "src/images/partners/ehl-innovation-hub.svg" },
  { name: "VentureLab", logo: "src/images/partners/venturelab.svg" },
  { name: "InnovationTime", logo: "src/images/partners/innovationtime.png" },
];

function SponsorGrid({ compact = false }) {
  return (
    <ul className={"sponsor-grid" + (compact ? " sponsor-grid--compact" : "")} aria-label="Sponsors">
      {SPONSORS.map(sponsor => (
        <li key={sponsor.name} className="sponsor-card">
          <div className="sponsor-card-logo">
            <img src={sponsor.logo} alt={sponsor.name} loading="lazy" decoding="async"
                 style={{ height: compact ? 64 : sponsor.maxHeight || 72 }}
                 onError={e => { e.currentTarget.style.display = "none"; }} />
          </div>
          <span className="sponsor-card-name">{sponsor.name}</span>
        </li>
      ))}
    </ul>
  );
}
