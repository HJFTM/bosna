<div id="observablehq-header-04905c8f"></div>
<div id="observablehq-md_text-04905c8f"></div>
<div id="observablehq-table-04905c8f"></div>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@observablehq/inspector@5/dist/inspector.css">
<script type="module">
import {Runtime, Inspector} from "https://cdn.jsdelivr.net/npm/@observablehq/runtime@5/dist/runtime.js";
import define from "https://api.observablehq.com/d/868172349b01ecd3.js?v=4";
new Runtime().module(define, name => {
  if (name === "header") return new Inspector(document.querySelector("#observablehq-header-04905c8f"));
  if (name === "md_text") return new Inspector(document.querySelector("#observablehq-md_text-04905c8f"));
  if (name === "table") return new Inspector(document.querySelector("#observablehq-table-04905c8f"));
});
</script>
