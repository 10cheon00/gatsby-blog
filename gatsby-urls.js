
// Define All url in blog
const urlPatterns = {
  category: "/categories",
}

const getUrl = (urlKey, ...parameters) => {
  const isExistKey = Object.keys(urlPatterns).some(key => key === urlKey)
  if (isExistKey) {
    return parameters.reduce((res, parameter) => {
      return `${res}/${parameter}`
    }, urlPatterns[urlKey])
  }
  return `/`
}

module.exports.getUrl = getUrl
