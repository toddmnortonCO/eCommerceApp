module.exports = {
    getShoppingCart: async (req, res) => {
        const { user_id } = req.params,
            db = req.app.get('db');
            
        await db.shoppingCart.get_shopping_cart([user_id])
        .then((shoppingCart) => res.status(200).send(shoppingCart))
        .catch(err => console.log(err))
    },

    addItem: async (req, res) => {
        // need to add items from table-inventory to table-shoppingCart
        // use ID to get info from inventory table then push into shoppingCart
        const db = req.app.db('db');

        await db.shoppingCart.add_item()
        .then((shoppingCart) => res.status(200).send(shoppingCart))
        .catch(err => console.log(err))
    },

    removeItem: async (req, res) => {
        const {product_id} = req.params,
            db = req.app.get('db');

        db.shopping_cart.remove_item([product_id])
        .then(shoppingCart => res.status(200).send(shoppingCart))
        .catch(err => res.status(500).send(err));
    }
}