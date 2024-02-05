const _slugify = str => {
  return str
    .trim()
    .replace(/ +/g, match => (match.includes(" ") ? "-" : ""))
    .replace(/[^\wㄱ-ㅎ가-힣-]/g, "")
    .toLowerCase()
}

module.exports.slugify = _slugify
