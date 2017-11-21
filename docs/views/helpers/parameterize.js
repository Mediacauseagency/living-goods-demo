module.exports = function parameterize (str) {
  return str
   .replace(/\W+/g, ' ')
   .trim()
   .replace(/\s/g, '-')
   .toLowerCase()
}
