module.exports = {
    getInventory: async (req, res) => {
        const db = req.app.get('db');

        await db.inventory.get_inventory()
        .then((inventory) => res.status(200).send(inventory))
        .catch(err => console.log(err))
    },

    addReview: async (req, res) => {
        const {product_id} = req.params,
            {product_review} = req.body,
            db = req.app.get('db');
        console.log(product_id, product_review)

        await db.inventory.add_review({product_id, product_review})
        .then((inventory) => res.status(200).send(inventory))
        .catch(err => console.log(err))
    },

    clearReview: async (req, res) => {
        
    }
}