// https://github.com/michael-ciniawsky/postcss-load-config

const conflictingClasses = [
  'order-first',
  'order-last',
  'cursor-not-alowed',
  'cursor-pointer',
  'block',
  'inline-block',
  'text-justify',
  'hidden',
  'invisible',
  'overflow-auto',
  'overflow-hidden'
]

const removeClasses = {
  ...Object.fromEntries(conflictingClasses.map(cssClass => [`.${ cssClass }`, '*'])),
  body: ['font-family', 'font-size'],
  '.row, .column, .flex': 'flex-wrap'
}

module.exports = {
  plugins: [
    // to edit target browsers: use "browserslist" field in package.json
    require('autoprefixer'),
    require('postcss-remove-declaration')({ remove: removeClasses }),
    require('tailwindcss')
  ]
}
