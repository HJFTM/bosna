<div id="observablehq-mjesta_header-2f92c2bf"></div>
<div id="observablehq-paragraf1-2f92c2bf"></div>
<div id="observablehq-mjesta_geo-2f92c2bf"></div>
<div id="observablehq-paragraf2-2f92c2bf"></div>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@observablehq/inspector@5/dist/inspector.css">
<script type="module">
import {Runtime, Inspector} from "https://cdn.jsdelivr.net/npm/@observablehq/runtime@5/dist/runtime.js";
import define from "https://api.observablehq.com/d/8a5000ad8faeaed1.js?v=4&api_key=c08f6d15962e255490b4d15b4c5351a580121b9a";
new Runtime().module(define, name => {
  if (name === "mjesta_header") return new Inspector(document.querySelector("#observablehq-mjesta_header-2f92c2bf"));
  if (name === "paragraf1") return new Inspector(document.querySelector("#observablehq-paragraf1-2f92c2bf"));
  if (name === "mjesta_geo") return new Inspector(document.querySelector("#observablehq-mjesta_geo-2f92c2bf"));
  if (name === "paragraf2") return new Inspector(document.querySelector("#observablehq-paragraf2-2f92c2bf"));
});
</script>
