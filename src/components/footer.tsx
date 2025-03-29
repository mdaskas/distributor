

export default function Footer() {

	return (
		<footer className="bg-gray-800 text-white p-4 mt-8 shadow-md">
			<div className="container mx-auto text-center">
				<p className="text-sm">
					&copy; {new Date().getFullYear()} Customer Management System. All rights reserved.
				</p>
				<p className="text-sm">
					Created by <a href="https://yourwebsite.com" className="text-gray-300 hover:text-white">Lenard Dumbrowski</a>
				</p>
			</div>
		</footer>
	);
}