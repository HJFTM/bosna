
import { CURRENT_PROJECT, data} from "./observablehq.base.js";
import { generirajMjestaOdObitelji} from "./menu.rodovi.js";

const mjestaBH = generirajMjestaOdObiteljiSVE(data.obitelj, "Bosna");
const menuBH = generirajMjestaOdObiteljiSVE(data.obitelj, "Bosna");

export const mjestaMenu = [
  {
    name: "Rod Bosna",
    pages: [
      ...menuBH,
    ]
  },  
];

export const mjestaPages = [
  ...mjestaBH, 
];

export function generirajMjestaOdObiteljiSVE(obitelji, rod = "Bosna") {
  // 1) filtriraj obitelji (samo muške loze, isto kao prije)
  const obitelj_m = obitelji.filter(
    o => o.TIP === "M" && o.ROD === rod && o.OBITELJ
  );

  const mjestaSet = new Set();

  // 2) skupi jedinstvena mjesta SAMO iz o.MJESTO (MIGRACIJA se ignorira)
  for (const o of obitelj_m) {
    if (o.MJESTO && o.MJESTO.trim()) {
      mjestaSet.add(o.MJESTO.trim());
    }
  }

  // 3) nađi najstariju godinu za svako mjesto (opet, samo po o.MJESTO)
  const mjestaMap = new Map();

  for (const mjesto of mjestaSet) {
    let najstarijaGodina = null;

    for (const o of obitelj_m) {
      if (!o.MJESTO) continue;

      const mjestoObitelji = o.MJESTO.trim();
      if (mjestoObitelji !== mjesto) continue;

      const godina = parseInt(o.GODINA, 10);
      if (!isFinite(godina)) continue;

      if (najstarijaGodina == null || godina < najstarijaGodina) {
        najstarijaGodina = godina;
      }
    }

    if (najstarijaGodina != null) {
      mjestaMap.set(mjesto, najstarijaGodina);
    }
  }

  // 4) definiraj podstranice (kategorije) za svako mjesto
  const kategorije = [
    { label: "Mjesto", dir: "mjesto" },
    { label: "Migracije", dir: "mjesto_migracije" },
    { label: "Stablo", dir: "mjesto_stablo" },
    { label: "Zapisi", dir: "mjesto_zapisi" },
    { label: "Obitelji", dir: "mjesto_obitelji" },
    { label: "Župe", dir: "mjesto_zupe" },
    { label: "Događaji", dir: "mjesto_dogadjaji" },
    { label: "Groblje", dir: "mjesto_groblje" }
  ];

  // 5) generiraj strukturu menija: jedno mjesto -> više podstranica
  const mjesta = Array.from(mjestaMap.entries())
    // sort po najstarijoj godini, pa po nazivu mjesta
    .sort((a, b) => {
      if (a[1] !== b[1]) return a[1] - b[1];
      return a[0].localeCompare(b[0], "hr");
    })
    .map(([mjesto, godina]) => {
      const nazivMjesta = `${godina}. ${mjesto}`;

      const pages = kategorije.map(({ label, dir }) => ({
        name: label,
        path: `/pages/ENTITET/${dir}/${encodeURIComponent(mjesto)}`
      }));

      return {
        name: nazivMjesta,
        path: pages[0]?.path, // glavna stranica mjesta – npr. prva kategorija
        pages
      };
    });

  return mjesta;
}
