// const bodyParser = require('body-parser')
// const express = require('express')
// const mongoose = require('mongoose')
// const { Expense } = require('./scehema.js')

// const app = express()
// app.use(bodyParser.json())
// /**
//  * git clone <link>
//  * 
//  * (add .gitignore file)
//  * 
//  * git add .
//  * git commit -m "any msg"
//  * git push origin main
//  * 
//  * git config --global user.name '<username>'
//  * git config --global user.email <emailId>
//  */

// /**
//  * Expense Tracker
//  * 
//  * Features and end points
//  * 
//  * Adding a new expense/income : /add-expense -> post
//  * Displaying existing expenses : /get-expenses -> get
//  * Editing existing entries : /edit-expense -> patch/put
//  * Deleting expenses : /delete-expense -> delete
//  * 
//  * Budget reporting
//  * Creating new user
//  * Validating user
//  * 
//  * Defining schema
//  * category, amount, date 
//  */

// async function connectToDb() {
//     await mongoose.connect('mongodb+srv://keranlorettad:Cat1307@cluster0.obxmvcd.mongodb.net/ExpenseTracker?retryWrites=true&w=majority&appName=Cluster0')
//     console.log('DB connection established :)')
//     const port = 8000
//     app.listen(port, function() {
//         console.log(`listening to ${port} ....`)
//     })
// }
// connectToDb()

// app.post('/add-expense', function(request, response) {
//     console.log(request.body)
//     response.json({
//         "status" : "created"
//     })
// })
