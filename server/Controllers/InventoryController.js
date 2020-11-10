module.exports = {
    getInventory: async (req, res) => {
        const db = req.app.get('db');

        await db.inventory.get_inventory()
        .then((inventory) => res.status(200).send(inventory))
        .catch(err => console.log(err))
    },

    addReview: async (req, res) => {
        const {product_name, product_description, product_price} = req.params,
            {product_review} = req.body,
            db = req.app.db('db');

        await db.shoppingCart.add_review([product_name, product_description, product_price, product_review])
        .then((inventory) => res.status(200).send(inventory, 'Review Added!'))
        .catch(err => console.log(err))
    },
}