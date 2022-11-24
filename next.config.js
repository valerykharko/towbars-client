require("dotenv").config();

module.exports = {
  // async rewrites() {
  //   return [
  //     {
  //       source: "/api/:path*",
  //       destination: "http://localhost:5000/api/:path*",
  //     },
  //   ];
  // },
  env: {
    API_URL: process.env.API_URL,
  },
  images: {
    domains: [process.env.NEXT_PUBLIC_SERVER_HOST],
  },
};
