<div id="observablehq-header-eb30510b"></div>
<div id="observablehq-plot_rodoslovlje-eb30510b"></div>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@observablehq/inspector@5/dist/inspector.css">
<script type="module">
import {Runtime, Inspector} from "https://cdn.jsdelivr.net/npm/@observablehq/runtime@5/dist/runtime.js";
import define from "https://api.observablehq.com/d/1ad945659afebae0.js?v=4&api_key=8eabbd4dfb986e5bca9e3f583554da5f0faf7a1d";
new Runtime().module(define, name => {
  if (name === "header") return new Inspector(document.querySelector("#observablehq-header-eb30510b"));
  if (name === "plot_rodoslovlje") return new Inspector(document.querySelector("#observablehq-plot_rodoslovlje-eb30510b"));
});
</script>
