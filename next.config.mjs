import createMDX from "@next/mdx";

const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  async redirects() {
    return [
      {
        source: "/twitch",
        destination: "https://www.twitch.tv/peptechdev",
        permanent: false,
      },
      {
        source: "/projects",
        destination: "/#projects",
        permanent: false,
      },
      {
        source: "/streams",
        destination: "/#channel",
        permanent: false,
      },
      {
        source: "/streams/:path*",
        destination: "/#channel",
        permanent: false,
      },
    ];
  },
};

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
});

export default withMDX(nextConfig);
