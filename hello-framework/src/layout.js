// src/_layout.js
import {html} from "observablehq:htl";

// ako ti je observablehq.base.js u rootu pored observablehq.config.js:
import { CURRENT_PROJECT } from "../observablehq.base.js";
// ako ga zapravo držiš u src/, promijeni putanju u:
// import { CURRENT_PROJECT } from "./observablehq.base.js";

const NAV_ITEMS = [
  { id: "Uvod",     label: "Uvod",     href: "https://homejularic.github.io/uvod/" },
  { id: "Rodovi",   label: "Rodovi",   href: "https://homejularic.github.io/rodovi/" },
  { id: "Obitelji", label: "Obitelji", href: "https://homejularic.github.io/obitelji/" },
  { id: "Mjesta",   label: "Mjesta",   href: "https://homejularic.github.io/mjesta/" },
  { id: "Izvori",   label: "Izvori",   href: "https://homejularic.github.io/izvori/" }
];

// Mapiramo CURRENT_PROJECT na "glavno poglavlje" u headeru
function getCurrentChapter(currentProject) {
  if (currentProject === "Uvod") return "Uvod";
  if (["Bosna", "Stupnik", "Dubrovnik"].includes(currentProject)) return "Rodovi";
  if (currentProject === "Obitelji") return "Obitelji";
  if (currentProject === "mjesta") return "Mjesta";
  if (currentProject === "izvori" || currentProject === "zapisi") return "Izvori";
  return null;
}

export default function Layout(page) {
  const currentChapter = getCurrentChapter(CURRENT_PROJECT);

  return html`
    <header class="global-header">
      <nav class="global-nav">
        <a class="site-title" href="https://homejularic.github.io/uvod/">
          Prezime Jularić
        </a>
        <ul class="global-nav-list">
          ${NAV_ITEMS.map(item => {
            const active = item.id === currentChapter;
            const classes = active ? "nav-link active" : "nav-link";
            const ariaCurrent = active ? "page" : null;

            // unutra opet koristimo html`` da dobijemo <li> element
            return html`
              <li>
                <a href=${item.href} class=${classes} aria-current=${ariaCurrent}>
                  ${item.label}
                </a>
              </li>
            `;
          })}
        </ul>
      </nav>
    </header>
    <main class="page-container">
      ${page}
    </main>
  `;
}
