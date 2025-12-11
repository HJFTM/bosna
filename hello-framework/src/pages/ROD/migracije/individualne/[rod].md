<div id="observablehq-migracije_header-5311ef1c"></div>
<div id="observablehq-paragraf1-5311ef1c"></div>
<div id="observablehq-plot_migracije-5311ef1c"></div>
<div id="observablehq-paragraf2-5311ef1c"></div>
<div id="observablehq-migracije_table-5311ef1c"></div>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@observablehq/inspector@5/dist/inspector.css">
<script type="module">
import {Runtime, Inspector} from "https://cdn.jsdelivr.net/npm/@observablehq/runtime@5/dist/runtime.js";
import define from "https://api.observablehq.com/d/a2e7c61b88535e1a.js?v=4";
new Runtime().module(define, name => {
  if (name === "migracije_header") return new Inspector(document.querySelector("#observablehq-migracije_header-5311ef1c"));
  if (name === "paragraf1") return new Inspector(document.querySelector("#observablehq-paragraf1-5311ef1c"));
  if (name === "plot_migracije") return new Inspector(document.querySelector("#observablehq-plot_migracije-5311ef1c"));
  if (name === "paragraf2") return new Inspector(document.querySelector("#observablehq-paragraf2-5311ef1c"));
  if (name === "migracije_table") return new Inspector(document.querySelector("#observablehq-migracije_table-5311ef1c"));
});
</script>
