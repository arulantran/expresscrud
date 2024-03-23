const mongoose = require('mongoose')
const employees = mongoose.Schema({
    eid: String,
    name:String,
    Salary: Number,
    tags:[],
    likes: Number
})

module.exports = mongoose.model("Employees",employees)
