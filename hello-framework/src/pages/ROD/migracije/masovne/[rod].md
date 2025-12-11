<div id="observablehq-header-07bc564b"></div>
<div id="observablehq-paragraf1-07bc564b"></div>
<div id="observablehq-migracije_table-07bc564b"></div>
<div id="observablehq-paragraf21-07bc564b"></div>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@observablehq/inspector@5/dist/inspector.css">
<script type="module">
import {Runtime, Inspector} from "https://cdn.jsdelivr.net/npm/@observablehq/runtime@5/dist/runtime.js";
import define from "https://api.observablehq.com/d/b0f5840f4b4ab7af.js?v=4";
new Runtime().module(define, name => {
  if (name === "header") return new Inspector(document.querySelector("#observablehq-header-07bc564b"));
  if (name === "paragraf1") return new Inspector(document.querySelector("#observablehq-paragraf1-07bc564b"));
  if (name === "migracije_table") return new Inspector(document.querySelector("#observablehq-migracije_table-07bc564b"));
  if (name === "paragraf21") return new Inspector(document.querySelector("#observablehq-paragraf21-07bc564b"));
});
</script>
