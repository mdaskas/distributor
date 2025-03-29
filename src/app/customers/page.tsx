import prisma from "@/lib/db";
import Link from "next/link";

export default async function CustomersList() {
	const customers = await prisma.customer.findMany();

	return (

		<div className="container mx-auto p-4">
			<h1 className="text-2xl font-bold mb-4">Customers List</h1>
			<p>This is a placeholder for the customers list.</p>
			{customers.map((customer) => (
				<div key={customer.id} className="border p-4 mb-2 rounded">
					<h2 className="text-xl font-semibold">{customer.name}</h2>
					<p>Email: {customer.email}</p>
					<p>Phone: {customer.phone}</p>
					<Link href={`/customers/${customer.id}`} className="text-blue-500 hover:text-blue-700">
						View Details
					</Link>
				</div>
			))}
		</div>
	);
}