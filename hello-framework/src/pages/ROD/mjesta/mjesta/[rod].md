<div id="observablehq-mjesta_header-286001a5"></div>
<div id="observablehq-paragraf1-286001a5"></div>
<div id="observablehq-mjesta_geo-286001a5"></div>
<div id="observablehq-paragraf2-286001a5"></div>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@observablehq/inspector@5/dist/inspector.css">
<script type="module">
import {Runtime, Inspector} from "https://cdn.jsdelivr.net/npm/@observablehq/runtime@5/dist/runtime.js";
import define from "https://api.observablehq.com/d/702564761cbe308e.js?v=4";
new Runtime().module(define, name => {
  if (name === "mjesta_header") return new Inspector(document.querySelector("#observablehq-mjesta_header-286001a5"));
  if (name === "paragraf1") return new Inspector(document.querySelector("#observablehq-paragraf1-286001a5"));
  if (name === "mjesta_geo") return new Inspector(document.querySelector("#observablehq-mjesta_geo-286001a5"));
  if (name === "paragraf2") return new Inspector(document.querySelector("#observablehq-paragraf2-286001a5"));
});
</script>
