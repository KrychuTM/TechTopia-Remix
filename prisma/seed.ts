import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

async function seed() {
  const categories = await prisma.category.createMany({
    data: [
      { name: 'All', createdAt: new Date(), modifiedAt: new Date() },
      { name: 'Smartphones', createdAt: new Date(), modifiedAt: new Date() },
      { name: 'Laptops', createdAt: new Date(), modifiedAt: new Date() },
      { name: 'PC Accessories', createdAt: new Date(), modifiedAt: new Date() },
      { name: 'Keyboards', createdAt: new Date(), modifiedAt: new Date() },
      { name: 'Mice', createdAt: new Date(), modifiedAt: new Date() },
      { name: 'Headsets', createdAt: new Date(), modifiedAt: new Date() },
      { name: 'Controllers', createdAt: new Date(), modifiedAt: new Date() },
      { name: 'Video Game Consoles', createdAt: new Date(), modifiedAt: new Date() },
      { name: 'Monitors', createdAt: new Date(), modifiedAt: new Date() },
      { name: 'Smart TVs', createdAt: new Date(), modifiedAt: new Date() },
      { name: 'Speakers', createdAt: new Date(), modifiedAt: new Date() },
      { name: 'Smart Home Accessories', createdAt: new Date(), modifiedAt: new Date() },
      { name: 'Wearables', createdAt: new Date(), modifiedAt: new Date() },
      { name: 'Camera And Video', createdAt: new Date(), modifiedAt: new Date() },
    ],
  });

  const controllers = await prisma.product.upsert({
    where: {
      id: 'ckxl6rhx20000dovmgihg9txn',
    },
    update: {},
    create: {
      name: 'PlayStation DualSense Wireless Controller – Midnight Black',
      description: 'PS% controller by Sony',
      price: 69.0,
      seller: 'Sony',
      imageUrl: 'https://m.media-amazon.com/images/I/61O9tWR6WDS._SL1475_.jpg',
      createdAt: new Date(),
      modifiedAt: new Date(),
      categories: {
        connect: {
          name: 'Controllers',
        },
      },
      inventory: {
        create: {
          quantity: 50,
          createdAt: new Date(),
          modifiedAt: new Date(),
        },
      },
    },
  });

  const smartphones = await prisma.product.upsert({
    where: {
      id: 'ckxl6rhx40001dovm5d7ceqtu',
    },
    update: {},
    create: {
      name: 'Samsung Galaxy S21 5G G991B Dual 256GB 8GB RAM Factory Unlocked (GSM Only | No CDMA - not Compatible with Verizon/Sprint) International Version - Phantom Violet',
      price: 1099.0,
      seller: 'Samsung Electronics',
      imageUrl: 'https://m.media-amazon.com/images/I/61GCKHqbcxL._AC_SL1000_.jpg',
      createdAt: new Date(),
      modifiedAt: new Date(),
      categories: {
        connect: {
          name: 'Smartphones',
        },
      },
      inventory: {
        create: {
          quantity: 150,
          createdAt: new Date(),
          modifiedAt: new Date(),
        },
      },
    },
  });

  const keyboards = await prisma.product.upsert({
    where: {
      id: 'ckxl6rhx50002dovmpk78us0o',
    },
    update: {},
    create: {
      name: 'havit Keyboard Rainbow Backlit Wired Gaming Keyboard Mouse Combo, LED 104 Keys USB Ergonomic Wrist Rest Keyboard, 4800 DPI Mouse for PC Gamer (White)',
      price: 39.99,
      seller: 'havit Direct',
      imageUrl: 'https://m.media-amazon.com/images/I/71jhEJgA93S._AC_SL1500_.jpg',
      createdAt: new Date(),
      modifiedAt: new Date(),
      categories: {
        connect: {
          name: 'Keyboards',
        },
      },
      inventory: {
        create: {
          quantity: 25,
          createdAt: new Date(),
          modifiedAt: new Date(),
        },
      },
    },
  });

  const headsets = await prisma.product.upsert({
    where: {
      id: 'ckxl6rhx50003dovmjqq0hufw',
    },
    update: {},
    create: {
      name: 'Razer BlackShark V2 X Gaming Headset: 7.1 Surround Sound - 50mm Drivers - Memory Foam Cushion - for PC, PS4, PS5, Switch, Xbox One, Xbox Series X|S, Mobile - 3.5mm Audio Jack - Black',
      price: 39.99,
      seller: 'Razer',
      imageUrl: 'https://m.media-amazon.com/images/I/71waplSVO7L._AC_SL1500_.jpg',
      createdAt: new Date(),
      modifiedAt: new Date(),
      categories: {
        connect: {
          name: 'Headsets',
        },
      },
      inventory: {
        create: {
          quantity: 53,
          createdAt: new Date(),
          modifiedAt: new Date(),
        },
      },
    },
  });
  const laptops = await prisma.product.upsert({
    where: {
      id: 'ckxl6rhx50004dovmh25ew0qz',
    },
    update: {},
    create: {
      name: 'Acer Nitro 5 AN515-55-53E5 Gaming Laptop | Intel Core i5-10300H | NVIDIA GeForce RTX 3050 Laptop GPU | 15.6 FHD 144Hz IPS Display | 8GB DDR4 | 256GB NVMe SSD | Intel Wi-Fi 6 | Backlit Keyboard',
      price: 794.24,
      seller: 'Acer Electronics',
      imageUrl: 'https://m.media-amazon.com/images/I/71m03KItMZL._AC_SL1500_.jpg',
      createdAt: new Date(),
      modifiedAt: new Date(),
      categories: {
        connect: {
          name: 'Laptops',
        },
      },
      inventory: {
        create: {
          quantity: 7,
          createdAt: new Date(),
          modifiedAt: new Date(),
        },
      },
    },
  });

  console.log({ categories, smartphones, controllers, keyboards, headsets, laptops });
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });