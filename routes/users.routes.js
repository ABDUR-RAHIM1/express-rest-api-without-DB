const { getAllUsers, createUsers, updatUsers, deleteUsers } = require("../controlars/users.controlers");

const router = require("express").Router() 



router.get("/", getAllUsers)
router.post("/", createUsers)
router.put("/:id", updatUsers)
router.delete("/:id", deleteUsers)


module.exports = router ;