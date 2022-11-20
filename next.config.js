require("dotenv").config();

module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://localhost:5000/api/:path*",
      },
      {
        source: "/",
        destination: "http://localhost:5000/",
      },
    ];
  },
  env: {
    API_URL: process.env.API_URL,
  },
  images: {
    domains: [process.env.NEXT_PUBLIC_SERVER_HOST, process.env.NEXT_PUBLIC_SERVER_HOST_ORIGINAL],
  },
};
