import express from "express";
import {routes} from './routes';
import { exceptionsVerify } from "./middleware/errorsVerify";

const app = express();
app.use(express.json());

app.use(routes);
app.use(exceptionsVerify);


app.listen(3000, () => {
  console.log("server online on port 3000");
});
