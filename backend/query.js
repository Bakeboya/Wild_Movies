const connection = require("./connection");

const getUsers = (req, res) => {
    connection
        .query("SELECT * FROM users")
        .then(([users]) => {
            res.status(200).json(users);
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send("Error retrieving data from users");
        });
};
const getUserById = (req, res) => {
    const id = parseInt(req.params.id);
    connection
        .query("SELECT * FROM users WHERE id = ?", [id])
        .then(([users]) => {
            if (users[0] != null) {
                res.status(200).json(users);
            } else {
                res.status(404).send("Not Found");
            }
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send("Error retrieving the user");
        });
};
const postUser = (req, res) => {
    const { email, password } = req.body;
    connection
        .query("INSERT INTO users (email, password) VALUES (?, ?)",
            [email, password]
        )
        .then(([result]) => {
            // res.location(`/users/${result.insertId}`).sendStatus(201);
            return res.status(201).send("User created")
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send("Error saving the user");
        });
};
const updateUserById = (req, res) => {
    const id = parseInt(req.params.id);
    const { password } = req.body;
    connection
        .query("UPDATE users SET password = ? favorite = ? WHERE id = ?",
            [password, favorite, id]
        )
        .then(([result]) => {
            res.location(`/users/${result.insertId}`).sendStatus(201);
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send("Error modifying the password");
        });
};
const deleteUserById = (req, res) => {
    const id = parseInt(req.params.id);
    connection
        .query("DELETE FROM users WHERE id =?", [id])
        .then(([result]) => {
            if (result.affectedRows === 0) {
                res.status(404).send("Not Found");
            } else {
                res.status(200).send("User deleted");
            }
        })
        .catch((err) => {
            console.error(err);
            res.status(405).send("Error deleting the user");
        });
};

module.exports = {
    getUsers,
    getUserById,
    postUser,
    updateUserById,
    deleteUserById,
};