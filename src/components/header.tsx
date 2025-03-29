import Link from "next/link";


export default function Header() {
	return (
		<header className="bg-gray-800 text-white p-4 shadow-md">
			<div className="container mx-auto">
				<h1 className="text-2xl font-bold">Customer Management System</h1>
				<Link href="/customers" className="text-gray-300 hover:text-white ml-4">Customers</Link>
				<Link href="/products" className="text-gray-300 hover:text-white ml-4">Products</Link>
				<Link href="/productCategories" className="text-gray-300 hover:text-white ml-4">Product Categories</Link>
			</div>
		</header>
	);
}