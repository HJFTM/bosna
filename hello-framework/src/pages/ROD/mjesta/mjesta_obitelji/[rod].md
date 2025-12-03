<div id="observablehq-mjesta_header-f6ef494b"></div>
<div id="observablehq-mjesta_text-f6ef494b"></div>
<div id="observablehq-mjesta_plot-f6ef494b"></div>
<div id="observablehq-mjesta_obitelji_text-f6ef494b"></div>
<div id="observablehq-mjesta_obitelji_table-f6ef494b"></div>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@observablehq/inspector@5/dist/inspector.css">
<script type="module">
import {Runtime, Inspector} from "https://cdn.jsdelivr.net/npm/@observablehq/runtime@5/dist/runtime.js";
import define from "https://api.observablehq.com/d/4a10b23c1b7d43c4.js?v=4";
new Runtime().module(define, name => {
  if (name === "mjesta_header") return new Inspector(document.querySelector("#observablehq-mjesta_header-f6ef494b"));
  if (name === "mjesta_text") return new Inspector(document.querySelector("#observablehq-mjesta_text-f6ef494b"));
  if (name === "mjesta_plot") return new Inspector(document.querySelector("#observablehq-mjesta_plot-f6ef494b"));
  if (name === "mjesta_obitelji_text") return new Inspector(document.querySelector("#observablehq-mjesta_obitelji_text-f6ef494b"));
  if (name === "mjesta_obitelji_table") return new Inspector(document.querySelector("#observablehq-mjesta_obitelji_table-f6ef494b"));
});
</script>
