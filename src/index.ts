import express from "express";
import path from "path";

const app = express();
const PORT = 80;

app.get(
  "/api/v1/greet/:name",
  (req: express.Request, res: express.Response) => {
    const name = req.params.name;

    res.send(`hello ${name} :)`);
  }
);

app.use("/public", express.static(path.join(__dirname + "../../public")));
app.listen(PORT, () =>
  console.log(`Server listening on http://localhost:${PORT}`)
);
