import app from './src/app.js';
import db from './src/db.js';
const {conn} = db

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  app.listen(3001, () => {
    console.log("Servidor corriendo. Puerto: 3001");// eslint-disable-line no-console
  });
});
