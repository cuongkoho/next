module.exports = {
  async rewrites() {
    return [
      // Manually add routes managed by NextJS routes into here
      {
        source: "/new-page",
        destination: "/new-page",
      },
      {
        source: "/new-ssr-page",
        destination: "/new-ssr-page",
      },
      {
        source: "/new-counter-page",
        destination: "/new-counter-page",
      },
      {
        source: "/new-counter-page/:any*",
        destination: "/new-counter-page/:any*",
      },
      // Everything else is managed by react-router
      {
        source: "/:any*",
        destination: "/",
      },
    ];
  },
  webpack5: true,
};
