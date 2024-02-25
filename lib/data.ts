import { prisma } from "@/lib/prisma";

export const getProducts = async () => {
  try {
    const products = await prisma.product.findMany();
    return products;
  } catch (error) {
    throw new Error("Fail to fetch data..!");
  }
};

export const getProductsById = async (id: string) => {
  try {
    const product = await prisma.product.findUnique({
      where: { id },
    });
    return product;
  } catch (error) {
    throw new Error("Fail to fetch data..!");
  }
};
