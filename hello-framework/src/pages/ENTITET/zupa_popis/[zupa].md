<div id="observablehq-header-ee92af73"></div>
<div id="observablehq-popisi_plot-ee92af73"></div>
<div id="observablehq-table-ee92af73"></div>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@observablehq/inspector@5/dist/inspector.css">
<script type="module">
import {Runtime, Inspector} from "https://cdn.jsdelivr.net/npm/@observablehq/runtime@5/dist/runtime.js";
import define from "https://api.observablehq.com/d/85bd9e1fe9ec4f86.js?v=4";
new Runtime().module(define, name => {
  if (name === "header") return new Inspector(document.querySelector("#observablehq-header-ee92af73"));
  if (name === "popisi_plot") return new Inspector(document.querySelector("#observablehq-popisi_plot-ee92af73"));
  if (name === "table") return new Inspector(document.querySelector("#observablehq-table-ee92af73"));
});
</script>
