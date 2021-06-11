import { h, serveStatic, serve } from "https://deno.land/x/sift@0.3.2/mod.ts";

serve({
  "/"          : serveStatic("./index.html", { baseUrl: import.meta.url }),
  "/mod.js"    : serveStatic("./index.html", { baseUrl: import.meta.url }),
  "/:filename+": serveStatic(".", { baseUrl: import.meta.url }),
  404          : () => new Response("Not Found"),
});
