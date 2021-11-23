// import express from "express"
// import cors from "cors"
// import mongoose from "mongoose"

// const app = express()
// app.use(express.json())
// app.use(express.urlencoded())
// app.use(cors())

// mongoose.connect("mongoose.connect('mongodb://localhost:27017/myapp');", { useNewUrlParser: true, useUnifiedTopology: true }, () => {
//     console.log("DB connected")
// })


// const userSchema = new mongoose.Schema({
//     name: String,
//     email: String,
//     password: String
// })

// const User = new mongoose.model("User", userSchema)


// //Routes

// app.post("/login", (req, res) => {
//     const { email, password } = req.body
//     User.findOne({ email: email }, (err, User) => {
//         if (User) {
//             if (password === User.password) {
//                 res.send({ message: "Login Successfull", User: User })
//             } else {
//                 res.send({ message: "Passwod Didn't Matched" })
//             }
//         } else {
//             res.send({ message: "User Not Registered" })
//         }
//     })
// })



// app.post("/register", (req, res) => {
//     const { name, email, password } = req.body
//     User.findOne({ email: email }, (err, user) => {
//         if (err) {
//             res.send(err);
//         }
//         if (user) {
//             res.send({ message: "User Already Registered" })
//         }
//         else {
//             res.send({ message: "Invalid data" })
//         }
//     })
//     const user = new User({
//         name,
//         email,
//         password
//     })
//     user.save(err => {
//         if (err) {
//             res.send(err)
//         } else {
//             res.send({ message: "Successfully Registered, Please login now" })
//         }
//     })
// })


// app.listen(9002, () => {
//     console.log("BE started at port 9002")
// })

import express from "express"
import cors from "cors"
import mongoose from "mongoose"

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect("mongoose.connect('mongodb://localhost:27017/myapp');", { useNewUrlParser: true, useUnifiedTopology: true, }, () => {
    console.log("DB connected")
})

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const User = new mongoose.model("User", userSchema)


//Routes

app.post("/login", (req, res) => {
    const { email, password } = req.body
    User.findOne({ email: email }, (err, User) => {
        if (err) {
            res.send(err)
        }
        if (User) {
            if (password === User.password) {
                res.send({ message: "Login Successfull", User: User })
            } else {
                res.send({ message: "Passwod Didn't Matched" })
            }
        } else {
            res.send({ message: "User Not Registered" })
        }
    })
})
app.post("/register", (req, res) => {
    const { name, email, password } = req.body
    User.findOne({ email: email }, (err, user) => {
        if (err) {
            res.send(err)
        }
        if (user) {
            res.send({ message: "User Already Registered" })
        }
    })
    const user = new User({
        name,
        email,
        password
    })
    user.save(err => {
        if (err) {
            res.send(err)
        } else {
            res.send({ message: "Successfully Registered, Please login now" })
        }
    })
})


app.listen(9002, () => {
    console.log("BE started at port 9002")
})