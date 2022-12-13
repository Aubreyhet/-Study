const path = reqire('path')

module.exprots = {
  mode: 'development',
  entry: {
    main: './source.js'
  },
  output: {
    filename: 'dist.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: path.resolve('./test.js')
          }
        ]
      }
    ]
  }
}
