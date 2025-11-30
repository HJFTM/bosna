<div id="observablehq-header-965fd9bd"></div>
<div id="observablehq-obitelji_plot2-965fd9bd"></div>
<div id="observablehq-opis-965fd9bd"></div>
<p>Credit: <a href="https://observablehq.com/d/e628b16f87f46c0c">Obitelji (E) by FTM</a></p>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@observablehq/inspector@5/dist/inspector.css">
<script type="module">
import {Runtime, Inspector} from "https://cdn.jsdelivr.net/npm/@observablehq/runtime@5/dist/runtime.js";
import define from "https://api.observablehq.com/d/e628b16f87f46c0c.js?v=4";
new Runtime().module(define, name => {
  if (name === "header") return new Inspector(document.querySelector("#observablehq-header-965fd9bd"));
  if (name === "obitelji_plot2") return new Inspector(document.querySelector("#observablehq-obitelji_plot2-965fd9bd"));
  if (name === "opis") return new Inspector(document.querySelector("#observablehq-opis-965fd9bd"));
});
</script>
