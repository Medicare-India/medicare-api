6// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import GetDrugData  from "../../prisma/All_Drugs.js";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const { name } = req.query;
    const result = await GetDrugData(name);
    res.send(result)
  }
}
