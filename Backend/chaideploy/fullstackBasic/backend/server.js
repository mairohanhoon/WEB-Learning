import express from 'express'

const app = express();

app.use(express.static('dist'))

// app.get('/', (req, res) => {
//     res.send('Server is ready');
// });

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: 'A joke',
            content: 'This is a joke'
        },
        {
            id: 2,
            title: 'Another joke',
            content: 'This is another joke'
        },
        {
            id: 3,
            title: 'A third joke',
            content: 'This is a third joke'
        },
        {
            id: 4,
            title: 'A fourth joke',
            content: 'This is a fourth joke'
        },
        {
            id: 5,
            title: 'A fifth joke',
            content: 'This is a fifth joke'
        }
    ];
    res.send(jokes);
});

const port = process.env.PORT ||  3000;
// if environment variables are not there then it will get 3000 generally used in production

app.listen(port, () => {
    console.log(`Server at http://localhost:${port}`);
});