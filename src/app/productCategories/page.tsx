import prisma from "@/lib/db";
import Link from "next/link";


export default async function ProductCategoriesList() {

	const productCategories = await prisma.productCategory.findMany();

	return (
		<div className="container mx-auto p-4">
			<h1 className="text-2xl font-bold mb-4">Product Categories Page</h1>
			<p className="text-lg">This is the product categories page. You can add your product categories details here.</p>
			<p className="mt-4">You can link to the <a href="/products" className="text-blue-500 hover:underline">products page</a> from here.</p>
			{productCategories.length === 0 ? (
				<p className="mt-4">No product categories found.</p>
			) : (
				<ul className="mt-4">
					{productCategories.map((category) => (
						<li key={category.id} className="mb-2">
							<strong>{category.code}</strong>{"  "}
							<strong>{category.name}</strong> - {category.name}{"  "}
							<Link href={`/productCategories/${category.id}`} className="ml-2 text-blue-500 hover:underline">
								View
							</Link>
						</li>
					))}
				</ul>
			)}
		</div>
	);
}