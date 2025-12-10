<div id="observablehq-generacija_header-5250f6fe"></div>
<div id="observablehq-paragraf1-5250f6fe"></div>
<div id="observablehq-generacija_plot-5250f6fe"></div>
<div id="observablehq-paragraf2-5250f6fe"></div>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@observablehq/inspector@5/dist/inspector.css">
<script type="module">
import {Runtime, Inspector} from "https://cdn.jsdelivr.net/npm/@observablehq/runtime@5/dist/runtime.js";
import define from "https://api.observablehq.com/d/410aa8aa83984092.js?v=4";
new Runtime().module(define, name => {
  if (name === "generacija_header") return new Inspector(document.querySelector("#observablehq-generacija_header-5250f6fe"));
  if (name === "paragraf1") return new Inspector(document.querySelector("#observablehq-paragraf1-5250f6fe"));
  if (name === "generacija_plot") return new Inspector(document.querySelector("#observablehq-generacija_plot-5250f6fe"));
  if (name === "paragraf2") return new Inspector(document.querySelector("#observablehq-paragraf2-5250f6fe"));
});
</script>
