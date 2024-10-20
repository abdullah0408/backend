import express from 'express';
import userModel from './userModel.js';

const app = express();

app.get('/', (req, res) => {
    userModel.find()
    .then((data) => {
        res.send(data);
    })
})

app.get('/:name/:email/:pass', (req, res) => {
    userModel.create({
        name: req.params.name,
        email: req.params.email,
        password: req.params.pass,
    })
    .then((data) => {
        res.send(`
            ${data}
            <p>Data saved successfully!</p>
            <p>Redirecting you back to the homepage...</p>
            <script>    
                setTimeout(() => {
                    window.location.href = '/';
                }, 1000);
            </script>
        `);
    })
})

app.get('/delete/:name', (req, res) => {
    userModel.findOneAndDelete({
        name: req.params.name
    })
    .then((data) => {
        res.send(`
            ${data}
            <p>Data deleted successfully!</p>
            <p>Redirecting you back to the homepage...</p>
            <script>    
                setTimeout(() => {
                    window.location.href = '/';
                }, 1000);
            </script>
        `);
    })
})

app.get('/update/:name/:newName/:email/:pass', (req, res) => {
    userModel.findOneAndUpdate({
        name: req.params.name
    }, {
        name: req.params.newName,
        email: req.params.email,
        password: req.params.pass,
    })
    .then((data) => {
        res.send(`
            ${data}
            <p>Data updated successfully!</p>
            <p>Redirecting you back to the homepage...</p>
            <script>    
                setTimeout(() => {
                    window.location.href = '/';
                }, 1000);
            </script>
        `);
    })
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})