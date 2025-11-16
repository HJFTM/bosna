// src/_layout.jsx

// Ako je observablehq.base.js U ROOTU (pored observablehq.config.js), onda:
import { CURRENT_PROJECT } from "../observablehq.base.js";

// Ako ti je observablehq.base.js zapravo u src/, onda promijeni u:
// import { CURRENT_PROJECT } from "./observablehq.base.js";

const NAV_ITEMS = [
  { id: "Uvod",     label: "Uvod",     href: "https://homejularic.github.io/uvod/" },
  { id: "Rodovi",   label: "Rodovi",   href: "https://homejularic.github.io/mjesta/" },
  { id: "Obitelji", label: "Obitelji", href: "https://homejularic.github.io/obitelji/" },
  { id: "Mjesta",   label: "Mjesta",   href: "https://homejularic.github.io/zapisi/" },
  { id: "Izvori",   label: "Izvori",   href: "https://homejularic.github.io/izvori/" }
];

// Ovdje mapiramo tvoj CURRENT_PROJECT (Bosna, Stupnik, Uvod, mjesta, Obitelji...)
// na "glavno poglavlje" za header.
function getCurrentChapter(currentProject) {
  if (currentProject === "Uvod") return "Uvod";
  if (["Bosna", "Stupnik", "Dubrovnik"].includes(currentProject)) return "Rodovi";
  if (currentProject === "Obitelji") return "Obitelji";
  if (currentProject === "mjesta") return "Mjesta";
  if (currentProject === "izvori" || currentProject === "zapisi") return "Izvori";
  return null;
}

function GlobalNav() {
  const currentChapter = getCurrentChapter(CURRENT_PROJECT);

  return (
    <header class="global-header">
      <nav class="global-nav">
        <a class="site-title" href="https://homejularic.github.io/uvod/">
          Prezime Jularić
        </a>

        <ul class="global-nav-list">
          {NAV_ITEMS.map((item) => {
            const active = item.id === currentChapter;
            return (
              <li key={item.id}>
                <a
                  href={item.href}
                  class={active ? "nav-link active" : "nav-link"}
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

// Layout wrapa SAMO centralni dio (Observable će SAM napraviti sidebar sa strane)
export default function Layout({ children }) {
  return (
    <>
      <GlobalNav />
      <main class="page-container">
        {children}
      </main>
    </>
  );
}
