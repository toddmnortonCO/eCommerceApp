module.exports = {
    getShoppingCart: async (req, res) => {
        const {user_id} = req.session.user;
        const db = req.app.get('db');
            
        await db.shoppingCart.get_shopping_cart({user_id})
        .then((shoppingCart) => res.status(200).send(shoppingCart))
        .catch(err => console.log(err))
    },

    addItemToCart: async (req, res) => {
        // need to add items from table-inventory to table-shoppingCart
        // use ID to get info from inventory table then push into shoppingCart
        console.log(req.session);
        const {user_id} = req.session.user;
        const {product_id, product_name, product_price} = req.body,
            db = req.app.get('db');

        await db.inventory.add_item_to_cart([user_id, product_id, product_name, product_price])
        .then((shoppingCart) => res.status(200).send(shoppingCart))
        .catch(err => console.log(err))
    },

    removeItem: async (req, res) => {
        const {product_id} = req.params,
            db = req.app.get('db');

        db.shoppingCart.remove_item([product_id])
        .then(shoppingCart => res.status(200).send(shoppingCart))
        .catch(err => res.status(500).send(err));
    }
}