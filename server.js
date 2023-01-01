import express from 'express';
// middleware
import notFoundMiddleware from './middleware/not-found.js';
import errorHandlerMiddleware from './middleware/error-handler.js';
// middleware
import dotenv from 'dotenv';

// db and authenticatedUser
import connectDB from './db/connect.js';
dotenv.config();
import 'express-async-errors';
import morgan from 'morgan';

// routers
import authRouter from './routes/authRoutes.js';
import jobsRoutes from './routes/jobsRoutes.js';
const app = express();

if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'));
}
app.use(express.json());

app.get('/', (req, res) => {
  res.send('hi');
});

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/jobs', jobsRoutes);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);
const port = process.env.PORT || 8000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
