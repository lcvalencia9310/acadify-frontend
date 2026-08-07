
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 0,
    "preload": [
      "chunk-3OQ2YKDE.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-3OQ2YKDE.js"
    ],
    "route": "/syllabus"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-3OQ2YKDE.js"
    ],
    "route": "/syllabus/nuevo"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-3OQ2YKDE.js"
    ],
    "route": "/syllabus/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-3OQ2YKDE.js"
    ],
    "route": "/syllabus/*/editar"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1021, hash: '699b48842851de156ca1050f13540ecd77f89203b8279ca81be8409f40fdf730', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1000, hash: '784474f05d16e946dea43ac2102b6dc331db6efb051592f2eddd48a5b374cead', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-R53LPJHH.css': {size: 5191, hash: 'NAHzvtC8Iy8', text: () => import('./assets-chunks/styles-R53LPJHH_css.mjs').then(m => m.default)}
  },
};
