6// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import NextCors from "nextjs-cors";
import GetDrugData  from "../../prisma/All_Drugs.js";

export default async function handler(req, res) {
  await NextCors(req, res, {
    // Options
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  })
  if (req.method === "GET") {
    const { name } = req.query;
    // const result = await GetDrugData(name);
    // res.send(result)
    res.send("Hey!")
  }
}
