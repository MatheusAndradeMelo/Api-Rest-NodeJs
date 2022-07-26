import express from 'express';

const app = express();

app.use(express.json()); // connect to postman

const livros = [
    {id: 1, "título": "Senhos dos Anéis"},
    {id: 2, "título": "O Hobbit"},
]

app.get('/', (req, res) => {
    res.status(200).send('Curso de Node');
})

app.get('/livros', (req, res) => {
    res.status(200).json(livros);
})

app.post('/livros', (req, res) => {
    livros.push(req.body);
    res.status(201).send('Livro foi cadastrado com sucesso')
})

export default app;