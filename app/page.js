import { projects } from "../data/projects";

function sameLink(a, b) {
  if (!a || !b) return false;
  return a.replace(/\/+$/, "") === b.replace(/\/+$/, "");
}

export default function HomePage() {
  return (
    <div className="wrap">
      <header className="hero">
        <p className="kicker">Bernardo</p>
        <h1>Projects</h1>
        <p className="lede">
          {projects.length} live {projects.length === 1 ? "project" : "projects"}. Open one, or read the code.
        </p>
      </header>

      <ul className="grid">
        {projects.map((project) => {
          const href = project.url || project.repo;
          const showCode = project.repo && !sameLink(project.repo, href);
          const openLabel = project.url ? "Open live site" : "View repository";

          return (
            <li key={project.name}>
              <article className="card">
                {project.image ? (
                  <div className="shot-frame">
                    <img
                      className="shot"
                      src={project.image}
                      alt={`Screenshot of ${project.name}`}
                      width={1280}
                      height={800}
                    />
                  </div>
                ) : null}
                <div className="card-body">
                  <h2>{project.name}</h2>
                  <p className="desc">{project.description}</p>
                  <div className="actions">
                    <a
                      className="open"
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {openLabel}
                      <span className="sr-only"> {project.name}</span>
                    </a>
                    {showCode ? (
                      <a
                        className="code"
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Code
                        <span className="sr-only"> for {project.name}</span>
                      </a>
                    ) : null}
                  </div>
                </div>
              </article>
            </li>
          );
        })}
      </ul>

      <footer className="foot">
        <a href="https://github.com/berkurka" target="_blank" rel="noopener noreferrer">
          github.com/berkurka
        </a>
      </footer>
    </div>
  );
}
