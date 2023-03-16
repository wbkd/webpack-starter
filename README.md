# Webpack Frontend Starterkit

A lightweight foundation for your next webpack based frontend project.

### Installation

```sh
npm install
```

### Start Dev Server

```sh
npm start
```

### Build Prod Version

```sh
npm run build
```

### Features:

- ES6 Support via [babel](https://babeljs.io/) (v7)
- JavaScript Linting via [eslint](https://eslint.org/)
- SASS Support via [sass-loader](https://github.com/jtangelder/sass-loader)
- Autoprefixing of browserspecific CSS rules via [postcss](https://postcss.org/) and [postcss-preset-env](https://github.com/csstools/postcss-preset-env)
- Style Linting via [stylelint](https://stylelint.io/)

### Load source scripts, styles and images

The source scripts and styles can be specified directly in HTML using a relative path or Webpack alias:

```html
<html>
<head>
  <link href="~/styles/index.scss" rel="stylesheet">
  <script src="~/scripts/index.js" defer="defer"></script>
</head>
<body>
  <img src="~/images/webpack.png" alt="Webpack logo">
</body>
</html>
```

When you run `npm start` the generated CSS will be inlined in HTML.\
When you run `npm run build` the generated CSS will be extracted into a separate file.\
An image will be inlined in HTML when a file size is less than 8kb.
