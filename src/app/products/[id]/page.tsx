import prisma from "@/lib/db";
import { notFound } from "next/navigation";


export default async function ProductDetailsPage({ params: { id } }: { params: { id: string } }) {
	const product = await prisma.product.findUnique({
		where: { id: parseInt(id)},
	});

	if (!product) notFound();


	return (
		<div className="container mx-auto p-4">
			<h1 className="text-2xl font-bold mb-4">Product Details Page</h1>
			<p className="text-lg">Details for product ID: {id}</p>
			{product ? (
				<div className="mt-4">
					<strong>{product.description}</strong> - ${product.price}
				</div>
			) : (
				<p className="mt-4">Product not found.</p>
			)}
		</div>
	);
}