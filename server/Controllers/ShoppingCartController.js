module.exports = {
    getShoppingCart: async (req, res) => {
        const db = req.app.get('db');

        await db.shoppingCart.get_shopping_cart()
        .then((shoppingCart) => res.status(200).send(shoppingCart))
        .catch(err => console.log(err))
    }
}