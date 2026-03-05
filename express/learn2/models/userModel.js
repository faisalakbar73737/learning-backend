let users = []

const saveUser = async(data)=>{
    const newUser = {
        id: user.length + 1,
        ...data
    }

    users.push(newUser)

    return newUser
}

module.exports = { saveUser }