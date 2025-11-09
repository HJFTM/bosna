// main/export-menu-json.mjs
import fs from "fs/promises";
import path from "path";
import config, { dynamicPaths } from "../src/observablehq.config.js"; 
// ^ prilagodi putanju ako je drugačija

const OUT_DIR = process.env.GH_PAGES_DIR ?? "gh-pages";
await fs.mkdir(OUT_DIR, { recursive: true });

const payload = {
  project: config.title,
  pages: config.pages,                 // glavni meni za trenutni projekt
  entryPoints: config.entryPoints,     // sve rute koje gradiš statički
  dynamicPaths: dynamicPaths()         // dinamičke rute (generirane iz podataka)
};

const outFile = path.join(OUT_DIR, "menu.json");
await fs.writeFile(outFile, JSON.stringify(payload, null, 2), "utf8");

console.log("✔ Snimljeno:", outFile);
