const express = require('express');
const cors = require('cors');

const app = express()
const PORT = 5000;

app.use(express.json())
app.use(cors());

const machine = {
    "products": [
        {
            "name": "Lays",
            "count": 10,
            "price": 100
        },
        {
            "name": "Cola",
            "count": 5,
            "price": 50
        },
        {
            "name": "Snickers",
            "count": 20,
            "price": 33
        },
        {
            "name": "Twix",
            "count": 8,
            "price": 26
        },
        {
            "name": "M&Ms",
            "count": 13,
            "price": 58
        },
        {
            "name": "Sandwiches",
            "count": 5,
            "price": 100
        },
        {
            "name": "Water",
            "count": 10,
            "price": 40
        },
        {
            "name": "Cookie",
            "count": 30,
            "price": 20
        }
    ],
    "withdraw": [
        {
            "value": 1,
            "count": 100
        },
        {
            "value": 5,
            "count": 50
        },
        {
            "value": 10,
            "count": 50
        },
        {
            "value": 50,
            "count": 25
        },
        {
            "value": 100,
            "count": 25
        },
        {
            "value": 500,
            "count": 10
        }
    ],
    "balance": 0
}

const startServer = () => {
    try {
        app.listen(PORT, () => console.log(`server was launch on PORT: ${PORT}`))

        app.get('/machine', (req, res) => {
            res.send(machine)
        });

        app.post('/machine', (req, res) => {
            try {
                const { products, withdraw, balance } = req.body
                machine.products = products;
                machine.withdraw = withdraw;
                machine.balance = balance;
                res.sendStatus(200)
            } catch (e) {
                console.log(e)
            }
        });

    } catch (e) {
        console.log(e);
    }
}

startServer();