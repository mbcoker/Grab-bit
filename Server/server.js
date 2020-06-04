const path = require('path');
const express = require('express');
const app = express();

const PORT = 3000;

const userRouter = require('./routers/userRouter');
const apiRouter = require('./routers/apiRouter');

app.use(express.json());

app.use('assets', express.static(path.join(__dirname, 'assets')));

app.get('/test', (req, res, next) => {
  console.log('HIT');
  res.json({ Message: 'HIT' });
});

app.use('/user', userRouter);
app.use('/api', apiRouter);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

// get('http://10.149.1.149:3000/test')
