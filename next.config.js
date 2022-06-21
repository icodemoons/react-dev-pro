module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "https://www.google.com",
      "https://www.storage.googleapis.com",
      "https://www.nasa.gov",
      "/public",
      "https://www.image.tmdb.org",
      "https://www.themoviedb.org",
      "https://developer.nytimes.com",
    ],
    plugins: [
      require("@tailwindcss/aspect-ratio"),
      require("@tailwindcss/typography"),
      // ...
    ],
  },
};
