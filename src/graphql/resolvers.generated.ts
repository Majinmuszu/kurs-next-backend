/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from "./types.generated";
import { Product } from "./schema/resolvers/Product";
import { product as Query_product } from "./schema/resolvers/Query/product";
import { productsList as Query_productsList } from "./schema/resolvers/Query/productsList";
export const resolvers: Resolvers = {
  Query: { product: Query_product, productsList: Query_productsList },

  Product: Product,
};
