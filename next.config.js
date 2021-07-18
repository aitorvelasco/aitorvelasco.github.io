module.exports = {
    env: {
      spaceId: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    },
    images: {
      loader: 'imgix',
      path: '',
    },
  }