const express = require('express')

const PORT = process.env.PORT || 2000

const app = express();
const data = require('./users')


app.get('/',(req, res)=>{
    res.json({
        Message: 'Application running',
        domain:"HERKOU",
        author:"Suresh Ghimire"
},
    )
})

app.get('/users', (req, res)=>{
    res.send(data)
})


app.listen(PORT, ()=>{
    console.log(`Server running on PORT 2000`)
})