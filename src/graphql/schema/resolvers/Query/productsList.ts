import type { QueryResolvers } from "./../../../types.generated";
import { prisma } from "../../../../db.js";
export const productsList: NonNullable<QueryResolvers["productsList"]> = async (
  _parent,
  arg,
  _ctx
) => {
  const product = await prisma.product.findMany();
  return product;
};
