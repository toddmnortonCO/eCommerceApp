module.exports = {
    getShoppingCart: async (req, res) => {
        const { user_id } = req.params,
            db = req.app.get('db');

        await db.shoppingCart.get_shopping_cart()
        .then((shoppingCart) => res.status(200).send(shoppingCart))
        .catch(err => console.log(err))
    },

    addItem: async (req, res) => {
        const db = req.app.db('db');

        await db.shoppingCart.add_item()
        .then((shoppingCart) => res.status(200).send(shoppingCart))
        .catch(err => console.log(err))
    },

    addReview: async (req, res) => {
        const db = req.app.db('db')


        await db.shoppingCart.add_review()
    .then((shoppingCart) => res.status(200).send(shoppingCart))
    },

    removeItem: async (req, res) => {
        const {product_id} = req.params,
            db = req.app.get('db');

        db.shopping_cart.remove_item([product_id])
        .then(shoppingCart => res.status(200).send(shoppingCart))
        .catch(err => res.status(500).send(err));
    }
}