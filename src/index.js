const express = require('express');
require('./db/mongoos');
const User = require('./models/users');
const Task = require('./models/task');
const userRouter = require('./routers/users')
const taskRouter = require('./routers/task')


const app = express()

const port = process.env.port || 3000

// app.use((req, res, next) => {
//     if(req.method === 'GET') {
//         res.send('GET request are disabled')
//     } else {
//         next()
//     }
// })

// app.use((req, res, next) => {

//         res.status(503).send('System under maintains')

// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)


app.listen(port, () => console.log(`Example app listening on port ${port}!`))

const jwt = require('jsonwebtoken')

const myFunction = async () => {

    const token = jwt.sign({ _id: 'abc123' },' thisismynewcourse ', { expiresIn: '36000 seconds'})
    console.log(token)

    const data = jwt.verify(token, ' thisismynewcourse ')
    console.log(data)

}

myFunction()