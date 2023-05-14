let users = require("../models/users.models")
const {v4 : uuidv4} = require("uuid")

const getAllUsers =  (req, res)=>{
     res.status(200).json({users})
}
const createUsers =  (req, res)=>{
    const newUsers = {
        id : uuidv4(),
       name : req.body.name,
       email : req.body.email 
    }
    users.push(newUsers)
     res.status(200).json(users)
}

//  update user 

const updatUsers = (req, res)=>{

     const id = req.params.id;
     const {name , email} = req.body;
     users.filter((user)=> user.id === id).map((selectedUser)=>{
           selectedUser.name = name;
           selectedUser.email = email
     })
 res.status(200).json(users)
}

const deleteUsers = (req, res)=>{
     const userId = req.params.id;
     const deleteUser = users.filter((user)=> user.id != userId);
     users  = deleteUser;
     res.status(200).json(users)
}



module.exports =  {getAllUsers, createUsers, updatUsers, deleteUsers}