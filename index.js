import { conectionSequelize } from "./api/connection/db.js";
import app from "./api/app.js";

const main = async () => {
  try {
    await conectionSequelize.sync({ force: false })
    app.listen(app.get('port'), () => {
      console.log(`🆗✅🆗 Server on port ${app.get('port')} 🆗✅🆗`)
    })
  } catch (err) {
    console.error(`🛑⛔ Not connection database ❗${err}❗ ⛔🛑`)
  }
}

main();
