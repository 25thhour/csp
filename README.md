# CSP Checker

Rudimentary Express app for checking CSP Header.

## Setup

Run `npm install` to install dependencies.

## Experiment with CSP Directives

Add new CSP directives in `index.js`:

```javascript
csp({
  directives: {
    defaultSrc: ["'self'"]
    // etc…
  }
});
```

Experiment by adding new `<script src="…">`, `<link href="…">`, inline `<script>`'s etc to the `index.html` file to see what is / isn't blocked by your CSP config.

See the [Helmet Docs](https://helmetjs.github.io/docs/csp/) for reference.

## Run

Debug by running `node index.js`.

Check the Network panel to inspect the CSP Response Header.

Any requests on the page that CSP _blocks_ will be logged to the Console.
