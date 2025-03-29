import prisma from "@/lib/db"; 
import Link from "next/link";

export default async function ProductsList() {

	const products = await prisma.product.findMany();

	return (
		<div className="container mx-auto p-4">

			<h1 className="text-2xl font-bold mb-4">Products Page</h1>
			<p className="text-lg">This is the products page. You can add your product details here.</p>
			{products.length === 0 ? (
				<p className="mt-4">No products found.</p>
			) : (
				<ul className="mt-4">
					{products.map((product) => (
						<li key={product.id} className="mb-2">
							<strong>{product.code}</strong>
							<strong>{product.description}</strong> - ${product.price}
							<Link href={`/products/${product.id}`} className="ml-2 text-blue-500 hover:underline">View</Link>
						</li>
					))}
				</ul>
			)}
			</div>
			);

};
