require('dotenv').config();
const express = require('express'),
    massive = require('massive'),
    session = require('express-session'),
    authController = require('./Controllers/AuthController'),
    inventoryController = require('./Controllers/InventoryController'),
    shoppingCartController = require('./Controllers/ShoppingCartController'),
    stripeController = require('./Controllers/StripeController'),
    // sendGridController = require('./Controllers/SendGridController'),
    { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env,
    app = express(),
    path = require('path');

app.use(express.json());
app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: { maxAge: 1000 * 60 * 60 * 24 }
}));

massive({
  connectionString: CONNECTION_STRING,
  ssl: { rejectUnauthorized: false }
}).then((db) => {
  app.set("db", db);
  console.log("db connected");
  app.listen(SERVER_PORT, () => console.log(`server shopping on ${SERVER_PORT}`));
});

// hosting 
app.use(express.static(__dirname + '/../build')); 
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
})

// auth endpoints
app.post('/api/register', authController.register);
app.post('/api/login', authController.login);
app.get('/api/logout', authController.logout);

// inventory endpoints
app.get("/api/inventory", inventoryController.getInventory);
app.put("/api/inventory/:product_id", inventoryController.addReview);

// cart endpoints
app.get('/api/shoppingCart', shoppingCartController.getShoppingCart);
app.post('/api/shoppingCart', shoppingCartController.addItemToCart);
app.delete('/api/shoppingCart/:product_id', shoppingCartController.removeItem);

// stripe endpoint
app.post('/api/payment', stripeController.completePayment);

// sendgrid endpoint
// app.post('/api/mail/send', sendGridController.sendMail);