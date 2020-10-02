module.exports = {
  client: {
    excludes: ["**/__tests__/**/*", "**/@sdk/**/*"],
    service: {
      name: "Go-get appliances",
      url: "https://api.gogetappliances.com.au/graphql/",
    },
  },
};
