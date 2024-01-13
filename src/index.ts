import { AppDataSource } from "./data-source";
import app from "./server";

// import { User } from "./entity/User"
// import { Order } from "./entity/Order"
// import { Costumer } from "./entity/Costumer"
// import * as customTypes from "./types";

const PORT = 4500;

AppDataSource.initialize()
  .then(async () => {
    console.log("all ok");
  })
  .catch((error) => console.log(error));

app.listen(PORT, () => {
  console.log(`listening at port ${PORT}`);
});
