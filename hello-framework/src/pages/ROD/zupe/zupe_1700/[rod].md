<div id="observablehq-header-eb48bd8c"></div>
<div id="observablehq-text_2-eb48bd8c"></div>
<div id="observablehq-mjesta_plot-eb48bd8c"></div>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@observablehq/inspector@5/dist/inspector.css">
<script type="module">
import {Runtime, Inspector} from "https://cdn.jsdelivr.net/npm/@observablehq/runtime@5/dist/runtime.js";
import define from "https://api.observablehq.com/d/5c291f4d8adf22f8.js?v=4";
new Runtime().module(define, name => {
  if (name === "header") return new Inspector(document.querySelector("#observablehq-header-eb48bd8c"));
  if (name === "text_2") return new Inspector(document.querySelector("#observablehq-text_2-eb48bd8c"));
  if (name === "mjesta_plot") return new Inspector(document.querySelector("#observablehq-mjesta_plot-eb48bd8c"));
});
</script>
