const express = require("express");
const csp = require("helmet-csp");
const path = require("path");

const app = express();
const port = 3000;

app.use(
  csp({
    directives: {
      defaultSrc: ["'self'"]
      // etc…
    }
  })
);

app.get("/", (req, res) => res.sendFile(path.join(__dirname + "/index.html")));

app.listen(port, () =>
  console.log(`CSP app listening at http://localhost:${port}`)
);
