import { createProxyMiddleware } from "http-proxy-middleware";

module.exports = function (app) {
  app.use(
    createProxyMiddleware({
      target: "http://localhost:5000", // Replace with your backend URL
      changeOrigin: true,
    })
  );
};
