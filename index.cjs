const mongoose = require("mongoose")
const express = require("express")
const bodyParser = require("body-parser")
const cor = require("cors")
const { Expense } = require("./schema.js")//importing the exported data


const app = express()
app.use(bodyParser.json())
app.use(cor())

async function connectToDb() {
    await mongoose.connect('mongodb+srv://keranlorettad:Cat1307@cluster0.obxmvcd.mongodb.net/ExpenseTracker?retryWrites=true&w=majority&appName=Cluster0')
    console.log("db connection established")

    const port = process.env.PORT || 5000
    app.listen(port, function () {
        console.log(`listening on port ${port}`)
    })
}
connectToDb()

// app.post('/add-expense',asyn function(request, response) {
//     // console.log(request.body)
//     // response.json({
//     //     "status" : "created"
//     // })
//     awaitExpense.create({
//         "amount" : request.body.amount,
//         "category" : request.body.category,
//         "date" : request.body.date
//     })
//     response.status(200).json({
//         "st"
//     })
// })
app.post("/add-expense",async function(request,response)
{
    try{
        await Expense.create(
            {
                "amount" : request.body.amount,
                "category" : request.body.category,
                "date" : request.body.date
            }
        )
        response.status(201).json(
            {
                "status" : "success",
                "message" : "new-entry"
            }
        )
    }
    catch(error)
    {
        response.status(500).json(
            {
                "status" : "failure",
                "message" : "entry not created",
                "error" : error
            }
        )
    }
})
app.get('/get-expense', async function(request,response)
{
   try{
    const expenseData = await Expense.find()
    response.status(200).json(expenseData)
    console.log(expenseData)
   }
   catch(error)
   {
    response.status(500).json(
        {
            "status" : "failure",
            "message" : "could not sent message",
            "error" : error
        }
    )
   }
})

//localhost:5000/delete-expense/65e69cb3ff5d7151b7ab743b<params>
app.delete('/delete-expense/:id',async function(request,response)
{
    const expenseData = await Expense.findById(request.params.id)
    try{
        if(expenseData)
        {
            await Expense.findByIdAndDelete(request.params.id)
            response.status(200).json(
                {
                    "status" : "success",
                    "message" : "deleted entry"
                }
            )
        }
        else
        {
            response.status(404).json(
                {
                    "status" : "Failure",
                    "message" : "could not delete"
                }
            )
        }
    }
    catch(error)
    {
        response.status(500).json(
            {
                "status" : "failure",
                "message" : "could not delete",
                "error" : error
            }
        )
    }
})

app.patch('/edit-expense/:id',async function(request,response)
    {
       const expenseEntry = await Expense.findById(request.params.id)
       try{
        if(expenseEntry)
       {
            await expenseEntry.updateOne(
                {
                    "amount" : request.body.amount,
                    "category" : request.body.category,
                    "date" : request.body.date
                }
            )
            response.status(200).json(
                {
                    "status" : "success",
                    "message" : "updated entry"
                }
            )
       }
       else
       {
        response.status(404).json(
            {
                "status" : "Failure",
                "message" : "could not update"
            }
        )

       }
       }
       catch(error)
    {
        response.status(500).json(
            {
                "status" : "failure",
                "message" : "could not delete",
                "error" : error
            }
        )
    }
    })