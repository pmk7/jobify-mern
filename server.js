const express = require('express');
const { default: notFoundMiddleware } = require('./middleware/not-found');
const app = express();
const port = process.env.PORT || 8000;

// middleware
notFoundMiddleware;

app.get('/', (req, res) => {
  res.send('hi');
});

app.use(notFoundMiddleware);

app.listen(port, () => console.log(`Server is listening on port ${port}`));
