"use server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const schemaAddProduct = z.object({
  productName: z.string().min(3),
  desc: z
    .string()
    .max(77, {
      message: "Maximal 77 character",
    })
    .min(5, {
      message: "Minimal 5 character",
    }),
  category: z.string().min(3),
  price: z.string().min(3),
});

export const addProduct = async (prefState: any, formData: FormData) => {
  const validatedFields = schemaAddProduct.safeParse(
    Object.fromEntries(formData.entries())
  );
  if (!validatedFields.success) {
    return {
      Error: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    await prisma.product.create({
      data: {
        productName: validatedFields.data.productName,
        desc: validatedFields.data.desc,
        category: validatedFields.data.category,
        price: validatedFields.data.price,
      },
    });
  } catch (error) {
    return {
      message: "Failed to Create Product",
    };
  }
  revalidatePath("/dashboard");
};
export const updateProduct = async (
  id: string,
  prefState: any,
  formData: FormData
) => {
  const validatedFields = schemaAddProduct.safeParse(
    Object.fromEntries(formData.entries())
  );
  if (!validatedFields.success) {
    return {
      Error: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    await prisma.product.update({
      data: {
        productName: validatedFields.data.productName,
        desc: validatedFields.data.desc,
        category: validatedFields.data.category,
        price: validatedFields.data.price,
      },
      where: { id },
    });
  } catch (error) {
    return {
      message: "Failed to Update Product",
    };
  }
  revalidatePath("/dashboard");
  redirect("/dashboard");
};

export const delateContact = async (id: string) => {
  try {
    await prisma.product.delete({
      where: { id },
    });
  } catch (error) {
    return {
      message: "Failed to Delete Product",
    };
  }
  revalidatePath("/dashboard");
};
