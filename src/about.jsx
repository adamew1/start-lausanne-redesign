// A member has one profile. alsoIn records a second team assignment.
const DEPARTMENTS = [
  {
    name: "Board", description: "Leading START Lausanne and representing the association.",
    members: [
      { name: "Henrik Gruber", role: "President", email: "henrik.gruber@startlausanne.ch", linkedin: "gruber-henrik" },
      { name: "Mattia La Gennusa", role: "Vice-President · Head of Intern", email: "mattia.lagennusa@startlausanne.ch", linkedin: "mattia-la-gennusa-162704372", alsoIn: "Intern" },
      { name: "Cedric Mercado", role: "Treasurer", email: "cedric.mercado@startlausanne.ch", linkedin: "cedric-mercado-308879217", alsoIn: "Finance" },
    ],
  },
  {
    name: "Contest", description: "Running the START Contest from applications to the grand finale.", email: "contest@startlausanne.ch",
    members: [
      { name: "Yasmine Jouini", role: "Head of Contest", email: "yasmine.jouini@startlausanne.ch", linkedin: "yasmine-jouini-7a803828a", alsoIn: "Board" },
      { name: "Gwenaëlle Gisiger", email: "gwenaelle.gisiger@startlausanne.ch", linkedin: "gwena%C3%ABlle-gisiger-8b54791b4" },
      { name: "Jiarui Xie", email: "jiarui.xie@startlausanne.ch" },
      { name: "Maelys Tavares", email: "maelys.tavares@startlausanne.ch", linkedin: "ma%C3%ABlys-tavares-ab9836288" },
      { name: "Rayhana Bentahir", email: "rayhana.bentahir@startlausanne.ch" },
      { name: "Tuna Hizarci", email: "tuna.hizarci@startlausanne.ch" },
      { name: "Yassine ElHachimi", email: "yassine.elhachimi@startlausanne.ch" },
    ],
  },
  {
    name: "Coordination", description: "Managing communication between all departments, and keeping the whole association organized.", email: "coordination@startlausanne.ch",
    members: [
      { name: "Tariq Azzouz", role: "Head of Coordination", email: "tariq.azzouz@startlausanne.ch", alsoIn: "Board" },
      { name: "Martina Peruzzo", email: "martina.peruzzo@startlausanne.ch", linkedin: "martinaperuzzo" },
    ],
  },
  {
    name: "Event", description: "Planning the events that bring our community together, from workshops to the hackathon.", email: "events@startlausanne.ch",
    members: [
      { name: "Athish Sinnandy", role: "Co-head of Event", email: "athish.sinnandy@startlausanne.ch", alsoIn: "Board" },
      { name: "Omman Hashemi", role: "Co-head of Event", email: "omman.hashemi@startlausanne.ch", alsoIn: "Board" },
      { name: "Dhia Eddine Naffati", email: "dhiaeddine.naffati@startlausanne.ch", linkedin: "dhia-naffati-01b95b336" },
      { name: "Iuliia Eremina", email: "iuliia.eremina@startlausanne.ch" },
      { name: "Juan Esteban Hurtado Corzo", email: "esteban.hurtado@startlausanne.ch" },
      { name: "Lida Mikaelyan", email: "lida.mikaelyan@startlausanne.ch" },
      { name: "Max Dittmann", email: "max.dittmann@startlausanne.ch" },
      { name: "Petra Végh", email: "petra.vegh@startlausanne.ch", linkedin: "petravegh" },
      { name: "Varsha Rasiah", email: "varsha.rasiah@startlausanne.ch" },
    ],
  },
  {
    name: "Finance", description: "Managing the association’s budget, resources and financial sustainability.", email: "partnerships@startlausanne.ch",
    members: [
      { name: "Aurelia Marchese", role: "Head of Finance", email: "aurelia.marchese@startlausanne.ch", alsoIn: "Board" },
      { name: "Caio Barretta Ferreira", email: "caio.barretta.ferreira@startlausanne.ch", linkedin: "caio-barretta-ferreira" },
      { name: "Gabin Picot", email: "gabin.picot@startlausanne.ch", linkedin: "gabin-picot-552484393" },
      { name: "Ghalia Bennani", email: "ghalia.bennani@startlausanne.ch", linkedin: "ghalia-bennani" },
      { name: "Hamza Bichiou", email: "hamza.bichiou@startlausanne.ch" },
      { name: "Lena Sieber", email: "lena.sieber@startlausanne.ch" },
      { name: "Louis Payer", email: "louis.payer@startlausanne.ch", linkedin: "louispayer" },
      { name: "Pablo Suarez", email: "pablo.suarez@startlausanne.ch" },
      { name: "Stephan Ferrieri", email: "stephan.ferrieri@startlausanne.ch", linkedin: "stephan-ferrieri-21b7a5378" },
    ],
  },
  {
    name: "Marketing", description: "Looking after our brand and creating the campaigns that introduce students to START.", email: "marketing@startlausanne.ch",
    members: [
      { name: "Elena Bachos", role: "Head of Marketing", email: "elena.bachos@startlausanne.ch", alsoIn: "Board" },
      { name: "Amélie Ruggeri", email: "amelie.ruggeri@startlausanne.ch" },
      { name: "Lina Boubeker", email: "lina.boubeker@startlausanne.ch" },
      { name: "Ludivine Berger", email: "ludivine.berger@startlausanne.ch", linkedin: "ludivineberger" },
      { name: "Rokas Bertasius", email: "rokas.bertasius@startlausanne.ch", linkedin: "rokasbertasius" },
    ],
  },
  {
    name: "IT", description: "Building the website, automations and internal tools that support our teams.", email: "it@startlausanne.ch",
    members: [
      { name: "Rim Abkari", role: "Head of IT", email: "rim.abkari@startlausanne.ch", alsoIn: "Board" },
      { name: "Adam Lahchimi", email: "adam.lahchimi@startlausanne.ch", linkedin: "adam-lahchimi-206a2a2b1" },
      { name: "Ayman Bouzaid", email: "ayman.bouzaid@startlausanne.ch" },
      { name: "Chema Laadhar", email: "chema.laadhar@startlausanne.ch" },
      { name: "Maxime Ramponi", email: "maxime.ramponi@startlausanne.ch" },
    ],
  },
  {
    name: "Intern", description: "Handling recruiting and other HR-related tasks. Organizing team buildings and making sure everyone stays involved.", email: "intern@startlausanne.ch",
    members: [
      { name: "Arianna Nepomuceno", email: "arianna.nepomuceno@startlausanne.ch" },
      { name: "Giacomo Moserle", email: "giacomo.moserle@startlausanne.ch" },
      { name: "Irene Petochi", email: "irene.petochi@startlausanne.ch", linkedin: "irene-petochi-5b1b3334b" },
    ],
  },
];

