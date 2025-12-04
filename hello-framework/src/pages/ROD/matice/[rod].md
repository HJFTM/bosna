<div id="observablehq-header-77ce1cf8"></div>
<div id="observablehq-md_text-77ce1cf8"></div>
<div id="observablehq-matice_plot-77ce1cf8"></div>
<div id="observablehq-table-77ce1cf8"></div>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@observablehq/inspector@5/dist/inspector.css">
<script type="module">
import {Runtime, Inspector} from "https://cdn.jsdelivr.net/npm/@observablehq/runtime@5/dist/runtime.js";
import define from "https://api.observablehq.com/d/aca98d0dfd21db23.js?v=4";
new Runtime().module(define, name => {
  if (name === "header") return new Inspector(document.querySelector("#observablehq-header-77ce1cf8"));
  if (name === "md_text") return new Inspector(document.querySelector("#observablehq-md_text-77ce1cf8"));
  if (name === "matice_plot") return new Inspector(document.querySelector("#observablehq-matice_plot-77ce1cf8"));
  if (name === "table") return new Inspector(document.querySelector("#observablehq-table-77ce1cf8"));
});
</script>
