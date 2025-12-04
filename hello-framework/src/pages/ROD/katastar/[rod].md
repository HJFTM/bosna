<div id="observablehq-katastar_header-78962cfe"></div>
<div id="observablehq-md_text-78962cfe"></div>
<div id="observablehq-katastar_plot-78962cfe"></div>
<div id="observablehq-table-78962cfe"></div>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@observablehq/inspector@5/dist/inspector.css">
<script type="module">
import {Runtime, Inspector} from "https://cdn.jsdelivr.net/npm/@observablehq/runtime@5/dist/runtime.js";
import define from "https://api.observablehq.com/d/00ac78dced40db9f.js?v=4";
new Runtime().module(define, name => {
  if (name === "katastar_header") return new Inspector(document.querySelector("#observablehq-katastar_header-78962cfe"));
  if (name === "md_text") return new Inspector(document.querySelector("#observablehq-md_text-78962cfe"));
  if (name === "katastar_plot") return new Inspector(document.querySelector("#observablehq-katastar_plot-78962cfe"));
  if (name === "table") return new Inspector(document.querySelector("#observablehq-table-78962cfe"));
});
</script>
