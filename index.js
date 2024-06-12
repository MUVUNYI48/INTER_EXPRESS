const express=require('express' );
const app=express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hey Developers!');
  });
  
app.listen(3000,(req,res)=>{
    console.log('server is ready');
})



// const cb0 = function (req, res, next) {
//     console.log('CB0')
//     next()
//   }
  
//   const cb1 = function (req, res, next) {
//     console.log('CB1')
//     next()
//   }
  
//   app.get('/example/d', [cb0, cb1], (req, res, next) => {
//     console.log('the response will be sent by the next function ...')
//     next()
//   }, (req, res) => {
//     res.send('Hello from D!')
//   })
  