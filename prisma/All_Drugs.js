// /prisma/user.js
import prisma from "./prisma";

// Get DrugData

const GetDrugData = async (name1) => {
  name1 = name1.toUpperCase()
  const data = await prisma.All_Drugs.findMany({
    where: {
      name: {
        search: '"*'+name1+'*"',
      },
    },
  });
  return data;
};

export default GetDrugData;
