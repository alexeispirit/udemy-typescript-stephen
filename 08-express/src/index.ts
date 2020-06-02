import express, { Request, Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send(`
    <div>
      <h1>Hit there!</h1>
    </div>
  `);
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
