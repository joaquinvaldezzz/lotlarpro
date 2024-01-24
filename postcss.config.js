const files = require('./files')

module.exports = {
  plugins: {
    '@fullhuman/postcss-purgecss': process.env.NODE_ENV === 'production' && {
      content: [...files],
      defaultExtractor: (content) => {
        const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]+/g) || []
        const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]+/g) || []
        return broadMatches.concat(innerMatches)
      },
      keyframes: true,
      variables: true,
    },
    autoprefixer: {},
    cssnano: process.env.NODE_ENV === 'production' && {
      preset: [
        'default',
        {
          cssDeclarationSorter: false,
        },
      ],
    },
    'postcss-import': {},
    'postcss-sort-media-queries': {},
    tailwindcss: {},
  },
}
