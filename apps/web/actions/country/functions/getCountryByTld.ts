import { NextRequest } from "next/server";
import prisma from "@/prisma/db";

const getCountryByTld = async (req: NextRequest) => {
  const url = new URL(req.url);
  const tld = url.pathname.split("/").pop() || "";

  const country = await prisma.country.findUnique({
    where: {
      tld,
    },
  });

  return country;
};

export default getCountryByTld;
