<div id="observablehq-header-d595df1c"></div>
<div id="observablehq-md_text-d595df1c"></div>
<div id="observablehq-jezik_pismo_plot-d595df1c"></div>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@observablehq/inspector@5/dist/inspector.css">
<script type="module">
import {Runtime, Inspector} from "https://cdn.jsdelivr.net/npm/@observablehq/runtime@5/dist/runtime.js";
import define from "https://api.observablehq.com/d/233b533788f65a58.js?v=4";
new Runtime().module(define, name => {
  if (name === "header") return new Inspector(document.querySelector("#observablehq-header-d595df1c"));
  if (name === "md_text") return new Inspector(document.querySelector("#observablehq-md_text-d595df1c"));
  if (name === "jezik_pismo_plot") return new Inspector(document.querySelector("#observablehq-jezik_pismo_plot-d595df1c"));
});
</script>
