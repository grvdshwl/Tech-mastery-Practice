import { startStandaloneServer } from "@apollo/server/standalone";
import { ENVS } from "./constants.js";

import server from "./server.js";

const url = await startStandaloneServer(server, {
  listen: {
    port: ENVS.PORT,
  },
});

console.log(`Server is listening at PORT:${ENVS.PORT}`);
