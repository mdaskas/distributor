import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main () {
	await prisma.product.deleteMany();
  await prisma.productCategory.deleteMany();
  await prisma.customer.deleteMany();

  // Seed product categories
  await prisma.productCategory.createMany({
    data: [
      { code: 'c1', name: 'Electronics' },
      { code: 'c2', name: 'Books' },
      { code: 'c3', name: 'Clothing' },
    ],
  });

  const categoryIds = await prisma.productCategory.findMany({
    select: { id: true },
  });


  // Seed products
 await prisma.product.createMany({
    data: [
      { code: 'p100', description: 'Smartphone', price: 699.99, cost: 100.00, productCategoryId: categoryIds[0].id }, // Assuming Electronics is the first category and has id 1
      { code: 'p101', description: 'Laptop', price: 1299.99, cost: 100.00, productCategoryId: categoryIds[1].id },
      { code: 'p102', description: 'Novel', price: 19.99, cost: 100.00, productCategoryId: categoryIds[2].id },
      { code: 'p103', description: 'T-Shirt', price: 9.99, cost: 100.00, productCategoryId: categoryIds[1].id },
    ],
  });

  await prisma.customer.createMany({
    data: [
      {
        code: 'c1000', name: 'Customer C1000', email: 'customerC1000@gmail.com', phone: '(313) 222-3333',
        address1: '123 Maple Ln', address2: 'suite 100', city: 'Warren', state: 'MI', zipCode: '48223'
      },
      {
        code: 'c1001', name: 'Customer C1001', email: 'customerC1001@gmail.com', phone: '(212) 555-1234',
        address1: '456 Oak St', address2: '', city: 'Detroit', state: 'MI', zipCode: '48201'
      },
      {
        code: 'c1002', name: 'Customer C1002', email: 'customerC1002@gmail.com', phone: '(415) 555-5678',
        address1: '789 Pine Ave', address2: 'Apt 2B', city: 'San Francisco', state: 'CA', zipCode: '94107'
      },
      {
        code: 'c1003', name: 'Customer C1003', email: 'customerC1003@gmail.com', phone: '(617) 555-9876',
        address1: '321 Elm Blvd', address2: '', city: 'Boston', state: 'MA', zipCode: '02118'
      },
      {
        code: 'c1004', name: 'Customer C1004', email: 'customerC1004@gmail.com', phone: '(702) 555-4321',
        address1: '654 Cedar Rd', address2: 'Suite 300', city: 'Las Vegas', state: 'NV', zipCode: '89109'
      },
      {
        code: 'c1005', name: 'Customer C1005', email: 'customerC1005@gmail.com', phone: '(305) 555-6789',
        address1: '987 Palm Dr', address2: '', city: 'Miami', state: 'FL', zipCode: '33101'
      },
    ]
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

