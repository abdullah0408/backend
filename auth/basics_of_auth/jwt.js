import express from 'express';
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';


const app = express();
app.use(cookieParser());

app.get('/', (req, res) => {
    jwt.sign({email: 'email@email.com'}, 'secretkey', (err, token) => {
        res.cookie('token', token);
        console.log(token)
        res.send('done');
    })
})

app.get('/get', (req, res) => {
    jwt.verify(req.cookies.token, 'secretkey', (err, data) => {
        console.log(data)
    })
})
app.listen(3000, () => {
  console.log('Server is running on port 3000');
})