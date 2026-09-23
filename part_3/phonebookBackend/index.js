const morgan = require('morgan');
const express = require('express');
const app = express();


// own middleware function to log request details


const requestLogger = (request, response, next) => {
  console.log('--- Custom logger start ---');
  console.log('Method:', request.method)
  console.log('Path:  ', request.path)
  console.log('Body:  ', request.body)
  console.log('--- Custom logger end ---');
  next()
}

// middleware to handle unknown routes
const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

app.use(express.json()); // Middleware to parse JSON bodies input
app.use(requestLogger); // Middleware to log request details
app.use(morgan(function (tokens, req, res) {
  return [
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.res(req, res, 'content-length'), '-',
    tokens['response-time'](req, res), 'ms',
    JSON.stringify(req.body)
  ].join(' ')
})); // Middleware to log request details using "morgan"


let persons = [
    { 
      "id": "1",
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": "2",
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": "3",
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": "4",
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

app.get('/', (request, response) => {
  response.send('<h1>Hello World!!!</h1>')
});

app.get('/api/persons', (request, response) => {
  response.json(persons)
});


app.get('/info', (request, response) => {
  response.send(`<h1>Phonebook has info for ${persons.length} contacts </h1>` + '<br>' + `<p>${new Date()}</p>`);
});

app.get('/api/persons/:id', (request, response) => {
  const id = request.params.id;
  const person = persons.find(person => person.id === id);

  !!person ? response.json(person) : response.status(404).end();
});

app.delete('/api/persons/:id', (request, response) => {
  const idToDelete = request.params.id;
  !persons.some(person => person.id === idToDelete);

  persons = persons.filter(person => person.id !== idToDelete);
  response.status(204).end();
  
  
});


app.post('/api/persons', (request, response) => {
  const body = request.body;
  
  if (!body || !body.name || !body.number) {
    return response.status(400).json({
      error: 'name and number are required'
    })
  }

  const person = {
    name: body.name,
    number: body.number,
    id: Math.floor(Math.random() * 100000)
  }

  if(persons.some(p => p.name === person.name)) {
    return response.status(400).json({
      error: 'name must be unique'
    })
  }
  console.log(person);
  persons = persons.concat(person);

  response.json(person);
});

app.use(unknownEndpoint); // MUST be last


const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)