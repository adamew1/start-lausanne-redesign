// App entry — router + global effects
const App = () => {
  const [route, setRoute] = React.useState(() => {
    return localStorage.getItem("sl_route") || "home";
  });

  React.useEffect(() => {
    localStorage.setItem("sl_route", route);
    window.scrollTo(0, 0);
  }, [route]);

  // expose for cross-component navigation
  React.useEffect(() => { window.__setRoute = setRoute; }, []);

  // cursor glow tracking
  React.useEffect(() => {
    const el = document.getElementById("cursorGlow");
    if (!el) return;
    const handle = (e) => {
      el.style.left = e.clientX + "px";
      el.style.top = e.clientY + "px";
    };
    window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
  }, []);

  const pages = {
    home: HomePage,
    about: AboutPage,
    team: TeamPage,
    contest: ContestPage,
    hackathon: HackathonPage,
    rtss: RtssPage,
    partners: PartnersPage,
  };
  const Page = pages[route] || HomePage;

  return (
    <div className="page" data-screen-label={route}>
      <Nav route={route} setRoute={setRoute} />
      <div key={route} style={{ animation: "fadeIn 0.5s ease" }}>
        <style>{`@keyframes fadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }`}</style>
        <Page />
      </div>
      <Footer setRoute={setRoute} />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
