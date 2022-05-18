const user = {
    id: 42, 
    displayName: "jdoe",
    fullName: {
        firstName: "John",
        lastName: "Doe"
    }
}

function userId({displayName: userId}) {
    return userId;
}
console.log(userId(user));