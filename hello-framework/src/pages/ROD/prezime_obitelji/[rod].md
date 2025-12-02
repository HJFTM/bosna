<div id="observablehq-prezime_header-74b440e1"></div>
<div id="observablehq-prezime_table-74b440e1"></div>
<div id="observablehq-prezime_plot_old-74b440e1"></div>
<p>Credit: <a href="https://observablehq.com/d/187a2259dc66d54d">Prezime (R) Obitelji by FTM</a></p>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@observablehq/inspector@5/dist/inspector.css">
<script type="module">
import {Runtime, Inspector} from "https://cdn.jsdelivr.net/npm/@observablehq/runtime@5/dist/runtime.js";
import define from "https://api.observablehq.com/d/187a2259dc66d54d.js?v=4";
new Runtime().module(define, name => {
  if (name === "prezime_header") return new Inspector(document.querySelector("#observablehq-prezime_header-74b440e1"));
  if (name === "prezime_table") return new Inspector(document.querySelector("#observablehq-prezime_table-74b440e1"));
  if (name === "prezime_plot_old") return new Inspector(document.querySelector("#observablehq-prezime_plot_old-74b440e1"));
});
</script>
