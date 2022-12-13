module.exprots = function (source) {
  return source.replace(/var/g, 'const')
}
