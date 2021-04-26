module.exports = function(io) {
    
    io.on('connection', async (socket) => {
        console.log(`Un usuario con id ${socket.id} se unió al chat`);
        
        // seguir...
        
    });
} // end module

// LOGIC:

let allUsers = [];  // list of all users

function addUser(id) {
    allUsers.push({
        id: id,
        userName: undefined
    });
    // allUsers.forEach(user => console.log(user));
}

function setUsername(id, userName) {
    // esto se puede optimizar!
    for (let user of allUsers) {
        if (user.userName === userName) {
            return false;
        }
    }

    // luego, agrego el nombre de usuario:
    allUsers.forEach(user => {
        if (user.id === id) {
            user.userName = userName;
        } 
    });
    allUsers.forEach(user => console.log(user));
    return true;
}

function getUsername(id) {
    // esto también se puede optimizar!!
    for (let user of allUsers) {
        if (user.id === id) {
            return user.userName;
        }
    }
}

function deleteUsername(id) {
    for (let user of allUsers) {
        if (user.id === id) {
            allUsers.splice(allUsers.indexOf(user), 1);
        }
    }
    // volvemos a mostrar usuarios conectados por consola:
    if (allUsers.length === 0) console.log("Hay 0 usuarios conectados.");    
    else allUsers.forEach(user => console.log(user));
    
}