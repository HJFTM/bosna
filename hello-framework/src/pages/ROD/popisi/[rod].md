<div id="observablehq-header-be3dcbc3"></div>
<div id="observablehq-md_text-be3dcbc3"></div>
<div id="observablehq-table-be3dcbc3"></div>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@observablehq/inspector@5/dist/inspector.css">
<script type="module">
import {Runtime, Inspector} from "https://cdn.jsdelivr.net/npm/@observablehq/runtime@5/dist/runtime.js";
import define from "https://api.observablehq.com/d/0360b74e91a72d54.js?v=4";
new Runtime().module(define, name => {
  if (name === "header") return new Inspector(document.querySelector("#observablehq-header-be3dcbc3"));
  if (name === "md_text") return new Inspector(document.querySelector("#observablehq-md_text-be3dcbc3"));
  if (name === "table") return new Inspector(document.querySelector("#observablehq-table-be3dcbc3"));
});
</script>
