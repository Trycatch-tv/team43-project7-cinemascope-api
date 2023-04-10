import { conectionSequelize } from "./api/connection/connection-MySQL.js";
import app from "./api/app.js";

import "./api/models/movies.js";
app.set("port", process.env.PORT_SERVER || 3000);
const main = async () => {
  try {
    await conectionSequelize.sync({ force: false });
    app.listen(app.get("port"), () => {
      console.log(`Server running in port ${app.get("port")}`);
    });
  } catch (err) {
    console.error(` Not connection database ${err}`);
  }
};

main();
