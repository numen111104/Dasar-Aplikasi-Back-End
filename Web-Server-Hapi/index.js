const Hapi = require("@hapi/hapi");
const routes = require("./routing");

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: "localhost",
  });

  server.route(routes);

  await server.start();
  // %s adalah server.info.uri yang menunjukkan alamat server
  console.log("Server running on %s", server.info.uri);
};

init();
