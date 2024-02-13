import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";
import { randomImageId } from "../src/helpers/randomImage";

const prisma = new PrismaClient();

const productsCount = 5;

for (let i = 0; i < productsCount; i++) {
  const name = faker.commerce.productName();
  const randomNo = randomImageId();
  const image = "https://picsum.photos/id/" + randomNo + "/400";

  const createdProduct = await prisma.product.create({
    data: {
      name: name,
      slug: faker.helpers.slugify(name).toLowerCase(),
      description: faker.commerce.productDescription(),
      price: Number(faker.commerce.price()) * 100,
      image: image,
    },
  });
  console.log(`Created product with id: ${createdProduct.id}`);
}
