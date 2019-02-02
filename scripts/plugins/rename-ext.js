function plugin (options) {
  const { from, to } = options
  return function (files, metalsmith, done) {
    Object.keys(files).forEach(function(file) {
      var fromPattern = new RegExp(`(.${from})$`)
      var fileName = file.replace(fromPattern, `.${to}`)
      if(fileName !== file) {
        files[fileName] = files[file]
        delete files[file]
      }
    })
    done()
  }
}

module.exports = plugin
