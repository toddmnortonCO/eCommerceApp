require('dotenv').config();
const express = require('express'),
    massive = require('massive'),
    session = require('express-session'),
    authController = require('./Controllers/authController'),
    inventoryController = require('./Controllers/InventoryController'),
    shoppingCartController = require('./Controllers/ShoppingCartController'),
    stripeController = require('./Controllers/StripeController'),
    { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env,
    app = express();

app.use(express.json());
app.use(session({
    resave: false,
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
  app.listen(SERVER_PORT, () => console.log(`server lifting on ${SERVER_PORT}`));
});

// hosting 
app.use(express.static(__dirname + '/../build')) 

// auth endpoints
app.post('/api/register', authController.register);
app.post('/api/login', authController.login);
app.get('/api/logout', authController.logout);

// inventory endpoints
app.get("/api/invetory/", inventoryController.getInventory);
app.put("/api/inventory/", inventoryController.addReview);

// cart endpoints
app.get('/api/cart/', shoppingCartController.getShoppingCart);
app.post('/api/addItem', shoppingCartController.addItem);
app.delete('/api/removeItem', shoppingCartController.removeItem);

// stripe endpoint
app.post('/api/payment', stripeController.completePayment);