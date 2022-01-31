
  const config = {
    isProd: process.env.NODE_ENV === "production",
    production: {
      api_endpoint: process.env.REACT_APP_PRODUCTION_API_ENDPOINT || "",
    },
    development: {
      api_endpoint: process.env.REACT_APP_DEVELOPMENT_API_ENDPOINT || "",
    },
  };
  export default config;