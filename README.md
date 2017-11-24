# simtrax/webpack-simple-leaflet

> A simple Vue 2.0 Webpack & `vue-loader` setup for quick prototyping.

> Leaflet is included to give a quick introduction to using Leaflet with Vue

### Getting started

``` bash
$ npm install -g vue-cli
$ vue init simtrax/webpack-simple-leaflet {your project name without squiggly brackets}
$ cd {your project name without squiggly brackets}
$ npm install
$ npm run dev
```

```npm run dev```

will start a dev server that uses webpack to minimize all JavaScript into a single file.
It will also make it possible to use Vue components.


### What's Included

- `npm run dev`: Webpack + `vue-loader` with proper config for source maps & hot-reload.

- `npm run build`: build with HTML/CSS/JS minification.