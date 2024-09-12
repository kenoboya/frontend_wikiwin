const { createProxyMiddleware } = require('http-proxy-middleware');
const express = require('express');

const app = express();

const frontendProxyMiddleware = createProxyMiddleware({
  target: 'http://localhost:8080',
  changeOrigin: true,
  pathRewrite: {
    '^/': '/api/v1/',
  },
});

app.use(frontendProxyMiddleware);

app.listen(3001, () => {
  console.log('Proxy server is running on http://localhost:3001');
});
