import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main () {
	await prisma.product.deleteMany(); // Clear existing products to avoid conflicts
	await prisma.productCategory.deleteMany(); // Clear existing product categories to avoid conflicts

  // Seed product categories
  const categories = await prisma.productCategory.createMany({
    data: [
      { code: 'c1', name: 'Electronics' },
      { code: 'c2', name: 'Books' },
      { code: 'c3', name: 'Clothing' },
    ],
  });

  const categoryIds = await prisma.productCategory.findMany({
    select: { id: true },
  });

  console.log('Seeded product categories:', categories);

  // Seed products
  const products = await prisma.product.createMany({
    data: [
      { code: 'p100', description: 'Smartphone', price: 699.99, cost: 100.00, productCategoryId: categoryIds[0].id }, // Assuming Electronics is the first category and has id 1
      { code: 'p101', description: 'Laptop', price: 1299.99, cost: 100.00, productCategoryId: categoryIds[1].id },
      { code: 'p102', description: 'Novel', price: 19.99, cost: 100.00, productCategoryId: categoryIds[2].id },
      { code: 'p103', description: 'T-Shirt', price: 9.99, cost: 100.00, productCategoryId: categoryIds[1].id },
    ],
  });

  console.log('Seeded products:', products);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

