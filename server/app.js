
const express = require('express');
const app = express();


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://admin-suryansh:suryanshpanwar@cluster0.snk5b.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect( (err) => {
  
  // perform actions on the collection object
  if (err) throw err;
  console.log("connection i established");
  client.close();
});


//middleware to check if the previous page that is required is visitd or
const middleware = (req , res , next) =>{
    console.log(`hello  middleware`);
    next();
}

app.get('/', async (req, res)=>{
    res.send('hello home')

});
app.get('/about ', middleware, (req, res)=>{
    res.send(`hellow about`);
    console.log(`jkdbf`);

});
app.get('/contact', (req, res)=>{
    res.send(`hellow contact`);
    console.log(`jkdbf`);

});
app.get('/signin', (req, res)=>{
    res.send(`hellow signin`);
    console.log(`jkdbf`);

});

app.get('/singup', (req, res)=>{
    res.send(`hellow signup`);
    console.log(`jkdbf`);

});


app.listen(3000, ()=>{
    console.log(`listning at 3000`);
})