// Each public path also serves index.html when opened directly.
const pages = {
  "/": HomePage,
  "/events": EventsPage,
  "/about": AboutPage,
  "/partners": PartnersPage,
  "/rtss": RtssPage,
  "/contest": ContestPage,
  "/workshops": WorkshopsPage,
};

function currentPath() {
  return window.location.pathname.replace(/\/+$/, "") || "/";
}

const App = () => {
  const [path, setPath] = React.useState(currentPath);
  React.useEffect(() => {
    const onPopState = () => setPath(currentPath());
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  function followLink(event) {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const link = event.target.closest("a[href]");
    if (!link || link.target || link.origin !== location.origin || !pages[link.pathname] || link.search || link.hash) return;
    event.preventDefault();
    if (location.pathname !== link.pathname || location.search || location.hash) history.pushState(null, "", link.pathname);
    setPath(link.pathname);
    window.scrollTo(0, 0);
  }

  React.useEffect(() => {
    const el = document.getElementById("cursorGlow");
    const handle = (event) => {
      el.style.left = event.clientX + "px";
      el.style.top = event.clientY + "px";
    };
    window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
  }, []);

  const Page = pages[path] || HomePage;
  const route = path.slice(1) || "home";
  return (
    <div className="page" data-screen-label={route} onClick={followLink}>
      <Nav route={route} />
      <main key={path}><Page /></main>
      <Footer />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
