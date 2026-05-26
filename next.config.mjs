import createMDX from "@next/mdx";

const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  async redirects() {
    return [
      {
        source: "/notes",
        destination: "/#stream-notes",
        permanent: false,
      },
      {
        source: "/notes/:path*",
        destination: "/#stream-notes",
        permanent: false,
      },
      {
        source: "/twitch",
        destination: "/#stream-notes",
        permanent: false,
      },
      {
        source: "/projects",
        destination: "/#projects",
        permanent: false,
      },
      {
        source: "/streams",
        destination: "/#stream-notes",
        permanent: false,
      },
      {
        source: "/streams/:path*",
        destination: "/#stream-notes",
        permanent: false,
      },
    ];
  },
};

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
});

export default withMDX(nextConfig);
