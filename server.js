const express = require('express')

const PORT = process.env.PORT || 2000

const app = express();

app.get('/',(req, res)=>{
    res.json({Message: 'Application running'})
})


app.listen(PORT, ()=>{
    console.log(`Server running on PORT 2000`)
})