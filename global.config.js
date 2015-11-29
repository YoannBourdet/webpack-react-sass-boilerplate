module.exports = {
  server: {
    port: 3000,
  },
  staticPage: {
    pathToTemplate: './app/index.html',
    title: 'Webback | Webpack + Backbone + React',
    metas: {
      keywords: 'webpack, react, babel, backbone, es6, javascript, git, github',
      description: 'app build with webpack and react',
    },
    container: {
      id: 'main',
      role: 'main',
    },
  },
};
