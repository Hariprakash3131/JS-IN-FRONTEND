// users.js

const { generateUserId } = require("./utils");

let users = [];
let emailSet = new Set();

function addUser(name, email, role) {

    if (emailSet.has(email)) {
        throw new Error("Email already exists");
    }

    const user = {
        id: generateUserId(),
        name,
        email,
        role,
        isActive: true
    };

    users.push(user);
    emailSet.add(email);

    console.log("User created:", name);
}

function removeUser(id) {

    users = users.filter(user => user.id !== id);
    console.log("User removed:", id);

}

function listUsers() {

    console.log("----- Users -----");

    users.forEach(user => {
        console.log(user);
    });

}

function findUserById(id) {

    return users.find(user => user.id === id);

}

function getUsers() {

    return users;

}

module.exports = {
    addUser,
    removeUser,
    listUsers,
    findUserById,
    getUsers
};