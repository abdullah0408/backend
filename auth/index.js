import cookieParser from 'cookie-parser';
import express from 'express';
import userModel from './models/userModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const app = express();

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(cookieParser());

app.get('/', (req, res) => {
    res.render('index');
});
app.post('/create', (req, res) => {
    let { userNmae, email, password } = req.body;
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, async (err, hash) => {
            let createdUser = await userModel.create({
                userNmae,
                email,
                password: hash
            })
            jwt.sign({email}, 'secretkey', (err, token) => {
                res.cookie("token", token);
                res.send(createdUser);
            })
        })
    })
});

app.get('/login', (req, res) => {
    res.render('login');
})

app.post('/login', async (req, res) => {
    let user = await userModel.findOne({email: req.body.email })
    if(!user) res.send('User not found'); else {
    bcrypt.compare(req.body.password, user.password, (err, result) =>{
        if(result){ 
            jwt.sign({email: user.email}, 'secretkey', (err, token) => {
                res.cookie("token", token);
                res.send('you are logged in');
            })
        } else {
            res.send('wrong password');
        }
    })}
})

app.get('/logout', (req, res) => {
    res.clearCookie('token');
    res.redirect('/');
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});   