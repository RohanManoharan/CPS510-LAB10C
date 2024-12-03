
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
['index.csr.html', {size: 457, hash: '1aca2c5a458a90284edc1f473eb8d20619abd2b4fd2f5a538c0c28c67a4f85fa', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)}], 
['index.server.html', {size: 970, hash: '17d9e8f21e14bb730ebe2ac48fa02dba3b0c7c3a3876b5362f32e3b9170f7673', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}], 
['index.html', {size: 3665, hash: 'd47d6b5df2e88cbf5416e71ab652fa3bbb20fe9de93fab4ffc488da00849203e', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)}], 
['styles-5INURTSO.css', {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}]
]),
  locale: undefined,
};
