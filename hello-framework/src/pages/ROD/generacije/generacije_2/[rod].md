<div id="observablehq-generacija_header-8322b4fb"></div>
<div id="observablehq-generacija_plot-8322b4fb"></div>
<div id="observablehq-obitelji_text-8322b4fb"></div>
<div id="observablehq-generacije_table1-8322b4fb"></div>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@observablehq/inspector@5/dist/inspector.css">
<script type="module">
import {Runtime, Inspector} from "https://cdn.jsdelivr.net/npm/@observablehq/runtime@5/dist/runtime.js";
import define from "https://api.observablehq.com/d/9a397dc26956e5b7.js?v=4";
new Runtime().module(define, name => {
  if (name === "generacija_header") return new Inspector(document.querySelector("#observablehq-generacija_header-8322b4fb"));
  if (name === "generacija_plot") return new Inspector(document.querySelector("#observablehq-generacija_plot-8322b4fb"));
  if (name === "obitelji_text") return new Inspector(document.querySelector("#observablehq-obitelji_text-8322b4fb"));
  if (name === "generacije_table1") return new Inspector(document.querySelector("#observablehq-generacije_table1-8322b4fb"));
});
</script>
