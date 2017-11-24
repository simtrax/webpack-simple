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

```npm install```
Will install all the dependencies including Vue and Leaflet. It's a lof of files, but don't worry about it. They will be hidden in the node_modules folder in the project root folder.

```npm run dev```
Will start a dev server that uses webpack to minimize all JavaScript into a single file.
It will also make it possible to use Vue components.

When the above command is executed your web browser will open a new window pointed at the dev server.