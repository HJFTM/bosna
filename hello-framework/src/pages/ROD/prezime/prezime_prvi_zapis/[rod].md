<div id="observablehq-prezime_header-e1e34ff0"></div>
<div id="observablehq-paragraph2-e1e34ff0"></div>
<div id="observablehq-image-e1e34ff0"></div>
<div id="observablehq-paragraph3-e1e34ff0"></div>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@observablehq/inspector@5/dist/inspector.css">
<script type="module">
import {Runtime, Inspector} from "https://cdn.jsdelivr.net/npm/@observablehq/runtime@5/dist/runtime.js";
import define from "https://api.observablehq.com/d/b6c79307291e6b55.js?v=4";
new Runtime().module(define, name => {
  if (name === "prezime_header") return new Inspector(document.querySelector("#observablehq-prezime_header-e1e34ff0"));
  if (name === "paragraph2") return new Inspector(document.querySelector("#observablehq-paragraph2-e1e34ff0"));
  if (name === "image") return new Inspector(document.querySelector("#observablehq-image-e1e34ff0"));
  if (name === "paragraph3") return new Inspector(document.querySelector("#observablehq-paragraph3-e1e34ff0"));
});
</script>
