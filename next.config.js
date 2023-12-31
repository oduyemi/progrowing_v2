/**
 * @type {import("next").NextConfig}
 */

 module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
        experimental: {
          reactRefresh: false,
        },
      })
    );

    config.module.rules.push({
      test: /\.(mp4|webm)$/i,
      use: [
        {
          loader: "file-loader",
          options: {
            outputPath: "static/videos",
          },
        },
      ],
    });

    return config;
  },
  images: {
    domains: [process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || ""],
  },
  env: {
    CLOUDINARY_CLOUD_NAME: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
    CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
  },
};
