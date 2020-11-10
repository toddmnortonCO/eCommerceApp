module.exports = {
    getInventory: async (req, res) => {
        const db = req.app.get('db');

        await db.inventory.get_inventory()
        .then((inventory) => res.status(200).send(inventory))
        .catch(err => console.log(err))
    }
}