import * as express from 'express';
import { createProxyMiddleware, Filter, Options, RequestHandler } from 'http-proxy-middleware';

const app = express();

app.use('/api', createProxyMiddleware({ target: 'http://www.example.org', changeOrigin: true }));
app.listen(3000);

// http://localhost:3000/api/foo/bar -> http://www.example.org/api/foo/bar

// const { createProxyMiddleware } = require("http-proxy-middleware");
// module.exports = function expressMiddleware(router) {
//     let env = process.env.VUE_APP_WEB_ENV || "dev";
//     const comonApi = require(`../config/api/${env}.js`);

//     if (comonApi && Object.keys(comonApi).length) {
//         Object.keys(comonApi).forEach((e) => {
//             const apiBase = comonApi[e].apiBase;
//             const apiRoot = comonApi[e].apiRoot;
//             if (apiBase && apiRoot) {
//                 router.use(
//                     apiBase,
//                     createProxyMiddleware({
//                         target: apiRoot,
//                         changeOrigin: true,
//                         pathRewrite: {
//                             [`^${apiBase}`]: "",
//                         },
//                     })
//                 );
//             }
//         });
//     }
// };
