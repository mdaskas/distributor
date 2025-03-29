

export default function NotFoundPage() {
	return (
		<div className="container mx-auto p-4">
			<h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
			<p className="text-lg">The product you are looking for does not exist.</p>
			<p className="mt-4">Please check the URL or return to the <a href="/products" className="text-blue-500 hover:underline">products page</a>.</p>
		</div>
	);
}