import prisma from "@/lib/db";
import { notFound } from "next/navigation";


export default async function CustomerView({ params: { id } }: { params: { id: string } }) {

	const customer = await prisma.customer.findUnique({
		where: { id: parseInt(id) },
	});

	if (!customer) notFound();

	return (
		<div className="container mx-auto p-4">
			<h1 className="text-2xl font-bold mb-4">Customer Details</h1>
			<p>This is a placeholder for the customer with ID: {id}</p>
			<strong>{customer.code}</strong>
			<div className="border p-4 mb-2 rounded">
				<h2 className="text-xl font-semibold">{customer.name}</h2>
				<p>Email: {customer.email}</p>
				<p>Phone: {customer.phone}</p>
				<p>Address: {customer.address1}</p>
				<p>City: {customer.city}</p>
			</div>
		</div>
	);

}