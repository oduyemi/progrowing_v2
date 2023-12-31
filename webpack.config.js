module.exports = {
    module: {
      rules: [
        {
          test: /\.(mp4|webm)$/,
          use: {
            loader: 'url-loader',
            options: {
              limit: 10000, // Use url-loader for files smaller than 10 MB, otherwise fallback to file-loader
              name: 'videos/[name].[ext]',
            },
          },
        },
      ],
    },
  };
  