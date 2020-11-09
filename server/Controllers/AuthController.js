const bcrypt = require('bcryptjs');

module.exports = {
    register: async (req, res) => {
        const { email, password } = req.body,
            db = req.app.get('db');
        
        const foundUser = await db.users.check_user({ email });
        if (foundUser[0]) {
            return res.status(400).send('Email already in use')
        }

        let salt = bcrypt.genSaltSync(10),
            hash = bcrypt.hashSync(password, salt);
        
        const newUser = await db.users.register_user({ email, hash });
            console.log(newUser)

                // SECOND AWAIT TO INITIALIZE NEW REGISTERED USER EMAIL
        req.session.user = newUser[0];
        res.status(201).send(req.session.user);
    },
    login: async (req, res) => {
        const { email, password } = req.body,
            db = req.app.get('db');
        
        const foundUser = await db.users.check_user({ email });
        if (!foundUser[0]) {
            return res.status(404).send('Email not found')
        }

        const authenticatedUser = bcrypt.compareSync(password, foundUser[0].password)
        if (!authenticatedUser) {
            return res.status(401).send('Email or password is incorrect')
        }

        delete foundUser[0].password;
        req.session.user = foundUser[0];
        res.status(202).send(req.session.user);
    },
    logout: (req, res) => {
        req.session.destroy();
        res.sendStatus(200);
    }
    
}