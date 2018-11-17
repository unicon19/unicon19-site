const pkg = require('./package');

export default {
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1.0, shrink-to-fit=no'
      },
      {
        'http-equiv': 'X-UA-Compatible',
        content: 'IE=edge,chrome=1'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Montserrat:400,700,200'
      },
      {
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.0.6/css/all.css'
      }
    ]
  },
  srcDir: 'src/'
};
