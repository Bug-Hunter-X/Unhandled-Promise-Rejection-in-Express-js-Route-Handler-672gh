const express = require('express');
const app = express();
app.get('/', async (req, res) => {
  try {
    // Simulate an asynchronous operation that might throw an error
    await new Promise(resolve => setTimeout(() => {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        resolve('Hello World!');
      } else {
        throw new Error('Something went wrong!');
      }
    }, 1000));
    res.send('Hello World!');
  } catch (error) {
    console.error('Caught error:', error);
    res.status(500).send('Internal Server Error');
  }
});
app.listen(3000, () => console.log('Server listening on port 3000'));