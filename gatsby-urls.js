const { slugify } = require("./src/helpers/slugify.js")

// Define All url in blog
const urlPatterns = {
  category: "/categories",
  tags: "/tags",
}

const resolveUrl = (urlKey, ...parameters) => {
  const isExistKey = Object.keys(urlPatterns).some(key => key === urlKey)
  if (isExistKey) {
    const slugifiedParameters = parameters.map(param => slugify(param))

    return slugifiedParameters.reduce((res, parameter) => {
      return `${res}/${parameter}`
    }, urlPatterns[urlKey])
  }
  return `/`
}

module.exports.resolveUrl = resolveUrl
