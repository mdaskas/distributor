import prisma from "@/lib/db";
import { notFound } from "next/navigation";


export default async function ProductCategoryDetailsPage({ params: { id } }: { params: { id: string } }) {

	const productCategory = await prisma.productCategory.findUnique({
		where: {
			id: parseInt(id),
		},
	});

	if (!productCategory) notFound();

	return (
		<div className="container mx-auto p-4">
			<h1 className="text-2xl font-bold mb-4">Product Category Details Page</h1>
			<p className="text-lg">Details for product category ID: {id}</p>
			<strong>{productCategory.code}</strong>{"  "}
			<strong>{productCategory.name}</strong>
		</div>
	);
}