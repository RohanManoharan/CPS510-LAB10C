
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  routes: [
  {
    "renderMode": 2,
    "route": "/CPS510-LAB10C"
  }
],
  assets: new Map([
['index.csr.html', {size: 457, hash: 'bdbac58a0e6b2c22d3f1ef8bc1a453286436ee280c33efe614f9de9155cba115', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)}], 
['index.server.html', {size: 970, hash: '75a78c7ce6ee4ce1d5efff6f87e2db6bbc5bba9eda3b59a30de9aa69a9e120cc', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}], 
['index.html', {size: 4923, hash: 'e0a8e51f1cc2aa259b796269b2769add1db233116e1225e62c5381d6175b16a5', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)}], 
['styles-5INURTSO.css', {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}]
]),
  locale: undefined,
};
