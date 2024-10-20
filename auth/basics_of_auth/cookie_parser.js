import cookieParser from 'cookie-parser';
import express from 'express';

const app = express();

app.use(cookieParser());

app.get('/', (req, res) => {
    res.cookie('password', 'hash');
    res.status(400).send('hash')
    console.log(req.cookies)
})

app.get('/get', (req, res) => {
    console.log(req.cookies)
    res.send('done');
})

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});