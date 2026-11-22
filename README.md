# Express Request ID demo

A minimal Express app showing how to use the published [`@krish1712/express-request-id`](https://www.npmjs.com/package/@krish1712/express-request-id) package.

## Run it

Requires Node.js 18 or newer.

```sh
npm install
npm start
```

Open <http://localhost:3000/> or <http://localhost:3000/health>. Each response includes the generated request ID in its JSON body and in the `X-Request-ID` response header. The server also prints the ID in its log.

To inspect the response header from another terminal:

```sh
curl -i http://localhost:3000/
```

## Where the package is used

`app.js` imports `@krish1712/express-request-id` and registers `app.use(requestId())` before the routes. That middleware adds `req.id` and sets the `X-Request-ID` response header for every request.
