'use server';

import prisma from "@/lib/db";


export async function getProductCategoriesForSelect() {
	const productCategories = await prisma.productCategory.findMany();

	return productCategories.map((category) => ({
		id: category.id.toString(),
		value: category.name ?? "Unknown",
	}));

}