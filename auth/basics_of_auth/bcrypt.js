import express from 'express';
import bcrypt from 'bcrypt';

const app = express();

app.use(cookieParser());

app.get('/', (req, res) => {
    bcrypt.genSalt (10, (err, salt) => {
        bcrypt.hash('abcdefgh', salt, (err, hash) => {
            console.log(hash)
            bcrypt.compare('abcdefgh', hash, (err, result) => {
                res.send({result, hash});
                console.log(result)
            })
        })
    })
})

// app.get('/', (req, res) => {
//     bcrypt.compare('abcdefgh', "$2b$10$SXIrjvJQBiki4QLNrF0Imex/zkQp1yM8uOwEnDvyROs2B4d10J5s2", (err, result) => {
//         console.log(result)
//     })
// })

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});