const sharedMembers = DEPARTMENTS.flatMap(dept => dept.members.filter(member => member.alsoIn));

function profileId(member) {
  return "member-" + member.email.split("@")[0];
}

function SharedTeamMembers({ department }) {
  const members = sharedMembers.filter(member => member.alsoIn === department);
  if (!members.length) return null;
  return (
    <div className="shared-team-members">
      <h4>{department === "Board" ? "Department heads on the board" : "Committee member"}</h4>
      <ul>
        {members.map(member => (
          <li key={member.email}><a href={"#" + profileId(member)}>{member.name}</a></li>
        ))}
      </ul>
    </div>
  );
}

const AboutPage = () => {
  const m = useIsMobile();
  const values = [
    { icon: "people", title: "Community First", d: "We believe in the power of bringing ambitious people together to create meaningful connections." },
    { icon: "globe", title: "Global Mindset", d: "Part of a network spanning 23 cities and 17 countries, we think and act globally." },
    { icon: "briefcase", title: "Action-Oriented", d: "We don't just talk about entrepreneurship — we build, create, and make things happen." },
    { icon: "heart", title: "Inclusive", d: "We welcome every student regardless of background. Diversity drives innovation." },
  ];

  return (
    <>
      {/* Hero */}
      <section style={{ position: "relative", minHeight: m ? "70vh" : "88vh", display: "flex", flexDirection: "column", justifyContent: "flex-end", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "url(/src/images/about.jpeg)", backgroundSize: "cover", backgroundPosition: "center" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(0,30,98,0.35) 0%, rgba(0,30,98,0.7) 55%, rgba(0,30,98,0.96) 100%)" }} />
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
              As part of the global START Network spanning 23 cities across 17 countries, we connect Lausanne's brightest minds with a worldwide community of entrepreneurs, investors, and industry leaders.
            </p>
          </Reveal>
          <Reveal delay={150}>
            <Img src="/src/images/team-2026.webp" ratio="2160/1184" label="The START Lausanne team" />
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

      <section className="section" aria-labelledby="team-heading">
        <div className="container">
          <h2 className="h-lg" id="team-heading" style={{ marginBottom: 40 }}>Meet the Team</h2>
          {DEPARTMENTS.map(dept => (
            <section className="department" key={dept.name} aria-label={dept.name}>
              <div>
                <h3 className="h-md">{dept.name}</h3>
                <p>{dept.description}</p>
                {dept.email && <a className="department-contact" href={"mailto:" + dept.email}>{dept.email}</a>}
                <SharedTeamMembers department={dept.name} />
              </div>
              <ul className="department-members">
                {dept.members.map(member => (
                  <li className="member-card" id={profileId(member)} key={member.email}>
                    <h4>{member.name}</h4>
                    {member.role && <p>{member.role}</p>}
                    <a href={"mailto:" + member.email}>{member.email}</a>
                    {member.linkedin && <a href={"https://www.linkedin.com/in/" + member.linkedin + "/"} target="_blank" rel="noopener noreferrer" aria-label={member.name + " on LinkedIn"}>LinkedIn ↗</a>}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </section>
    </>
  );
};
window.AboutPage = AboutPage;
