import {CURRENT_PROJECT, data} from "./observablehq.base.js";

export const obitelji = generirajObiteljiPoMjestu(data.obitelj, "Bosna");
const obiteljiGEO = generirajObiteljiGEOpoMjestu(data.obitelj, "Bosna");
const obiteljiZapis = generirajObiteljiZapis(data.obitelj, "Bosna");
const obiteljiStablo = generirajObiteljiStablo(data.obitelj, "Bosna");

export const obiteljiPages = [
  ...obitelji, 
];

export const obiteljiPagesAll = [
  ...obitelji, 
  ...obiteljiGEO, 
  ...obiteljiStablo, 
  ...obiteljiZapis, 
];

export function generirajObiteljiPoMjestu(data, rod = "Bosna") {
  const mjestaSet = new Set();

  // 1) skup mjesta – dodano: o.TIP === "M"
  for (const o of data) {
    if (!o.ROD || o.ROD !== rod || !o.MJESTO || !o.OBITELJ || o.TIP !== "M") continue;
    mjestaSet.add(o.MJESTO.trim());
  }

  const mjesta = Array.from(mjestaSet);
  const mapaMjesta = {};

  for (const mjesto of mjesta) {
    // 2) filtriraj obitelji za to mjesto (uključujući migracije) – dodano: o.TIP === "M"
    const obiteljiZaMjesto = data.filter(o =>
      o.ROD === rod &&
      o.TIP === "M" &&
      o.OBITELJ &&
      (
        (o.MJESTO && o.MJESTO.trim() === mjesto) ||
        (o.MIGRACIJA &&
          o.MIGRACIJA
            .split(/[,;]/)
            .map(s => s.trim())
            .includes(mjesto))
      )
    );

    // 3) grupiraj po nazivu obitelji (da izbjegnemo duplikate)
    const mapaObitelji = new Map();

    for (const o of obiteljiZaMjesto) {
      const obitelj = o.OBITELJ;
      if (!mapaObitelji.has(obitelj)) {
        const osnovni = `/pages/ENTITET/obitelj/${encodeURIComponent(obitelj)}`;
        const geo = `/pages/ENTITET/obitelj_geo/${encodeURIComponent(obitelj)}`;
        const stablo = `/pages/ENTITET/obitelj_stablo/${encodeURIComponent(obitelj)}`;
        const zapis = `/pages/ENTITET/obitelj_zapis/${encodeURIComponent(obitelj)}`;
        mapaObitelji.set(obitelj, { osnovni, geo, stablo, zapis });
      }
    }

    // 4) pretvori u strukturu menija s podstranicama
    mapaMjesta[mjesto] = Array.from(mapaObitelji.entries()).map(
      ([obitelj, paths]) => ({
        name: obitelj,
        path: paths.osnovni,
        pages: [
          { name: "Pregled", path: paths.osnovni },
          { name: "Na karti", path: paths.geo },
          { name: "Stablo", path: paths.stablo },
          { name: "Zapis", path: paths.zapis }
        ]
      })
    );
  }

  // 5) top-level: mjesta
  return Object.entries(mapaMjesta).map(([mjesto, obitelji]) => ({
    name: mjesto,
    pages: obitelji
  }));
}

export function generirajObiteljiGEOpoMjestu(data, rod = "Bosna") {
  const mjestaSet = new Set();

  for (const o of data) {
    if (!o.ROD || o.ROD !== rod || !o.MJESTO || !o.OBITELJ) continue;
    mjestaSet.add(o.MJESTO.trim());
  }

  const mjesta = Array.from(mjestaSet);
  const mapaMjesta = {};

  for (const mjesto of mjesta) {
    mapaMjesta[mjesto] = data
      .filter(o =>
        o.ROD === rod &&
        o.OBITELJ &&
        (
          (o.MJESTO && o.MJESTO.trim() === mjesto) ||
          (o.MIGRACIJA && o.MIGRACIJA.split(/[,;]/).map(s => s.trim()).includes(mjesto))
        )
      )
      .map(o => ({
        name: o.OBITELJ,
        path: `/pages/ENTITET/obitelj_geo/${encodeURIComponent(o.OBITELJ)}`,
        pathEncoded2: `/pages/ENTITET/obitelj_geo/${encodeURIComponent(encodeURIComponent(o.OBITELJ))}`
        
      }));
  }

  return Object.entries(mapaMjesta).map(([mjesto, obitelji]) => ({
    name: mjesto,
    pages: obitelji
  }));
}

export function generirajObiteljiZapis(data, rod = "Bosna") {
  const mjestaSet = new Set();

  for (const o of data) {
    if (!o.ROD || o.ROD !== rod || !o.MJESTO || !o.OBITELJ) continue;
    mjestaSet.add(o.MJESTO.trim());
  }

  const mjesta = Array.from(mjestaSet);
  const mapaMjesta = {};

  for (const mjesto of mjesta) {
    mapaMjesta[mjesto] = data
      .filter(o =>
        o.ROD === rod &&
        o.OBITELJ &&
        (
          (o.MJESTO && o.MJESTO.trim() === mjesto) ||
          (o.MIGRACIJA && o.MIGRACIJA.split(/[,;]/).map(s => s.trim()).includes(mjesto))
        )
      )
      .map(o => ({
        name: o.OBITELJ,
        path: `/pages/ENTITET/obitelj_zapis/${encodeURIComponent(o.OBITELJ)}`,
        pathEncoded2: `/pages/ENTITET/obitelj_zapis/${encodeURIComponent(encodeURIComponent(o.OBITELJ))}`
        
      }));
  }

  return Object.entries(mapaMjesta).map(([mjesto, obitelji]) => ({
    name: mjesto,
    pages: obitelji
  }));
}
export function generirajObiteljiStablo(data, rod = "Bosna") {
  const mjestaSet = new Set();

  for (const o of data) {
    if (!o.ROD || o.ROD !== rod || !o.MJESTO || !o.OBITELJ) continue;
    mjestaSet.add(o.MJESTO.trim());
  }

  const mjesta = Array.from(mjestaSet);
  const mapaMjesta = {};

  for (const mjesto of mjesta) {
    mapaMjesta[mjesto] = data
      .filter(o =>
        o.ROD === rod &&
        o.OBITELJ &&
        (
          (o.MJESTO && o.MJESTO.trim() === mjesto) ||
          (o.MIGRACIJA && o.MIGRACIJA.split(/[,;]/).map(s => s.trim()).includes(mjesto))
        )
      )
      .map(o => ({
        name: o.OBITELJ,
        path: `/pages/ENTITET/obitelj_stablo/${encodeURIComponent(o.OBITELJ)}`,
        pathEncoded2: `/pages/ENTITET/obitelj_stablo/${encodeURIComponent(encodeURIComponent(o.OBITELJ))}`
        
      }));
  }

  return Object.entries(mapaMjesta).map(([mjesto, obitelji]) => ({
    name: mjesto,
    pages: obitelji
  }));
}
