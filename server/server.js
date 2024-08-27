const express = require('express');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const app = express();

app.use(express.json());

// Example route to get all products
app.get('/products', async (req, res) => {
    const products = await prisma.product.findMany();
    res.json(products);
});

// Example route to create an order
app.post('/orders', async (req, res) => {
    const { userId, items } = req.body;

    const order = await prisma.order.create({
        data: {
            userId,
            items: {
                create: items.map(item => ({
                    productId: item.productId,
                    quantity: item.quantity,
                })),
            },
        },
    });

    res.json(order);
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
